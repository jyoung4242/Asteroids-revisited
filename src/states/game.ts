import { GameState, State } from "./gameState";

const physicsInterval = 0.24;
const renderInterval = 0.1667;

export class PlayState extends State {
  startime: number | undefined = undefined;
  lasttime: number | undefined = undefined;
  lastPhysicsUpdate: number = 0;
  lastRenderUpdate: number = 0;

  static template = `
  <div class="content" \${===isGame}>i am in \${gamestate}</div>
  `;

  constructor() {
    super("game");
  }
  public enter(_previous: State, ...params: any): void {
    console.log("entering game");
    const [model] = params;
    model.gamestate = "game";
    console.log(this);
    //make RAF call to the engine
    requestAnimationFrame(this.FixedStepEngine);
  }

  public async exit(_next: State, ...params: any) {
    console.log("exiting game");
    const [model] = params;
    model.gamestate = "transition";
    //mockup timer to change states
    await this.wait(2000);
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
      console.log("updating physics");
      this.lastPhysicsUpdate -= physicsInterval;
    }
    while (this.lastRenderUpdate >= renderInterval) {
      //update rendering here
      console.log("updating rendering");
      this.lastRenderUpdate -= renderInterval;
    }
    requestAnimationFrame(this.FixedStepEngine);
  };
}
