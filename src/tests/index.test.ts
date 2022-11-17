/* /**
 * @jest-environment jsdom
 

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
}); */

import { GameStates, init } from "../index";

describe("run init routine", () => {
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

  it("model screen size should change", () => {
    init(localModel);
    expect(localModel.screenwidth).not.toBe(600);
    expect(localModel.screenheight).not.toBe(400);
  });
});
