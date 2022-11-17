import { GameState, State } from "./gameState";
import { GameStates, model } from "../index";

export class MenuState extends State {
  static template = `
  <div \${===isMenu}>  i am in \${gamestate} <div>
  <p> i will transition to transition in 5 seconds </p>
  `;
  constructor() {
    super("menu");
  }

  public enter(_previous: State, ...params: any): void {
    console.log("entering menu");

    model.gamestate = GameStates.MENU;

    //mockup timer to change states
    setTimeout(() => {
      GameState.set("game");
    }, 5000);
  }

  public async exit(_next: State, ...params: any) {
    console.log("exiting menu");

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
