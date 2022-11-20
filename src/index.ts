import "./style.css";
import { UI } from "peasy-ui";
import { GameState } from "./states/gameState";
import { MenuState } from "./states/menu";
import { PlayState } from "./states/game";

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
  entities: [],
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

//TODO add in touch listener to enable touch controls
