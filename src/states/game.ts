import { State } from "./gameState";
import { Player, Asteroid } from "../lib/ecs";
import { model, GameStates } from "..";
import { Input } from "@peasy-lib/peasy-input";
//import { Lighting, Vector, Light } from "@peasy-lib/peasy-lighting";

// Load Chance
let Chance = require("chance");
// Instantiate Chance so it can be used
export var chance = new Chance();

export enum HUDparameters {
  SCORE,
  EXPERIENCE,
  LEVEL,
  LIVES,
  HEALTH,
}

//Level progression and spawn rate
let spawnRate = 7.5;
let spawnTimer = 0;

export const updateHudData = (param: HUDparameters, incValue: number) => {
  switch (param) {
    case HUDparameters.SCORE:
      model.score += incValue;
      break;
    case HUDparameters.EXPERIENCE:
      model.exp += incValue;
      //leveling up and changin parameters
      if (model.exp >= 100) {
        model.gameLevel += 1;
        spawnRate *= 0.95;
        model.exp = 0;
      }
      break;
    case HUDparameters.LIVES:
      model.lives += incValue;
      break;
    case HUDparameters.HEALTH:
      model.health += incValue;
      break;
  }
};

const physicsInterval = 0.016;

export class PlayState extends State {
  startime: number | undefined = undefined;
  lasttime: number | undefined = undefined;
  lastPhysicsUpdate: number = 0;
  lastRenderUpdate: number = 0;
  static running: boolean = false;
  entities = [];
  mapping: any = undefined;
  firelatch: boolean = false;

  static template = `
  <div class="content" \${===isGame}>
    <span>FPS: \${fps}</span><span>   Game Level: \${gameLevel}   </span>  <span>   Experience: \${exp}   </span><span>  Score: \${score}</span><span>  Health: \${health}</span><span>  Lives: \${lives}</span>
    <div class="\${entity.type}" \${entity<=*entities:id} style="top: \${entity.position.y}px; left: \${entity.position.x}px; width: \${entity.size.x}px; height: \${entity.size.y}px ">
      <div class="inner" style="rotate: \${entity.angle}deg; background-image:url(\${entity.texture});background-position: \${entity.ssPosition};background-size:\${entity.textureSize};">
      </div>
    </div>

    <div class="joystick" \${===isMobile}>
        <div class="js_rel_cont">
            <div class="knob"
                \${==>joystick.knob}
                \${touchstart@=>joystick.start}
                \${touchmove@=>joystick.move}
                \${touchend@=>joystick.end}
                \${touchcancel@=>joystick.cancel}
            ></div>    
        </div>
    </div>

    <div class="buttonDiv" \${===isMobile}>
        <div class="but_rel" \${pointerdown@=>fire} \${pointerup@=>stopfiring}></div>
    </div>
  </div>
  `;

  constructor() {
    super("game");
  }

  public enter(_previous: State, ...params: any): void {
    const [model] = params;
    model.gamestate = GameStates.GAME;

    //*****************************
    //Set up game entities
    model.entities = [];
    model.entities.push(new Player(model.screenwidth, model.screenheight));

    this.mapping = Input.map(
      {
        ArrowLeft: { action: "left", repeat: true },
        ArrowRight: { action: "right", repeat: true },
        ArrowUp: { action: "up", repeat: true },
        ArrowDown: { action: "down", repeat: true },
        w: { action: "up", repeat: true },
        a: { action: "left", repeat: true },
        s: { action: "down", repeat: true },
        d: { action: "right", repeat: true },
        Enter: { action: "fire", repeat: false },
        Shift: { action: "fire", repeat: false },
      },
      (action: string, doing: boolean) => {
        if (doing) {
          switch (action) {
            case "left":
              model.keypresses.direction = "LEFT";
              break;
            case "right":
              model.keypresses.direction = "RIGHT";
              break;
            case "up":
              model.keypresses.direction = "UP";
              break;
            case "down":
              model.keypresses.direction = "DOWN";
              break;
            case "fire":
              model.keypresses.fire = "FIRE";
              break;
            default:
              model.keypresses.direction = "NONE";
              model.keypresses.fire = "NONE";
              break;
          }
        } else {
          model.keypresses.direction = "NONE";
          model.keypresses.fire = "NONE";
        }
      }
    );

    //*****************************
    //make RAF call to the engine
    PlayState.running = true;
    requestAnimationFrame(this.FixedStepEngine);
  }

  public async exit(_next: State, ...params: any) {
    console.log("exiting game");
    PlayState.running = false;
    const [model] = params;
    model.gamestate = "transition";

    //this manages keyboard inputs
    this.mapping.unmap();
  }

  private wait(ms: number) {
    return new Promise<void>(resolve =>
      setTimeout(() => {
        resolve();
      }, ms)
    );
  }

  FixedStepEngine = (timestamp: number) => {
    if (this.startime == undefined) {
      this.startime = timestamp;
      this.lasttime = timestamp;
    }
    const deltaTime = (timestamp - this.lasttime) / 1000;
    model.fps = (1 / deltaTime).toFixed(2);
    this.lasttime = timestamp;
    this.lastPhysicsUpdate += deltaTime;
    this.lastRenderUpdate += deltaTime;
    spawnTimer += deltaTime;

    //check for input
    if (model.isMobile && model.entities[0]) {
      //touch controls
      if (model.joystick.dir == "NW" || model.joystick.dir == "W" || model.joystick.dir == "SW")
        model.entities[0].turnLeft();
      if (model.joystick.dir == "NE" || model.joystick.dir == "E" || model.joystick.dir == "SE")
        model.entities[0].turnRight();
      if (model.joystick.dir == "NE" || model.joystick.dir == "N" || model.joystick.dir == "NW")
        model.entities[0].accelerate();
      if (model.joystick.dir == "SE" || model.joystick.dir == "S" || model.joystick.dir == "SW") model.entities[0].reverse();

      if (model.joystick.dir == "NA") model.entities[0].decelerate();
    } else if (!model.isMobile && model.entities[0]) {
      //keyboard input
      if (model.keypresses.direction == "LEFT") model.entities[0].turnLeft();
      if (model.keypresses.direction == "RIGHT") model.entities[0].turnRight();
      if (model.keypresses.direction == "UP") model.entities[0].accelerate();
      if (model.keypresses.direction == "DOWN") model.entities[0].reverse();
      if (model.keypresses.direction == "NONE") model.entities[0].decelerate();

      if (model.keypresses.fire == "FIRE" && !this.firelatch) {
        model.entities[0].fire();
        this.firelatch = true;
      } else if (model.keypresses.fire == "NONE" && this.firelatch) {
        this.firelatch = false;
      }
    }

    //generate new Asteroid
    if (spawnTimer >= spawnRate) {
      console.log("spawning");
      spawnTimer = 0;
      Asteroid.spawn();
    }

    while (this.lastPhysicsUpdate >= physicsInterval) {
      //update physics here
      model.entities.forEach(ent => {
        ent.update(this.lastPhysicsUpdate);
      });
      this.lastPhysicsUpdate -= physicsInterval;
    }

    if (PlayState.running) requestAnimationFrame(this.FixedStepEngine);
  };
}
