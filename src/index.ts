import "./style.css";
import { UI } from "@peasy-lib/peasy-ui";
import { GameState } from "./states/gameState";
import { MenuState } from "./states/menu";
import { PlayState } from "./states/game";
import { Vector } from "./lib/ecs";

let touches = [];

enum DeviceType {
  IOS = "ios:",
  ANDROID = "android",
  DESKTOP = "desktop",
}
export enum GameStates {
  MENU = "menu",
  GAME = "game",
  SETTINGS = "settings",
  ABOUT = "about",
  TRANSITION = "transition",
}

export let model = {
  lives: 3,
  get lives3() {
    return model.lives == 3;
  },
  get lives2() {
    return model.lives >= 2;
  },
  get lives1() {
    return model.lives >= 1;
  },
  ammo: "100%",
  statusIsVisible: false,
  statusmessage: "Start Game!",
  health: 10,
  exp: "0",
  gameLevel: 1,
  score: 0,
  fps: "",
  deviceType: DeviceType.IOS,
  screenwidth: 600,
  screenheight: 400,
  gamestate: GameStates.MENU,
  get isGame() {
    return model.gamestate == GameStates.GAME;
  },
  get isMenu() {
    return model.gamestate == GameStates.MENU;
  },
  get isMobile() {
    return model.deviceType == DeviceType.IOS || model.deviceType == DeviceType.ANDROID;
  },
  get spawnPoint1() {
    let cpX = model.entities[0].position.x + model.entities[0].size.x / 2;
    let cpY = model.entities[0].position.y + model.entities[0].size.y / 2;
    let radius = model.entities[0].size.x / 2.125;
    let sx = radius * Math.cos(Vector.angle2rad(model.entities[0].angle + 10));
    let sy = radius * Math.sin(Vector.angle2rad(model.entities[0].angle + 10));
    return new Vector(cpX + sx, cpY + sy);
  },
  get spawnPoint2() {
    let cpX = model.entities[0].position.x + model.entities[0].size.x / 2;
    let cpY = model.entities[0].position.y + model.entities[0].size.y / 2;
    let radius = model.entities[0].size.x / 2.125;
    let sx = radius * Math.cos(Vector.angle2rad(model.entities[0].angle - 10));
    let sy = radius * Math.sin(Vector.angle2rad(model.entities[0].angle - 10));
    return new Vector(cpX + sx, cpY + sy);
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
        model.joystick.knob.style.transform = `translate(${-40 + (event.targetTouches[0].clientX - touches[0].clientX)}px,${
          -40 + (event.targetTouches[0].clientY - touches[0].clientY)
        }px)`;
        model.joystick.angle = angle.toFixed(2);
        model.joystick.mag = mag.toFixed(2);
        model.joystick.dir = dir;
      } else {
        //normalize vector
        const Nx = (event.targetTouches[0].clientX - touches[0].clientX) / mag;
        const Ny = (event.targetTouches[0].clientY - touches[0].clientY) / mag;
        model.joystick.knob.style.transform = `translate(${-40 + Nx * 100}px,${-40 + Ny * 100}px)`;
        model.joystick.angle = angle.toFixed(2);
        model.joystick.mag = "100";
        model.joystick.dir = dir;
      }
    },
    end: (event: any) => {
      event.preventDefault();
      model.joystick.knob.style.transform = `translate(${-40}px,${-40}px)`;
      model.joystick.angle = null;
      model.joystick.mag = "0";
      model.joystick.dir = "NA";
      touches = [];
    },
    cancel: (event: any) => {
      event.preventDefault();
      model.joystick.knob.style.transform = `translate(${-40}px,${-40}px)`;
      model.joystick.angle = null;
      model.joystick.mag = "0";
      model.joystick.dir = "NA";
      touches = [];
    },
    knob: <any>undefined,
    mag: "0",
    angle: "0",
    dir: "NA",
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
    model.button.status = "pressed";
    model.holdInterval = setTimeout(() => {
      model.button.status = "held";
    }, 1000);
  },
  stopfiring: (event: any) => {
    event.preventDefault();
    model.button.status = "released";
    if (model.holdInterval != undefined) {
      clearTimeout(model.holdInterval);
      model.holdInterval = undefined;
    }
  },
  testvis: true,
  test: () => {
    model.testvis = !model.testvis;
  },
  hud: {
    health: {
      get healthbar10() {
        return model.health > 9;
      },
      get healthbar9() {
        return model.health > 8;
      },
      get healthbar8() {
        return model.health > 7;
      },
      get healthbar7() {
        return model.health > 6;
      },
      get healthbar6() {
        return model.health > 5;
      },
      get healthbar5() {
        return model.health > 4;
      },
      get healthbar4() {
        return model.health > 6;
      },
      get healthbar3() {
        return model.health > 2;
      },
      get healthbar2() {
        return model.health > 1;
      },
      get healthbar1() {
        return model.health > 0;
      },
    },
    ammo: {
      color: "lime",
      fill: "74",
    },
  },
};

let template = `
<div id="game" class="gameContainer">
  ${MenuState.template}    
  ${PlayState.template}
</div>`;

// we need to sniff out Android and iOS
// so that we can hide the address bar in
// our resize function

const UA = navigator.userAgent.toLowerCase();
if (UA.indexOf("android") > -1) model.deviceType = DeviceType.ANDROID;
else if (UA.indexOf("iphone") > -1) model.deviceType = DeviceType.IOS;
else model.deviceType = DeviceType.DESKTOP;

UI.create(document.body, template, model);
UI.initialize(1000 / 60);

const resizeScreen = (m = model) => {
  m.screenwidth = window.innerWidth;
  m.screenheight = window.innerHeight;
};

export const init = (m = model) => {
  resizeScreen(m);
  GameState.create(MenuState, PlayState);
  GameState.set("menu", "default", model);
};

function loadEventHandler(e: any) {
  init();
}

function resizeEventHandler(e: any) {
  resizeScreen();
}

window.addEventListener("load", loadEventHandler, false);
window.addEventListener("resize", resizeEventHandler, false);

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
