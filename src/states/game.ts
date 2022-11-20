import { State } from "./gameState";
import { Player, Asteroid } from "../lib/ecs";
import { model, GameStates } from "..";
// Load Chance
var Chance = require("chance");
// Instantiate Chance so it can be used
var chance = new Chance();

const physicsInterval = 0.24;

export class PlayState extends State {
  startime: number | undefined = undefined;
  lasttime: number | undefined = undefined;
  lastPhysicsUpdate: number = 0;
  lastRenderUpdate: number = 0;
  static running: boolean = false;
  entities = [];

  static template = `
  <div class="content" \${===isGame}>
    <div class="\${entity.type}" \${entity<=*entities:id} style="top: \${entity.position.y}px; left: \${entity.position.x}px; width: \${entity.size.x}px; height: \${entity.size.y}px ">
      <div class="inner" style="rotate: \${entity.angle}deg; background-image:url(\${entity.texture});background-repeat: no-repeat;background-size:cover;">
      </div>
    </div>

    <div class="joystick" \${===isMobile} style="width:\${joystick.w}px;height:\${joystick.h}px; top: \${joystick.y}px; left:\${joystick.x}px">
      <div id="joydiv" class="inner" ></div>
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
    //Set up game controls touch/keyboard

    model.joystick.w = 0.15 * model.screenwidth;
    model.joystick.h = model.joystick.w;

    model.joystick.x = 50;
    model.joystick.y = model.screenheight - model.joystick.h - 50;

    //*****************************
    //Set up game entities
    model.entities = [];
    model.entities.push(new Player(model.screenwidth, model.screenheight));
    //get random # of asteroids
    const numAsteroids = chance.integer({ min: 1, max: 8 });
    for (let i = 1; i <= numAsteroids; i++) {
      model.entities.push(new Asteroid(model.screenwidth, model.screenheight));
    }
    console.log(model.entities);

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
    this.lastPhysicsUpdate += deltaTime;
    this.lastRenderUpdate += deltaTime;

    while (this.lastPhysicsUpdate >= physicsInterval) {
      //update physics here
      model.entities.forEach(ent => {
        ent.update();
      });
      this.lastPhysicsUpdate -= physicsInterval;
    }

    if (PlayState.running) requestAnimationFrame(this.FixedStepEngine);
  };
}
