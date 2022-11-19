import { GameState, State } from "./gameState";

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
    console.log("entering menu");
    const [model] = params;
    model.gamestate = "menu";

    //mockup timer to change states
    setTimeout(() => {
      GameState.set("game", "default", model);
    }, 5000);
  }

  public async exit(_next: State, ...params: any) {
    console.log("exiting menu");
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
