import "./style.css";
import { UI } from "peasy-ui";

type RequestFullscreen = typeof document.documentElement.requestFullscreen;

declare global {
  interface HTMLElement {
    webkitRequestFullscreen: RequestFullscreen;
    mozRequestFullScreen: RequestFullscreen;
    msRequestFullscreen: RequestFullscreen;
  }
}

interface Document {
  exitFullscreen: () => void;
  mozCancelFullScreen: () => void;
  webkitExitFullscreen: () => void;
  fullscreenElement: () => void;
  mozFullScreenElement: () => void;
  webkitFullscreenElement: () => void;
}

//globals
let gameDiv: HTMLElement;

let template = `
<div id="game" class="gameContainer" style="--screen_width: \${screenwidth}px; --screen_height: \${screenheight}px;">
    <textarea id="logger" class="logger">$\{logText}</textarea>
</div>
`;

function getReqFullScreen() {
  let root: any = document.documentElement;
  let rslt = root.requestFullscreen || root.webkitRequestFullscreen || root.mozRequestFullScreen || root.msRequestFullscreen;
  console.log(root);
  return root.requestFullscreen || root.webkitRequestFullscreen || root.mozRequestFullScreen || root.msRequestFullscreen;
}

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
let myLogger;
setTimeout(() => {
  myLogger = document.getElementById("logger");
}, 250);

console.log = (function (old_function, div_log) {
  return function (text) {
    old_function(text);
    model.logText += text + "\r\n";
  };
})(console.log.bind(console), document.getElementById("error-log"));

let logstring = `device type is : ${model.deviceType}`;
console.log(logstring);

const resizeScreen = () => {
  //model.screenheight = window.screen.availHeight;
  //model.screenwidth = window.screen.availWidth;
  document.body.style.width = `${window.innerWidth}px`;
  document.body.style.height = `${window.innerHeight}px`;
  model.screenwidth = window.innerWidth;
  model.screenheight = window.innerHeight;

  /* if (model.deviceType == DeviceType.IOS || model.deviceType == DeviceType.ANDROID) {
    document.body.style.height = window.innerHeight + 50 + "px";
  } */
  window.setTimeout(function () {
    window.scrollTo(0, 1);
  });
  logstring = `New screen settings:  ${document.body.style.width}, ${document.body.style.height}`;
  console.log(logstring);
  scrollDown();
};

const scrollDown = () => {
  if (myLogger) myLogger.scrollTop = myLogger.scrollHeight;
};

const init = async () => {
  resizeScreen();
};

window.addEventListener("load", init, false);
window.addEventListener("resize", resizeScreen, false);
