import { State } from "./gameState";
import { Player, Asteroid } from "../lib/ecs";
import { model, GameStates } from "..";
import { Input } from "peasy-input";

// Load Chance
var Chance = require("chance");
// Instantiate Chance so it can be used
export var chance = new Chance();

const physicsInterval = 0.024;

export class PlayState extends State {
  startime: number | undefined = undefined;
  lasttime: number | undefined = undefined;
  lastPhysicsUpdate: number = 0;
  lastRenderUpdate: number = 0;
  static running: boolean = false;
  entities = [];
  mapping: any = undefined;

  static template = `
  <div class="content" \${===isGame}>
    <div class="\${entity.type}" \${entity<=*entities:id} style="top: \${entity.position.y}px; left: \${entity.position.x}px; width: \${entity.size.x}px; height: \${entity.size.y}px ">
      <div class="inner" style="rotate: \${entity.angle}deg; background-image:url(\${entity.texture});background-repeat: no-repeat;background-size:cover;">
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
    //get random # of asteroids
    const numAsteroids = chance.integer({ min: 1, max: 8 });
    for (let i = 1; i <= numAsteroids; i++) {
      model.entities.push(new Asteroid(model.screenwidth, model.screenheight));
    }

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
        Enter: { action: "fire", repeat: true },
        Shift: { action: "fire", repeat: true },
      },
      (action: string, doing: boolean) => {
        if (doing) {
          switch (action) {
            case "left":
              model.keypresses.direction = "LEFT";
              console.log("left key");
              break;
            case "right":
              model.keypresses.direction = "RIGHT";
              console.log("right key");
              break;
            case "up":
              model.keypresses.direction = "UP";
              console.log("up key");
              break;
            case "down":
              model.keypresses.direction = "DOWN";
              console.log("down key");
              break;
            case "fire":
              model.keypresses.fire = "FIRE";
              console.log("fire key");
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
    //mockup timer to change states
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
    this.lasttime = timestamp;
    this.lastPhysicsUpdate += deltaTime;
    this.lastRenderUpdate += deltaTime;

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

      if (model.keypresses.direction == "FIRE") model.entities[0].fire();
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
