/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./spacebg.jpg */ "./src/spacebg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*style.css*/\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  -webkit-touch-callout: none; /* iOS Safari */\r\n  -webkit-user-select: none; /* Safari */\r\n  -khtml-user-select: none; /* Konqueror HTML */\r\n  -moz-user-select: none; /* Old versions of Firefox */\r\n  -ms-user-select: none; /* Internet Explorer/Edge */\r\n  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */\r\n}\r\n\r\nhtml {\r\n  -webkit-text-size-adjust: none; /* prevent user scaling on iOS */\r\n  touch-action: pan-y; /* prevent user scaling */\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  overflow: hidden;\r\n}\r\n\r\n.diagtext {\r\n  color: #dddddd;\r\n}\r\n\r\n.gameContainer {\r\n  position: relative;\r\n  top: 0px;\r\n  left: 0px;\r\n  width: 100%; /*var(--screen_width);*/\r\n  height: 100%; /*var(--screen_height);*/\r\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n  overflow: hidden;\r\n}\r\n\r\n.content {\r\n  transition: opacity 1.75s ease-in-out;\r\n}\r\n\r\n.content.pui-adding {\r\n  opacity: 0;\r\n}\r\n\r\n.content.pui-removing {\r\n  opacity: 0;\r\n}\r\n\r\n.menu {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 80%;\r\n  height: 70%;\r\n  border: 3px darkgray solid;\r\n  border-radius: 3%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.title {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 3vw;\r\n  color: darkgray;\r\n  position: absolute;\r\n  top: 20%;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n\r\n.deskopStart {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 2vw;\r\n  color: darkgray;\r\n  position: absolute;\r\n  top: 75%;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n\r\n.mobileStart {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 2vw;\r\n  color: darkgray;\r\n  position: absolute;\r\n  top: 75%;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,YAAY;;AAEZ;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,yCAAyC;EACzC,2BAA2B,EAAE,eAAe;EAC5C,yBAAyB,EAAE,WAAW;EACtC,wBAAwB,EAAE,mBAAmB;EAC7C,sBAAsB,EAAE,4BAA4B;EACpD,qBAAqB,EAAE,2BAA2B;EAClD,iBAAiB,EAAE,iFAAiF;AACtG;;AAEA;EACE,8BAA8B,EAAE,gCAAgC;EAChE,mBAAmB,EAAE,yBAAyB;AAChD;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,WAAW,EAAE,uBAAuB;EACpC,YAAY,EAAE,wBAAwB;EACtC,yDAAsC;EACtC,gBAAgB;AAClB;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,UAAU;EACV,WAAW;EACX,0BAA0B;EAC1B,iBAAiB;EACjB,gCAAgC;AAClC;;AAEA;EACE,yCAAyC;EACzC,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,2BAA2B;AAC7B;;AAEA;EACE,yCAAyC;EACzC,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,2BAA2B;AAC7B;;AAEA;EACE,yCAAyC;EACzC,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,2BAA2B;AAC7B","sourcesContent":["/*style.css*/\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  -webkit-touch-callout: none; /* iOS Safari */\r\n  -webkit-user-select: none; /* Safari */\r\n  -khtml-user-select: none; /* Konqueror HTML */\r\n  -moz-user-select: none; /* Old versions of Firefox */\r\n  -ms-user-select: none; /* Internet Explorer/Edge */\r\n  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */\r\n}\r\n\r\nhtml {\r\n  -webkit-text-size-adjust: none; /* prevent user scaling on iOS */\r\n  touch-action: pan-y; /* prevent user scaling */\r\n}\r\n\r\nbody {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100vh;\r\n  width: 100vw;\r\n  overflow: hidden;\r\n}\r\n\r\n.diagtext {\r\n  color: #dddddd;\r\n}\r\n\r\n.gameContainer {\r\n  position: relative;\r\n  top: 0px;\r\n  left: 0px;\r\n  width: 100%; /*var(--screen_width);*/\r\n  height: 100%; /*var(--screen_height);*/\r\n  background-image: url(\"./spacebg.jpg\");\r\n  overflow: hidden;\r\n}\r\n\r\n.content {\r\n  transition: opacity 1.75s ease-in-out;\r\n}\r\n\r\n.content.pui-adding {\r\n  opacity: 0;\r\n}\r\n\r\n.content.pui-removing {\r\n  opacity: 0;\r\n}\r\n\r\n.menu {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  width: 80%;\r\n  height: 70%;\r\n  border: 3px darkgray solid;\r\n  border-radius: 3%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.title {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 3vw;\r\n  color: darkgray;\r\n  position: absolute;\r\n  top: 20%;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n\r\n.deskopStart {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 2vw;\r\n  color: darkgray;\r\n  position: absolute;\r\n  top: 75%;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n\r\n.mobileStart {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 2vw;\r\n  color: darkgray;\r\n  position: absolute;\r\n  top: 75%;\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/peasy-ui/dist/index.js":
/*!*********************************************!*\
  !*** ./node_modules/peasy-ui/dist/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

(()=>{"use strict";var e={d:(t,i)=>{for(var s in i)e.o(i,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{UI:()=>n,UIView:()=>i});class i{constructor(){this.state="created",this.bindings=[],this.animations=[],this.animationQueue=[],this.destroyed="",this.moved=""}static create(e,t,s={},l={parent:null,prepare:!0,sibling:null}){var r;const o=new i;return o.model=s,o.element=t,o.bindings.push(...n.parse(o.element,s,o,l.parent)),o.parentElement=e,o.sibling=l.sibling,o.parent=null!==(r=l.parent)&&void 0!==r?r:n,o.attached=new Promise((e=>{o.attachResolve=e})),o}destroy(){this.element.classList.add("pui-removing"),this.destroyed="queue",n.destroyed.push(this)}terminate(){Promise.all(this.getAnimations()).then((()=>{var e;null===(e=this.element.parentElement)||void 0===e||e.removeChild(this.element),this.bindings.forEach((e=>e.unbind()));const t=this.parent.views.findIndex((e=>e===this));t>-1&&this.parent.views.splice(t,1)})),this.destroyed="destroyed"}move(e){this.moved="queue",this.element.classList.add("pui-moving"),this.sibling=e}play(e,t){return"string"==typeof e&&(e=this.animations.find((t=>t.name===e)).clone()),e.element=t,e.state="pending",this.animationQueue.push(e),this.updateAnimations(performance.now()),e}updateFromUI(){this.bindings.forEach((e=>e.updateFromUI()))}updateToUI(){var e,t;switch(this.bindings.forEach((e=>e.updateToUI())),this.state){case"created":this.element.classList.add("pui-adding"),this.element.hasAttribute("PUI-UNRENDERED")||(null!==(e=this.parentElement)&&void 0!==e?e:n.parentElement(this.element,this.parent)).insertBefore(this.element,null===(t=this.sibling)||void 0===t?void 0:t.nextSibling),this.attachResolve(),this.state="attaching";break;case"attaching":0===this.getAnimations(!1).length&&(this.element.classList.remove("pui-adding"),this.state="attached");break;case"attached":this.state="rendered"}}updateAtEvents(){this.bindings.forEach((e=>e.updateAtEvents()))}updateAnimations(e){for(var t,i;null!==(i="finished"===(null===(t=this.animationQueue[0])||void 0===t?void 0:t.state))&&void 0!==i&&i;)this.animationQueue.shift().destroy();for(let t=0;t<this.animationQueue.length;t++){const i=this.animationQueue[t];"pending"===i.state&&(i.isBlocked(e)||(i.state="playing",i.startTime=e,i.animation=i.element.animate(i.keyframes,i.options),i.finished=i.animation.finished,i.finished.then((()=>{i.state="finished",this.updateAnimations(performance.now())}))))}}updateMove(){switch(this.moved){case"queue":this.moved="move";break;case"move":0===this.getAnimations().length&&(n.parentElement(this.element,this.parent).insertBefore(this.element,this.sibling.nextSibling),this.element.classList.remove("pui-moving"),this.moved="",this.sibling=void 0)}this.bindings.forEach((e=>e.updateMove()))}getAnimations(e=!0){return this.element.getAnimations({subtree:e}).filter((e=>"finished"!==e.playState&&e.effect.getTiming().iterations!==1/0)).map((e=>e.finished))}}class s{constructor(){this.fromUI=!1,this.toUI=!0,this.atEvent=!1,this.oneTime=!1,this.views=[],this.firstUpdate=!0,this.events=[],this.triggerAtEvent=e=>{this.events.push(e)},this.id=++n.id}get element(){return null==this.$element&&(this.$element="string"==typeof this.selector?this.context.querySelector(this.selector):this.selector),this.$element}set element(e){this.$element=e}static create(e){var t,i,l,r,o,a,h,u,d,m,p;const c=new s,v=null!==(i=null===(t=e.property)||void 0===t?void 0:t.split(":"))&&void 0!==i?i:[],f=v.shift();return c.object="$model"in e.object?e.object:{$model:e.object},c.property=f,c.arguments=v,c.context=null!==(l=e.context)&&void 0!==l?l:document,c.selector=e.selector,c.attribute=null!==(r=e.attribute)&&void 0!==r?r:"innerText",c.value=null!==(o=e.value)&&void 0!==o?o:c.value,c.template=null!==(a=e.template)&&void 0!==a?a:c.template,c.fromUI=null!==(h=e.fromUI)&&void 0!==h?h:c.fromUI,c.toUI=null!==(u=e.toUI)&&void 0!==u?u:c.toUI,c.atEvent=null!==(d=e.atEvent)&&void 0!==d?d:c.atEvent,c.oneTime=null!==(m=e.oneTime)&&void 0!==m?m:c.oneTime,c.parent=null!==(p=e.parent)&&void 0!==p?p:n,c.addListener(),"boolean"!=typeof c.fromUI&&(c.fromUI=c.fromUI.bind(c)),"boolean"!=typeof c.toUI&&(c.toUI=c.toUI.bind(c)),c}destroy(){this.element=null,this.removeListener(),this.views.forEach((e=>e.destroy()))}unbind(){n.unbind(this)}addListener(){this.atEvent&&(this.toUI=!1,this.fromUI=!1,this.element.addEventListener(this.attribute,this.triggerAtEvent))}removeListener(){this.atEvent&&this.element.removeEventListener(this.attribute,this.triggerAtEvent)}updateFromUI(){if(!1===this.fromUI||this.firstUpdate)return this.firstUpdate=!1,void this.views.forEach((e=>e.updateFromUI()));const{target:e,property:t}=n.resolveProperty(this.element,this.attribute),i=e[t];if(i!==this.lastUIValue){let e=!0!==this.fromUI?this.fromUI(i,this.lastUIValue,this.property,this.object):i;if(this.lastUIValue=i,void 0!==e&&e!==this.lastValue){this.lastValue=e;const{target:t,property:i}=n.resolveProperty(this.object,this.property);"number"!==n.resolveValue(this.object,this.property)||isNaN(e)||(e=+e),t[i]=e}else this.lastValue=e}this.views.forEach((e=>e.updateFromUI()))}updateToUI(){var e,t,s,l,r,o,a,h,u,d;if(!1===this.toUI)return void this.views.forEach((e=>e.updateToUI()));let m=n.resolveValue(this.object,this.property),p=!1;if(null!=this.template){if(this.template instanceof HTMLElement)if("boolean"==typeof this.attribute){if(m=!1!==(null!=m&&m),m!==this.lastValue){const e=!0!==this.toUI?this.toUI(m,this.lastValue,this.property,this.object):m;if(void 0!==e&&e!==this.lastUIValue){if(e===this.attribute)this.views.push(i.create(this.element.parentElement,this.template.cloneNode(!0),this.object,{parent:this,prepare:!1,sibling:this.element}));else{const e=this.views.pop();null==e||e.destroy()}this.lastValue=m,this.lastUIValue=e}}}else{null==m&&(m=[]);const c=this.arguments[0],v=null!==(e=this.lastValue)&&void 0!==e?e:[];if(m.length!==v.length)p=!0;else for(let e=0,i=m.length;e<i;e++){let i,l;if(null==c?(i=m[e],l=v[e]):(i=n.resolveValue(null!==(t=m[e])&&void 0!==t?t:{},c),l=n.resolveValue(null!==(s=v[e])&&void 0!==s?s:{},c)),i!==l){p=!0;break}}if(!p)return this.views.forEach((e=>e.updateToUI())),void(this.oneTime&&this.oneTimeDone());const f=!0!==this.toUI?this.toUI(m,v,this.property,this.object):m;if(null==f)return this.views.forEach((e=>e.updateToUI())),void(this.oneTime&&this.oneTimeDone());const b=null!==(l=this.lastUIValue)&&void 0!==l?l:[];let g=0;for(let e=0,t=f.length,i=0;e<t;e++,i++){let t,s;if(null==c?(t=f[e],s=b[i]):(t=n.resolveValue(null!==(r=f[e])&&void 0!==r?r:{},c),s=n.resolveValue(null!==(o=b[i])&&void 0!==o?o:{},c)),t!==s)break;g++}if(g===f.length&&f.length===b.length)return this.views.forEach((e=>e.updateToUI())),void(this.oneTime&&this.oneTimeDone());const y=this.views.splice(0,g);let U=y[y.length-1];for(let e=g,t=f.length,s=g;e<t;e++,s++){const t=f[e];"string"!=typeof t&&(t.$index=e);const s=this.views.shift();if(null==s){const e={$model:{[this.attribute]:t},$parent:this.object},s=i.create(this.element.parentElement,this.template.cloneNode(!0),e,{parent:this,prepare:!1,sibling:null!==(a=null==U?void 0:U.element)&&void 0!==a?a:this.element});y.push(s),U=s;continue}const l=null==c?t:n.resolveValue(null!=t?t:{},c),r=null==s?void 0:s.model.$model[this.attribute],o=null==c?r:n.resolveValue(null!=r?r:{},c);if(l===o){y.push(s),s.move(null!==(h=null==U?void 0:U.element)&&void 0!==h?h:this.element),U=s;continue}if(!f.slice(e).map((e=>null==c?e:n.resolveValue(null!=e?e:{},c))).includes(o)){s.destroy(),e--,U=s;continue}this.views.unshift(s);let m=!1;for(let e=0,t=this.views.length;e<t;e++){const t=this.views[e],i=null==t?void 0:t.model.$model[this.attribute];if(l===(null==c?i:n.resolveValue(null!=i?i:{},c))){y.push(...this.views.splice(e,1)),t.move(null!==(u=null==U?void 0:U.element)&&void 0!==u?u:this.element),m=!0,U=t;break}}if(!m){const e={$model:{[this.attribute]:t},$parent:this.object},s=i.create(this.element.parentElement,this.template.cloneNode(!0),e,{parent:this,prepare:!1,sibling:null!==(d=null==U?void 0:U.element)&&void 0!==d?d:this.element});y.push(s),U=s}}this.views.forEach((e=>e.destroy())),this.views=y,this.lastValue=[...m],this.lastUIValue=[...f]}else if(null==this.value){const e=n.resolveValue(this.object,this.attribute),t=e.template,i=null==m?e:e.create(m);this.value=null!=m?m:e,this.views.push(n.create(this.element.parentElement,t,i,{parent:this,prepare:!0,sibling:this.element}))}}else if(m!==this.lastValue){const e=!0!==this.toUI?this.toUI(m,this.lastValue,this.property,this.object):m;if(void 0!==e&&e!==this.lastUIValue){const{target:t,property:i}=n.resolveProperty(this.element,this.attribute);t[i]=e,this.lastValue=m,this.lastUIValue=e}}this.views.forEach((e=>e.updateToUI())),this.oneTime&&this.oneTimeDone()}oneTimeDone(){this.toUI=!1,this.fromUI=!1}updateAtEvents(){let e=this.events.shift();for(;null!=e;)n.resolveValue(this.object,this.property)(e,this.object.$model,this.element,this.attribute,this.object),e=this.events.shift();this.views.forEach((e=>e.updateAtEvents()))}updateMove(){this.views.forEach((e=>e.updateMove()))}}class n{static initialize(e=!0){if(n.initialized=!0,!1!==e)if(!0!==e)setInterval((()=>n.update()),1e3/e);else{const e=()=>{n.update(),requestAnimationFrame(e)};requestAnimationFrame(e)}}static create(e,t,s={},l={parent:null,prepare:!0,sibling:null}){var r;if("string"==typeof t){const i=null!==(r=null==e?void 0:e.ownerDocument)&&void 0!==r?r:document;t.startsWith("#")&&(t=i.querySelector(t).innerHTML);const s=i.createElement("div");s.innerHTML=l.prepare?n.prepare(t):t,t=s.firstElementChild}const o=i.create(e,t,s,l);return o.parent===n&&n.views.push(o),n.initialized||n.initialize(),o}static play(e,t){return"string"==typeof e?(e=this.globals.animations.find((t=>t.name===e)).clone()).play(t):e.play()}static parse(e,t,i,s){var l,r,o;const a=[];if(3===e.nodeType){let l=e.textContent,r=l.match(n.regexValue);for(;null!=r;){const o=r[1];let h=r[2];l=r[3];let u=!1;h.startsWith("|")&&(u=!0,h=h.slice(1).trimStart());let d=e.cloneNode();e.textContent=o,n.parentElement(e,s).insertBefore(d,e.nextSibling),a.push(n.bind({selector:d,attribute:"textContent",object:t,property:h,parent:i,oneTime:u})),d=(e=d).cloneNode(),d.textContent=l,n.parentElement(e,s).insertBefore(d,e.nextSibling),e=d,r=l.match(n.regexValue)}}else{if(a.push(...Object.keys(null!==(l=e.attributes)&&void 0!==l?l:[]).reverse().map((l=>{const r=[];if(e instanceof Comment)return[];const o=e.attributes[l];if(o.name.startsWith("pui.")){const l=o.value.match(n.regexAttribute);let r,a,[h,u,d,m,p]=l,c=!1;if("@"!==d){const i=u.match(/^'(.*?)'$/);if(null!=i)r=i[1],e.setAttribute("value",r),u="option"===e.nodeName.toLowerCase()?"selected":"checked",m=e=>e?r:void 0,d=e=>e===r;else if(""===u){if(">"===m){const{target:i,property:s}=n.resolveProperty(t,p);return i[s]=e,[]}{const t=document.createComment(o.name);n.parentNode(e,s).insertBefore(t,e),n.parentNode(e,s).removeChild(e),e.removeAttribute(o.name),a=e,e=t,u="="===d,d=!0,"|"===m&&(c=!0)}}else if("="===m&&"="===d){const t=n.parentNode(e,s);if(8!==t.nodeType){const i=document.createComment(o.name);t.insertBefore(i,e),t.removeChild(e),e.removeAttribute(o.name),e=i}else e=t;a=u,c=!0,d=!0}else if("*"===m){const t=document.createComment(o.name);n.parentNode(e,s).insertBefore(t,e),n.parentNode(e,s).removeChild(e),e.removeAttribute(o.name),a=e,e=t}else"|"===m?c=!0:"checked"!==u&&e.setAttribute(u,"")}return[n.bind({selector:e,attribute:u,value:r,object:t,property:p,template:a,toUI:"string"==typeof d?"<"===d:d,fromUI:"string"==typeof m?">"===m:m,atEvent:"@"===d,parent:i,oneTime:c})]}const a=[o.value];let h=0,u=a[h].match(n.regexValue);for(;null!=u;){let{before:s,property:l,after:d}=u.groups,m=!1;l.startsWith("|")&&(m=!0,l=l.slice(1).trimStart()),r.push(n.bind({selector:e,attribute:o.name,object:t,property:l,oneTime:m,toUI(t,i,s,l){if(this.oneTime){const e=a.indexOf(s);e>-1&&(a[e]=n.resolveValue(l,s),a[e-1]+=a[e]+a[e+1],a.splice(e,2))}const r=a.map(((e,t)=>t%2==0?e:n.resolveValue(l,e))).join("");return e.setAttribute(o.name,r),r},parent:i})),a[h++]=s,a[h++]=l,a[h]=d,u=a[h].match(n.regexValue)}return r})).flat()),e instanceof Comment)return a.filter((e=>null!=e.template||(e.unbind(),!1)));if(!n.leaveAttributes)for(let t=Object.keys(null!==(r=e.attributes)&&void 0!==r?r:[]).length-1;t>=0;t--){const i=e.attributes[Object.keys(null!==(o=e.attributes)&&void 0!==o?o:[])[t]];i.name.startsWith("pui.")&&e.removeAttribute(i.name)}a.push(...Array.from(e.childNodes).map((e=>n.parse(e,t,i,s))).flat())}return a}static bind(e){return s.create(e)}static unbind(e){if(e.destroy(),e.parent!==n){const t=e.parent.bindings,i=t.indexOf(e);i>-1&&t.splice(i,1)}}static update(){this.views.forEach((e=>e.updateFromUI())),this.views.forEach((e=>e.updateToUI())),this.views.forEach((e=>e.updateAtEvents()));const e=performance.now();[...this.views,this.globals].forEach((t=>t.updateAnimations(e))),this.views.forEach((e=>{e.updateMove()})),this.destroyed.forEach((e=>{switch(e.destroyed){case"queue":e.destroyed="destroy";break;case"destroy":{e.terminate();const t=this.destroyed.findIndex((t=>e===t));t>-1&&this.destroyed.splice(t,1)}}}))}static resolveProperty(e,t){const i=(t=t.replace("[",".").replace("]",".")).split(".").filter((e=>(null!=e?e:"").length>0));let s="$model"in e?e.$model:e;for(;i.length>1;)s=s[i.shift()];return{target:s,property:i[0]}}static resolveValue(e,t){let i=0;do{const{target:i,property:s}=n.resolveProperty(e,t);if(null!=i&&s in i)return i[s];e=e.$parent}while(null!=e&&i++<1e3)}static parentElement(e,t){const i=e.parentElement;if(null!=i)return i;for(;null!=t&&(null==t.element||t.element===e);)t=t.parent;return null==t?void 0:t.element}static parentNode(e,t){const i=e.parentNode;if(null!=i)return i;for(;null!=t&&(null==t.element||t.element===e);)t=t.parent;return null==t?void 0:t.element}static prepare(e){let t=e;e="";let i=t.match(n.regexReplace);for(;null!=i;){const[s,l,r,o]=i;r.match(/\S\s*===/)?e+=`${l.trimEnd()}br PUI-UNRENDERED PUI.${n.bindingCounter++}="${r}"`:e+=`${l} PUI.${n.bindingCounter++}="${r}" `,t=o,i=t.match(n.regexReplace)}return e+t}}n.initialized=!1,n.id=0,n.views=[],n.destroyed=[],n.globals=new i,n.leaveAttributes=!1,n.regexReplace=/([\S\s]*?)\$\{([^}]*?[<=@!]=[*=>|][^}]*?)\}([\S\s]*)/m,n.regexAttribute=/^\s*(\S*?)\s*([<=@!])=([*=>|])\s*(\S*?)\s*$/,n.regexValue=/(?<before>[\S\s]*?)\$\{\s*(?<property>[\s\S]*?)\s*\}(?<after>[\S\s]*)/m,n.bindingCounter=0;var l=exports;for(var r in t)l[r]=t[r];t.__esModule&&Object.defineProperty(l,"__esModule",{value:!0})})();

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/states/game.ts":
/*!****************************!*\
  !*** ./src/states/game.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayState": () => (/* binding */ PlayState)
/* harmony export */ });
/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameState */ "./src/states/gameState.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var physicsInterval = 0.24;
var renderInterval = 0.1667;
var PlayState = /** @class */ (function (_super) {
    __extends(PlayState, _super);
    function PlayState() {
        var _this = _super.call(this, "game") || this;
        _this.startime = undefined;
        _this.lasttime = undefined;
        _this.lastPhysicsUpdate = 0;
        _this.lastRenderUpdate = 0;
        _this.FixedStepEngine = function (timestamp) {
            if (_this.startime == undefined) {
                _this.startime = timestamp;
                _this.lasttime = timestamp;
            }
            var deltaTime = (timestamp - _this.lasttime) / 1000;
            _this.lastPhysicsUpdate += deltaTime;
            _this.lastRenderUpdate += deltaTime;
            while (_this.lastPhysicsUpdate >= physicsInterval) {
                //update physics here
                console.log("updating physics");
                _this.lastPhysicsUpdate -= physicsInterval;
            }
            while (_this.lastRenderUpdate >= renderInterval) {
                //update rendering here
                console.log("updating rendering");
                _this.lastRenderUpdate -= renderInterval;
            }
            requestAnimationFrame(_this.FixedStepEngine);
        };
        return _this;
    }
    PlayState.prototype.enter = function (_previous) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        console.log("entering game");
        var model = params[0];
        model.gamestate = "game";
        console.log(this);
        //make RAF call to the engine
        requestAnimationFrame(this.FixedStepEngine);
    };
    PlayState.prototype.exit = function (_next) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var model;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("exiting game");
                        model = params[0];
                        model.gamestate = "transition";
                        //mockup timer to change states
                        return [4 /*yield*/, this.wait(2000)];
                    case 1:
                        //mockup timer to change states
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PlayState.prototype.wait = function (ms) {
        return new Promise(function (resolve) {
            return setTimeout(function () {
                resolve();
            }, ms);
        });
    };
    PlayState.template = "\n  <div class=\"content\" ${===isGame}>i am in ${gamestate}</div>\n  ";
    return PlayState;
}(_gameState__WEBPACK_IMPORTED_MODULE_0__.State));



/***/ }),

/***/ "./src/states/gameState.ts":
/*!*********************************!*\
  !*** ./src/states/gameState.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameState": () => (/* binding */ GameState),
/* harmony export */   "State": () => (/* binding */ State)
/* harmony export */ });
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var StateMachine = /** @class */ (function () {
    function StateMachine() {
        this.states = {};
        this.current = {};
    }
    StateMachine.prototype.create = function () {
        var _this = this;
        var entries = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            entries[_i] = arguments[_i];
        }
        var created = [];
        var names = [];
        var _loop_1 = function (entry) {
            if (typeof entry === "string") {
                names.push(entry);
                return "continue";
            }
            if (names.length > 0) {
                created.push.apply(created, names.map(function (name) {
                    var state = new entry(name);
                    if (_this.states[state.machine] == null) {
                        _this.states[state.machine] = {};
                    }
                    _this.states[state.machine][state.name] = state;
                    return state;
                }));
                names = [];
                return "continue";
            }
            var state = new entry();
            if (this_1.states[state.machine] == null) {
                this_1.states[state.machine] = {};
            }
            this_1.states[state.machine][state.name] = state;
            created.push(state);
        };
        var this_1 = this;
        for (var _a = 0, entries_1 = entries; _a < entries_1.length; _a++) {
            var entry = entries_1[_a];
            _loop_1(entry);
        }
        return created;
    };
    StateMachine.prototype.set = function (state, machine) {
        var _a;
        var _this = this;
        if (machine === void 0) { machine = "default"; }
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        var next = typeof state === "string" ? GameState.states[machine][state] : state;
        var leaving;
        var entering;
        if (this.current[machine] != null) {
            leaving = (_a = this.current[machine]).exit.apply(_a, __spreadArray([next], params, false));
        }
        if (leaving instanceof Promise) {
            return leaving.then(function () {
                if (next != null) {
                    entering = next.enter.apply(next, __spreadArray([_this.current[machine]], params, false));
                }
                if (entering instanceof Promise) {
                    return entering.then(function () {
                        _this.current[machine] = next;
                    });
                }
                _this.current[machine] = next;
            });
        }
        if (next != null) {
            entering = next.enter.apply(next, __spreadArray([this.current[machine]], params, false));
        }
        if (entering instanceof Promise) {
            return entering.then(function () {
                _this.current[machine] = next;
            });
        }
        this.current[machine] = next;
    };
    StateMachine.prototype.get = function (machine) {
        if (machine === void 0) { machine = "default"; }
        return { state: this.current[machine] };
    };
    return StateMachine;
}());
var GameState = new StateMachine();
var State = /** @class */ (function () {
    function State(name, machine) {
        if (machine === void 0) { machine = "default"; }
        this.name = name;
        this.machine = machine;
    }
    State.prototype.enter = function (_previous) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
    };
    State.prototype.exit = function (_next) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
    };
    return State;
}());



/***/ }),

/***/ "./src/states/menu.ts":
/*!****************************!*\
  !*** ./src/states/menu.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuState": () => (/* binding */ MenuState)
/* harmony export */ });
/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameState */ "./src/states/gameState.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var MenuState = /** @class */ (function (_super) {
    __extends(MenuState, _super);
    function MenuState() {
        return _super.call(this, "menu") || this;
    }
    MenuState.prototype.enter = function (_previous) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        console.log("entering menu");
        var model = params[0];
        model.gamestate = "menu";
        //mockup timer to change states
        setTimeout(function () {
            _gameState__WEBPACK_IMPORTED_MODULE_0__.GameState.set("game", "default", model);
        }, 5000);
    };
    MenuState.prototype.exit = function (_next) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var model;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("exiting menu");
                        model = params[0];
                        model.gamestate = "transition";
                        //mockup timer to change states
                        return [4 /*yield*/, this.wait(2000)];
                    case 1:
                        //mockup timer to change states
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuState.prototype.wait = function (ms) {
        return new Promise(function (resolve) {
            return setTimeout(function () {
                resolve();
            }, ms);
        });
    };
    MenuState.template = "\n  <div class=\"content menu\" ${===isMenu}>\n    <span class=\"title\">ASTEROIDS PLUS 2.0</span>  \n    <span class=\"deskopStart\" ${!==isMobile}>PRESS ANY KEY TO BEGIN</span>\n    <span class=\"mobileStart\" ${===isMobile}>TAP SCREEN TO BEGIN</span>\n    \n  </div>\n  ";
    return MenuState;
}(_gameState__WEBPACK_IMPORTED_MODULE_0__.State));



/***/ }),

/***/ "./src/spacebg.jpg":
/*!*************************!*\
  !*** ./src/spacebg.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "104e60735cf50e863d63.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameStates": () => (/* binding */ GameStates),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "model": () => (/* binding */ model)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var peasy_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! peasy-ui */ "./node_modules/peasy-ui/dist/index.js");
/* harmony import */ var peasy_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(peasy_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _states_gameState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./states/gameState */ "./src/states/gameState.ts");
/* harmony import */ var _states_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./states/menu */ "./src/states/menu.ts");
/* harmony import */ var _states_game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./states/game */ "./src/states/game.ts");





var DeviceType;
(function (DeviceType) {
    DeviceType["IOS"] = "ios:";
    DeviceType["ANDROID"] = "android";
    DeviceType["DESKTOP"] = "desktop";
})(DeviceType || (DeviceType = {}));
var GameStates;
(function (GameStates) {
    GameStates["MENU"] = "menu";
    GameStates["GAME"] = "game";
    GameStates["SETTINGS"] = "settings";
    GameStates["ABOUT"] = "about";
    GameStates["TRANSITION"] = "transition";
})(GameStates || (GameStates = {}));
var model = {
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
};
var template = "\n<div id=\"game\" class=\"gameContainer\">\n  <div class=\"diagtext\">\n    <div class=\"diagtext\">Device Type: ${deviceType}  screen size: Width: ${screenwidth}  Height:  ${screenheight} </div>\n    ".concat(_states_game__WEBPACK_IMPORTED_MODULE_4__.PlayState.template, "\n    ").concat(_states_menu__WEBPACK_IMPORTED_MODULE_3__.MenuState.template, "\n    \n  </div>\n</div>");
// we need to sniff out Android and iOS
// so that we can hide the address bar in
// our resize function
var UA = navigator.userAgent.toLowerCase();
if (UA.indexOf("android") > -1)
    model.deviceType = DeviceType.ANDROID;
else if (UA.indexOf("iphone") > -1)
    model.deviceType = DeviceType.IOS;
else
    model.deviceType = DeviceType.DESKTOP;
peasy_ui__WEBPACK_IMPORTED_MODULE_1__.UI.create(document.body, template, model);
peasy_ui__WEBPACK_IMPORTED_MODULE_1__.UI.initialize(1000 / 60);
var resizeScreen = function (m) {
    if (m === void 0) { m = model; }
    m.screenwidth = window.innerWidth;
    m.screenheight = window.innerHeight;
};
var init = function (m) {
    if (m === void 0) { m = model; }
    resizeScreen(m);
    _states_gameState__WEBPACK_IMPORTED_MODULE_2__.GameState.create(_states_menu__WEBPACK_IMPORTED_MODULE_3__.MenuState, _states_game__WEBPACK_IMPORTED_MODULE_4__.PlayState);
    _states_gameState__WEBPACK_IMPORTED_MODULE_2__.GameState.set("menu", "default", model);
};
function loadEventHandler(e) {
    init();
}
function resizeEventHandler(e) {
    resizeScreen();
}
window.addEventListener("load", loadEventHandler, false);
window.addEventListener("resize", resizeEventHandler, false);
//TODO add in touch listener to enable touch controls

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qyw0REFBYSxDQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDMUMsQ0FBQyxDQUFDO0FBRUYsU0FBUyxnQkFBZ0IsQ0FBQyxDQUFNO0lBQzlCLElBQUksRUFBRSxDQUFDO0FBQ1QsQ0FBQztBQUNELFNBQVMsa0JBQWtCLENBQUMsQ0FBTTtJQUNoQyxZQUFZLEVBQUUsQ0FBQztBQUNqQixDQUFDO0FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN6RCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRTdELHFEQUFxRCIsInNvdXJjZXMiOlsid2VicGFjazovL2FzdGVyb2lkcy1yZXZpc2l0ZWQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2FzdGVyb2lkcy1yZXZpc2l0ZWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FzdGVyb2lkcy1yZXZpc2l0ZWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2FzdGVyb2lkcy1yZXZpc2l0ZWQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9hc3Rlcm9pZHMtcmV2aXNpdGVkLy4vbm9kZV9tb2R1bGVzL3BlYXN5LXVpL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXN0ZXJvaWRzLXJldmlzaXRlZC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9hc3Rlcm9pZHMtcmV2aXNpdGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2FzdGVyb2lkcy1yZXZpc2l0ZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2FzdGVyb2lkcy1yZXZpc2l0ZWQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYXN0ZXJvaWRzLXJldmlzaXRlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9hc3Rlcm9pZHMtcmV2aXNpdGVkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYXN0ZXJvaWRzLXJldmlzaXRlZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2FzdGVyb2lkcy1yZXZpc2l0ZWQvLi9zcmMvc3RhdGVzL2dhbWUudHMiLCJ3ZWJwYWNrOi8vYXN0ZXJvaWRzLXJldmlzaXRlZC8uL3NyYy9zdGF0ZXMvZ2FtZVN0YXRlLnRzIiwid2VicGFjazovL2FzdGVyb2lkcy1yZXZpc2l0ZWQvLi9zcmMvc3RhdGVzL21lbnUudHMiLCJ3ZWJwYWNrOi8vYXN0ZXJvaWRzLXJldmlzaXRlZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hc3Rlcm9pZHMtcmV2aXNpdGVkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FzdGVyb2lkcy1yZXZpc2l0ZWQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FzdGVyb2lkcy1yZXZpc2l0ZWQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9hc3Rlcm9pZHMtcmV2aXNpdGVkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYXN0ZXJvaWRzLXJldmlzaXRlZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FzdGVyb2lkcy1yZXZpc2l0ZWQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYXN0ZXJvaWRzLXJldmlzaXRlZC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9hc3Rlcm9pZHMtcmV2aXNpdGVkL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9hc3Rlcm9pZHMtcmV2aXNpdGVkLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3NwYWNlYmcuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypzdHlsZS5jc3MqL1xcclxcblxcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogaU9TIFNhZmFyaSAqL1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXFxyXFxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEtvbnF1ZXJvciBIVE1MICovXFxyXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBPbGQgdmVyc2lvbnMgb2YgRmlyZWZveCAqL1xcclxcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTsgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseSBzdXBwb3J0ZWQgYnkgQ2hyb21lLCBFZGdlLCBPcGVyYSBhbmQgRmlyZWZveCAqL1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTsgLyogcHJldmVudCB1c2VyIHNjYWxpbmcgb24gaU9TICovXFxyXFxuICB0b3VjaC1hY3Rpb246IHBhbi15OyAvKiBwcmV2ZW50IHVzZXIgc2NhbGluZyAqL1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWd0ZXh0IHtcXHJcXG4gIGNvbG9yOiAjZGRkZGRkO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZUNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDBweDtcXHJcXG4gIGxlZnQ6IDBweDtcXHJcXG4gIHdpZHRoOiAxMDAlOyAvKnZhcigtLXNjcmVlbl93aWR0aCk7Ki9cXHJcXG4gIGhlaWdodDogMTAwJTsgLyp2YXIoLS1zY3JlZW5faGVpZ2h0KTsqL1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50IHtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMS43NXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LnB1aS1hZGRpbmcge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRlbnQucHVpLXJlbW92aW5nIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgd2lkdGg6IDgwJTtcXHJcXG4gIGhlaWdodDogNzAlO1xcclxcbiAgYm9yZGVyOiAzcHggZGFya2dyYXkgc29saWQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAzJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDN2dztcXHJcXG4gIGNvbG9yOiBkYXJrZ3JheTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMjAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVza29wU3RhcnQge1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDJ2dztcXHJcXG4gIGNvbG9yOiBkYXJrZ3JheTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNzUlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9iaWxlU3RhcnQge1xcclxcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDJ2dztcXHJcXG4gIGNvbG9yOiBkYXJrZ3JheTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNzUlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLFlBQVk7O0FBRVo7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0Qix5Q0FBeUM7RUFDekMsMkJBQTJCLEVBQUUsZUFBZTtFQUM1Qyx5QkFBeUIsRUFBRSxXQUFXO0VBQ3RDLHdCQUF3QixFQUFFLG1CQUFtQjtFQUM3QyxzQkFBc0IsRUFBRSw0QkFBNEI7RUFDcEQscUJBQXFCLEVBQUUsMkJBQTJCO0VBQ2xELGlCQUFpQixFQUFFLGlGQUFpRjtBQUN0Rzs7QUFFQTtFQUNFLDhCQUE4QixFQUFFLGdDQUFnQztFQUNoRSxtQkFBbUIsRUFBRSx5QkFBeUI7QUFDaEQ7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFXLEVBQUUsdUJBQXVCO0VBQ3BDLFlBQVksRUFBRSx3QkFBd0I7RUFDdEMseURBQXNDO0VBQ3RDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCwyQkFBMkI7QUFDN0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLypzdHlsZS5jc3MqL1xcclxcblxcclxcbioge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTsgLyogaU9TIFNhZmFyaSAqL1xcclxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXFxyXFxuICAta2h0bWwtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEtvbnF1ZXJvciBIVE1MICovXFxyXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBPbGQgdmVyc2lvbnMgb2YgRmlyZWZveCAqL1xcclxcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTsgLyogTm9uLXByZWZpeGVkIHZlcnNpb24sIGN1cnJlbnRseSBzdXBwb3J0ZWQgYnkgQ2hyb21lLCBFZGdlLCBPcGVyYSBhbmQgRmlyZWZveCAqL1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTsgLyogcHJldmVudCB1c2VyIHNjYWxpbmcgb24gaU9TICovXFxyXFxuICB0b3VjaC1hY3Rpb246IHBhbi15OyAvKiBwcmV2ZW50IHVzZXIgc2NhbGluZyAqL1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmRpYWd0ZXh0IHtcXHJcXG4gIGNvbG9yOiAjZGRkZGRkO1xcclxcbn1cXHJcXG5cXHJcXG4uZ2FtZUNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0b3A6IDBweDtcXHJcXG4gIGxlZnQ6IDBweDtcXHJcXG4gIHdpZHRoOiAxMDAlOyAvKnZhcigtLXNjcmVlbl93aWR0aCk7Ki9cXHJcXG4gIGhlaWdodDogMTAwJTsgLyp2YXIoLS1zY3JlZW5faGVpZ2h0KTsqL1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL3NwYWNlYmcuanBnXFxcIik7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudCB7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEuNzVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGVudC5wdWktYWRkaW5nIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxufVxcclxcblxcclxcbi5jb250ZW50LnB1aS1yZW1vdmluZyB7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHdpZHRoOiA4MCU7XFxyXFxuICBoZWlnaHQ6IDcwJTtcXHJcXG4gIGJvcmRlcjogM3B4IGRhcmtncmF5IHNvbGlkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMyU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAzdnc7XFxyXFxuICBjb2xvcjogZGFya2dyYXk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDIwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2tvcFN0YXJ0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAydnc7XFxyXFxuICBjb2xvcjogZGFya2dyYXk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDc1JTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vYmlsZVN0YXJ0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC1zaXplOiAydnc7XFxyXFxuICBjb2xvcjogZGFya2dyYXk7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDc1JTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiKCgpPT57XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9e2Q6KHQsaSk9Pntmb3IodmFyIHMgaW4gaSllLm8oaSxzKSYmIWUubyh0LHMpJiZPYmplY3QuZGVmaW5lUHJvcGVydHkodCxzLHtlbnVtZXJhYmxlOiEwLGdldDppW3NdfSl9LG86KGUsdCk9Pk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpLHI6ZT0+e1widW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZyYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsU3ltYm9sLnRvU3RyaW5nVGFnLHt2YWx1ZTpcIk1vZHVsZVwifSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSl9fSx0PXt9O2Uucih0KSxlLmQodCx7VUk6KCk9Pm4sVUlWaWV3OigpPT5pfSk7Y2xhc3MgaXtjb25zdHJ1Y3Rvcigpe3RoaXMuc3RhdGU9XCJjcmVhdGVkXCIsdGhpcy5iaW5kaW5ncz1bXSx0aGlzLmFuaW1hdGlvbnM9W10sdGhpcy5hbmltYXRpb25RdWV1ZT1bXSx0aGlzLmRlc3Ryb3llZD1cIlwiLHRoaXMubW92ZWQ9XCJcIn1zdGF0aWMgY3JlYXRlKGUsdCxzPXt9LGw9e3BhcmVudDpudWxsLHByZXBhcmU6ITAsc2libGluZzpudWxsfSl7dmFyIHI7Y29uc3Qgbz1uZXcgaTtyZXR1cm4gby5tb2RlbD1zLG8uZWxlbWVudD10LG8uYmluZGluZ3MucHVzaCguLi5uLnBhcnNlKG8uZWxlbWVudCxzLG8sbC5wYXJlbnQpKSxvLnBhcmVudEVsZW1lbnQ9ZSxvLnNpYmxpbmc9bC5zaWJsaW5nLG8ucGFyZW50PW51bGwhPT0ocj1sLnBhcmVudCkmJnZvaWQgMCE9PXI/cjpuLG8uYXR0YWNoZWQ9bmV3IFByb21pc2UoKGU9PntvLmF0dGFjaFJlc29sdmU9ZX0pKSxvfWRlc3Ryb3koKXt0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInB1aS1yZW1vdmluZ1wiKSx0aGlzLmRlc3Ryb3llZD1cInF1ZXVlXCIsbi5kZXN0cm95ZWQucHVzaCh0aGlzKX10ZXJtaW5hdGUoKXtQcm9taXNlLmFsbCh0aGlzLmdldEFuaW1hdGlvbnMoKSkudGhlbigoKCk9Pnt2YXIgZTtudWxsPT09KGU9dGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQpfHx2b2lkIDA9PT1lfHxlLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCksdGhpcy5iaW5kaW5ncy5mb3JFYWNoKChlPT5lLnVuYmluZCgpKSk7Y29uc3QgdD10aGlzLnBhcmVudC52aWV3cy5maW5kSW5kZXgoKGU9PmU9PT10aGlzKSk7dD4tMSYmdGhpcy5wYXJlbnQudmlld3Muc3BsaWNlKHQsMSl9KSksdGhpcy5kZXN0cm95ZWQ9XCJkZXN0cm95ZWRcIn1tb3ZlKGUpe3RoaXMubW92ZWQ9XCJxdWV1ZVwiLHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHVpLW1vdmluZ1wiKSx0aGlzLnNpYmxpbmc9ZX1wbGF5KGUsdCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPXRoaXMuYW5pbWF0aW9ucy5maW5kKCh0PT50Lm5hbWU9PT1lKSkuY2xvbmUoKSksZS5lbGVtZW50PXQsZS5zdGF0ZT1cInBlbmRpbmdcIix0aGlzLmFuaW1hdGlvblF1ZXVlLnB1c2goZSksdGhpcy51cGRhdGVBbmltYXRpb25zKHBlcmZvcm1hbmNlLm5vdygpKSxlfXVwZGF0ZUZyb21VSSgpe3RoaXMuYmluZGluZ3MuZm9yRWFjaCgoZT0+ZS51cGRhdGVGcm9tVUkoKSkpfXVwZGF0ZVRvVUkoKXt2YXIgZSx0O3N3aXRjaCh0aGlzLmJpbmRpbmdzLmZvckVhY2goKGU9PmUudXBkYXRlVG9VSSgpKSksdGhpcy5zdGF0ZSl7Y2FzZVwiY3JlYXRlZFwiOnRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwicHVpLWFkZGluZ1wiKSx0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKFwiUFVJLVVOUkVOREVSRURcIil8fChudWxsIT09KGU9dGhpcy5wYXJlbnRFbGVtZW50KSYmdm9pZCAwIT09ZT9lOm4ucGFyZW50RWxlbWVudCh0aGlzLmVsZW1lbnQsdGhpcy5wYXJlbnQpKS5pbnNlcnRCZWZvcmUodGhpcy5lbGVtZW50LG51bGw9PT0odD10aGlzLnNpYmxpbmcpfHx2b2lkIDA9PT10P3ZvaWQgMDp0Lm5leHRTaWJsaW5nKSx0aGlzLmF0dGFjaFJlc29sdmUoKSx0aGlzLnN0YXRlPVwiYXR0YWNoaW5nXCI7YnJlYWs7Y2FzZVwiYXR0YWNoaW5nXCI6MD09PXRoaXMuZ2V0QW5pbWF0aW9ucyghMSkubGVuZ3RoJiYodGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJwdWktYWRkaW5nXCIpLHRoaXMuc3RhdGU9XCJhdHRhY2hlZFwiKTticmVhaztjYXNlXCJhdHRhY2hlZFwiOnRoaXMuc3RhdGU9XCJyZW5kZXJlZFwifX11cGRhdGVBdEV2ZW50cygpe3RoaXMuYmluZGluZ3MuZm9yRWFjaCgoZT0+ZS51cGRhdGVBdEV2ZW50cygpKSl9dXBkYXRlQW5pbWF0aW9ucyhlKXtmb3IodmFyIHQsaTtudWxsIT09KGk9XCJmaW5pc2hlZFwiPT09KG51bGw9PT0odD10aGlzLmFuaW1hdGlvblF1ZXVlWzBdKXx8dm9pZCAwPT09dD92b2lkIDA6dC5zdGF0ZSkpJiZ2b2lkIDAhPT1pJiZpOyl0aGlzLmFuaW1hdGlvblF1ZXVlLnNoaWZ0KCkuZGVzdHJveSgpO2ZvcihsZXQgdD0wO3Q8dGhpcy5hbmltYXRpb25RdWV1ZS5sZW5ndGg7dCsrKXtjb25zdCBpPXRoaXMuYW5pbWF0aW9uUXVldWVbdF07XCJwZW5kaW5nXCI9PT1pLnN0YXRlJiYoaS5pc0Jsb2NrZWQoZSl8fChpLnN0YXRlPVwicGxheWluZ1wiLGkuc3RhcnRUaW1lPWUsaS5hbmltYXRpb249aS5lbGVtZW50LmFuaW1hdGUoaS5rZXlmcmFtZXMsaS5vcHRpb25zKSxpLmZpbmlzaGVkPWkuYW5pbWF0aW9uLmZpbmlzaGVkLGkuZmluaXNoZWQudGhlbigoKCk9PntpLnN0YXRlPVwiZmluaXNoZWRcIix0aGlzLnVwZGF0ZUFuaW1hdGlvbnMocGVyZm9ybWFuY2Uubm93KCkpfSkpKSl9fXVwZGF0ZU1vdmUoKXtzd2l0Y2godGhpcy5tb3ZlZCl7Y2FzZVwicXVldWVcIjp0aGlzLm1vdmVkPVwibW92ZVwiO2JyZWFrO2Nhc2VcIm1vdmVcIjowPT09dGhpcy5nZXRBbmltYXRpb25zKCkubGVuZ3RoJiYobi5wYXJlbnRFbGVtZW50KHRoaXMuZWxlbWVudCx0aGlzLnBhcmVudCkuaW5zZXJ0QmVmb3JlKHRoaXMuZWxlbWVudCx0aGlzLnNpYmxpbmcubmV4dFNpYmxpbmcpLHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwicHVpLW1vdmluZ1wiKSx0aGlzLm1vdmVkPVwiXCIsdGhpcy5zaWJsaW5nPXZvaWQgMCl9dGhpcy5iaW5kaW5ncy5mb3JFYWNoKChlPT5lLnVwZGF0ZU1vdmUoKSkpfWdldEFuaW1hdGlvbnMoZT0hMCl7cmV0dXJuIHRoaXMuZWxlbWVudC5nZXRBbmltYXRpb25zKHtzdWJ0cmVlOmV9KS5maWx0ZXIoKGU9PlwiZmluaXNoZWRcIiE9PWUucGxheVN0YXRlJiZlLmVmZmVjdC5nZXRUaW1pbmcoKS5pdGVyYXRpb25zIT09MS8wKSkubWFwKChlPT5lLmZpbmlzaGVkKSl9fWNsYXNzIHN7Y29uc3RydWN0b3IoKXt0aGlzLmZyb21VST0hMSx0aGlzLnRvVUk9ITAsdGhpcy5hdEV2ZW50PSExLHRoaXMub25lVGltZT0hMSx0aGlzLnZpZXdzPVtdLHRoaXMuZmlyc3RVcGRhdGU9ITAsdGhpcy5ldmVudHM9W10sdGhpcy50cmlnZ2VyQXRFdmVudD1lPT57dGhpcy5ldmVudHMucHVzaChlKX0sdGhpcy5pZD0rK24uaWR9Z2V0IGVsZW1lbnQoKXtyZXR1cm4gbnVsbD09dGhpcy4kZWxlbWVudCYmKHRoaXMuJGVsZW1lbnQ9XCJzdHJpbmdcIj09dHlwZW9mIHRoaXMuc2VsZWN0b3I/dGhpcy5jb250ZXh0LnF1ZXJ5U2VsZWN0b3IodGhpcy5zZWxlY3Rvcik6dGhpcy5zZWxlY3RvciksdGhpcy4kZWxlbWVudH1zZXQgZWxlbWVudChlKXt0aGlzLiRlbGVtZW50PWV9c3RhdGljIGNyZWF0ZShlKXt2YXIgdCxpLGwscixvLGEsaCx1LGQsbSxwO2NvbnN0IGM9bmV3IHMsdj1udWxsIT09KGk9bnVsbD09PSh0PWUucHJvcGVydHkpfHx2b2lkIDA9PT10P3ZvaWQgMDp0LnNwbGl0KFwiOlwiKSkmJnZvaWQgMCE9PWk/aTpbXSxmPXYuc2hpZnQoKTtyZXR1cm4gYy5vYmplY3Q9XCIkbW9kZWxcImluIGUub2JqZWN0P2Uub2JqZWN0OnskbW9kZWw6ZS5vYmplY3R9LGMucHJvcGVydHk9ZixjLmFyZ3VtZW50cz12LGMuY29udGV4dD1udWxsIT09KGw9ZS5jb250ZXh0KSYmdm9pZCAwIT09bD9sOmRvY3VtZW50LGMuc2VsZWN0b3I9ZS5zZWxlY3RvcixjLmF0dHJpYnV0ZT1udWxsIT09KHI9ZS5hdHRyaWJ1dGUpJiZ2b2lkIDAhPT1yP3I6XCJpbm5lclRleHRcIixjLnZhbHVlPW51bGwhPT0obz1lLnZhbHVlKSYmdm9pZCAwIT09bz9vOmMudmFsdWUsYy50ZW1wbGF0ZT1udWxsIT09KGE9ZS50ZW1wbGF0ZSkmJnZvaWQgMCE9PWE/YTpjLnRlbXBsYXRlLGMuZnJvbVVJPW51bGwhPT0oaD1lLmZyb21VSSkmJnZvaWQgMCE9PWg/aDpjLmZyb21VSSxjLnRvVUk9bnVsbCE9PSh1PWUudG9VSSkmJnZvaWQgMCE9PXU/dTpjLnRvVUksYy5hdEV2ZW50PW51bGwhPT0oZD1lLmF0RXZlbnQpJiZ2b2lkIDAhPT1kP2Q6Yy5hdEV2ZW50LGMub25lVGltZT1udWxsIT09KG09ZS5vbmVUaW1lKSYmdm9pZCAwIT09bT9tOmMub25lVGltZSxjLnBhcmVudD1udWxsIT09KHA9ZS5wYXJlbnQpJiZ2b2lkIDAhPT1wP3A6bixjLmFkZExpc3RlbmVyKCksXCJib29sZWFuXCIhPXR5cGVvZiBjLmZyb21VSSYmKGMuZnJvbVVJPWMuZnJvbVVJLmJpbmQoYykpLFwiYm9vbGVhblwiIT10eXBlb2YgYy50b1VJJiYoYy50b1VJPWMudG9VSS5iaW5kKGMpKSxjfWRlc3Ryb3koKXt0aGlzLmVsZW1lbnQ9bnVsbCx0aGlzLnJlbW92ZUxpc3RlbmVyKCksdGhpcy52aWV3cy5mb3JFYWNoKChlPT5lLmRlc3Ryb3koKSkpfXVuYmluZCgpe24udW5iaW5kKHRoaXMpfWFkZExpc3RlbmVyKCl7dGhpcy5hdEV2ZW50JiYodGhpcy50b1VJPSExLHRoaXMuZnJvbVVJPSExLHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMuYXR0cmlidXRlLHRoaXMudHJpZ2dlckF0RXZlbnQpKX1yZW1vdmVMaXN0ZW5lcigpe3RoaXMuYXRFdmVudCYmdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5hdHRyaWJ1dGUsdGhpcy50cmlnZ2VyQXRFdmVudCl9dXBkYXRlRnJvbVVJKCl7aWYoITE9PT10aGlzLmZyb21VSXx8dGhpcy5maXJzdFVwZGF0ZSlyZXR1cm4gdGhpcy5maXJzdFVwZGF0ZT0hMSx2b2lkIHRoaXMudmlld3MuZm9yRWFjaCgoZT0+ZS51cGRhdGVGcm9tVUkoKSkpO2NvbnN0e3RhcmdldDplLHByb3BlcnR5OnR9PW4ucmVzb2x2ZVByb3BlcnR5KHRoaXMuZWxlbWVudCx0aGlzLmF0dHJpYnV0ZSksaT1lW3RdO2lmKGkhPT10aGlzLmxhc3RVSVZhbHVlKXtsZXQgZT0hMCE9PXRoaXMuZnJvbVVJP3RoaXMuZnJvbVVJKGksdGhpcy5sYXN0VUlWYWx1ZSx0aGlzLnByb3BlcnR5LHRoaXMub2JqZWN0KTppO2lmKHRoaXMubGFzdFVJVmFsdWU9aSx2b2lkIDAhPT1lJiZlIT09dGhpcy5sYXN0VmFsdWUpe3RoaXMubGFzdFZhbHVlPWU7Y29uc3R7dGFyZ2V0OnQscHJvcGVydHk6aX09bi5yZXNvbHZlUHJvcGVydHkodGhpcy5vYmplY3QsdGhpcy5wcm9wZXJ0eSk7XCJudW1iZXJcIiE9PW4ucmVzb2x2ZVZhbHVlKHRoaXMub2JqZWN0LHRoaXMucHJvcGVydHkpfHxpc05hTihlKXx8KGU9K2UpLHRbaV09ZX1lbHNlIHRoaXMubGFzdFZhbHVlPWV9dGhpcy52aWV3cy5mb3JFYWNoKChlPT5lLnVwZGF0ZUZyb21VSSgpKSl9dXBkYXRlVG9VSSgpe3ZhciBlLHQscyxsLHIsbyxhLGgsdSxkO2lmKCExPT09dGhpcy50b1VJKXJldHVybiB2b2lkIHRoaXMudmlld3MuZm9yRWFjaCgoZT0+ZS51cGRhdGVUb1VJKCkpKTtsZXQgbT1uLnJlc29sdmVWYWx1ZSh0aGlzLm9iamVjdCx0aGlzLnByb3BlcnR5KSxwPSExO2lmKG51bGwhPXRoaXMudGVtcGxhdGUpe2lmKHRoaXMudGVtcGxhdGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudClpZihcImJvb2xlYW5cIj09dHlwZW9mIHRoaXMuYXR0cmlidXRlKXtpZihtPSExIT09KG51bGwhPW0mJm0pLG0hPT10aGlzLmxhc3RWYWx1ZSl7Y29uc3QgZT0hMCE9PXRoaXMudG9VST90aGlzLnRvVUkobSx0aGlzLmxhc3RWYWx1ZSx0aGlzLnByb3BlcnR5LHRoaXMub2JqZWN0KTptO2lmKHZvaWQgMCE9PWUmJmUhPT10aGlzLmxhc3RVSVZhbHVlKXtpZihlPT09dGhpcy5hdHRyaWJ1dGUpdGhpcy52aWV3cy5wdXNoKGkuY3JlYXRlKHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50LHRoaXMudGVtcGxhdGUuY2xvbmVOb2RlKCEwKSx0aGlzLm9iamVjdCx7cGFyZW50OnRoaXMscHJlcGFyZTohMSxzaWJsaW5nOnRoaXMuZWxlbWVudH0pKTtlbHNle2NvbnN0IGU9dGhpcy52aWV3cy5wb3AoKTtudWxsPT1lfHxlLmRlc3Ryb3koKX10aGlzLmxhc3RWYWx1ZT1tLHRoaXMubGFzdFVJVmFsdWU9ZX19fWVsc2V7bnVsbD09bSYmKG09W10pO2NvbnN0IGM9dGhpcy5hcmd1bWVudHNbMF0sdj1udWxsIT09KGU9dGhpcy5sYXN0VmFsdWUpJiZ2b2lkIDAhPT1lP2U6W107aWYobS5sZW5ndGghPT12Lmxlbmd0aClwPSEwO2Vsc2UgZm9yKGxldCBlPTAsaT1tLmxlbmd0aDtlPGk7ZSsrKXtsZXQgaSxsO2lmKG51bGw9PWM/KGk9bVtlXSxsPXZbZV0pOihpPW4ucmVzb2x2ZVZhbHVlKG51bGwhPT0odD1tW2VdKSYmdm9pZCAwIT09dD90Ont9LGMpLGw9bi5yZXNvbHZlVmFsdWUobnVsbCE9PShzPXZbZV0pJiZ2b2lkIDAhPT1zP3M6e30sYykpLGkhPT1sKXtwPSEwO2JyZWFrfX1pZighcClyZXR1cm4gdGhpcy52aWV3cy5mb3JFYWNoKChlPT5lLnVwZGF0ZVRvVUkoKSkpLHZvaWQodGhpcy5vbmVUaW1lJiZ0aGlzLm9uZVRpbWVEb25lKCkpO2NvbnN0IGY9ITAhPT10aGlzLnRvVUk/dGhpcy50b1VJKG0sdix0aGlzLnByb3BlcnR5LHRoaXMub2JqZWN0KTptO2lmKG51bGw9PWYpcmV0dXJuIHRoaXMudmlld3MuZm9yRWFjaCgoZT0+ZS51cGRhdGVUb1VJKCkpKSx2b2lkKHRoaXMub25lVGltZSYmdGhpcy5vbmVUaW1lRG9uZSgpKTtjb25zdCBiPW51bGwhPT0obD10aGlzLmxhc3RVSVZhbHVlKSYmdm9pZCAwIT09bD9sOltdO2xldCBnPTA7Zm9yKGxldCBlPTAsdD1mLmxlbmd0aCxpPTA7ZTx0O2UrKyxpKyspe2xldCB0LHM7aWYobnVsbD09Yz8odD1mW2VdLHM9YltpXSk6KHQ9bi5yZXNvbHZlVmFsdWUobnVsbCE9PShyPWZbZV0pJiZ2b2lkIDAhPT1yP3I6e30sYykscz1uLnJlc29sdmVWYWx1ZShudWxsIT09KG89YltpXSkmJnZvaWQgMCE9PW8/bzp7fSxjKSksdCE9PXMpYnJlYWs7ZysrfWlmKGc9PT1mLmxlbmd0aCYmZi5sZW5ndGg9PT1iLmxlbmd0aClyZXR1cm4gdGhpcy52aWV3cy5mb3JFYWNoKChlPT5lLnVwZGF0ZVRvVUkoKSkpLHZvaWQodGhpcy5vbmVUaW1lJiZ0aGlzLm9uZVRpbWVEb25lKCkpO2NvbnN0IHk9dGhpcy52aWV3cy5zcGxpY2UoMCxnKTtsZXQgVT15W3kubGVuZ3RoLTFdO2ZvcihsZXQgZT1nLHQ9Zi5sZW5ndGgscz1nO2U8dDtlKysscysrKXtjb25zdCB0PWZbZV07XCJzdHJpbmdcIiE9dHlwZW9mIHQmJih0LiRpbmRleD1lKTtjb25zdCBzPXRoaXMudmlld3Muc2hpZnQoKTtpZihudWxsPT1zKXtjb25zdCBlPXskbW9kZWw6e1t0aGlzLmF0dHJpYnV0ZV06dH0sJHBhcmVudDp0aGlzLm9iamVjdH0scz1pLmNyZWF0ZSh0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudCx0aGlzLnRlbXBsYXRlLmNsb25lTm9kZSghMCksZSx7cGFyZW50OnRoaXMscHJlcGFyZTohMSxzaWJsaW5nOm51bGwhPT0oYT1udWxsPT1VP3ZvaWQgMDpVLmVsZW1lbnQpJiZ2b2lkIDAhPT1hP2E6dGhpcy5lbGVtZW50fSk7eS5wdXNoKHMpLFU9cztjb250aW51ZX1jb25zdCBsPW51bGw9PWM/dDpuLnJlc29sdmVWYWx1ZShudWxsIT10P3Q6e30sYykscj1udWxsPT1zP3ZvaWQgMDpzLm1vZGVsLiRtb2RlbFt0aGlzLmF0dHJpYnV0ZV0sbz1udWxsPT1jP3I6bi5yZXNvbHZlVmFsdWUobnVsbCE9cj9yOnt9LGMpO2lmKGw9PT1vKXt5LnB1c2gocykscy5tb3ZlKG51bGwhPT0oaD1udWxsPT1VP3ZvaWQgMDpVLmVsZW1lbnQpJiZ2b2lkIDAhPT1oP2g6dGhpcy5lbGVtZW50KSxVPXM7Y29udGludWV9aWYoIWYuc2xpY2UoZSkubWFwKChlPT5udWxsPT1jP2U6bi5yZXNvbHZlVmFsdWUobnVsbCE9ZT9lOnt9LGMpKSkuaW5jbHVkZXMobykpe3MuZGVzdHJveSgpLGUtLSxVPXM7Y29udGludWV9dGhpcy52aWV3cy51bnNoaWZ0KHMpO2xldCBtPSExO2ZvcihsZXQgZT0wLHQ9dGhpcy52aWV3cy5sZW5ndGg7ZTx0O2UrKyl7Y29uc3QgdD10aGlzLnZpZXdzW2VdLGk9bnVsbD09dD92b2lkIDA6dC5tb2RlbC4kbW9kZWxbdGhpcy5hdHRyaWJ1dGVdO2lmKGw9PT0obnVsbD09Yz9pOm4ucmVzb2x2ZVZhbHVlKG51bGwhPWk/aTp7fSxjKSkpe3kucHVzaCguLi50aGlzLnZpZXdzLnNwbGljZShlLDEpKSx0Lm1vdmUobnVsbCE9PSh1PW51bGw9PVU/dm9pZCAwOlUuZWxlbWVudCkmJnZvaWQgMCE9PXU/dTp0aGlzLmVsZW1lbnQpLG09ITAsVT10O2JyZWFrfX1pZighbSl7Y29uc3QgZT17JG1vZGVsOntbdGhpcy5hdHRyaWJ1dGVdOnR9LCRwYXJlbnQ6dGhpcy5vYmplY3R9LHM9aS5jcmVhdGUodGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQsdGhpcy50ZW1wbGF0ZS5jbG9uZU5vZGUoITApLGUse3BhcmVudDp0aGlzLHByZXBhcmU6ITEsc2libGluZzpudWxsIT09KGQ9bnVsbD09VT92b2lkIDA6VS5lbGVtZW50KSYmdm9pZCAwIT09ZD9kOnRoaXMuZWxlbWVudH0pO3kucHVzaChzKSxVPXN9fXRoaXMudmlld3MuZm9yRWFjaCgoZT0+ZS5kZXN0cm95KCkpKSx0aGlzLnZpZXdzPXksdGhpcy5sYXN0VmFsdWU9Wy4uLm1dLHRoaXMubGFzdFVJVmFsdWU9Wy4uLmZdfWVsc2UgaWYobnVsbD09dGhpcy52YWx1ZSl7Y29uc3QgZT1uLnJlc29sdmVWYWx1ZSh0aGlzLm9iamVjdCx0aGlzLmF0dHJpYnV0ZSksdD1lLnRlbXBsYXRlLGk9bnVsbD09bT9lOmUuY3JlYXRlKG0pO3RoaXMudmFsdWU9bnVsbCE9bT9tOmUsdGhpcy52aWV3cy5wdXNoKG4uY3JlYXRlKHRoaXMuZWxlbWVudC5wYXJlbnRFbGVtZW50LHQsaSx7cGFyZW50OnRoaXMscHJlcGFyZTohMCxzaWJsaW5nOnRoaXMuZWxlbWVudH0pKX19ZWxzZSBpZihtIT09dGhpcy5sYXN0VmFsdWUpe2NvbnN0IGU9ITAhPT10aGlzLnRvVUk/dGhpcy50b1VJKG0sdGhpcy5sYXN0VmFsdWUsdGhpcy5wcm9wZXJ0eSx0aGlzLm9iamVjdCk6bTtpZih2b2lkIDAhPT1lJiZlIT09dGhpcy5sYXN0VUlWYWx1ZSl7Y29uc3R7dGFyZ2V0OnQscHJvcGVydHk6aX09bi5yZXNvbHZlUHJvcGVydHkodGhpcy5lbGVtZW50LHRoaXMuYXR0cmlidXRlKTt0W2ldPWUsdGhpcy5sYXN0VmFsdWU9bSx0aGlzLmxhc3RVSVZhbHVlPWV9fXRoaXMudmlld3MuZm9yRWFjaCgoZT0+ZS51cGRhdGVUb1VJKCkpKSx0aGlzLm9uZVRpbWUmJnRoaXMub25lVGltZURvbmUoKX1vbmVUaW1lRG9uZSgpe3RoaXMudG9VST0hMSx0aGlzLmZyb21VST0hMX11cGRhdGVBdEV2ZW50cygpe2xldCBlPXRoaXMuZXZlbnRzLnNoaWZ0KCk7Zm9yKDtudWxsIT1lOyluLnJlc29sdmVWYWx1ZSh0aGlzLm9iamVjdCx0aGlzLnByb3BlcnR5KShlLHRoaXMub2JqZWN0LiRtb2RlbCx0aGlzLmVsZW1lbnQsdGhpcy5hdHRyaWJ1dGUsdGhpcy5vYmplY3QpLGU9dGhpcy5ldmVudHMuc2hpZnQoKTt0aGlzLnZpZXdzLmZvckVhY2goKGU9PmUudXBkYXRlQXRFdmVudHMoKSkpfXVwZGF0ZU1vdmUoKXt0aGlzLnZpZXdzLmZvckVhY2goKGU9PmUudXBkYXRlTW92ZSgpKSl9fWNsYXNzIG57c3RhdGljIGluaXRpYWxpemUoZT0hMCl7aWYobi5pbml0aWFsaXplZD0hMCwhMSE9PWUpaWYoITAhPT1lKXNldEludGVydmFsKCgoKT0+bi51cGRhdGUoKSksMWUzL2UpO2Vsc2V7Y29uc3QgZT0oKT0+e24udXBkYXRlKCkscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGUpfTtyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZSl9fXN0YXRpYyBjcmVhdGUoZSx0LHM9e30sbD17cGFyZW50Om51bGwscHJlcGFyZTohMCxzaWJsaW5nOm51bGx9KXt2YXIgcjtpZihcInN0cmluZ1wiPT10eXBlb2YgdCl7Y29uc3QgaT1udWxsIT09KHI9bnVsbD09ZT92b2lkIDA6ZS5vd25lckRvY3VtZW50KSYmdm9pZCAwIT09cj9yOmRvY3VtZW50O3Quc3RhcnRzV2l0aChcIiNcIikmJih0PWkucXVlcnlTZWxlY3Rvcih0KS5pbm5lckhUTUwpO2NvbnN0IHM9aS5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3MuaW5uZXJIVE1MPWwucHJlcGFyZT9uLnByZXBhcmUodCk6dCx0PXMuZmlyc3RFbGVtZW50Q2hpbGR9Y29uc3Qgbz1pLmNyZWF0ZShlLHQscyxsKTtyZXR1cm4gby5wYXJlbnQ9PT1uJiZuLnZpZXdzLnB1c2gobyksbi5pbml0aWFsaXplZHx8bi5pbml0aWFsaXplKCksb31zdGF0aWMgcGxheShlLHQpe3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBlPyhlPXRoaXMuZ2xvYmFscy5hbmltYXRpb25zLmZpbmQoKHQ9PnQubmFtZT09PWUpKS5jbG9uZSgpKS5wbGF5KHQpOmUucGxheSgpfXN0YXRpYyBwYXJzZShlLHQsaSxzKXt2YXIgbCxyLG87Y29uc3QgYT1bXTtpZigzPT09ZS5ub2RlVHlwZSl7bGV0IGw9ZS50ZXh0Q29udGVudCxyPWwubWF0Y2gobi5yZWdleFZhbHVlKTtmb3IoO251bGwhPXI7KXtjb25zdCBvPXJbMV07bGV0IGg9clsyXTtsPXJbM107bGV0IHU9ITE7aC5zdGFydHNXaXRoKFwifFwiKSYmKHU9ITAsaD1oLnNsaWNlKDEpLnRyaW1TdGFydCgpKTtsZXQgZD1lLmNsb25lTm9kZSgpO2UudGV4dENvbnRlbnQ9byxuLnBhcmVudEVsZW1lbnQoZSxzKS5pbnNlcnRCZWZvcmUoZCxlLm5leHRTaWJsaW5nKSxhLnB1c2gobi5iaW5kKHtzZWxlY3RvcjpkLGF0dHJpYnV0ZTpcInRleHRDb250ZW50XCIsb2JqZWN0OnQscHJvcGVydHk6aCxwYXJlbnQ6aSxvbmVUaW1lOnV9KSksZD0oZT1kKS5jbG9uZU5vZGUoKSxkLnRleHRDb250ZW50PWwsbi5wYXJlbnRFbGVtZW50KGUscykuaW5zZXJ0QmVmb3JlKGQsZS5uZXh0U2libGluZyksZT1kLHI9bC5tYXRjaChuLnJlZ2V4VmFsdWUpfX1lbHNle2lmKGEucHVzaCguLi5PYmplY3Qua2V5cyhudWxsIT09KGw9ZS5hdHRyaWJ1dGVzKSYmdm9pZCAwIT09bD9sOltdKS5yZXZlcnNlKCkubWFwKChsPT57Y29uc3Qgcj1bXTtpZihlIGluc3RhbmNlb2YgQ29tbWVudClyZXR1cm5bXTtjb25zdCBvPWUuYXR0cmlidXRlc1tsXTtpZihvLm5hbWUuc3RhcnRzV2l0aChcInB1aS5cIikpe2NvbnN0IGw9by52YWx1ZS5tYXRjaChuLnJlZ2V4QXR0cmlidXRlKTtsZXQgcixhLFtoLHUsZCxtLHBdPWwsYz0hMTtpZihcIkBcIiE9PWQpe2NvbnN0IGk9dS5tYXRjaCgvXicoLio/KSckLyk7aWYobnVsbCE9aSlyPWlbMV0sZS5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLHIpLHU9XCJvcHRpb25cIj09PWUubm9kZU5hbWUudG9Mb3dlckNhc2UoKT9cInNlbGVjdGVkXCI6XCJjaGVja2VkXCIsbT1lPT5lP3I6dm9pZCAwLGQ9ZT0+ZT09PXI7ZWxzZSBpZihcIlwiPT09dSl7aWYoXCI+XCI9PT1tKXtjb25zdHt0YXJnZXQ6aSxwcm9wZXJ0eTpzfT1uLnJlc29sdmVQcm9wZXJ0eSh0LHApO3JldHVybiBpW3NdPWUsW119e2NvbnN0IHQ9ZG9jdW1lbnQuY3JlYXRlQ29tbWVudChvLm5hbWUpO24ucGFyZW50Tm9kZShlLHMpLmluc2VydEJlZm9yZSh0LGUpLG4ucGFyZW50Tm9kZShlLHMpLnJlbW92ZUNoaWxkKGUpLGUucmVtb3ZlQXR0cmlidXRlKG8ubmFtZSksYT1lLGU9dCx1PVwiPVwiPT09ZCxkPSEwLFwifFwiPT09bSYmKGM9ITApfX1lbHNlIGlmKFwiPVwiPT09bSYmXCI9XCI9PT1kKXtjb25zdCB0PW4ucGFyZW50Tm9kZShlLHMpO2lmKDghPT10Lm5vZGVUeXBlKXtjb25zdCBpPWRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoby5uYW1lKTt0Lmluc2VydEJlZm9yZShpLGUpLHQucmVtb3ZlQ2hpbGQoZSksZS5yZW1vdmVBdHRyaWJ1dGUoby5uYW1lKSxlPWl9ZWxzZSBlPXQ7YT11LGM9ITAsZD0hMH1lbHNlIGlmKFwiKlwiPT09bSl7Y29uc3QgdD1kb2N1bWVudC5jcmVhdGVDb21tZW50KG8ubmFtZSk7bi5wYXJlbnROb2RlKGUscykuaW5zZXJ0QmVmb3JlKHQsZSksbi5wYXJlbnROb2RlKGUscykucmVtb3ZlQ2hpbGQoZSksZS5yZW1vdmVBdHRyaWJ1dGUoby5uYW1lKSxhPWUsZT10fWVsc2VcInxcIj09PW0/Yz0hMDpcImNoZWNrZWRcIiE9PXUmJmUuc2V0QXR0cmlidXRlKHUsXCJcIil9cmV0dXJuW24uYmluZCh7c2VsZWN0b3I6ZSxhdHRyaWJ1dGU6dSx2YWx1ZTpyLG9iamVjdDp0LHByb3BlcnR5OnAsdGVtcGxhdGU6YSx0b1VJOlwic3RyaW5nXCI9PXR5cGVvZiBkP1wiPFwiPT09ZDpkLGZyb21VSTpcInN0cmluZ1wiPT10eXBlb2YgbT9cIj5cIj09PW06bSxhdEV2ZW50OlwiQFwiPT09ZCxwYXJlbnQ6aSxvbmVUaW1lOmN9KV19Y29uc3QgYT1bby52YWx1ZV07bGV0IGg9MCx1PWFbaF0ubWF0Y2gobi5yZWdleFZhbHVlKTtmb3IoO251bGwhPXU7KXtsZXR7YmVmb3JlOnMscHJvcGVydHk6bCxhZnRlcjpkfT11Lmdyb3VwcyxtPSExO2wuc3RhcnRzV2l0aChcInxcIikmJihtPSEwLGw9bC5zbGljZSgxKS50cmltU3RhcnQoKSksci5wdXNoKG4uYmluZCh7c2VsZWN0b3I6ZSxhdHRyaWJ1dGU6by5uYW1lLG9iamVjdDp0LHByb3BlcnR5Omwsb25lVGltZTptLHRvVUkodCxpLHMsbCl7aWYodGhpcy5vbmVUaW1lKXtjb25zdCBlPWEuaW5kZXhPZihzKTtlPi0xJiYoYVtlXT1uLnJlc29sdmVWYWx1ZShsLHMpLGFbZS0xXSs9YVtlXSthW2UrMV0sYS5zcGxpY2UoZSwyKSl9Y29uc3Qgcj1hLm1hcCgoKGUsdCk9PnQlMj09MD9lOm4ucmVzb2x2ZVZhbHVlKGwsZSkpKS5qb2luKFwiXCIpO3JldHVybiBlLnNldEF0dHJpYnV0ZShvLm5hbWUscikscn0scGFyZW50Oml9KSksYVtoKytdPXMsYVtoKytdPWwsYVtoXT1kLHU9YVtoXS5tYXRjaChuLnJlZ2V4VmFsdWUpfXJldHVybiByfSkpLmZsYXQoKSksZSBpbnN0YW5jZW9mIENvbW1lbnQpcmV0dXJuIGEuZmlsdGVyKChlPT5udWxsIT1lLnRlbXBsYXRlfHwoZS51bmJpbmQoKSwhMSkpKTtpZighbi5sZWF2ZUF0dHJpYnV0ZXMpZm9yKGxldCB0PU9iamVjdC5rZXlzKG51bGwhPT0ocj1lLmF0dHJpYnV0ZXMpJiZ2b2lkIDAhPT1yP3I6W10pLmxlbmd0aC0xO3Q+PTA7dC0tKXtjb25zdCBpPWUuYXR0cmlidXRlc1tPYmplY3Qua2V5cyhudWxsIT09KG89ZS5hdHRyaWJ1dGVzKSYmdm9pZCAwIT09bz9vOltdKVt0XV07aS5uYW1lLnN0YXJ0c1dpdGgoXCJwdWkuXCIpJiZlLnJlbW92ZUF0dHJpYnV0ZShpLm5hbWUpfWEucHVzaCguLi5BcnJheS5mcm9tKGUuY2hpbGROb2RlcykubWFwKChlPT5uLnBhcnNlKGUsdCxpLHMpKSkuZmxhdCgpKX1yZXR1cm4gYX1zdGF0aWMgYmluZChlKXtyZXR1cm4gcy5jcmVhdGUoZSl9c3RhdGljIHVuYmluZChlKXtpZihlLmRlc3Ryb3koKSxlLnBhcmVudCE9PW4pe2NvbnN0IHQ9ZS5wYXJlbnQuYmluZGluZ3MsaT10LmluZGV4T2YoZSk7aT4tMSYmdC5zcGxpY2UoaSwxKX19c3RhdGljIHVwZGF0ZSgpe3RoaXMudmlld3MuZm9yRWFjaCgoZT0+ZS51cGRhdGVGcm9tVUkoKSkpLHRoaXMudmlld3MuZm9yRWFjaCgoZT0+ZS51cGRhdGVUb1VJKCkpKSx0aGlzLnZpZXdzLmZvckVhY2goKGU9PmUudXBkYXRlQXRFdmVudHMoKSkpO2NvbnN0IGU9cGVyZm9ybWFuY2Uubm93KCk7Wy4uLnRoaXMudmlld3MsdGhpcy5nbG9iYWxzXS5mb3JFYWNoKCh0PT50LnVwZGF0ZUFuaW1hdGlvbnMoZSkpKSx0aGlzLnZpZXdzLmZvckVhY2goKGU9PntlLnVwZGF0ZU1vdmUoKX0pKSx0aGlzLmRlc3Ryb3llZC5mb3JFYWNoKChlPT57c3dpdGNoKGUuZGVzdHJveWVkKXtjYXNlXCJxdWV1ZVwiOmUuZGVzdHJveWVkPVwiZGVzdHJveVwiO2JyZWFrO2Nhc2VcImRlc3Ryb3lcIjp7ZS50ZXJtaW5hdGUoKTtjb25zdCB0PXRoaXMuZGVzdHJveWVkLmZpbmRJbmRleCgodD0+ZT09PXQpKTt0Pi0xJiZ0aGlzLmRlc3Ryb3llZC5zcGxpY2UodCwxKX19fSkpfXN0YXRpYyByZXNvbHZlUHJvcGVydHkoZSx0KXtjb25zdCBpPSh0PXQucmVwbGFjZShcIltcIixcIi5cIikucmVwbGFjZShcIl1cIixcIi5cIikpLnNwbGl0KFwiLlwiKS5maWx0ZXIoKGU9PihudWxsIT1lP2U6XCJcIikubGVuZ3RoPjApKTtsZXQgcz1cIiRtb2RlbFwiaW4gZT9lLiRtb2RlbDplO2Zvcig7aS5sZW5ndGg+MTspcz1zW2kuc2hpZnQoKV07cmV0dXJue3RhcmdldDpzLHByb3BlcnR5OmlbMF19fXN0YXRpYyByZXNvbHZlVmFsdWUoZSx0KXtsZXQgaT0wO2Rve2NvbnN0e3RhcmdldDppLHByb3BlcnR5OnN9PW4ucmVzb2x2ZVByb3BlcnR5KGUsdCk7aWYobnVsbCE9aSYmcyBpbiBpKXJldHVybiBpW3NdO2U9ZS4kcGFyZW50fXdoaWxlKG51bGwhPWUmJmkrKzwxZTMpfXN0YXRpYyBwYXJlbnRFbGVtZW50KGUsdCl7Y29uc3QgaT1lLnBhcmVudEVsZW1lbnQ7aWYobnVsbCE9aSlyZXR1cm4gaTtmb3IoO251bGwhPXQmJihudWxsPT10LmVsZW1lbnR8fHQuZWxlbWVudD09PWUpOyl0PXQucGFyZW50O3JldHVybiBudWxsPT10P3ZvaWQgMDp0LmVsZW1lbnR9c3RhdGljIHBhcmVudE5vZGUoZSx0KXtjb25zdCBpPWUucGFyZW50Tm9kZTtpZihudWxsIT1pKXJldHVybiBpO2Zvcig7bnVsbCE9dCYmKG51bGw9PXQuZWxlbWVudHx8dC5lbGVtZW50PT09ZSk7KXQ9dC5wYXJlbnQ7cmV0dXJuIG51bGw9PXQ/dm9pZCAwOnQuZWxlbWVudH1zdGF0aWMgcHJlcGFyZShlKXtsZXQgdD1lO2U9XCJcIjtsZXQgaT10Lm1hdGNoKG4ucmVnZXhSZXBsYWNlKTtmb3IoO251bGwhPWk7KXtjb25zdFtzLGwscixvXT1pO3IubWF0Y2goL1xcU1xccyo9PT0vKT9lKz1gJHtsLnRyaW1FbmQoKX1iciBQVUktVU5SRU5ERVJFRCBQVUkuJHtuLmJpbmRpbmdDb3VudGVyKyt9PVwiJHtyfVwiYDplKz1gJHtsfSBQVUkuJHtuLmJpbmRpbmdDb3VudGVyKyt9PVwiJHtyfVwiIGAsdD1vLGk9dC5tYXRjaChuLnJlZ2V4UmVwbGFjZSl9cmV0dXJuIGUrdH19bi5pbml0aWFsaXplZD0hMSxuLmlkPTAsbi52aWV3cz1bXSxuLmRlc3Ryb3llZD1bXSxuLmdsb2JhbHM9bmV3IGksbi5sZWF2ZUF0dHJpYnV0ZXM9ITEsbi5yZWdleFJlcGxhY2U9LyhbXFxTXFxzXSo/KVxcJFxceyhbXn1dKj9bPD1AIV09Wyo9PnxdW159XSo/KVxcfShbXFxTXFxzXSopL20sbi5yZWdleEF0dHJpYnV0ZT0vXlxccyooXFxTKj8pXFxzKihbPD1AIV0pPShbKj0+fF0pXFxzKihcXFMqPylcXHMqJC8sbi5yZWdleFZhbHVlPS8oPzxiZWZvcmU+W1xcU1xcc10qPylcXCRcXHtcXHMqKD88cHJvcGVydHk+W1xcc1xcU10qPylcXHMqXFx9KD88YWZ0ZXI+W1xcU1xcc10qKS9tLG4uYmluZGluZ0NvdW50ZXI9MDt2YXIgbD1leHBvcnRzO2Zvcih2YXIgciBpbiB0KWxbcl09dFtyXTt0Ll9fZXNNb2R1bGUmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShsLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSkoKTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgR2FtZVN0YXRlLCBTdGF0ZSB9IGZyb20gXCIuL2dhbWVTdGF0ZVwiO1xyXG5cclxuY29uc3QgcGh5c2ljc0ludGVydmFsID0gMC4yNDtcclxuY29uc3QgcmVuZGVySW50ZXJ2YWwgPSAwLjE2Njc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheVN0YXRlIGV4dGVuZHMgU3RhdGUge1xyXG4gIHN0YXJ0aW1lOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgbGFzdHRpbWU6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICBsYXN0UGh5c2ljc1VwZGF0ZTogbnVtYmVyID0gMDtcclxuICBsYXN0UmVuZGVyVXBkYXRlOiBudW1iZXIgPSAwO1xyXG5cclxuICBzdGF0aWMgdGVtcGxhdGUgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIiBcXCR7PT09aXNHYW1lfT5pIGFtIGluIFxcJHtnYW1lc3RhdGV9PC9kaXY+XHJcbiAgYDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihcImdhbWVcIik7XHJcbiAgfVxyXG4gIHB1YmxpYyBlbnRlcihfcHJldmlvdXM6IFN0YXRlLCAuLi5wYXJhbXM6IGFueSk6IHZvaWQge1xyXG4gICAgY29uc29sZS5sb2coXCJlbnRlcmluZyBnYW1lXCIpO1xyXG4gICAgY29uc3QgW21vZGVsXSA9IHBhcmFtcztcclxuICAgIG1vZGVsLmdhbWVzdGF0ZSA9IFwiZ2FtZVwiO1xyXG4gICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAvL21ha2UgUkFGIGNhbGwgdG8gdGhlIGVuZ2luZVxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuRml4ZWRTdGVwRW5naW5lKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBleGl0KF9uZXh0OiBTdGF0ZSwgLi4ucGFyYW1zOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZXhpdGluZyBnYW1lXCIpO1xyXG4gICAgY29uc3QgW21vZGVsXSA9IHBhcmFtcztcclxuICAgIG1vZGVsLmdhbWVzdGF0ZSA9IFwidHJhbnNpdGlvblwiO1xyXG4gICAgLy9tb2NrdXAgdGltZXIgdG8gY2hhbmdlIHN0YXRlc1xyXG4gICAgYXdhaXQgdGhpcy53YWl0KDIwMDApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB3YWl0KG1zOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSwgbXMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgRml4ZWRTdGVwRW5naW5lID0gKHRpbWVzdGFtcDogbnVtYmVyKSA9PiB7XHJcbiAgICBpZiAodGhpcy5zdGFydGltZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy5zdGFydGltZSA9IHRpbWVzdGFtcDtcclxuICAgICAgdGhpcy5sYXN0dGltZSA9IHRpbWVzdGFtcDtcclxuICAgIH1cclxuICAgIGNvbnN0IGRlbHRhVGltZSA9ICh0aW1lc3RhbXAgLSB0aGlzLmxhc3R0aW1lKSAvIDEwMDA7XHJcbiAgICB0aGlzLmxhc3RQaHlzaWNzVXBkYXRlICs9IGRlbHRhVGltZTtcclxuICAgIHRoaXMubGFzdFJlbmRlclVwZGF0ZSArPSBkZWx0YVRpbWU7XHJcblxyXG4gICAgd2hpbGUgKHRoaXMubGFzdFBoeXNpY3NVcGRhdGUgPj0gcGh5c2ljc0ludGVydmFsKSB7XHJcbiAgICAgIC8vdXBkYXRlIHBoeXNpY3MgaGVyZVxyXG4gICAgICBjb25zb2xlLmxvZyhcInVwZGF0aW5nIHBoeXNpY3NcIik7XHJcbiAgICAgIHRoaXMubGFzdFBoeXNpY3NVcGRhdGUgLT0gcGh5c2ljc0ludGVydmFsO1xyXG4gICAgfVxyXG4gICAgd2hpbGUgKHRoaXMubGFzdFJlbmRlclVwZGF0ZSA+PSByZW5kZXJJbnRlcnZhbCkge1xyXG4gICAgICAvL3VwZGF0ZSByZW5kZXJpbmcgaGVyZVxyXG4gICAgICBjb25zb2xlLmxvZyhcInVwZGF0aW5nIHJlbmRlcmluZ1wiKTtcclxuICAgICAgdGhpcy5sYXN0UmVuZGVyVXBkYXRlIC09IHJlbmRlckludGVydmFsO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuRml4ZWRTdGVwRW5naW5lKTtcclxuICB9O1xyXG59XHJcbiIsImNsYXNzIFN0YXRlTWFjaGluZSB7XHJcbiAgcHVibGljIHN0YXRlczogUmVjb3JkPHN0cmluZywgUmVjb3JkPHN0cmluZywgYW55Pj4gPSB7fTtcclxuICBwdWJsaWMgY3VycmVudDogUmVjb3JkPHN0cmluZywgU3RhdGU+ID0ge307XHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwdWJsaWMgY3JlYXRlKC4uLmVudHJpZXM6IGFueVtdKTogU3RhdGVbXSB7XHJcbiAgICBjb25zdCBjcmVhdGVkID0gW107XHJcbiAgICBsZXQgbmFtZXMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGVudHJ5IG9mIGVudHJpZXMpIHtcclxuICAgICAgaWYgKHR5cGVvZiBlbnRyeSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgIG5hbWVzLnB1c2goZW50cnkpO1xyXG5cclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG5hbWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjcmVhdGVkLnB1c2goXHJcbiAgICAgICAgICAuLi5uYW1lcy5tYXAobmFtZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gbmV3IGVudHJ5KG5hbWUpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdGF0ZXNbc3RhdGUubWFjaGluZV0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGVzW3N0YXRlLm1hY2hpbmVdID0ge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZXNbc3RhdGUubWFjaGluZV1bc3RhdGUubmFtZV0gPSBzdGF0ZTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApO1xyXG4gICAgICAgIG5hbWVzID0gW107XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuICAgICAgY29uc3Qgc3RhdGUgPSBuZXcgZW50cnkoKTtcclxuICAgICAgaWYgKHRoaXMuc3RhdGVzW3N0YXRlLm1hY2hpbmVdID09IG51bGwpIHtcclxuICAgICAgICB0aGlzLnN0YXRlc1tzdGF0ZS5tYWNoaW5lXSA9IHt9O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3RhdGVzW3N0YXRlLm1hY2hpbmVdW3N0YXRlLm5hbWVdID0gc3RhdGU7XHJcbiAgICAgIGNyZWF0ZWQucHVzaChzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNyZWF0ZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQoc3RhdGU6IHN0cmluZyB8IFN0YXRlLCBtYWNoaW5lID0gXCJkZWZhdWx0XCIsIC4uLnBhcmFtczogYW55W10pOiB2b2lkIHwgUHJvbWlzZTx2b2lkPiB7XHJcbiAgICBjb25zdCBuZXh0ID0gdHlwZW9mIHN0YXRlID09PSBcInN0cmluZ1wiID8gR2FtZVN0YXRlLnN0YXRlc1ttYWNoaW5lXVtzdGF0ZV0gOiBzdGF0ZTtcclxuXHJcbiAgICBsZXQgbGVhdmluZztcclxuICAgIGxldCBlbnRlcmluZztcclxuXHJcbiAgICBpZiAodGhpcy5jdXJyZW50W21hY2hpbmVdICE9IG51bGwpIHtcclxuICAgICAgbGVhdmluZyA9IHRoaXMuY3VycmVudFttYWNoaW5lXS5leGl0KG5leHQsIC4uLnBhcmFtcyk7XHJcbiAgICB9XHJcbiAgICBpZiAobGVhdmluZyBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgcmV0dXJuIGxlYXZpbmcudGhlbigoKSA9PiB7XHJcbiAgICAgICAgaWYgKG5leHQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgZW50ZXJpbmcgPSBuZXh0LmVudGVyKHRoaXMuY3VycmVudFttYWNoaW5lXSwgLi4ucGFyYW1zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVudGVyaW5nIGluc3RhbmNlb2YgUHJvbWlzZSkge1xyXG4gICAgICAgICAgcmV0dXJuIGVudGVyaW5nLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRbbWFjaGluZV0gPSBuZXh0O1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY3VycmVudFttYWNoaW5lXSA9IG5leHQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChuZXh0ICE9IG51bGwpIHtcclxuICAgICAgZW50ZXJpbmcgPSBuZXh0LmVudGVyKHRoaXMuY3VycmVudFttYWNoaW5lXSwgLi4ucGFyYW1zKTtcclxuICAgIH1cclxuICAgIGlmIChlbnRlcmluZyBpbnN0YW5jZW9mIFByb21pc2UpIHtcclxuICAgICAgcmV0dXJuIGVudGVyaW5nLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFttYWNoaW5lXSA9IG5leHQ7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jdXJyZW50W21hY2hpbmVdID0gbmV4dDtcclxuICB9XHJcblxyXG4gIGdldChtYWNoaW5lID0gXCJkZWZhdWx0XCIpOiB7IHN0YXRlOiBTdGF0ZSB9IHtcclxuICAgIHJldHVybiB7IHN0YXRlOiB0aGlzLmN1cnJlbnRbbWFjaGluZV0gfTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGNvbnN0IEdhbWVTdGF0ZSA9IG5ldyBTdGF0ZU1hY2hpbmUoKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZSB7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyBtYWNoaW5lID0gXCJkZWZhdWx0XCIpIHt9XHJcbiAgcHVibGljIGVudGVyKF9wcmV2aW91czogU3RhdGUsIC4uLnBhcmFtczogYW55KTogdm9pZCB7fVxyXG4gIHB1YmxpYyBleGl0KF9uZXh0OiBTdGF0ZSwgLi4ucGFyYW1zOiBhbnkpOiB2b2lkIHt9XHJcbn1cclxuIiwiaW1wb3J0IHsgR2FtZVN0YXRlLCBTdGF0ZSB9IGZyb20gXCIuL2dhbWVTdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnVTdGF0ZSBleHRlbmRzIFN0YXRlIHtcclxuICBzdGF0aWMgdGVtcGxhdGUgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImNvbnRlbnQgbWVudVwiIFxcJHs9PT1pc01lbnV9PlxyXG4gICAgPHNwYW4gY2xhc3M9XCJ0aXRsZVwiPkFTVEVST0lEUyBQTFVTIDIuMDwvc3Bhbj4gIFxyXG4gICAgPHNwYW4gY2xhc3M9XCJkZXNrb3BTdGFydFwiIFxcJHshPT1pc01vYmlsZX0+UFJFU1MgQU5ZIEtFWSBUTyBCRUdJTjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwibW9iaWxlU3RhcnRcIiBcXCR7PT09aXNNb2JpbGV9PlRBUCBTQ1JFRU4gVE8gQkVHSU48L3NwYW4+XHJcbiAgICBcclxuICA8L2Rpdj5cclxuICBgO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoXCJtZW51XCIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGVudGVyKF9wcmV2aW91czogU3RhdGUsIC4uLnBhcmFtczogYW55KTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyhcImVudGVyaW5nIG1lbnVcIik7XHJcbiAgICBjb25zdCBbbW9kZWxdID0gcGFyYW1zO1xyXG4gICAgbW9kZWwuZ2FtZXN0YXRlID0gXCJtZW51XCI7XHJcblxyXG4gICAgLy9tb2NrdXAgdGltZXIgdG8gY2hhbmdlIHN0YXRlc1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIEdhbWVTdGF0ZS5zZXQoXCJnYW1lXCIsIFwiZGVmYXVsdFwiLCBtb2RlbCk7XHJcbiAgICB9LCA1MDAwKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBleGl0KF9uZXh0OiBTdGF0ZSwgLi4ucGFyYW1zOiBhbnkpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZXhpdGluZyBtZW51XCIpO1xyXG4gICAgY29uc3QgW21vZGVsXSA9IHBhcmFtcztcclxuICAgIG1vZGVsLmdhbWVzdGF0ZSA9IFwidHJhbnNpdGlvblwiO1xyXG4gICAgLy9tb2NrdXAgdGltZXIgdG8gY2hhbmdlIHN0YXRlc1xyXG4gICAgYXdhaXQgdGhpcy53YWl0KDIwMDApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB3YWl0KG1zOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgfSwgbXMpXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7IFVJIH0gZnJvbSBcInBlYXN5LXVpXCI7XHJcbmltcG9ydCB7IEdhbWVTdGF0ZSB9IGZyb20gXCIuL3N0YXRlcy9nYW1lU3RhdGVcIjtcclxuaW1wb3J0IHsgTWVudVN0YXRlIH0gZnJvbSBcIi4vc3RhdGVzL21lbnVcIjtcclxuaW1wb3J0IHsgUGxheVN0YXRlIH0gZnJvbSBcIi4vc3RhdGVzL2dhbWVcIjtcclxuXHJcbmVudW0gRGV2aWNlVHlwZSB7XHJcbiAgSU9TID0gXCJpb3M6XCIsXHJcbiAgQU5EUk9JRCA9IFwiYW5kcm9pZFwiLFxyXG4gIERFU0tUT1AgPSBcImRlc2t0b3BcIixcclxufVxyXG5leHBvcnQgZW51bSBHYW1lU3RhdGVzIHtcclxuICBNRU5VID0gXCJtZW51XCIsXHJcbiAgR0FNRSA9IFwiZ2FtZVwiLFxyXG4gIFNFVFRJTkdTID0gXCJzZXR0aW5nc1wiLFxyXG4gIEFCT1VUID0gXCJhYm91dFwiLFxyXG4gIFRSQU5TSVRJT04gPSBcInRyYW5zaXRpb25cIixcclxufVxyXG5cclxuZXhwb3J0IGxldCBtb2RlbCA9IHtcclxuICBkZXZpY2VUeXBlOiBEZXZpY2VUeXBlLklPUyxcclxuICBzY3JlZW53aWR0aDogNjAwLFxyXG4gIHNjcmVlbmhlaWdodDogNDAwLFxyXG4gIGdhbWVzdGF0ZTogR2FtZVN0YXRlcy5NRU5VLFxyXG4gIGdldCBpc0dhbWUoKSB7XHJcbiAgICByZXR1cm4gbW9kZWwuZ2FtZXN0YXRlID09IEdhbWVTdGF0ZXMuR0FNRTtcclxuICB9LFxyXG4gIGdldCBpc01lbnUoKSB7XHJcbiAgICByZXR1cm4gbW9kZWwuZ2FtZXN0YXRlID09IEdhbWVTdGF0ZXMuTUVOVTtcclxuICB9LFxyXG4gIGdldCBpc01vYmlsZSgpIHtcclxuICAgIHJldHVybiBtb2RlbC5kZXZpY2VUeXBlID09IERldmljZVR5cGUuSU9TIHx8IG1vZGVsLmRldmljZVR5cGUgPT0gRGV2aWNlVHlwZS5BTkRST0lEO1xyXG4gIH0sXHJcbn07XHJcblxyXG5sZXQgdGVtcGxhdGUgPSBgXHJcbjxkaXYgaWQ9XCJnYW1lXCIgY2xhc3M9XCJnYW1lQ29udGFpbmVyXCI+XHJcbiAgPGRpdiBjbGFzcz1cImRpYWd0ZXh0XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZGlhZ3RleHRcIj5EZXZpY2UgVHlwZTogXFwke2RldmljZVR5cGV9ICBzY3JlZW4gc2l6ZTogV2lkdGg6IFxcJHtzY3JlZW53aWR0aH0gIEhlaWdodDogIFxcJHtzY3JlZW5oZWlnaHR9IDwvZGl2PlxyXG4gICAgJHtQbGF5U3RhdGUudGVtcGxhdGV9XHJcbiAgICAke01lbnVTdGF0ZS50ZW1wbGF0ZX1cclxuICAgIFxyXG4gIDwvZGl2PlxyXG48L2Rpdj5gO1xyXG5cclxuLy8gd2UgbmVlZCB0byBzbmlmZiBvdXQgQW5kcm9pZCBhbmQgaU9TXHJcbi8vIHNvIHRoYXQgd2UgY2FuIGhpZGUgdGhlIGFkZHJlc3MgYmFyIGluXHJcbi8vIG91ciByZXNpemUgZnVuY3Rpb25cclxuXHJcbmNvbnN0IFVBID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpO1xyXG5pZiAoVUEuaW5kZXhPZihcImFuZHJvaWRcIikgPiAtMSkgbW9kZWwuZGV2aWNlVHlwZSA9IERldmljZVR5cGUuQU5EUk9JRDtcclxuZWxzZSBpZiAoVUEuaW5kZXhPZihcImlwaG9uZVwiKSA+IC0xKSBtb2RlbC5kZXZpY2VUeXBlID0gRGV2aWNlVHlwZS5JT1M7XHJcbmVsc2UgbW9kZWwuZGV2aWNlVHlwZSA9IERldmljZVR5cGUuREVTS1RPUDtcclxuXHJcblVJLmNyZWF0ZShkb2N1bWVudC5ib2R5LCB0ZW1wbGF0ZSwgbW9kZWwpO1xyXG5VSS5pbml0aWFsaXplKDEwMDAgLyA2MCk7XHJcblxyXG5jb25zdCByZXNpemVTY3JlZW4gPSAobSA9IG1vZGVsKSA9PiB7XHJcbiAgbS5zY3JlZW53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gIG0uc2NyZWVuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXQgPSAobSA9IG1vZGVsKSA9PiB7XHJcbiAgcmVzaXplU2NyZWVuKG0pO1xyXG4gIEdhbWVTdGF0ZS5jcmVhdGUoTWVudVN0YXRlLCBQbGF5U3RhdGUpO1xyXG4gIEdhbWVTdGF0ZS5zZXQoXCJtZW51XCIsIFwiZGVmYXVsdFwiLCBtb2RlbCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBsb2FkRXZlbnRIYW5kbGVyKGU6IGFueSkge1xyXG4gIGluaXQoKTtcclxufVxyXG5mdW5jdGlvbiByZXNpemVFdmVudEhhbmRsZXIoZTogYW55KSB7XHJcbiAgcmVzaXplU2NyZWVuKCk7XHJcbn1cclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBsb2FkRXZlbnRIYW5kbGVyLCBmYWxzZSk7XHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHJlc2l6ZUV2ZW50SGFuZGxlciwgZmFsc2UpO1xyXG5cclxuLy9UT0RPIGFkZCBpbiB0b3VjaCBsaXN0ZW5lciB0byBlbmFibGUgdG91Y2ggY29udHJvbHNcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9