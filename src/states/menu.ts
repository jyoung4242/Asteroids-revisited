import { GameState, State } from "./gameState";
import { GameStates, bgm, sfx, DeviceType, resizeScreen } from "..";
import { Input } from "@peasy-lib/peasy-input";

export class MenuState extends State {
  touchHandler: any = null;
  toggle;
  mapping: any;
  model: any;
  controller = new AbortController();
  static template = `
  <div class="content menu" \${===isMenu}>
    <span class="toggleLabel" \${!== mobiletoggle}>ENABLE TOUCHCONTROLS</span>
    <div class="touchtoggle" \${!== mobiletoggle}>
      <div id="touchtoggle" class="togglebutton"></div>
    </div>
    <span class="title" style="font-size: \${css.TitleFontSize};">ASTEROIDS PLUS 2.0</span>  
    <span class="deskopStart" \${!==isMobile}>PRESS ENTER KEY TO BEGIN</span>
    <span class="mobileStart" \${===isMobile}>TAP SCREEN TO BEGIN</span>
    <span class="instructions" \${!==mobiletoggle}>W / S / Up / Down for thrust, A / D / Left / Right to rotate, Enter / L Shift to fire</span>
   </div>
  `;
  constructor() {
    super("menu");
  }

  enableTouch = () => {
    if (!this.touchHandler) {
      this.touchHandler = document.addEventListener("touchstart", e => this.transition_menu(this.model), {
        signal: this.controller.signal,
      });
    }
  };

  transition_menu = function (model: any) {
    GameState.set("game", "default", model);
  };

  public enter(_previous: State, ...params: any): void {
    const [model] = params;
    this.model = model;
    model.gamestate = GameStates.MENU;
    this.wait(250);
    setTimeout(() => {
      console.log("toggle init");
      let toggle = document.getElementById("touchtoggle");
      toggle.addEventListener("click", () => {
        console.log("toggle click");
        if (!model.mobiletoggle) {
          //clear out input.mapping
          if (this.mapping) this.mapping.unmap();
          this.mapping = undefined;
          //set device type
          model.deviceType = DeviceType.IOS;

          //setup touchhandler for menu
          this.touchHandler = document.addEventListener("touchstart", e => this.transition_menu(model), {
            signal: this.controller.signal,
          });
        } else {
          //clear out touch handler
          console.log("killing touch handler");
          this.controller.abort();

          //set device type
          console.log("setting device type");
          model.deviceType = DeviceType.DESKTOP;

          //map keyboard
          console.log("settup keyboard mapping");
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
        model.mobiletoggle = !model.mobiletoggle;
        resizeScreen();
      });
    }, 50);

    model.deviceType = DeviceType.DESKTOP;

    //map keyboard
    console.log("settup keyboard mapping");
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

  public async exit(_next: State, ...params: any) {
    bgm.play();
    const [model] = params;
    if (this.mapping) this.mapping.unmap();
    model.gamestate = "transition";
    this.controller.abort();
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
