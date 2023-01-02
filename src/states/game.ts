import { GameState, State } from "./gameState";
import { Player, Asteroid, angle2rad } from "../lib/ecs";
import { model, GameStates, bgm, sfx } from "..";
import { Input } from "@peasy-lib/peasy-input";
import { Physics, Vector, Stadium, Circle, Entity as PhysicsEntity, Intersection } from "@peasy-lib/peasy-physics";
import { Enemy } from "../lib/AI";
import { mode } from "../../webpack.config";
//import { Lighting, Vector, Light } from "@peasy-lib/peasy-lighting";

//testing switches
const TEST_NO_ASTEROIDS = false;
const TEST_NO_AI = false;
const TEST_NO_PLAYER = false;
const TEST_NO_HUD = false;
const TEST_AI_SPAWN_LEVEL = 5;
const TEST_AI_SPAWN_RATE = null;

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
let enemySpawnRate = chance.integer({ min: 30, max: 50 });
let enemySpawnTimer = 0;
let enemySpawnedFlag: boolean = false;
let peasyLoadedFlag: boolean = false;

let UIToggle = false;

export const gameObjects = [];

export const clearEnemySpawnFlag = () => {
  enemySpawnedFlag = false;
};

export const stopeEngine = () => {
  model.engineRunning = false;
};

export const startEngine = () => {
  model.engineRunning = true;
};

export const updateHudData = (param: HUDparameters, incValue: number) => {
  switch (param) {
    case HUDparameters.SCORE:
      model.score += incValue;
      break;
    case HUDparameters.EXPERIENCE:
      if (model.gameObjects[0].exp >= 100) {
        model.gameObjects[0].exp = 0;
        model.gameLevel += 1;
        spawnRate *= 0.95;
        enemySpawnRate * +0.95;
        model.gameObjects[0].health = 10;
        model.health = 10;
      }
      model.exp = `${model.gameObjects[0].exp}%`;

      break;
    case HUDparameters.LIVES:
      model.lives += incValue;
      break;
    case HUDparameters.HEALTH:
      model.health += incValue;
      break;
  }
};

export const resetGame = () => {
  GameState.set("menu", "default", model);
};

const physicsInterval = 0.016; //.016

export class PlayState extends State {
  startime: number | undefined = undefined;
  lasttime: number | undefined = undefined;
  lastPhysicsUpdate: number = 0;
  lastRenderUpdate: number = 0;
  static running: boolean = false;
  mapping: any = undefined;
  firelatch: boolean = false;

  static template = `
  <div class="content" \${===isGame}>
  <canvas \${ ==> canvas}></canvas>
    <div class="HUD" \${===hud.display}>
      <div class="HUD_Health \${mobileCSSstring}">
        <span class="HUD_Health_title">HEALTH</span>
        <div class="healthflex">
          <div class="greenHealthbar healthbar10" \${===hud.health.healthbar10}></div>
          <div class="greenHealthbar healthbar9" \${===hud.health.healthbar9}></div>
          <div class="greenHealthbar healthbar8" \${===hud.health.healthbar8}></div>
          <div class="greenHealthbar healthbar7" \${===hud.health.healthbar7}></div>
          <div class="yellowHealthbar healthbar6" \${===hud.health.healthbar6}></div>
          <div class="yellowHealthbar healthbar5" \${===hud.health.healthbar5}></div>
          <div class="yellowHealthbar healthbar4" \${===hud.health.healthbar4}></div>
          <div class="yellowHealthbar healthbar3" \${===hud.health.healthbar3}></div>
          <div class="redHealthbar healthbar2" \${===hud.health.healthbar2}></div>
          <div class="redHealthbar healthbar1" \${===hud.health.healthbar1}></div>
        </div>
      </div>
      <div class="HUD_Ammo \${mobileCSSstring}">
        <span class="HUD_Ammo_title">AMMO</span>
        <div class="tankframe">
           <div class="ammo_energy" style="height: \${ammo};"></div>
           <div class="tank"></div>
        </div>    
          
      </div>
      <div class="HUD">
        <div class="LivesSection" style="font-size: \${css.HUDfontSize};">
          Lives: 
          <div class="livesIcon" style="width: \${css.livesIconWidth}" \${===lives1}></div>
          <div class="livesIcon" style="width: \${css.livesIconWidth}" \${===lives2}></div>
          <div class="livesIcon" style="width: \${css.livesIconWidth}" \${===lives3}></div>
        </div>

        <div class="LevelSection" style="font-size: \${css.HUDfontSize};">
          Level: \${gameLevel}
        </div>

        <div class="scoreSection" style="font-size: \${css.HUDfontSize};">
          Score: \${score}
        </div>

        <div class="expBar" style="top:\${css.barTop};">
          <div class="expLevel" style="width:\${exp};"></div>
        </div>

        <div class="statusMessage" \${===statusIsVisible}>
          <span>\${statusmessage}</span>
        </div>
        
      </div>

    </div>
    
    <div class="\${gameObject.type}" \${gameObject<=*gameObjects:id} style="width: \${gameObject.size.x}px; height: \${gameObject.size.y}px; top: -\${gameObject.halfsize.y}px; left: -\${gameObject.halfsize.x}px; transform: translate(\${gameObject.position.x}px, \${gameObject.position.y}px) rotate(-90deg) scale(\${gameObject.mobileScaling});">
      <div class="inner" style="rotate: \${gameObject.angle}deg; background-image:url(\${gameObject.texture});background-position: \${gameObject.ssPosition};background-size:\${gameObject.textureSize};">
      </div>
    </div>

    <div class="navButtons" \${===isMobile} style="width: \${css.navButtonWidth}; left: \${css.navButtonLeft}; bottom: \${css.navButtonBottom}">
      <div class="navRel">
        <div id="left" class="touchbutton turnleft"  \${pointerdown@=>nav} \${pointerup@=>stopnav}\${}><span>L</span></div>
        <div id="right" class="touchbutton turnright"  \${pointerdown@=>nav} \${pointerup@=>stopnav}><span>R</span></div>
        <div id="thrust" class="touchbutton thrust"  \${pointerdown@=>nav} \${pointerup@=>stopnav}><span>F</span></div>
        <div id="rthrust" class="touchbutton rthrust"  \${pointerdown@=>nav} \${pointerup@=>stopnav}><span>B</span></div>
      </div>
    </div>

    <div class="buttonDiv" \${===isMobile} style="width: \${css.fireButtonWidth}; right: \${css.fireButtonRight}; bottom: \${css.navButtonBottom}">
        <div class="but_rel" \${pointerdown@=>fire} \${pointerup@=>stopfiring}></div>
    </div>
    
  </div>
 
  `;
  //
  constructor() {
    super("game");
  }

  public enter(_previous: State, ...params: any): void {
    const [model] = params;
    model.gamestate = GameStates.GAME;
    model.hud.display = !TEST_NO_HUD;
    //*****************************
    //Set up game entities
    model.entities = [];
    model.lives = 3;
    model.gameLevel = 1;
    model.score = 0;

    //Peasy Migration
    //  Initialize physics engine
    //  create shapes
    //  define entities
    //  add entities
    //  remove entities
    //  update forces
    //  manage collisions

    /**
     * PEASY PHYSICS INIT
     */
    setTimeout(() => {
      //{ ctx: model.canvas.getContext("2d"), showAreas: true }
      Physics.initialize({
        ctx: model.canvas.getContext("2d"),
        showAreas: true,
        collisions: {
          player: ["asteroid", "enemybullet"],
          asteroid: ["asteroid", "bullet", "enemybullet"],
          enemy: ["player", "bullet", "asteroid"],
          bullet: ["enemy", "asteroid"],
          enemybullet: ["player", "asteroid"],
        },
      });

      if (!TEST_NO_PLAYER) model.gameObjects.push(new Player(model.screenwidth, model.screenheight, Physics));
      peasyLoadedFlag = true;
      model.canvas.setAttribute("width", window.innerWidth.toString());
      model.canvas.setAttribute("height", window.innerHeight.toString());
      model.canvas.style.display = "none";
      UIToggle = false;
    }, 25);

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
        Escape: { action: "pause", repeat: false },
        "=": { action: "UI", repeat: false },
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
            case "UI":
              if (UIToggle) {
                model.canvas.style.display = "none";
                UIToggle = false;
              } else {
                UIToggle = true;
                model.canvas.style.display = "block";
              }

              break;
            case "pause":
              if (model.engineRunning == true) {
                bgm.stop();
                model.engineRunning = false;
              } else {
                bgm.play();
                model.engineRunning = true;
              }
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

    model.statusmessage = "STARTING GAME!!";
    model.statusIsVisible = true;
    setTimeout(() => {
      model.statusIsVisible = false;
    }, 2000);

    //*****************************
    //make RAF call to the engine
    PlayState.running = true;
    requestAnimationFrame(this.FixedStepEngine);
  }

  public async exit(_next: State, ...params: any) {
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

  stopEngine = () => {
    PlayState.running = false;
  };

  startEngine = () => {
    PlayState.running = true;
    requestAnimationFrame(this.FixedStepEngine);
  };

  FixedStepEngine = (timestamp: number) => {
    if (model.engineRunning) {
      if (this.startime == undefined) {
        this.startime = timestamp;
        this.lasttime = timestamp;
      }
      let deltaTime = (timestamp - this.lasttime) / 1000;
      if (deltaTime > 1.5) {
        deltaTime = 0;
        this.lasttime = timestamp;
      }

      model.fps = (1 / deltaTime).toFixed(2);
      this.lasttime = timestamp;
      this.lastPhysicsUpdate += deltaTime;
      this.lastRenderUpdate += deltaTime;
      spawnTimer += deltaTime;

      if (model.gameLevel >= TEST_AI_SPAWN_LEVEL && !enemySpawnedFlag) {
        enemySpawnTimer += deltaTime;
      }

      //check for input
      if (model.isMobile && model.gameObjects[0]) {
        if (model.navStatus == "LEFT") model.gameObjects[0].turnLeft();
        if (model.navStatus == "RIGHT") model.gameObjects[0].turnRight();
        if (model.navStatus == "THRUST") model.gameObjects[0].accelerate();
        if (model.navStatus == "RTHRUST") model.gameObjects[0].reverse();
        //if (model.navStatus == "NONE") model.gameObjects[0].decelerate();

        if (model.button.status == "pressed" && !this.firelatch) {
          model.gameObjects[0].fire();
          this.firelatch = true;
        } else if (model.button.status == "released" && this.firelatch) {
          this.firelatch = false;
        }
      } else if (!model.isMobile && model.gameObjects[0]) {
        //keyboard input
        if (model.keypresses.direction == "LEFT") model.gameObjects[0].turnLeft();
        if (model.keypresses.direction == "RIGHT") model.gameObjects[0].turnRight();
        if (model.keypresses.direction == "UP") model.gameObjects[0].accelerate();
        if (model.keypresses.direction == "DOWN") model.gameObjects[0].reverse();
        //if (model.keypresses.direction == "NONE") model.gameObjects[0].nothrust();

        if (model.keypresses.fire == "FIRE" && !this.firelatch) {
          model.gameObjects[0].fire();
          this.firelatch = true;
        } else if (model.keypresses.fire == "NONE" && this.firelatch) {
          this.firelatch = false;
        }
      }

      //generate new Asteroid
      if (spawnTimer >= spawnRate && !TEST_NO_ASTEROIDS) {
        spawnTimer = 0;
        Asteroid.spawn(Physics);
      }

      //generate new Enemy
      if (TEST_AI_SPAWN_RATE == null) {
        if (enemySpawnTimer >= enemySpawnRate && !TEST_NO_AI) {
          enemySpawnTimer = 0;
          enemySpawnedFlag = true;
          Enemy.spawn(Physics);
        }
      } else {
        if (enemySpawnTimer >= TEST_AI_SPAWN_RATE && !TEST_NO_AI) {
          enemySpawnTimer = 0;
          enemySpawnedFlag = true;
          Enemy.spawn(Physics);
        }
      }

      while (this.lastPhysicsUpdate >= physicsInterval) {
        //update physics here
        if (peasyLoadedFlag) Physics.update(this.lastPhysicsUpdate, timestamp);
        model.gameObjects.forEach(ent => {
          ent.update(this.lastPhysicsUpdate, this);
        });
        this.lastPhysicsUpdate -= physicsInterval;
      }
    }

    requestAnimationFrame(this.FixedStepEngine);
  };
}
