/* /**
 * @jest-environment jsdom
 

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
}); */

import { init } from "../index";

describe("run init routine", () => {
  enum DeviceType {
    IOS = "ios:",
    ANDROID = "android",
    DESKTOP = "desktop",
  }

  let localModel = {
    logText: "",
    deviceType: DeviceType.IOS,
    screenwidth: 600,
    screenheight: 400,
    get screenRatio() {
      return localModel.screenwidth / localModel.screenheight;
    },
  };

  it("model screen size should change", () => {
    init(localModel);
    expect(localModel.screenwidth).not.toBe(600);
    expect(localModel.screenheight).not.toBe(400);
  });
});
