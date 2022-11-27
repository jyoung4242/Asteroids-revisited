import { GameState, State } from "./gameState";
import { GameStates } from "..";
import { Input } from "@peasy-lib/peasy-input";

export class MenuState extends State {
  mapping: any;
  static template = `
  <div class="content menu" \${===isMenu}>
    <span class="title">ASTEROIDS PLUS 2.0</span>  
    <span class="deskopStart" \${!==isMobile}>PRESS ENTER KEY TO BEGIN</span>
    <span class="mobileStart" \${===isMobile}>TAP SCREEN TO BEGIN</span>
   </div>
  `;
  constructor() {
    super("menu");
  }

  public enter(_previous: State, ...params: any): void {
    const [model] = params;

    model.gamestate = GameStates.MENU;

    if (model.isMobile) {
      document.addEventListener("touchstart", () => {
        GameState.set("game", "default", model);
      });
    } else {
      this.mapping = Input.map(
        {
          Enter: { action: "start", repeat: false },
        },
        (action: string, doing: boolean) => {
          if (doing) {
            switch (action) {
              case "start":
                GameState.set("game", "default", model);
                break;
            }
          } else {
          }
        }
      );
    }
  }

  public async exit(_next: State, ...params: any) {
    const [model] = params;
    if (this.mapping) this.mapping.unmap();
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
