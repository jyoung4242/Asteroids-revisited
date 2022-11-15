import "./style.css";
import { UI } from "peasy-ui";
import { GameState, State } from "./states/gameState";

let template = `
<div id="game" class="gameContainer">
  <div class="diagtext">Device Type: \${deviceType}  screen size: Width: \${screenwidth}  Height:  \${screenheight} </div>
</div>`;

enum DeviceType {
  IOS = "ios:",
  ANDROID = "android",
  DESKTOP = "desktop",
}

export let model = {
  logText: "",
  deviceType: DeviceType.IOS,
  screenwidth: 600,
  screenheight: 400,
  get screenRatio() {
    return model.screenwidth / model.screenheight;
  },
};

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
  UI.update();
};

export const init = (m = model) => {
  resizeScreen(m);
};

function loadEventHandler(e: any) {
  init();
}
function resizeEventHandler(e: any) {
  resizeScreen();
}

window.addEventListener("load", loadEventHandler, false);
window.addEventListener("resize", resizeEventHandler, false);

class TestState extends State {
  public constructor(name) {
    super(name);
  }
}

const myarray = GameState.create("one", "two", "three", TestState);
GameState.set("one");

/* 
var orientation = (screen.orientation || {}).type || screen.mozOrientation || screen.msOrientation;

if (orientation === "landscape-primary") {
  console.log("That looks good.");
} else if (orientation === "landscape-secondary") {
  console.log("Mmmh... the screen is upside down!");
} else if (orientation === "portrait-secondary" || orientation === "portrait-primary") {
  console.log("Mmmh... you should rotate your device to landscape");
} else if (orientation === undefined) {
  console.log("The orientation API isn't supported in this browser :(");
} */

//TODO add in touch listener to enable touch controls
