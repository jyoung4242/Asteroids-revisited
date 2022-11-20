import { GameState } from "../states/gameState";
import { MenuState } from "../states/menu";
import { PlayState } from "../states/game";

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
  gamestate: "menu",
  get isGame() {
    return localModel.gamestate == "game";
  },
  get isMenu() {
    return localModel.gamestate == "menu";
  },
  get isMobile() {
    return localModel.deviceType == DeviceType.IOS || localModel.deviceType == DeviceType.ANDROID;
  },
};

jest.setTimeout(10000);
describe("Check Both States", () => {
  it("create states", () => {
    GameState.create(MenuState, PlayState);
    expect(GameState.get()).toMatchObject({ state: undefined });
  });
  it("set states", () => {
    GameState.set("menu", "default", localModel);
    expect(GameState.get()).toMatchObject({ state: { machine: "default", name: "menu" } });
  });

  it("next state", () => {
    setTimeout(() => {
      expect(GameState.get()).toMatchObject({ state: { machine: "default", name: "game" } });
    }, 5000);
  });

  it("final switch", () => {
    GameState.set("game", "default", localModel);
    GameState.set("menu", "default", localModel);
    expect(GameState.get()).toMatchObject({ state: { machine: "default", name: "menu" } });
  });
});
