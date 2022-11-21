import { GameState, State } from "./gameState";
import { GameStates } from "..";

export class MenuState extends State {
  static template = `
  <div class="content menu" \${===isMenu}>
    <span class="title">ASTEROIDS PLUS 2.0</span>  
    <span class="deskopStart" \${!==isMobile}>PRESS ANY KEY TO BEGIN</span>
    <span class="mobileStart" \${===isMobile}>TAP SCREEN TO BEGIN</span>
   </div>
  `;
  constructor() {
    super("menu");
  }

  public enter(_previous: State, ...params: any): void {
    const [model] = params;
    model.gamestate = GameStates.MENU;
    console.log("in menu");
    //mockup timer to change states
    setTimeout(() => {
      GameState.set("game", "default", model);
    }, 2000);
  }

  public async exit(_next: State, ...params: any) {
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
}
