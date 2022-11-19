import { GameState } from "../states/gameState";
import { MenuState } from "../states/menu";
import { PlayState } from "../states/game";
import { GameStates } from "../index";

function wait(ms: number) {
  return new Promise<void>(resolve =>
    setTimeout(() => {
      resolve();
    }, ms)
  );
}

enum DeviceType {
  IOS = "ios:",
  ANDROID = "android",
  DESKTOP = "desktop",
}

let localModel = {
  deviceType: DeviceType.IOS,
  screenwidth: 600,
  screenheight: 400,
  gamestate: GameStates.MENU,
  get isGame() {
    return localModel.gamestate == GameStates.GAME;
  },
  get isMenu() {
    return localModel.gamestate == GameStates.MENU;
  },
  get isMobile() {
    return localModel.deviceType == DeviceType.IOS || localModel.deviceType == DeviceType.ANDROID;
  },
};

jest.setTimeout(20000);
describe("Check Both States", () => {
  it("create states", () => {
    GameState.create(MenuState, PlayState);
    expect(GameState.get()).toMatchObject({ state: undefined });
  });
  it("set states", async () => {
    GameState.set("menu", "default", localModel);
    expect(GameState.get()).toMatchObject({ state: { machine: "default", name: "menu" } });
    await wait(7500);
    expect(GameState.get()).toMatchObject({ state: { machine: "default", name: "game" } });
    await wait(7500);
    expect(GameState.get()).toMatchObject({ state: { machine: "default", name: "menu" } });
  });
});
