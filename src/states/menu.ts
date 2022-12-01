import { GameState, State } from "./gameState";
import { GameStates } from "..";
import { Input } from "@peasy-lib/peasy-input";

export class MenuState extends State {
  mapping: any;
  model: any;
  controller = new AbortController();
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

  transition_menu = function (model: any) {
    GameState.set("game", "default", model);
  };

  public enter(_previous: State, ...params: any): void {
    const [model] = params;
    this.model = model;
    model.gamestate = GameStates.MENU;

    if (model.isMobile) {
      document.addEventListener("touchstart", e => this.transition_menu(model), { signal: this.controller.signal });
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
    if (model.isMobile) {
      this.controller.abort();
    }

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
