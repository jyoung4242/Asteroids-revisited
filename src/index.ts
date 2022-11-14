import "./style.css";
import { UI } from "peasy-ui";

//globals
let gameDiv: HTMLElement;

let template = `
<div id="game" class="gameContainer" style="--screen_width: \${screenwidth}px; --screen_height: \${screenheight}px;">
</div>
`;

enum DeviceType {
  IOS = "ios:",
  ANDROID = "android",
  DESKTOP = "desktop",
}

let model = {
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

const resizeScreen = () => {
  document.body.style.width = `${window.innerWidth}px`;
  document.body.style.height = `${window.innerHeight}px`;
  model.screenwidth = window.innerWidth;
  model.screenheight = window.innerHeight;
};

const init = async () => {
  resizeScreen();
};

window.addEventListener("load", init, false);
window.addEventListener("resize", resizeScreen, false);

//TODO add in touch listener to enable touch controls
