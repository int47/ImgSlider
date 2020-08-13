(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["imgSlider"] = factory();
	else
		root["imgSlider"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./imgSlider.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../icons/nextButton.svg":
/*!*******************************!*\
  !*** ../icons/nextButton.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 444.819 444.819\" style=\"enable-background:new 0 0 444.819 444.819;\" xml:space=\"preserve\"><g><path d=\"M352.025,196.712L165.884,10.848C159.029,3.615,150.469,0,140.187,0c-10.282,0-18.842,3.619-25.697,10.848L92.792,32.264 c-7.044,7.043-10.566,15.604-10.566,25.692c0,9.897,3.521,18.56,10.566,25.981l138.753,138.473L92.786,361.168 c-7.042,7.043-10.564,15.604-10.564,25.693c0,9.896,3.521,18.562,10.564,25.98l21.7,21.413 c7.043,7.043,15.612,10.564,25.697,10.564c10.089,0,18.656-3.521,25.697-10.564l186.145-185.864 c7.046-7.423,10.571-16.084,10.571-25.981C362.597,212.321,359.071,203.755,352.025,196.712z\"></path></g></svg>"

/***/ }),

/***/ "../icons/pauseButton.svg":
/*!********************************!*\
  !*** ../icons/pauseButton.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 45.975 45.975\" style=\"enable-background:new 0 0 45.975 45.975;\" xml:space=\"preserve\"><g><g><path d=\"M13.987,0c-2.762,0-5,2.239-5,5v35.975c0,2.763,2.238,5,5,5s5-2.238,5-5V5C18.987,2.238,16.75,0,13.987,0z\"></path><path d=\"M31.987,0c-2.762,0-5,2.239-5,5v35.975c0,2.762,2.238,5,5,5s5-2.238,5-5V5C36.987,2.239,34.749,0,31.987,0z\"></path></g></g></svg>"

/***/ }),

/***/ "../icons/playButton.svg":
/*!*******************************!*\
  !*** ../icons/playButton.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 163.861 163.861\" style=\"enable-background:new 0 0 163.861 163.861;\" xml:space=\"preserve\"><g><path d=\"M34.857,3.613C20.084-4.861,8.107,2.081,8.107,19.106v125.637c0,17.042,11.977,23.975,26.75,15.509L144.67,97.275 c14.778-8.477,14.778-22.211,0-30.686L34.857,3.613z\"></path></g></svg>"

/***/ }),

/***/ "../icons/previousButton.svg":
/*!***********************************!*\
  !*** ../icons/previousButton.svg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 444.531 444.531\" style=\"enable-background:new 0 0 444.531 444.531;\" xml:space=\"preserve\"><g><path d=\"M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835 l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425 c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564 s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978 L213.13,222.409z\"></path></g></svg>"

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!./style.css":
/*!********************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--5-1!./style.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".slider {\r\n    overflow: hidden;\r\n    position: relative;\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    max-width: 500px;\r\n    cursor: grab;\r\n}\r\n\r\n.slides-collection {\r\n    display: flex;\r\n    align-self: normal;\r\n    transition: transform 0.5s ease-in-out;\r\n}\r\n\r\n.single-slide {\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    user-select: none;\r\n}\r\n\r\n.slide-image {\r\n    display: inline-block;\r\n    height: auto;\r\n    max-width: 100%;\r\n}\r\n\r\n.slider-button {\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 35px;\r\n    height: 35px;\r\n    color: black;\r\n    background: white;\r\n    border-radius: 50%;\r\n    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);\r\n    text-decoration: none;\r\n    transition: transform 0.2s ease-in-out;\r\n}\r\n\r\n.slider-button:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.slider-button svg {\r\n    width: 15px;\r\n    transition: transform 0.2s ease-in-out;\r\n}\r\n\r\n.previous-button {\r\n    left: 0;\r\n}\r\n\r\n.next-button {\r\n    right: 0;\r\n}\r\n\r\n.playpause-button {\r\n    display: none;\r\n}\r\n\r\n.pausedState {\r\n    position: absolute;\r\n    transform: scale(0);\r\n}", "",{"version":3,"sources":["style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,sCAAsC;AAC1C;;AAEA;IACI,cAAc;IACd,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,2CAA2C;IAC3C,qBAAqB;IACrB,sCAAsC;AAC1C;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,sCAAsC;AAC1C;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB","file":"style.css","sourcesContent":[".slider {\r\n    overflow: hidden;\r\n    position: relative;\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    max-width: 500px;\r\n    cursor: grab;\r\n}\r\n\r\n.slides-collection {\r\n    display: flex;\r\n    align-self: normal;\r\n    transition: transform 0.5s ease-in-out;\r\n}\r\n\r\n.single-slide {\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    user-select: none;\r\n}\r\n\r\n.slide-image {\r\n    display: inline-block;\r\n    height: auto;\r\n    max-width: 100%;\r\n}\r\n\r\n.slider-button {\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 35px;\r\n    height: 35px;\r\n    color: black;\r\n    background: white;\r\n    border-radius: 50%;\r\n    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);\r\n    text-decoration: none;\r\n    transition: transform 0.2s ease-in-out;\r\n}\r\n\r\n.slider-button:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.slider-button svg {\r\n    width: 15px;\r\n    transition: transform 0.2s ease-in-out;\r\n}\r\n\r\n.previous-button {\r\n    left: 0;\r\n}\r\n\r\n.next-button {\r\n    right: 0;\r\n}\r\n\r\n.playpause-button {\r\n    display: none;\r\n}\r\n\r\n.pausedState {\r\n    position: absolute;\r\n    transform: scale(0);\r\n}"]}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"slider": "slider",
	"slides-collection": "slides-collection",
	"slidesCollection": "slides-collection",
	"single-slide": "single-slide",
	"singleSlide": "single-slide",
	"slide-image": "slide-image",
	"slideImage": "slide-image",
	"slider-button": "slider-button",
	"sliderButton": "slider-button",
	"previous-button": "previous-button",
	"previousButton": "previous-button",
	"next-button": "next-button",
	"nextButton": "next-button",
	"playpause-button": "playpause-button",
	"playpauseButton": "playpause-button",
	"pausedState": "pausedState"
};
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./imgSlider.js":
/*!**********************!*\
  !*** ./imgSlider.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sliderLayout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sliderLayout.js */ "./sliderLayout.js");




function imgSlider(sliderId, options) {
  if (document.getElementById(sliderId) === null) {
    console.log("Element with id=\"".concat(sliderId, "\" not found."));
    return;
  }

  var launchSlider = function () {
    return function (sliderId, _ref) {
      var _ref$autoplayEnabled = _ref.autoplayEnabled,
          autoplayEnabled = _ref$autoplayEnabled === void 0 ? false : _ref$autoplayEnabled,
          _ref$autoplayInterval = _ref.autoplayInterval,
          autoplayInterval = _ref$autoplayInterval === void 0 ? 5000 : _ref$autoplayInterval,
          _ref$buttonsVisible = _ref.buttonsVisible,
          buttonsVisible = _ref$buttonsVisible === void 0 ? true : _ref$buttonsVisible,
          _ref$maxWidth = _ref.maxWidth,
          maxWidth = _ref$maxWidth === void 0 ? '500px' : _ref$maxWidth,
          _ref$maxHeight = _ref.maxHeight,
          maxHeight = _ref$maxHeight === void 0 ? '500px' : _ref$maxHeight;
      Object(_sliderLayout_js__WEBPACK_IMPORTED_MODULE_0__["default"])(sliderId);
      var slider = document.getElementById(sliderId),
          slidesCollection = slider.getElementsByClassName('slides-collection')[0],
          singleSlides = slider.getElementsByClassName('single-slide'),
          playpauseButton = slider.getElementsByClassName('playpause-button')[0],
          transformStep = 100,
          slidesArray = [];
      var currentPosition = 0,
          transformValue = 0,
          sliderTimerId,
          isSlideInTransition = false;
      slider.style.maxWidth = maxWidth;
      slider.style.maxHeight = maxHeight;

      if (singleSlides.length > 0) {
        for (var i = 0; i < singleSlides.length; i++) {
          slidesArray.push({
            item: singleSlides[i],
            position: i,
            transform: 0
          });
        }

        if (slidesArray.length === 1) {
          var copy = singleSlides[0].cloneNode(true);
          singleSlides[0].after(copy);
          slidesArray.push({
            item: copy,
            position: 1,
            transform: 0
          });
        }
      } else {
        console.log("Element ".concat(sliderId, " doesn't contain any slides."));
        return;
      }

      var position = {
        getMinSlideIndex: function getMinSlideIndex() {
          var minSlide = slidesArray.reduce(function (previous, current) {
            return previous.position < current.position ? previous : current;
          });
          return slidesArray.indexOf(minSlide);
        },
        getMaxSlideIndex: function getMaxSlideIndex() {
          var maxSlide = slidesArray.reduce(function (previous, current) {
            return previous.position > current.position ? previous : current;
          });
          return slidesArray.indexOf(maxSlide);
        },
        getMinSlidePosition: function getMinSlidePosition() {
          return slidesArray[this.getMinSlideIndex()].position;
        },
        getMaxSlidePosition: function getMaxSlidePosition() {
          return slidesArray[this.getMaxSlideIndex()].position;
        }
      };

      function switchSlide(direction) {
        var nextSlide = 0;

        if (direction === 'next') {
          currentPosition++;

          if (currentPosition > position.getMaxSlidePosition()) {
            nextSlide = position.getMinSlideIndex();
            slidesArray[nextSlide].position = position.getMaxSlidePosition() + 1;
            slidesArray[nextSlide].transform += slidesArray.length * 100;
            slidesArray[nextSlide].item.style.transform = "translateX(".concat(slidesArray[nextSlide].transform, "%)");
          }

          transformValue -= transformStep;
        } else {
          currentPosition--;

          if (currentPosition < position.getMinSlidePosition()) {
            nextSlide = position.getMaxSlideIndex();
            slidesArray[nextSlide].position = position.getMinSlidePosition() - 1;
            slidesArray[nextSlide].transform -= slidesArray.length * 100;
            slidesArray[nextSlide].item.style.transform = "translateX(".concat(slidesArray[nextSlide].transform, "%)");
          }

          transformValue += transformStep;
        }

        slidesCollection.style.transitionDuration = '0.5s';
        slidesCollection.style.transform = "translateX(".concat(transformValue, "%)");
      }

      function addEventListeners() {
        slidesCollection.addEventListener('transitionstart', function () {
          isSlideInTransition = true;
        });
        slidesCollection.addEventListener('transitionend', function () {
          isSlideInTransition = false;

          if (Math.abs(currentPosition) === slidesArray.length) {
            currentPosition = 0;
            transformValue = 0;
            slidesCollection.style.transitionDuration = '0s';
            slidesCollection.style.transform = '';
            slidesArray.forEach(function (slide, i) {
              slide.position = i;
              slide.transform = 0;
              slide.item.style = '';
            });
          }
        });
        slider.getElementsByClassName('next-button')[0].addEventListener('click', function (e) {
          e.preventDefault();

          if (!isSlideInTransition) {
            switchSlide('next');
          }

          autoplayStart();
        });
        slider.getElementsByClassName('previous-button')[0].addEventListener('click', function (e) {
          e.preventDefault();

          if (!isSlideInTransition) {
            switchSlide('previous');
          }

          autoplayStart();
        });
        playpauseButton.addEventListener('click', function (e) {
          e.preventDefault();

          if (playpauseButton.firstChild.classList.contains('pausedState')) {
            playpauseButton.firstChild.classList.remove('pausedState');
            playpauseButton.lastChild.style.display = 'none';
            playSlider();
          } else {
            playpauseButton.firstChild.classList.add('pausedState');
            playpauseButton.lastChild.style.display = 'flex';
            pauseSlider();
          }
        });
        var startX = 0;
        slider.addEventListener('touchstart', function (e) {
          startX = e.changedTouches[0].clientX;
          autoplayStart();
        });
        slider.addEventListener('touchend', function (e) {
          var endX = e.changedTouches[0].clientX,
              shift = endX - startX;

          if (shift > 10) {
            switchSlide('previous');
          } else if (shift < -10) {
            switchSlide('next');
          }

          autoplayStart();
        });
        slider.addEventListener('mousedown', function (e) {
          startX = e.clientX;
          autoplayStart();
        });
        slider.addEventListener('mouseup', function (e) {
          var endX = e.clientX,
              shift = endX - startX;

          if (shift > 10) {
            switchSlide('previous');
          } else if (shift < -10) {
            switchSlide('next');
          }

          autoplayStart();
        });

        if (buttonsVisible) {
          slider.addEventListener('mouseenter', function () {
            playpauseButton.style.display = 'flex';
          });
          slider.addEventListener('mouseleave', function () {
            playpauseButton.style.display = 'none';
          });
        } else {
          var sliderButtons = slider.getElementsByClassName('slider-button');
          sliderButtons.forEach(function (button) {
            button.style.display = 'none';
          });
        }
      }

      addEventListeners();

      function autoplayStart() {
        if (!autoplayEnabled) {
          playpauseButton.firstChild.classList.add('pausedState');
          return;
        }

        playpauseButton.lastChild.style.display = 'none';
        autoplayStop();
        sliderTimerId = setInterval(function () {
          switchSlide('next');
        }, autoplayInterval);
      }

      function autoplayStop() {
        clearInterval(sliderTimerId);
      }

      autoplayStart();

      function playSlider() {
        autoplayEnabled = true;
        autoplayStart();
      }

      function pauseSlider() {
        autoplayEnabled = false;
        autoplayStop();
      }

      return {
        play: playSlider,
        pause: pauseSlider
      };
    };
  }();

  return launchSlider(sliderId, options);
}

/* harmony default export */ __webpack_exports__["default"] = (imgSlider);

/***/ }),

/***/ "./sliderLayout.js":
/*!*************************!*\
  !*** ./sliderLayout.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_nextButton_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/nextButton.svg */ "../icons/nextButton.svg");
/* harmony import */ var _icons_nextButton_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_icons_nextButton_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons_previousButton_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/previousButton.svg */ "../icons/previousButton.svg");
/* harmony import */ var _icons_previousButton_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_icons_previousButton_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_pauseButton_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/pauseButton.svg */ "../icons/pauseButton.svg");
/* harmony import */ var _icons_pauseButton_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_icons_pauseButton_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_playButton_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/playButton.svg */ "../icons/playButton.svg");
/* harmony import */ var _icons_playButton_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_icons_playButton_svg__WEBPACK_IMPORTED_MODULE_4__);








function createSliderLayout(sliderId) {
  var sliderContainer = document.getElementById(sliderId);
  var imgElements = sliderContainer.children;
  imgElements = Array.prototype.slice.call(imgElements);

  if (imgElements.length > 0) {
    var slidesCollection = document.createElement('div');
    slidesCollection.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.slidesCollection);
    imgElements.forEach(function (element) {
      if (element.tagName === 'IMG') {
        element.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.slideImage);
        element.setAttribute('draggable', 'false');
        var singleSlideContainer = document.createElement('div');
        singleSlideContainer.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.singleSlide);
        singleSlideContainer.appendChild(element);
        slidesCollection.appendChild(singleSlideContainer);
      } else {
        element.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.singleSlide);
        slidesCollection.appendChild(element);
      }
    });
    sliderContainer.appendChild(slidesCollection);
    sliderContainer.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.slider);
    var nextButton = document.createElement('a');
    nextButton.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.nextButton);
    nextButton.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.sliderButton);
    nextButton.innerHTML = _icons_nextButton_svg__WEBPACK_IMPORTED_MODULE_1___default.a;
    nextButton.href = '#';
    var previousButton = document.createElement('a');
    previousButton.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.previousButton);
    previousButton.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.sliderButton);
    previousButton.innerHTML = _icons_previousButton_svg__WEBPACK_IMPORTED_MODULE_2___default.a;
    previousButton.href = '#';
    var playpauseButton = document.createElement('a');
    playpauseButton.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.playpauseButton);
    playpauseButton.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.sliderButton);
    playpauseButton.innerHTML = _icons_pauseButton_svg__WEBPACK_IMPORTED_MODULE_3___default.a + _icons_playButton_svg__WEBPACK_IMPORTED_MODULE_4___default.a;
    playpauseButton.href = '#';
    sliderContainer.appendChild(previousButton);
    sliderContainer.appendChild(nextButton);
    sliderContainer.appendChild(playpauseButton);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (createSliderLayout);

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-1!./style.css */ "../node_modules/css-loader/dist/cjs.js?!./style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWdTbGlkZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2ltZ1NsaWRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbWdTbGlkZXIvLi4vaWNvbnMvbmV4dEJ1dHRvbi5zdmciLCJ3ZWJwYWNrOi8vaW1nU2xpZGVyLy4uL2ljb25zL3BhdXNlQnV0dG9uLnN2ZyIsIndlYnBhY2s6Ly9pbWdTbGlkZXIvLi4vaWNvbnMvcGxheUJ1dHRvbi5zdmciLCJ3ZWJwYWNrOi8vaW1nU2xpZGVyLy4uL2ljb25zL3ByZXZpb3VzQnV0dG9uLnN2ZyIsIndlYnBhY2s6Ly9pbWdTbGlkZXIvLi9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vaW1nU2xpZGVyLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaW1nU2xpZGVyLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9pbWdTbGlkZXIvLi9pbWdTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vaW1nU2xpZGVyLy4vc2xpZGVyTGF5b3V0LmpzIiwid2VicGFjazovL2ltZ1NsaWRlci8uL3N0eWxlLmNzcz81M2U3Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ1c2VTb3VyY2VNYXAiLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJjb25jYXQiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYVF1ZXJ5IiwiZGVkdXBlIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImxlbmd0aCIsImlkIiwiX2kiLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJzb3VyY2VNYXBwaW5nIiwidG9Db21tZW50Iiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290Iiwic291cmNlTWFwIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImltZ1NsaWRlciIsInNsaWRlcklkIiwib3B0aW9ucyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25zb2xlIiwibG9nIiwibGF1bmNoU2xpZGVyIiwiYXV0b3BsYXlFbmFibGVkIiwiYXV0b3BsYXlJbnRlcnZhbCIsImJ1dHRvbnNWaXNpYmxlIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJjcmVhdGVTbGlkZXJMYXlvdXQiLCJzbGlkZXIiLCJzbGlkZXNDb2xsZWN0aW9uIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNpbmdsZVNsaWRlcyIsInBsYXlwYXVzZUJ1dHRvbiIsInRyYW5zZm9ybVN0ZXAiLCJzbGlkZXNBcnJheSIsImN1cnJlbnRQb3NpdGlvbiIsInRyYW5zZm9ybVZhbHVlIiwic2xpZGVyVGltZXJJZCIsImlzU2xpZGVJblRyYW5zaXRpb24iLCJzdHlsZSIsInBvc2l0aW9uIiwidHJhbnNmb3JtIiwiY29weSIsImNsb25lTm9kZSIsImFmdGVyIiwiZ2V0TWluU2xpZGVJbmRleCIsIm1pblNsaWRlIiwicmVkdWNlIiwicHJldmlvdXMiLCJjdXJyZW50IiwiaW5kZXhPZiIsImdldE1heFNsaWRlSW5kZXgiLCJtYXhTbGlkZSIsImdldE1pblNsaWRlUG9zaXRpb24iLCJnZXRNYXhTbGlkZVBvc2l0aW9uIiwic3dpdGNoU2xpZGUiLCJkaXJlY3Rpb24iLCJuZXh0U2xpZGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJhZGRFdmVudExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJNYXRoIiwiYWJzIiwiZm9yRWFjaCIsInNsaWRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYXV0b3BsYXlTdGFydCIsImZpcnN0Q2hpbGQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImxhc3RDaGlsZCIsImRpc3BsYXkiLCJwbGF5U2xpZGVyIiwiYWRkIiwicGF1c2VTbGlkZXIiLCJzdGFydFgiLCJjaGFuZ2VkVG91Y2hlcyIsImNsaWVudFgiLCJlbmRYIiwic2hpZnQiLCJzbGlkZXJCdXR0b25zIiwiYnV0dG9uIiwiYXV0b3BsYXlTdG9wIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicGxheSIsInBhdXNlIiwic2xpZGVyQ29udGFpbmVyIiwiaW1nRWxlbWVudHMiLCJjaGlsZHJlbiIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlcyIsImVsZW1lbnQiLCJ0YWdOYW1lIiwic2xpZGVJbWFnZSIsInNldEF0dHJpYnV0ZSIsInNpbmdsZVNsaWRlQ29udGFpbmVyIiwic2luZ2xlU2xpZGUiLCJhcHBlbmRDaGlsZCIsIm5leHRCdXR0b24iLCJzbGlkZXJCdXR0b24iLCJpbm5lckhUTUwiLCJuZXh0QnV0dG9uSWNvbiIsImhyZWYiLCJwcmV2aW91c0J1dHRvbiIsInByZXZpb3VzQnV0dG9uSWNvbiIsInBhdXNlQnV0dG9uSWNvbiIsInBsYXlCdXR0b25JY29uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QUFlLENBQUNlLFdBQWhCLENBQTRCeEUsZUFBNUI7QUFDSDtBQUNKOztBQUVjTCxpRkFBZixFOzs7Ozs7Ozs7OztBQzNEQSxVQUFVLG1CQUFPLENBQUMsb0pBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLDBIQUFnRTs7QUFFbEc7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoiaW1nU2xpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiaW1nU2xpZGVyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImltZ1NsaWRlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbWdTbGlkZXIuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJDYXBhXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgNDQ0LjgxOSA0NDQuODE5XFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NDQuODE5IDQ0NC44MTk7XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48Zz48cGF0aCBkPVxcXCJNMzUyLjAyNSwxOTYuNzEyTDE2NS44ODQsMTAuODQ4QzE1OS4wMjksMy42MTUsMTUwLjQ2OSwwLDE0MC4xODcsMGMtMTAuMjgyLDAtMTguODQyLDMuNjE5LTI1LjY5NywxMC44NDhMOTIuNzkyLDMyLjI2NCBjLTcuMDQ0LDcuMDQzLTEwLjU2NiwxNS42MDQtMTAuNTY2LDI1LjY5MmMwLDkuODk3LDMuNTIxLDE4LjU2LDEwLjU2NiwyNS45ODFsMTM4Ljc1MywxMzguNDczTDkyLjc4NiwzNjEuMTY4IGMtNy4wNDIsNy4wNDMtMTAuNTY0LDE1LjYwNC0xMC41NjQsMjUuNjkzYzAsOS44OTYsMy41MjEsMTguNTYyLDEwLjU2NCwyNS45OGwyMS43LDIxLjQxMyBjNy4wNDMsNy4wNDMsMTUuNjEyLDEwLjU2NCwyNS42OTcsMTAuNTY0YzEwLjA4OSwwLDE4LjY1Ni0zLjUyMSwyNS42OTctMTAuNTY0bDE4Ni4xNDUtMTg1Ljg2NCBjNy4wNDYtNy40MjMsMTAuNTcxLTE2LjA4NCwxMC41NzEtMjUuOTgxQzM2Mi41OTcsMjEyLjMyMSwzNTkuMDcxLDIwMy43NTUsMzUyLjAyNSwxOTYuNzEyelxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkNhcGFfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCA0NS45NzUgNDUuOTc1XFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NS45NzUgNDUuOTc1O1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+PGc+PGc+PHBhdGggZD1cXFwiTTEzLjk4NywwYy0yLjc2MiwwLTUsMi4yMzktNSw1djM1Ljk3NWMwLDIuNzYzLDIuMjM4LDUsNSw1czUtMi4yMzgsNS01VjVDMTguOTg3LDIuMjM4LDE2Ljc1LDAsMTMuOTg3LDB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTMxLjk4NywwYy0yLjc2MiwwLTUsMi4yMzktNSw1djM1Ljk3NWMwLDIuNzYyLDIuMjM4LDUsNSw1czUtMi4yMzgsNS01VjVDMzYuOTg3LDIuMjM5LDM0Ljc0OSwwLDMxLjk4NywwelxcXCI+PC9wYXRoPjwvZz48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJDYXBhXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYzLjg2MSAxNjMuODYxXFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNjMuODYxIDE2My44NjE7XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48Zz48cGF0aCBkPVxcXCJNMzQuODU3LDMuNjEzQzIwLjA4NC00Ljg2MSw4LjEwNywyLjA4MSw4LjEwNywxOS4xMDZ2MTI1LjYzN2MwLDE3LjA0MiwxMS45NzcsMjMuOTc1LDI2Ljc1LDE1LjUwOUwxNDQuNjcsOTcuMjc1IGMxNC43NzgtOC40NzcsMTQuNzc4LTIyLjIxMSwwLTMwLjY4NkwzNC44NTcsMy42MTN6XFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiQ2FwYV8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDQ0NC41MzEgNDQ0LjUzMVxcXCIgc3R5bGU9XFxcImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDQ0LjUzMSA0NDQuNTMxO1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+PGc+PHBhdGggZD1cXFwiTTIxMy4xMywyMjIuNDA5TDM1MS44OCw4My42NTNjNy4wNS03LjA0MywxMC41NjctMTUuNjU3LDEwLjU2Ny0yNS44NDFjMC0xMC4xODMtMy41MTgtMTguNzkzLTEwLjU2Ny0yNS44MzUgbC0yMS40MDktMjEuNDE2QzMyMy40MzIsMy41MjEsMzE0LjgxNywwLDMwNC42MzcsMHMtMTguNzkxLDMuNTIxLTI1Ljg0MSwxMC41NjFMOTIuNjQ5LDE5Ni40MjUgYy03LjA0NCw3LjA0My0xMC41NjYsMTUuNjU2LTEwLjU2NiwyNS44NDFzMy41MjEsMTguNzkxLDEwLjU2NiwyNS44MzdsMTg2LjE0NiwxODUuODY0YzcuMDUsNy4wNDMsMTUuNjYsMTAuNTY0LDI1Ljg0MSwxMC41NjQgczE4Ljc5NS0zLjUyMSwyNS44MzQtMTAuNTY0bDIxLjQwOS0yMS40MTJjNy4wNS03LjAzOSwxMC41NjctMTUuNjA0LDEwLjU2Ny0yNS42OTdjMC0xMC4wODUtMy41MTgtMTguNzQ2LTEwLjU2Ny0yNS45NzggTDIxMy4xMywyMjIuNDA5elxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zbGlkZXIge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICAgIGN1cnNvcjogZ3JhYjtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlcy1jb2xsZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24tc2VsZjogbm9ybWFsO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpbmdsZS1zbGlkZSB7XFxyXFxuICAgIGZsZXg6IDAgMCAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlLWltYWdlIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1idXR0b24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMzVweDtcXHJcXG4gICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLWJ1dHRvbiBzdmcge1xcclxcbiAgICB3aWR0aDogMTVweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5wcmV2aW91cy1idXR0b24ge1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV4dC1idXR0b24ge1xcclxcbiAgICByaWdodDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnBsYXlwYXVzZS1idXR0b24ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ucGF1c2VkU3RhdGUge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcInN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLDJDQUEyQztJQUMzQyxxQkFBcUI7SUFDckIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCXCIsXCJmaWxlXCI6XCJzdHlsZS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNsaWRlciB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gICAgY3Vyc29yOiBncmFiO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVzLWNvbGxlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1zZWxmOiBub3JtYWw7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2luZ2xlLXNsaWRlIHtcXHJcXG4gICAgZmxleDogMCAwIDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGUtaW1hZ2Uge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLWJ1dHRvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAzNXB4O1xcclxcbiAgICBoZWlnaHQ6IDM1cHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1idXR0b246aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItYnV0dG9uIHN2ZyB7XFxyXFxuICAgIHdpZHRoOiAxNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnByZXZpb3VzLWJ1dHRvbiB7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5uZXh0LWJ1dHRvbiB7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheXBhdXNlLWJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wYXVzZWRTdGF0ZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG59XCJdfV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInNsaWRlclwiOiBcInNsaWRlclwiLFxuXHRcInNsaWRlcy1jb2xsZWN0aW9uXCI6IFwic2xpZGVzLWNvbGxlY3Rpb25cIixcblx0XCJzbGlkZXNDb2xsZWN0aW9uXCI6IFwic2xpZGVzLWNvbGxlY3Rpb25cIixcblx0XCJzaW5nbGUtc2xpZGVcIjogXCJzaW5nbGUtc2xpZGVcIixcblx0XCJzaW5nbGVTbGlkZVwiOiBcInNpbmdsZS1zbGlkZVwiLFxuXHRcInNsaWRlLWltYWdlXCI6IFwic2xpZGUtaW1hZ2VcIixcblx0XCJzbGlkZUltYWdlXCI6IFwic2xpZGUtaW1hZ2VcIixcblx0XCJzbGlkZXItYnV0dG9uXCI6IFwic2xpZGVyLWJ1dHRvblwiLFxuXHRcInNsaWRlckJ1dHRvblwiOiBcInNsaWRlci1idXR0b25cIixcblx0XCJwcmV2aW91cy1idXR0b25cIjogXCJwcmV2aW91cy1idXR0b25cIixcblx0XCJwcmV2aW91c0J1dHRvblwiOiBcInByZXZpb3VzLWJ1dHRvblwiLFxuXHRcIm5leHQtYnV0dG9uXCI6IFwibmV4dC1idXR0b25cIixcblx0XCJuZXh0QnV0dG9uXCI6IFwibmV4dC1idXR0b25cIixcblx0XCJwbGF5cGF1c2UtYnV0dG9uXCI6IFwicGxheXBhdXNlLWJ1dHRvblwiLFxuXHRcInBsYXlwYXVzZUJ1dHRvblwiOiBcInBsYXlwYXVzZS1idXR0b25cIixcblx0XCJwYXVzZWRTdGF0ZVwiOiBcInBhdXNlZFN0YXRlXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IGNyZWF0ZVNsaWRlckxheW91dCBmcm9tICcuL3NsaWRlckxheW91dC5qcyc7XHJcblxyXG5mdW5jdGlvbiBpbWdTbGlkZXIgKHNsaWRlcklkLCBvcHRpb25zKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2xpZGVySWQpID09PSBudWxsKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYEVsZW1lbnQgd2l0aCBpZD1cIiR7c2xpZGVySWR9XCIgbm90IGZvdW5kLmApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsYXVuY2hTbGlkZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoXHJcbiAgICAgICAgICAgIHNsaWRlcklkLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheUVuYWJsZWQgPSBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5SW50ZXJ2YWwgPSA1MDAwLFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uc1Zpc2libGUgPSB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbWF4V2lkdGggPSAnNTAwcHgnLFxyXG4gICAgICAgICAgICAgICAgbWF4SGVpZ2h0ID0gJzUwMHB4JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgY3JlYXRlU2xpZGVyTGF5b3V0KHNsaWRlcklkKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNsaWRlcklkKSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc0NvbGxlY3Rpb24gPSBzbGlkZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2xpZGVzLWNvbGxlY3Rpb24nKVswXSxcclxuICAgICAgICAgICAgICAgIHNpbmdsZVNsaWRlcyA9IHNsaWRlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaW5nbGUtc2xpZGUnKSxcclxuICAgICAgICAgICAgICAgIHBsYXlwYXVzZUJ1dHRvbiA9IHNsaWRlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwbGF5cGF1c2UtYnV0dG9uJylbMF0sXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1TdGVwID0gMTAwLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzQXJyYXkgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSAwLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtVmFsdWUgPSAwLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVyVGltZXJJZCxcclxuICAgICAgICAgICAgICAgIGlzU2xpZGVJblRyYW5zaXRpb24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHNsaWRlci5zdHlsZS5tYXhXaWR0aCA9IG1heFdpZHRoO1xyXG4gICAgICAgICAgICBzbGlkZXIuc3R5bGUubWF4SGVpZ2h0ID0gbWF4SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHNpbmdsZVNsaWRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpbmdsZVNsaWRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc0FycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiBzaW5nbGVTbGlkZXNbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlc0FycmF5Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvcHkgPSBzaW5nbGVTbGlkZXNbMF0uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpbmdsZVNsaWRlc1swXS5hZnRlcihjb3B5KTtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTogY29weSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogMCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFbGVtZW50ICR7c2xpZGVySWR9IGRvZXNuJ3QgY29udGFpbiBhbnkgc2xpZGVzLmApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIGdldE1pblNsaWRlSW5kZXg6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaW5TbGlkZSA9IHNsaWRlc0FycmF5LnJlZHVjZShmdW5jdGlvbiAocHJldmlvdXMsIGN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzLnBvc2l0aW9uIDwgY3VycmVudC5wb3NpdGlvbiA/IHByZXZpb3VzIDogY3VycmVudDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2xpZGVzQXJyYXkuaW5kZXhPZihtaW5TbGlkZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0TWF4U2xpZGVJbmRleDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1heFNsaWRlID0gc2xpZGVzQXJyYXkucmVkdWNlKGZ1bmN0aW9uIChwcmV2aW91cywgY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldmlvdXMucG9zaXRpb24gPiBjdXJyZW50LnBvc2l0aW9uID8gcHJldmlvdXMgOiBjdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbGlkZXNBcnJheS5pbmRleE9mKG1heFNsaWRlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRNaW5TbGlkZVBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNsaWRlc0FycmF5W3RoaXMuZ2V0TWluU2xpZGVJbmRleCgpXS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRNYXhTbGlkZVBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNsaWRlc0FycmF5W3RoaXMuZ2V0TWF4U2xpZGVJbmRleCgpXS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzd2l0Y2hTbGlkZSAoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dFNsaWRlID0gMDtcclxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICduZXh0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbisrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UG9zaXRpb24gPiBwb3NpdGlvbi5nZXRNYXhTbGlkZVBvc2l0aW9uKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFNsaWRlID0gcG9zaXRpb24uZ2V0TWluU2xpZGVJbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNBcnJheVtuZXh0U2xpZGVdLnBvc2l0aW9uID0gcG9zaXRpb24uZ2V0TWF4U2xpZGVQb3NpdGlvbigpICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzQXJyYXlbbmV4dFNsaWRlXS50cmFuc2Zvcm0gKz0gc2xpZGVzQXJyYXkubGVuZ3RoICogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNBcnJheVtuZXh0U2xpZGVdLml0ZW0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtzbGlkZXNBcnJheVtuZXh0U2xpZGVdLnRyYW5zZm9ybX0lKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybVZhbHVlIC09IHRyYW5zZm9ybVN0ZXA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UG9zaXRpb24gPCBwb3NpdGlvbi5nZXRNaW5TbGlkZVBvc2l0aW9uKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFNsaWRlID0gcG9zaXRpb24uZ2V0TWF4U2xpZGVJbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNBcnJheVtuZXh0U2xpZGVdLnBvc2l0aW9uID0gcG9zaXRpb24uZ2V0TWluU2xpZGVQb3NpdGlvbigpIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzQXJyYXlbbmV4dFNsaWRlXS50cmFuc2Zvcm0gLT0gc2xpZGVzQXJyYXkubGVuZ3RoICogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNBcnJheVtuZXh0U2xpZGVdLml0ZW0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtzbGlkZXNBcnJheVtuZXh0U2xpZGVdLnRyYW5zZm9ybX0lKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybVZhbHVlICs9IHRyYW5zZm9ybVN0ZXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2xpZGVzQ29sbGVjdGlvbi5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMC41cyc7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNDb2xsZWN0aW9uLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dHJhbnNmb3JtVmFsdWV9JSlgO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycyAoKSB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNDb2xsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25zdGFydCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1NsaWRlSW5UcmFuc2l0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzQ29sbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU2xpZGVJblRyYW5zaXRpb24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGN1cnJlbnRQb3NpdGlvbikgPT09IHNsaWRlc0FycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1WYWx1ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc0NvbGxlY3Rpb24uc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzBzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzQ29sbGVjdGlvbi5zdHlsZS50cmFuc2Zvcm0gPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoc2xpZGUsIGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlLnBvc2l0aW9uID0gaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlLnRyYW5zZm9ybSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZS5pdGVtLnN0eWxlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNsaWRlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZXh0LWJ1dHRvbicpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1NsaWRlSW5UcmFuc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaFNsaWRlKCduZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5U3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNsaWRlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcmV2aW91cy1idXR0b24nKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNTbGlkZUluVHJhbnNpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hTbGlkZSgncHJldmlvdXMnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlTdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcGxheXBhdXNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXlwYXVzZUJ1dHRvbi5maXJzdENoaWxkLmNsYXNzTGlzdC5jb250YWlucygncGF1c2VkU3RhdGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5cGF1c2VCdXR0b24uZmlyc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKCdwYXVzZWRTdGF0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5cGF1c2VCdXR0b24ubGFzdENoaWxkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlTbGlkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5cGF1c2VCdXR0b24uZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKCdwYXVzZWRTdGF0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5cGF1c2VCdXR0b24ubGFzdENoaWxkLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdXNlU2xpZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0WCA9IDA7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5U3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlmdCA9IGVuZFggLSBzdGFydFg7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoaWZ0ID4gMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoU2xpZGUoJ3ByZXZpb3VzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlmdCA8IC0xMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hTbGlkZSgnbmV4dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheVN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydFggPSBlLmNsaWVudFg7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlTdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5kWCA9IGUuY2xpZW50WCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnQgPSBlbmRYIC0gc3RhcnRYO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGlmdCA+IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaFNsaWRlKCdwcmV2aW91cycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpZnQgPCAtMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoU2xpZGUoJ25leHQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlTdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGJ1dHRvbnNWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlwYXVzZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5cGF1c2VCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2xpZGVyQnV0dG9ucyA9IHNsaWRlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzbGlkZXItYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyQnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uIChidXR0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBhdXRvcGxheVN0YXJ0ICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghYXV0b3BsYXlFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheXBhdXNlQnV0dG9uLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgncGF1c2VkU3RhdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwbGF5cGF1c2VCdXR0b24ubGFzdENoaWxkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXJUaW1lcklkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFNsaWRlKCduZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICB9LCBhdXRvcGxheUludGVydmFsKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gYXV0b3BsYXlTdG9wICgpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc2xpZGVyVGltZXJJZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHBsYXlTbGlkZXIgKCkge1xyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBwYXVzZVNsaWRlciAoKSB7XHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheUVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3RvcCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcGxheTogcGxheVNsaWRlcixcclxuICAgICAgICAgICAgICAgIHBhdXNlOiBwYXVzZVNsaWRlcixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG4gICAgfSkoKTtcclxuXHJcbiAgICByZXR1cm4gbGF1bmNoU2xpZGVyKHNsaWRlcklkLCBvcHRpb25zKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW1nU2xpZGVyO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgbmV4dEJ1dHRvbkljb24gZnJvbSAnLi4vaWNvbnMvbmV4dEJ1dHRvbi5zdmcnO1xyXG5pbXBvcnQgcHJldmlvdXNCdXR0b25JY29uIGZyb20gJy4uL2ljb25zL3ByZXZpb3VzQnV0dG9uLnN2Zyc7XHJcbmltcG9ydCBwYXVzZUJ1dHRvbkljb24gZnJvbSAnLi4vaWNvbnMvcGF1c2VCdXR0b24uc3ZnJztcclxuaW1wb3J0IHBsYXlCdXR0b25JY29uIGZyb20gJy4uL2ljb25zL3BsYXlCdXR0b24uc3ZnJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNsaWRlckxheW91dCAoc2xpZGVySWQpIHtcclxuICAgIGNvbnN0IHNsaWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNsaWRlcklkKTtcclxuXHJcbiAgICBsZXQgaW1nRWxlbWVudHMgPSBzbGlkZXJDb250YWluZXIuY2hpbGRyZW47XHJcbiAgICBpbWdFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGltZ0VsZW1lbnRzKTtcclxuXHJcbiAgICBpZiAoaW1nRWxlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IHNsaWRlc0NvbGxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzbGlkZXNDb2xsZWN0aW9uLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnNsaWRlc0NvbGxlY3Rpb24pO1xyXG5cclxuICAgICAgICBpbWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09ICdJTUcnKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoc3R5bGVzLnNsaWRlSW1hZ2UpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNpbmdsZVNsaWRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBzaW5nbGVTbGlkZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zaW5nbGVTbGlkZSk7XHJcbiAgICAgICAgICAgICAgICBzaW5nbGVTbGlkZUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNDb2xsZWN0aW9uLmFwcGVuZENoaWxkKHNpbmdsZVNsaWRlQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChzdHlsZXMuc2luZ2xlU2xpZGUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNsaWRlc0NvbGxlY3Rpb24uYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2xpZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNsaWRlc0NvbGxlY3Rpb24pO1xyXG4gICAgICAgIHNsaWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zbGlkZXIpO1xyXG5cclxuICAgICAgICBjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIG5leHRCdXR0b24uY2xhc3NMaXN0LmFkZChzdHlsZXMubmV4dEJ1dHRvbik7XHJcbiAgICAgICAgbmV4dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zbGlkZXJCdXR0b24pO1xyXG4gICAgICAgIG5leHRCdXR0b24uaW5uZXJIVE1MID0gbmV4dEJ1dHRvbkljb247XHJcbiAgICAgICAgbmV4dEJ1dHRvbi5ocmVmID0gJyMnO1xyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIHByZXZpb3VzQnV0dG9uLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnByZXZpb3VzQnV0dG9uKTtcclxuICAgICAgICBwcmV2aW91c0J1dHRvbi5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zbGlkZXJCdXR0b24pO1xyXG4gICAgICAgIHByZXZpb3VzQnV0dG9uLmlubmVySFRNTCA9IHByZXZpb3VzQnV0dG9uSWNvbjtcclxuICAgICAgICBwcmV2aW91c0J1dHRvbi5ocmVmID0gJyMnO1xyXG4gICAgICAgIGNvbnN0IHBsYXlwYXVzZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBwbGF5cGF1c2VCdXR0b24uY2xhc3NMaXN0LmFkZChzdHlsZXMucGxheXBhdXNlQnV0dG9uKTtcclxuICAgICAgICBwbGF5cGF1c2VCdXR0b24uY2xhc3NMaXN0LmFkZChzdHlsZXMuc2xpZGVyQnV0dG9uKTtcclxuICAgICAgICBwbGF5cGF1c2VCdXR0b24uaW5uZXJIVE1MID0gcGF1c2VCdXR0b25JY29uICsgcGxheUJ1dHRvbkljb247XHJcbiAgICAgICAgcGxheXBhdXNlQnV0dG9uLmhyZWYgPSAnIyc7XHJcblxyXG4gICAgICAgIHNsaWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmV2aW91c0J1dHRvbik7XHJcbiAgICAgICAgc2xpZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG5leHRCdXR0b24pO1xyXG4gICAgICAgIHNsaWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5cGF1c2VCdXR0b24pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTbGlkZXJMYXlvdXQ7XHJcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9