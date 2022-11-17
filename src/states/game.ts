import { GameStates, model } from "..";
import { GameState, State } from "./gameState";

export class PlayState extends State {
  static template = `
  <div class="content" \${===isGame}>  i am in \${gamestate} 
    <p> i will transition to menu in 5 seconds </p>
  </div>
  
  `;
  constructor() {
    super("game");
  }
  public enter(_previous: State, ...params: any): void {
    console.log("entering game");

    model.gamestate = GameStates.GAME;

    //mockup timer to change states
    setTimeout(() => {
      GameState.set("menu");
    }, 5000);
  }

  public async exit(_next: State, ...params: any) {
    console.log("exiting game");
    model.gamestate = GameStates.TRANSITION;
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
}
