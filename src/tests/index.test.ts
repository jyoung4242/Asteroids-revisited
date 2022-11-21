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
  let touches = [];

  const angle2direction = (angle: number): string => {
    if ((angle >= 0 && angle < 22.5) || (angle <= 0 && angle > -22.5)) return "E";
    else if (angle >= 0 && angle < 67.5) return "NE";
    else if (angle >= 67.5 && angle < 112.5) return "N";
    else if (angle >= 112.5 && angle < 157.5) return "NW";
    else if ((angle >= 157.5 && angle < 180.1) || (angle <= -157.5 && angle > -180.1)) return "W";
    else if (angle <= -112.5 && angle > -157.5) return "SW";
    else if (angle <= -67.5 && angle > -112.5) return "S";
    else if (angle <= 0 && angle > -67.5) return "SE";
  };
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
    entities: [],
    joystick: {
      start: (event: any, model: any, element: any) => {
        event.preventDefault();
        touches = [];
        touches.push(event.targetTouches[0]);
      },
      move: (event: any) => {
        event.preventDefault();
        if (!event.targetTouches[0]) return;
        if (touches.length == 0) return;
        const x = event.targetTouches[0].clientX - touches[0].clientX;
        const y = event.targetTouches[0].clientY - touches[0].clientY;
        const mag = Math.sqrt(x * x + y * y);
        const angle = Math.atan2(-y, x) * (180 / Math.PI);
        const dir = angle2direction(angle);
        if (mag < 100) {
          localModel.joystick.knob.style.transform = `translate(${
            -40 + (event.targetTouches[0].clientX - touches[0].clientX)
          }px,${-40 + (event.targetTouches[0].clientY - touches[0].clientY)}px)`;
          localModel.joystick.angle = angle.toFixed(2);
          localModel.joystick.mag = mag.toFixed(2);
          localModel.joystick.dir = dir;
        } else {
          //normalize vector
          const Nx = (event.targetTouches[0].clientX - touches[0].clientX) / mag;
          const Ny = (event.targetTouches[0].clientY - touches[0].clientY) / mag;
          localModel.joystick.knob.style.transform = `translate(${-40 + Nx * 100}px,${-40 + Ny * 100}px)`;
          localModel.joystick.angle = angle.toFixed(2);
          localModel.joystick.mag = "100";
          localModel.joystick.dir = dir;
        }
      },
      end: (event: any) => {
        event.preventDefault();
        localModel.joystick.knob.style.transform = `translate(${-40}px,${-40}px)`;
        localModel.joystick.angle = null;
        localModel.joystick.mag = "0";
        localModel.joystick.dir = "NA";
        touches = [];
      },
      cancel: (event: any) => {
        event.preventDefault();
        localModel.joystick.knob.style.transform = `translate(${-40}px,${-40}px)`;
        localModel.joystick.angle = null;
        localModel.joystick.mag = "0";
        localModel.joystick.dir = "NA";
        touches = [];
      },
      knob: <any>undefined,
      mag: "0",
      angle: "0",
      dir: "N",
    },
    keypresses: {
      fire: "NONE",
      direction: "NONE",
    },
    button: {
      status: "not pressed",
    },
    holdInterval: <any>undefined,
    fire: (event: any) => {
      event.preventDefault();
      localModel.button.status = "pressed";
      localModel.holdInterval = setTimeout(() => {
        localModel.button.status = "held";
      }, 1000);
    },
    stopfiring: (event: any) => {
      event.preventDefault();
      localModel.button.status = "released";
      if (localModel.holdInterval != undefined) {
        clearTimeout(localModel.holdInterval);
        localModel.holdInterval = undefined;
      }
    },
  };

  it("model screen size should change", () => {
    init(localModel);
    expect(localModel.screenwidth).not.toBe(600);
    expect(localModel.screenheight).not.toBe(400);
  });
});
