(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("bi-internal/_internal"), require("axios"), require("bi-internal/core"), require("bi-internal/utils"), require("bi-internal/ui"), require("bi-internal/services"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "bi-internal/_internal", "axios", "bi-internal/core", "bi-internal/utils", "bi-internal/ui", "bi-internal/services"], factory);
	else if(typeof exports === 'object')
		exports["@lux/tree-table-simple"] = factory(require("react"), require("bi-internal/_internal"), require("axios"), require("bi-internal/core"), require("bi-internal/utils"), require("bi-internal/ui"), require("bi-internal/services"));
	else
		root["@lux/tree-table-simple"] = factory(root["react"], root["bi-internal/_internal"], root["axios"], root["bi-internal/core"], root["bi-internal/utils"], root["bi-internal/ui"], root["bi-internal/services"]);
})(self, (__WEBPACK_EXTERNAL_MODULE__155__, __WEBPACK_EXTERNAL_MODULE__942__, __WEBPACK_EXTERNAL_MODULE__742__, __WEBPACK_EXTERNAL_MODULE__449__, __WEBPACK_EXTERNAL_MODULE__691__, __WEBPACK_EXTERNAL_MODULE__700__, __WEBPACK_EXTERNAL_MODULE__374__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 83:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.TreeTableSimple{position:relative;width:100%;height:100%;overflow-y:auto;color:var(--neutral_500);scrollbar-gutter:auto}.TreeTableSimple::-webkit-scrollbar-track{border-radius:.5rem}.TreeTableSimple::-webkit-scrollbar{width:.5rem;height:.5rem;border-radius:.5rem}.TreeTableSimple::-webkit-scrollbar-thumb{border-radius:.5rem;background:var(--system_element);border:1px solid var(--system_panel)}.TreeTableSimple table{width:100%}.TreeTableSimple table th,.TreeTableSimple table td{overflow:hidden;text-overflow:ellipsis}.TreeTableSimple table th{text-align:start}.TreeTableSimple table td{text-align:end}.TreeTableSimple table thead{position:sticky;top:0px;background-color:var(--system_effect);color:var(--neutral_500);font-weight:bold;height:2.5rem}.TreeTableSimple table thead th{padding:.2rem .2rem .2rem .7rem;white-space:nowrap;border-right:1px solid var(--system_selection)}.TreeTableSimple table tfoot{position:sticky;bottom:0;background-color:var(--system_panel);height:2rem}.TreeTableSimple table tfoot th,.TreeTableSimple table tfoot td{padding:.2rem .2rem .2rem .7rem;white-space:nowrap}.TreeTableSimple table tbody td{padding:.2rem .5rem;white-space:nowrap;text-align:end;cursor:pointer}.TreeTableSimple table tbody tr:hover>td{background:var(--system_selection)}.TreeTableSimple table tbody td:nth-child(1){border-left-color:rgba(0,0,0,0);border-top-color:rgba(0,0,0,0);border-bottom-color:rgba(0,0,0,0);text-align:start}.TreeTableSimple table tbody tr.hasValue td:nth-child(n+1){border:1px solid var(--system_selection)}.TreeTableSimple table tbody td:nth-child(n+1){border:1px solid var(--system_selection)}.TreeTableSimple table .CustomVizelTree__CollapseIcon{display:inline-flex;width:1rem;height:1rem;border:1px solid var(--system_element);color:var(--system_element);border-radius:.2rem;margin-right:.5rem;align-items:center;justify-content:center}.TreeTableSimple table .CustomVizelTree__Padding{display:inline-flex;width:1rem;height:1rem;margin-right:.5rem}.TreeTableSimple .TreeTableSimple__Th0{position:relative;overflow:hidden}.TreeTableSimple .TreeTableSimple__Th0>svg{position:absolute;left:.5rem;top:.5rem;width:1.5rem;height:1.5rem;fill:var(--system_element);cursor:pointer}.TreeTableSimple .TreeTableSimple__Th0>span{position:absolute;left:.7rem;top:0;right:0;bottom:0;display:flex;flex-direction:row;align-items:center;padding:0}.TreeTableSimple .TreeTableSimple__Th0>svg~span{left:2.1rem}`, "",{"version":3,"sources":["webpack://./styles.scss"],"names":[],"mappings":"AAAA,iBACE,iBAAA,CACA,UAAA,CACA,WAAA,CACA,eAAA,CACA,wBAAA,CAEA,qBAAA,CACA,0CAAA,mBAAA,CACA,oCAAA,WAAA,CAAA,YAAA,CAAA,mBAAA,CACA,0CAAA,mBAAA,CAAA,gCAAA,CAAA,oCAAA,CAEA,uBACE,UAAA,CAEA,oDAAA,eAAA,CAAA,sBAAA,CACA,0BAAA,gBAAA,CACA,0BAAA,cAAA,CAEA,6BACE,eAAA,CACA,OAAA,CACA,qCAAA,CACA,wBAAA,CACA,gBAAA,CACA,aAAA,CACA,gCAAA,+BAAA,CAAA,kBAAA,CAAA,8CAAA,CAIF,6BACE,eAAA,CACA,QAAA,CACA,oCAAA,CACA,WAAA,CACA,gEAAA,+BAAA,CAAA,kBAAA,CAIA,gCAAA,mBAAA,CAAA,kBAAA,CAAA,cAAA,CAAA,cAAA,CACA,yCAAA,kCAAA,CAEA,6CAAA,+BAAA,CAAA,8BAAA,CAAA,iCAAA,CAAA,gBAAA,CAEA,2DAAA,wCAAA,CACA,+CAAA,wCAAA,CAGF,sDACE,mBAAA,CACA,UAAA,CACA,WAAA,CACA,sCAAA,CACA,2BAAA,CACA,mBAAA,CACA,kBAAA,CACA,kBAAA,CACA,sBAAA,CAGF,iDACE,mBAAA,CACA,UAAA,CACA,WAAA,CACA,kBAAA,CAIJ,uCACE,iBAAA,CACA,eAAA,CACA,2CAAA,iBAAA,CAAA,UAAA,CAAA,SAAA,CAAA,YAAA,CAAA,aAAA,CAAA,0BAAA,CAAA,cAAA,CACA,4CAAA,iBAAA,CAAA,UAAA,CAAA,KAAA,CAAA,OAAA,CAAA,QAAA,CAAA,YAAA,CAAA,kBAAA,CAAA,kBAAA,CAAA,SAAA,CACA,gDAAA,WAAA","sourcesContent":[".TreeTableSimple {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  color: var(--neutral_500);\n\n  scrollbar-gutter: auto;\n  &::-webkit-scrollbar-track { border-radius: 0.5rem; }\n  &::-webkit-scrollbar { width: 0.5rem;  height: 0.5rem;  border-radius: 0.5rem; }\n  &::-webkit-scrollbar-thumb { border-radius: 0.5rem;  background: var(--system_element); border: 1px solid var(--system_panel); };\n\n  table {\n    width: 100%;\n\n    th, td {overflow: hidden; text-overflow: ellipsis;}\n    th {text-align: start}\n    td {text-align: end}\n\n    thead {\n      position: sticky;\n      top: 0px;\n      background-color: var(--system_effect);\n      color: var(--neutral_500);\n      font-weight: bold;\n      height: 2.5rem;\n      th { padding: 0.2rem 0.2rem 0.2rem 0.7rem; white-space: nowrap;  border-right: 1px solid var(--system_selection);}\n    }\n\n\n    tfoot {\n      position: sticky;\n      bottom: 0;\n      background-color: var(--system_panel);\n      height: 2rem;\n      th, td { padding: 0.2rem 0.2rem 0.2rem 0.7rem; white-space: nowrap;  }\n    }\n\n    tbody {\n      td { padding: 0.2rem 0.5rem; white-space: nowrap;  text-align: end; cursor: pointer; }\n      tr:hover > td { background: var(--system_selection)}\n\n      td:nth-child(1) { border-left-color: transparent; border-top-color: transparent; border-bottom-color: transparent; text-align: start;}\n\n      tr.hasValue td:nth-child(n + 1) {border: 1px solid var(--system_selection); }\n      td:nth-child(n + 1) {border: 1px solid var(--system_selection); }\n    }\n\n    .CustomVizelTree__CollapseIcon {\n      display: inline-flex;\n      width: 1rem;\n      height: 1rem;\n      border: 1px solid var(--system_element);\n      color: var(--system_element);\n      border-radius: 0.2rem;\n      margin-right: 0.5rem;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .CustomVizelTree__Padding {\n      display: inline-flex;\n      width: 1rem;\n      height: 1rem;\n      margin-right: 0.5rem;\n    }\n  }\n\n  .TreeTableSimple__Th0 {\n    position: relative;\n    overflow: hidden;\n    > svg { position: absolute; left: 0.5rem; top: 0.5rem; width: 1.5rem; height: 1.5rem; fill: var(--system_element); cursor: pointer;}\n    > span {position: absolute;  left: 0.7rem; top: 0; right: 0; bottom: 0; display: flex; flex-direction: row; align-items: center; padding: 0; }\n    > svg ~ span { left: 2.1rem; }\n  }\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 314:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ 354:
/***/ ((module) => {



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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ 72:
/***/ ((module) => {



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

/***/ 540:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 56:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 825:
/***/ ((module) => {



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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ 113:
/***/ ((module) => {



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

/***/ 742:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__742__;

/***/ }),

/***/ 942:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__942__;

/***/ }),

/***/ 449:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__449__;

/***/ }),

/***/ 374:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__374__;

/***/ }),

/***/ 700:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__700__;

/***/ }),

/***/ 691:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__691__;

/***/ }),

/***/ 155:
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE__155__;

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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ index)
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(155);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./styles.scss
var cjs_js_styles = __webpack_require__(83);
;// CONCATENATED MODULE: ./styles.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = function insertToHead(element, options) {
                document.head.appendChild(element);
                var internalModule = __webpack_require__(942);
                if (internalModule._registerStyleElement) internalModule._registerStyleElement(element);
              };
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(cjs_js_styles/* default */.A, options);




       /* harmony default export */ const styles = (cjs_js_styles/* default */.A && cjs_js_styles/* default */.A.locals ? cjs_js_styles/* default */.A.locals : undefined);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(742);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "bi-internal/core"
var core_ = __webpack_require__(449);
// EXTERNAL MODULE: external "bi-internal/utils"
var utils_ = __webpack_require__(691);
// EXTERNAL MODULE: external "bi-internal/ui"
var ui_ = __webpack_require__(700);
// EXTERNAL MODULE: external "bi-internal/services"
var services_ = __webpack_require__(374);
;// CONCATENATED MODULE: ./index.tsx









class TreeTableSimple extends external_react_.Component {
  constructor(props) {
    var _this, _props$cfg;
    super(props);
    _this = this;
    this.state = {
      tree: null,
      expanded: {},
      ltTitle: '',
      dataTotal: []
    };
    this.save = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator(function* (saveAbility) {
        const {
          cfg,
          subspace,
          schema_name
        } = _this.props;
        const rawCfg = cfg;
        if (rawCfg.report && saveAbility.match(/report/)) {
          const varsService = services_.AtlasHierarchyValuesService.createInstance(_this.props.schema_name);
          yield varsService.whenReady();
          const vars = (0,utils_.extractVarsFromVarsModel)(varsService.getModel());
          const output = saveAbility.replace(/^[report-]*/, '');
          const report = rawCfg.report.find(r => r.output === output);
          const extension = report.output === 'xlsx' && core_.AppConfig.hasFeature('OldExcelSave') ? 'xls' : report.output;
          const url = '/srv/reports/generate';
          const body = {
            report: {
              ...report
            },
            sources: [{
              dataSource: {
                ...rawCfg.dataSource,
                limit: undefined,
                filters: subspace.filters,
                atlas: schema_name,
                vars
              },
              title: cfg.title,
              view_class: 'tree-table-simple'
            }]
          };
          try {
            const request = yield external_axios_default().post(url, body, {
              responseType: 'blob'
            });
            const urlSave = URL.createObjectURL(request.data);
            const link = document.createElement('a');
            link.setAttribute('href', urlSave);
            link.setAttribute('download', `${report.title}.${extension}`);
            link.setAttribute('target', '_blank');
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            return new Promise(resolve => resolve());
          } catch (error) {
            console.error(error);
            try {
              // Там может быть не json
              const errors = JSON.parse(yield error.response.data.text());
              ui_.AlertsVC.getInstance().pushDangerAlert((0,core_.extractErrorMessage)(errors));
            } catch (err2) {
              ui_.AlertsVC.getInstance().pushDangerAlert((0,core_.extractErrorMessage)(error));
            }
          }
        }
        return new Promise(resolve => resolve());
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
    this._reloadData = /*#__PURE__*/_asyncToGenerator(function* () {
      var _cfg$dataSource, _cfg$dataSource$sortB, _cfg$dataSource$sortB2, _subspace$xs, _subspace$xs$, _subspace$xs$$axisIds;
      const {
        dp,
        subspace,
        cfg
      } = _this.props;
      const sortBy = (cfg == null ? void 0 : (_cfg$dataSource = cfg.dataSource) == null ? void 0 : (_cfg$dataSource$sortB = _cfg$dataSource.sortBy) == null ? void 0 : (_cfg$dataSource$sortB2 = _cfg$dataSource$sortB.split(';')) == null ? void 0 : _cfg$dataSource$sortB2[0]) || '';
      let dataTotal = yield dp.getTotalVector(subspace);
      const matrix = yield dp.getMatrixYX(subspace);
      const {
        xs,
        ys,
        dimensions
      } = subspace;
      const tree = makeXsTree(cfg, xs, ys, matrix, sortBy);
      let ltTitle = ((_subspace$xs = subspace.xs) == null ? void 0 : (_subspace$xs$ = _subspace$xs[0]) == null ? void 0 : (_subspace$xs$$axisIds = _subspace$xs$.axisIds) == null ? void 0 : _subspace$xs$$axisIds.map(axisId => {
        var _dimensions$find;
        return (dimensions == null ? void 0 : (_dimensions$find = dimensions.find(d => d.id === axisId)) == null ? void 0 : _dimensions$find.title) ?? ' - ';
      }).filter(Boolean).join(' / ')) ?? '';
      const hasSubtotals = xs.some(x => String(x.id).includes('∑'));
      if (!hasSubtotals) {
        dataTotal = ys.map((y, yi) => (tree || []).reduce((a, item) => a + item.values[yi], 0));
      }
      const hasExpandAll = utils_.vizel_config.getOption(cfg, 'ExpandAll');
      let expanded = {};
      if (hasExpandAll) {
        const walkItem = treeItem => {
          if (treeItem.children) {
            expanded[treeItem.fullId] = true;
            treeItem.children.forEach(walkItem);
          }
        };
        tree.forEach(walkItem);
      }
      _this.setState({
        ltTitle,
        tree,
        dataTotal,
        expanded
      });
    });
    this._expandAll = () => {
      const {
        tree
      } = this.state;
      let expanded = {};
      const walkItem = treeItem => {
        if (treeItem.children) {
          expanded[treeItem.fullId] = true;
          treeItem.children.forEach(walkItem);
        }
      };
      tree.forEach(walkItem);
      this.setState({
        expanded
      });
    };
    this._collapseAll = () => {
      this.setState({
        expanded: {}
      });
    };
    this._getStyle = (type = 'dimension', {
      xi,
      yi,
      values,
      level,
      children
    }) => {
      var _cfg$dataSource2, _li$textStyle;
      const {
        cfg,
        subspace
      } = this.props;
      const display = (cfg == null ? void 0 : cfg.display) ?? {};
      const widths = (display == null ? void 0 : display.widths) || [];
      let x = subspace.getX(xi || 0);
      const y = subspace.getY(yi);
      let li = type === 'measure' ? utils_.vizel_config.getLegendItem(cfg, y) : (cfg == null ? void 0 : (_cfg$dataSource2 = cfg.dataSource) == null ? void 0 : _cfg$dataSource2.style[x.axisIds[level]]) || utils_.vizel_config.getLegendItem(cfg, x) || {};
      const valuesMap = {};
      if (values) {
        subspace.ys.forEach((sy, syi) => valuesMap[sy.id] = values[syi]);
      }
      let style = {};
      if (level != null) x = {
        ...x,
        axisIds: x.axisIds.slice(0, level + 1)
      };
      let context = getLpeContext(x, y, valuesMap, children || []);
      style = {
        ...style,
        ...li,
        ...li.textStyle,
        color: processLpe((_li$textStyle = li.textStyle) == null ? void 0 : _li$textStyle.color, context),
        backgroundColor: processLpe(li.backgroundColor, context),
        width: widths.length > yi + 1 ? widths[yi + 1] : li == null ? void 0 : li.width,
        expandable: processLpe(li.expandable, context),
        hidden: Array.isArray(li.options) && li.options.includes('Hidden')
      };
      if (li.headerStyle) {
        var _li$headerStyle$textS;
        style = {
          ...style,
          headerStyle: {
            ...li.headerStyle,
            ...li.headerStyle.textStyle,
            color: processLpe((_li$headerStyle$textS = li.headerStyle.textStyle) == null ? void 0 : _li$headerStyle$textS.color, context),
            backgroundColor: processLpe(li.headerStyle.backgroundColor, context)
          }
        };
      }
      if (li.footerStyle) {
        var _li$footerStyle$textS;
        style = {
          ...style,
          footerStyle: {
            ...li.footerStyle,
            ...li.footerStyle.textStyle,
            color: processLpe((_li$footerStyle$textS = li.footerStyle.textStyle) == null ? void 0 : _li$footerStyle$textS.color, context),
            backgroundColor: processLpe(li.footerStyle.backgroundColor, context)
          }
        };
      }
      return style;
    };
    const saveAbilities = [];
    if (Array.isArray((_props$cfg = props.cfg) == null ? void 0 : _props$cfg.report)) props.cfg.report.forEach(r => saveAbilities.push(`report-${r.output}`));
    if (props.onVizelPropertiesChanged) props.onVizelPropertiesChanged({
      saveAbilities
    }, this);
  }
  componentDidMount() {
    this._reloadData();
  }
  componentDidUpdate(prevProps) {
    if (this.props.subspace !== prevProps.subspace) {
      this._reloadData();
    }
  }
  _onClickItem(e, renderItem) {
    e.stopPropagation();
    let expanded = {
      ...this.state.expanded
    };
    if (expanded[renderItem.fullId]) delete expanded[renderItem.fullId];else expanded[renderItem.fullId] = true;
    this.setState({
      expanded
    });
  }
  _onClickDataPoint(event, {
    v,
    seriesIndex,
    categoryIndex,
    level
  }) {
    const {
      subspace
    } = this.props;
    // @ts-ignore
    const controller = this.props.controller ?? this.props.cfg.controller;
    const z = subspace.getZ(0);
    const y = subspace.getY(seriesIndex);
    let x = subspace.getX(categoryIndex);
    if (!z || !y || !x) return;
    x = {
      ...x,
      ids: x.ids.slice(0, level + 1),
      axisIds: x.axisIds.slice(0, level + 1)
    };
    let filters = {};
    if (subspace.koob) {
      const modelFilter = {
        ...subspace.filters
      };
      [z, y, x].forEach(axis => {
        ((axis == null ? void 0 : axis.axisIds) ?? []).forEach((axisId, i) => {
          const id = axis.ids[i];
          const formula = axis.formula[i].replace(/:.*/g, '');
          if (axisId !== 'measures') modelFilter[formula] = ['=', id];
        });
      });
      filters = modelFilter;
    }
    const {
      m,
      l,
      p
    } = subspace.getMLP(z, y, x);
    controller.handleVCPClick(event, {
      x,
      y,
      z,
      m,
      l,
      p,
      v,
      filters
    });
  }
  renderTree(tree) {
    const {
      subspace,
      cfg
    } = this.props;
    const {
      expanded
    } = this.state;
    return tree.map((renderItem, xi) => {
      const xCellStyle = this._getStyle('dimension', {
        xi: renderItem.index,
        level: renderItem.level,
        children: renderItem.children
      });
      return /*#__PURE__*/external_react_.createElement(external_react_.Fragment, null, /*#__PURE__*/external_react_.createElement("tr", {
        key: xi,
        className: renderItem.level >= 3 ? 'hasValue' : 'hasNoValue'
      }, /*#__PURE__*/external_react_.createElement("td", {
        onClick: e => this._onClickDataPoint(e, {
          v: renderItem.title,
          categoryIndex: renderItem.index,
          seriesIndex: 0,
          level: renderItem.level
        }),
        style: {
          ...xCellStyle,
          paddingLeft: `${2.5 * renderItem.level + 1}rem`
        },
        title: renderItem.title
      }, !!renderItem.children && (xCellStyle.expandable !== false ? /*#__PURE__*/external_react_.createElement("span", {
        className: "CustomVizelTree__CollapseIcon",
        onClick: e => this._onClickItem(e, renderItem)
      }, expanded[renderItem.fullId] ? '-' : '+') : /*#__PURE__*/external_react_.createElement("span", {
        className: "CustomVizelTree__Padding"
      })), renderItem.title), subspace.ys.map((y, yi) => {
        var _vizel_config$getLege;
        const value = renderItem.values[yi];
        const format = (_vizel_config$getLege = utils_.vizel_config.getLegendItem(cfg, y)) == null ? void 0 : _vizel_config$getLege.format;
        const fValue = !isNaN(value) ? (0,utils_.formatNumberWithString)(value, format || '-# ###.00') : value;
        const yCellStyle = this._getStyle('measure', {
          xi: renderItem.index,
          yi,
          values: renderItem.values,
          level: renderItem.level
        });
        return !yCellStyle.hidden && /*#__PURE__*/external_react_.createElement("td", {
          key: yi,
          className: renderItem.level >= 3 ? 'value' : 'null',
          onClick: e => this._onClickDataPoint(e, {
            v: renderItem.values[yi],
            categoryIndex: renderItem.index,
            seriesIndex: yi,
            level: renderItem.level
          }),
          title: fValue,
          style: yCellStyle
        }, fValue);
      })), !!renderItem.children && xCellStyle.expandable !== false && expanded[renderItem.fullId] && this.renderTree(renderItem.children));
    });
  }
  render() {
    const {
      cfg,
      subspace
    } = this.props;
    const {
      tree,
      ltTitle,
      expanded,
      dataTotal
    } = this.state;
    if (!tree) return null;
    const displayOverall = utils_.vizel_config.getOption(cfg, 'DisplayOverall');
    const hasExpandAllButton = utils_.vizel_config.getOption(cfg, 'ExpandAllButton');
    const display = (cfg == null ? void 0 : cfg.display) ?? {};
    const xStyle = this._getStyle('dimension', {});
    return /*#__PURE__*/external_react_.createElement("div", {
      className: "TreeTableSimple"
    }, /*#__PURE__*/external_react_.createElement("table", null, /*#__PURE__*/external_react_.createElement("thead", null, /*#__PURE__*/external_react_.createElement("tr", null, /*#__PURE__*/external_react_.createElement("th", {
      className: "TreeTableSimple__Th0",
      style: {
        ...xStyle.headerStyle,
        width: xStyle.width
      },
      title: (display == null ? void 0 : display.dimensionsTitle) || ltTitle
    }, !!hasExpandAllButton && (Object.values(expanded).length === 0 ? /*#__PURE__*/external_react_.createElement(IconExpand, {
      onClick: this._expandAll
    }) : /*#__PURE__*/external_react_.createElement(IconCollapse, {
      onClick: this._collapseAll
    })), /*#__PURE__*/external_react_.createElement("span", null, (display == null ? void 0 : display.dimensionsTitle) || ltTitle)), subspace.ys.map((y, yi) => {
      const yStyle = this._getStyle('measure', {
        yi
      });
      return !yStyle.hidden && /*#__PURE__*/external_react_.createElement("th", {
        key: yi,
        style: {
          ...yStyle.headerStyle,
          width: yStyle.width
        },
        title: y.title
      }, y.title);
    }))), /*#__PURE__*/external_react_.createElement("tbody", null, this.renderTree(tree)), !!displayOverall && /*#__PURE__*/external_react_.createElement("tfoot", null, /*#__PURE__*/external_react_.createElement("tr", null, /*#__PURE__*/external_react_.createElement("th", {
      style: {
        ...(xStyle == null ? void 0 : xStyle.footerStyle)
      }
    }, "\u0418\u0442\u043E\u0433\u043E"), subspace.ys.map((y, yi) => {
      const yStyle = this._getStyle('measure', {
        yi
      });
      return !yStyle.hidden && /*#__PURE__*/external_react_.createElement("td", {
        key: yi,
        style: {
          ...(yStyle == null ? void 0 : yStyle.footerStyle)
        }
      }, (0,utils_.formatNumberWithString)(dataTotal[yi] ?? 0, yStyle.format || '-# ###.00'));
    })))));
  }
}
/* harmony default export */ const index = (TreeTableSimple);
function makeXsTree(cfg, xs, ys, data, sortBy = '') {
  let tree = [];
  let cache = {};
  let sort = sortBy !== '' ? {
    index: ys.findIndex(el => el.id === sortBy.slice(1)),
    dir: sortBy[0] === '-' ? 'desc' : 'asc'
  } : null;
  const hasSubtotals = xs.some(x => x.id.includes('∑'));
  xs = xs.map((x, xi) => ({
    ...x,
    index: xi
  }));
  if (hasSubtotals) xs.sort(liftSubtotals);
  xs.forEach((x, xi) => {
    const ids = x.ids;
    let combinedId = '';
    let parentItem = null;
    for (let i = 0; i < ids.length; i++) {
      var _ids$i;
      const isSubtotal = (_ids$i = ids[i]) == null ? void 0 : _ids$i.startsWith('∑');
      combinedId += ':' + ids[i];
      if (!cache[combinedId] && !isSubtotal) {
        var _cfg$dataSource3;
        const level = parentItem ? parentItem.level + 1 : 0;
        const li = (cfg == null ? void 0 : (_cfg$dataSource3 = cfg.dataSource) == null ? void 0 : _cfg$dataSource3.style[x.axisIds[level]]) || {};
        const context = getLpeContext(x);
        const title = processLpe(li.title || x.titles[i], context);
        const newItem = {
          title,
          level,
          id: ids[i],
          index: x.index,
          parent: parentItem,
          fullId: combinedId,
          children: i === ids.length - 1 ? null : [],
          fullTitle: parentItem ? parentItem.fullTitle + ' / ' + title : title,
          values: ys.map((y, yi) => hasSubtotals ? data[yi][x.index] : 0)
        };
        if (parentItem) parentItem.children.push(newItem);else tree.push(newItem);
        cache[combinedId] = newItem;
      }
      parentItem = cache[combinedId];
    }
    if (!hasSubtotals) {
      ys.forEach((y, yi) => {
        for (let i = parentItem; !!i; i = i.parent) {
          const value = data[yi][xi] || 0;
          if (!isNaN(value)) i.values[yi] += value;else i.values[yi] = value;
        }
      });
    }
  });
  let sortingCallback = (c1, c2) => sort ? sort.dir === 'desc' ? c2.values[sort.index] - c1.values[sort.index] : c1.values[sort.index] - c2.values[sort.index] : c2.values[1] - c1.values[1];
  const sortRec = tree => {
    if (!tree.children) return;
    tree.children.forEach(sortRec);
    tree.children.sort(sortingCallback);
  };

  // console.time('tree::sort');
  sortRec({
    children: tree
  });
  // console.timeEnd('tree::sort');

  return tree;
}
const liftSubtotals = (a, b) => {
  const findSubtotalIndex = row => row.ids.findIndex(id => id == null ? void 0 : id.startsWith('∑'));
  const aIndex = findSubtotalIndex(a);
  const bIndex = findSubtotalIndex(b);
  if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
  if (aIndex !== -1) return -1;
  if (bIndex !== -1) return 1;
  return 0;
};
const processLpe = (value, context) => String(value).startsWith('lpe:') ? (0,utils_.lpeRun)(value, context) : value;
const getLpeContext = (x, y, valuesMap, children) => {
  let context = {
    children
  };
  [x, y].filter(Boolean).map(entity => {
    var _entity$axisIds;
    (_entity$axisIds = entity.axisIds) == null ? void 0 : _entity$axisIds.map((axisId, axisIndex) => {
      if (axisId !== 'measures') {
        context[axisId] = entity.ids[axisIndex];
      } else {
        var _x$_raw;
        // @ts-ignore
        const value = valuesMap[entity.id] || ((_x$_raw = x._raw) == null ? void 0 : _x$_raw[entity.id]);
        context = {
          ...context,
          ...valuesMap,
          value,
          v: value
        };
      }
    });
  });
  return context;
};
const IconCollapse = ({
  onClick
}) => /*#__PURE__*/external_react_.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  version: "1.1",
  x: "0px",
  y: "0px",
  viewBox: "0 0 100 100",
  onClick: onClick
}, /*#__PURE__*/external_react_.createElement("path", {
  d: "M29.6,50.8l3.7,3.4l16.6-18.2l16.9,17.9l3.6-3.4L49.8,28.6L29.6,50.8z"
}), /*#__PURE__*/external_react_.createElement("path", {
  d: "M29.6,68l3.7,3.4l16.6-18.2l16.9,17.9l3.6-3.4L49.8,45.9L29.6,68z"
}));
const IconExpand = ({
  onClick
}) => /*#__PURE__*/external_react_.createElement("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  version: "1.1",
  x: "0px",
  y: "0px",
  viewBox: "0 0 100 100",
  onClick: onClick
}, /*#__PURE__*/external_react_.createElement("path", {
  d: "M70.4460068,51.6058578l-3.6915665-3.3786774L50.1276855,66.4678879L33.1863136,48.5190582l-3.6323166,3.4423599  l20.6347618,21.8114014L70.4460068,51.6058578z"
}), /*#__PURE__*/external_react_.createElement("path", {
  d: "M70.4460068,34.3558578l-3.6915665-3.3786774L50.1276855,49.2178879L33.1863136,31.2690582l-3.6323166,3.4423599  l20.6347618,21.8114014L70.4460068,34.3558578z"
}));
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map