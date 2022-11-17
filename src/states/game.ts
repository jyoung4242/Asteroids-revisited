import { GameStates, model } from "..";
import { GameState, State } from "./gameState";

export class PlayState extends State {
  static template = `
  <div \${===isGame}>  i am in \${gamestate} <div>
  <p> i will transition to transition in 5 seconds </p>
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
    this.wait(1500);
  }

  private wait(ms: number) {
    return new Promise<void>(resolve =>
      setTimeout(() => {
        resolve();
      }, ms)
    );
  }
}
