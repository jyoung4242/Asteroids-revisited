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
  //Globals
  mobileScale: "",
  lives: 3,
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
  entities: [],

  /*input management*/
  keypresses: {
    fire: "NONE",
    direction: "NONE",
  },
  navStatus: "NONE",
  nav: (event, model, element) => {
    switch (element.id) {
      case "left":
        model.navStatus = "LEFT";
        break;
      case "right":
        model.navStatus = "RIGHT";
        break;
      case "thrust":
        model.navStatus = "THRUST";
        break;
      case "rthrust":
        model.navStatus = "RTHRUST";
        break;
    }
  },
  stopnav: (event, model, element) => {
    model.navStatus = "NONE";
  },
  button: {
    status: "released",
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

  /*Getters*/
  get lives3() {
    return model.lives == 3;
  },
  get lives2() {
    return model.lives >= 2;
  },
  get lives1() {
    return model.lives >= 1;
  },
  get isGame() {
    return model.gamestate == GameStates.GAME;
  },
  get isMenu() {
    return model.gamestate == GameStates.MENU;
  },
  get isMobile() {
    if (model.deviceType == DeviceType.IOS || model.deviceType == DeviceType.ANDROID) {
      model.css.mobileCSSstring = " mobile";
      return true;
    } else {
      model.css.mobileCSSstring = "";
      return false;
    }
  },
  get spawnPoint1() {
    let cpX = model.entities[0].position.x + model.entities[0].size.x / 2;
    let cpY = model.entities[0].position.y + model.entities[0].size.y / 2;
    let radius = model.entities[0].size.x / 4;
    let sx = radius * Math.cos(Vector.angle2rad(model.entities[0].angle + 10));
    let sy = radius * Math.sin(Vector.angle2rad(model.entities[0].angle + 10));
    return new Vector(cpX + sx, cpY + sy);
  },
  get spawnPoint2() {
    let cpX = model.entities[0].position.x + model.entities[0].size.x / 2;
    let cpY = model.entities[0].position.y + model.entities[0].size.y / 2;
    let radius = model.entities[0].size.x / 4;
    let sx = radius * Math.cos(Vector.angle2rad(model.entities[0].angle - 10));
    let sy = radius * Math.sin(Vector.angle2rad(model.entities[0].angle - 10));
    return new Vector(cpX + sx, cpY + sy);
  },

  /*HUD bindings */
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

  /*CSS styling*/
  css: {
    navButtonWidth: "23%",
    navButtonBottom: "10px",
    navButtonLeft: "10px",
    fireButtonWidth: "10%",
    fireButtonRight: "10px",
    orientation: "landscape",
    mobileCSSstring: "",
    TitleFontSize: "3vw;",
    mobileStartFonstSize: "4vw",
    livesIconWidth: "1.5vw",
    HUDfontSize: "1.5vw",
    barTop: "3vw",
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
  if (m.screenwidth < m.screenheight) {
    m.css.orientation = "portrait";
  }
  if (m.isMobile && m.css.orientation == "portrait") {
    m.css.navButtonBottom = "40px";
    m.css.navButtonLeft = "20px";
    m.css.navButtonWidth = "30%";
    m.css.fireButtonWidth = "25%";
    m.css.fireButtonRight = "20px";
    m.css.TitleFontSize = "5vw";
    m.css.livesIconWidth = "4vw";
    m.css.HUDfontSize = "3vw";
    m.css.barTop = "6vw";
  } else if (m.isMobile && m.css.orientation == "landscape") {
    m.css.navButtonBottom = "20px";
    m.css.navButtonLeft = "10px";
    m.css.navButtonWidth = "20%";
    m.css.fireButtonWidth = "15%";
    m.css.fireButtonRight = "10px";
    m.css.TitleFontSize = "4vw";
    m.css.livesIconWidth = "2vw";
    m.css.HUDfontSize = "2vw";
    m.css.barTop = "3vw";
  }
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
