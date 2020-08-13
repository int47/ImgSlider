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
___CSS_LOADER_EXPORT___.push([module.i, ".slider {\r\n    overflow: hidden;\r\n    position: relative;\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    max-width: 500px;\r\n    cursor: grab;\r\n}\r\n\r\n.slides-collection {\r\n    display: flex;\r\n    align-self: normal;\r\n    transition: transform 0.5s ease-in-out;\r\n}\r\n\r\n.single-slide {\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    user-select: none;\r\n}\r\n\r\n.slide-image {\r\n    display: inline-block;\r\n    height: auto;\r\n    max-width: 100%;\r\n}\r\n\r\n.slider-button {\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 35px;\r\n    height: 35px;\r\n    color: black;\r\n    background: white;\r\n    border-radius: 50%;\r\n    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);\r\n    text-decoration: none;\r\n    transition: transform .2s ease-in-out;\r\n}\r\n\r\n.slider-button:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.slider-button svg {\r\n    width: 15px;\r\n    transition: transform .2s ease-in-out;\r\n}\r\n\r\n.previous-button {\r\n    left: 0;\r\n}\r\n\r\n.next-button {\r\n    right: 0;\r\n}\r\n\r\n.playpause-button {\r\n    display: none;\r\n}\r\n\r\n.pausedState {\r\n    position: absolute;\r\n    transform: scale(0);\r\n}", "",{"version":3,"sources":["style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,sCAAsC;AAC1C;;AAEA;IACI,cAAc;IACd,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,2CAA2C;IAC3C,qBAAqB;IACrB,qCAAqC;AACzC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,qCAAqC;AACzC;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB","file":"style.css","sourcesContent":[".slider {\r\n    overflow: hidden;\r\n    position: relative;\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    max-width: 500px;\r\n    cursor: grab;\r\n}\r\n\r\n.slides-collection {\r\n    display: flex;\r\n    align-self: normal;\r\n    transition: transform 0.5s ease-in-out;\r\n}\r\n\r\n.single-slide {\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    user-select: none;\r\n}\r\n\r\n.slide-image {\r\n    display: inline-block;\r\n    height: auto;\r\n    max-width: 100%;\r\n}\r\n\r\n.slider-button {\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 35px;\r\n    height: 35px;\r\n    color: black;\r\n    background: white;\r\n    border-radius: 50%;\r\n    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);\r\n    text-decoration: none;\r\n    transition: transform .2s ease-in-out;\r\n}\r\n\r\n.slider-button:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.slider-button svg {\r\n    width: 15px;\r\n    transition: transform .2s ease-in-out;\r\n}\r\n\r\n.previous-button {\r\n    left: 0;\r\n}\r\n\r\n.next-button {\r\n    right: 0;\r\n}\r\n\r\n.playpause-button {\r\n    display: none;\r\n}\r\n\r\n.pausedState {\r\n    position: absolute;\r\n    transform: scale(0);\r\n}"]}]);
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

      ;

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

      ;
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

      ;

      function autoplayStop() {
        clearInterval(sliderTimerId);
      }

      ;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWdTbGlkZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2ltZ1NsaWRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbWdTbGlkZXIvLi4vaWNvbnMvbmV4dEJ1dHRvbi5zdmciLCJ3ZWJwYWNrOi8vaW1nU2xpZGVyLy4uL2ljb25zL3BhdXNlQnV0dG9uLnN2ZyIsIndlYnBhY2s6Ly9pbWdTbGlkZXIvLi4vaWNvbnMvcGxheUJ1dHRvbi5zdmciLCJ3ZWJwYWNrOi8vaW1nU2xpZGVyLy4uL2ljb25zL3ByZXZpb3VzQnV0dG9uLnN2ZyIsIndlYnBhY2s6Ly9pbWdTbGlkZXIvLi9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vaW1nU2xpZGVyLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaW1nU2xpZGVyLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9pbWdTbGlkZXIvLi9pbWdTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vaW1nU2xpZGVyLy4vc2xpZGVyTGF5b3V0LmpzIiwid2VicGFjazovL2ltZ1NsaWRlci8uL3N0eWxlLmNzcz81M2U3Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ1c2VTb3VyY2VNYXAiLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJjb25jYXQiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYVF1ZXJ5IiwiZGVkdXBlIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImxlbmd0aCIsImlkIiwiX2kiLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJzb3VyY2VNYXBwaW5nIiwidG9Db21tZW50Iiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290Iiwic291cmNlTWFwIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImltZ1NsaWRlciIsInNsaWRlcklkIiwib3B0aW9ucyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25zb2xlIiwibG9nIiwibGF1bmNoU2xpZGVyIiwiYXV0b3BsYXlFbmFibGVkIiwiYXV0b3BsYXlJbnRlcnZhbCIsImJ1dHRvbnNWaXNpYmxlIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJjcmVhdGVTbGlkZXJMYXlvdXQiLCJzbGlkZXIiLCJzbGlkZXNDb2xsZWN0aW9uIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNpbmdsZVNsaWRlcyIsInBsYXlwYXVzZUJ1dHRvbiIsInRyYW5zZm9ybVN0ZXAiLCJzbGlkZXNBcnJheSIsImN1cnJlbnRQb3NpdGlvbiIsInRyYW5zZm9ybVZhbHVlIiwic2xpZGVyVGltZXJJZCIsImlzU2xpZGVJblRyYW5zaXRpb24iLCJzdHlsZSIsInBvc2l0aW9uIiwidHJhbnNmb3JtIiwiY29weSIsImNsb25lTm9kZSIsImFmdGVyIiwiZ2V0TWluU2xpZGVJbmRleCIsIm1pblNsaWRlIiwicmVkdWNlIiwicHJldmlvdXMiLCJjdXJyZW50IiwiaW5kZXhPZiIsImdldE1heFNsaWRlSW5kZXgiLCJtYXhTbGlkZSIsImdldE1pblNsaWRlUG9zaXRpb24iLCJnZXRNYXhTbGlkZVBvc2l0aW9uIiwic3dpdGNoU2xpZGUiLCJkaXJlY3Rpb24iLCJuZXh0U2xpZGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJhZGRFdmVudExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJNYXRoIiwiYWJzIiwiZm9yRWFjaCIsInNsaWRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYXV0b3BsYXlTdGFydCIsImZpcnN0Q2hpbGQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImxhc3RDaGlsZCIsImRpc3BsYXkiLCJwbGF5U2xpZGVyIiwiYWRkIiwicGF1c2VTbGlkZXIiLCJzdGFydFgiLCJjaGFuZ2VkVG91Y2hlcyIsImNsaWVudFgiLCJlbmRYIiwic2hpZnQiLCJzbGlkZXJCdXR0b25zIiwiYnV0dG9uIiwiYXV0b3BsYXlTdG9wIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicGxheSIsInBhdXNlIiwic2xpZGVyQ29udGFpbmVyIiwiaW1nRWxlbWVudHMiLCJjaGlsZHJlbiIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiY3JlYXRlRWxlbWVudCIsInN0eWxlcyIsImVsZW1lbnQiLCJ0YWdOYW1lIiwic2xpZGVJbWFnZSIsInNldEF0dHJpYnV0ZSIsInNpbmdsZVNsaWRlQ29udGFpbmVyIiwic2luZ2xlU2xpZGUiLCJhcHBlbmRDaGlsZCIsIm5leHRCdXR0b24iLCJzbGlkZXJCdXR0b24iLCJpbm5lckhUTUwiLCJuZXh0QnV0dG9uSWNvbiIsImhyZWYiLCJwcmV2aW91c0J1dHRvbiIsInByZXZpb3VzQnV0dG9uSWNvbiIsInBhdXNlQnV0dG9uSWNvbiIsInBsYXlCdXR0b25JY29uIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLDZPQUE2TywwaUI7Ozs7Ozs7Ozs7O0FDQTdPLHlPQUF5TyxvUzs7Ozs7Ozs7Ozs7QUNBek8sNk9BQTZPLDROOzs7Ozs7Ozs7OztBQ0E3Tyw2T0FBNk8sa2dCOzs7Ozs7Ozs7Ozs7QUNBN087QUFBQTtBQUFBO0FBQUE7QUFDeUY7QUFDekYsOEJBQThCLG1GQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLFlBQVkseUJBQXlCLDJCQUEyQixxQkFBcUIsc0JBQXNCLGdDQUFnQyw0QkFBNEIseUJBQXlCLHFCQUFxQixLQUFLLDRCQUE0QixzQkFBc0IsMkJBQTJCLCtDQUErQyxLQUFLLHVCQUF1Qix1QkFBdUIsd0JBQXdCLHNCQUFzQiw0QkFBNEIsZ0NBQWdDLDBCQUEwQixLQUFLLHNCQUFzQiw4QkFBOEIscUJBQXFCLHdCQUF3QixLQUFLLHdCQUF3QiwyQkFBMkIsc0JBQXNCLDRCQUE0QixnQ0FBZ0Msb0JBQW9CLHFCQUFxQixxQkFBcUIsMEJBQTBCLDJCQUEyQixvREFBb0QsOEJBQThCLDhDQUE4QyxLQUFLLDhCQUE4Qiw4QkFBOEIsS0FBSyw0QkFBNEIsb0JBQW9CLDhDQUE4QyxLQUFLLDBCQUEwQixnQkFBZ0IsS0FBSyxzQkFBc0IsaUJBQWlCLEtBQUssMkJBQTJCLHNCQUFzQixLQUFLLHNCQUFzQiwyQkFBMkIsNEJBQTRCLEtBQUssT0FBTyxnRUFBZ0UsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsc0RBQXNELHlCQUF5QiwyQkFBMkIscUJBQXFCLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLHlCQUF5QixxQkFBcUIsS0FBSyw0QkFBNEIsc0JBQXNCLDJCQUEyQiwrQ0FBK0MsS0FBSyx1QkFBdUIsdUJBQXVCLHdCQUF3QixzQkFBc0IsNEJBQTRCLGdDQUFnQywwQkFBMEIsS0FBSyxzQkFBc0IsOEJBQThCLHFCQUFxQix3QkFBd0IsS0FBSyx3QkFBd0IsMkJBQTJCLHNCQUFzQiw0QkFBNEIsZ0NBQWdDLG9CQUFvQixxQkFBcUIscUJBQXFCLDBCQUEwQiwyQkFBMkIsb0RBQW9ELDhCQUE4Qiw4Q0FBOEMsS0FBSyw4QkFBOEIsOEJBQThCLEtBQUssNEJBQTRCLG9CQUFvQiw4Q0FBOEMsS0FBSywwQkFBMEIsZ0JBQWdCLEtBQUssc0JBQXNCLGlCQUFpQixLQUFLLDJCQUEyQixzQkFBc0IsS0FBSyxzQkFBc0IsMkJBQTJCLDRCQUE0QixLQUFLLEdBQUc7QUFDeDlHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2Usc0ZBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN4QjFCO0FBRWI7Ozs7QUFJQTtBQUNBOztBQUNBQSxNQUFNLENBQUNDLE9BQVAsR0FBaUIsVUFBVUMsWUFBVixFQUF3QjtBQUN2QyxNQUFJQyxJQUFJLEdBQUcsRUFBWCxDQUR1QyxDQUN4Qjs7QUFFZkEsTUFBSSxDQUFDQyxRQUFMLEdBQWdCLFNBQVNBLFFBQVQsR0FBb0I7QUFDbEMsV0FBTyxLQUFLQyxHQUFMLENBQVMsVUFBVUMsSUFBVixFQUFnQjtBQUM5QixVQUFJQyxPQUFPLEdBQUdDLHNCQUFzQixDQUFDRixJQUFELEVBQU9KLFlBQVAsQ0FBcEM7O0FBRUEsVUFBSUksSUFBSSxDQUFDLENBQUQsQ0FBUixFQUFhO0FBQ1gsZUFBTyxVQUFVRyxNQUFWLENBQWlCSCxJQUFJLENBQUMsQ0FBRCxDQUFyQixFQUEwQixJQUExQixFQUFnQ0csTUFBaEMsQ0FBdUNGLE9BQXZDLEVBQWdELEdBQWhELENBQVA7QUFDRDs7QUFFRCxhQUFPQSxPQUFQO0FBQ0QsS0FSTSxFQVFKRyxJQVJJLENBUUMsRUFSRCxDQUFQO0FBU0QsR0FWRCxDQUh1QyxDQWFwQztBQUNIOzs7QUFHQVAsTUFBSSxDQUFDUSxDQUFMLEdBQVMsVUFBVUMsT0FBVixFQUFtQkMsVUFBbkIsRUFBK0JDLE1BQS9CLEVBQXVDO0FBQzlDLFFBQUksT0FBT0YsT0FBUCxLQUFtQixRQUF2QixFQUFpQztBQUMvQjtBQUNBQSxhQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUQsRUFBT0EsT0FBUCxFQUFnQixFQUFoQixDQUFELENBQVY7QUFDRDs7QUFFRCxRQUFJRyxzQkFBc0IsR0FBRyxFQUE3Qjs7QUFFQSxRQUFJRCxNQUFKLEVBQVk7QUFDVixXQUFLLElBQUlILENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS0ssTUFBekIsRUFBaUNMLENBQUMsRUFBbEMsRUFBc0M7QUFDcEM7QUFDQSxZQUFJTSxFQUFFLEdBQUcsS0FBS04sQ0FBTCxFQUFRLENBQVIsQ0FBVDs7QUFFQSxZQUFJTSxFQUFFLElBQUksSUFBVixFQUFnQjtBQUNkRixnQ0FBc0IsQ0FBQ0UsRUFBRCxDQUF0QixHQUE2QixJQUE3QjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFLLElBQUlDLEVBQUUsR0FBRyxDQUFkLEVBQWlCQSxFQUFFLEdBQUdOLE9BQU8sQ0FBQ0ksTUFBOUIsRUFBc0NFLEVBQUUsRUFBeEMsRUFBNEM7QUFDMUMsVUFBSVosSUFBSSxHQUFHLEdBQUdHLE1BQUgsQ0FBVUcsT0FBTyxDQUFDTSxFQUFELENBQWpCLENBQVg7O0FBRUEsVUFBSUosTUFBTSxJQUFJQyxzQkFBc0IsQ0FBQ1QsSUFBSSxDQUFDLENBQUQsQ0FBTCxDQUFwQyxFQUErQztBQUM3QztBQUNBO0FBQ0Q7O0FBRUQsVUFBSU8sVUFBSixFQUFnQjtBQUNkLFlBQUksQ0FBQ1AsSUFBSSxDQUFDLENBQUQsQ0FBVCxFQUFjO0FBQ1pBLGNBQUksQ0FBQyxDQUFELENBQUosR0FBVU8sVUFBVjtBQUNELFNBRkQsTUFFTztBQUNMUCxjQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVUsR0FBR0csTUFBSCxDQUFVSSxVQUFWLEVBQXNCLE9BQXRCLEVBQStCSixNQUEvQixDQUFzQ0gsSUFBSSxDQUFDLENBQUQsQ0FBMUMsQ0FBVjtBQUNEO0FBQ0Y7O0FBRURILFVBQUksQ0FBQ2dCLElBQUwsQ0FBVWIsSUFBVjtBQUNEO0FBQ0YsR0FyQ0Q7O0FBdUNBLFNBQU9ILElBQVA7QUFDRCxDQXpERDs7QUEyREEsU0FBU0ssc0JBQVQsQ0FBZ0NGLElBQWhDLEVBQXNDSixZQUF0QyxFQUFvRDtBQUNsRCxNQUFJSyxPQUFPLEdBQUdELElBQUksQ0FBQyxDQUFELENBQUosSUFBVyxFQUF6QixDQURrRCxDQUNyQjs7QUFFN0IsTUFBSWMsVUFBVSxHQUFHZCxJQUFJLENBQUMsQ0FBRCxDQUFyQjs7QUFFQSxNQUFJLENBQUNjLFVBQUwsRUFBaUI7QUFDZixXQUFPYixPQUFQO0FBQ0Q7O0FBRUQsTUFBSUwsWUFBWSxJQUFJLE9BQU9tQixJQUFQLEtBQWdCLFVBQXBDLEVBQWdEO0FBQzlDLFFBQUlDLGFBQWEsR0FBR0MsU0FBUyxDQUFDSCxVQUFELENBQTdCO0FBQ0EsUUFBSUksVUFBVSxHQUFHSixVQUFVLENBQUNLLE9BQVgsQ0FBbUJwQixHQUFuQixDQUF1QixVQUFVcUIsTUFBVixFQUFrQjtBQUN4RCxhQUFPLGlCQUFpQmpCLE1BQWpCLENBQXdCVyxVQUFVLENBQUNPLFVBQVgsSUFBeUIsRUFBakQsRUFBcURsQixNQUFyRCxDQUE0RGlCLE1BQTVELEVBQW9FLEtBQXBFLENBQVA7QUFDRCxLQUZnQixDQUFqQjtBQUdBLFdBQU8sQ0FBQ25CLE9BQUQsRUFBVUUsTUFBVixDQUFpQmUsVUFBakIsRUFBNkJmLE1BQTdCLENBQW9DLENBQUNhLGFBQUQsQ0FBcEMsRUFBcURaLElBQXJELENBQTBELElBQTFELENBQVA7QUFDRDs7QUFFRCxTQUFPLENBQUNILE9BQUQsRUFBVUcsSUFBVixDQUFlLElBQWYsQ0FBUDtBQUNELEMsQ0FBQzs7O0FBR0YsU0FBU2EsU0FBVCxDQUFtQkssU0FBbkIsRUFBOEI7QUFDNUI7QUFDQSxNQUFJQyxNQUFNLEdBQUdSLElBQUksQ0FBQ1MsUUFBUSxDQUFDQyxrQkFBa0IsQ0FBQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWVMLFNBQWYsQ0FBRCxDQUFuQixDQUFULENBQWpCO0FBQ0EsTUFBSU0sSUFBSSxHQUFHLCtEQUErRHpCLE1BQS9ELENBQXNFb0IsTUFBdEUsQ0FBWDtBQUNBLFNBQU8sT0FBT3BCLE1BQVAsQ0FBY3lCLElBQWQsRUFBb0IsS0FBcEIsQ0FBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQzdGWTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsU0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixhQUFhOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQzVRQTtBQUFBO0FBQWE7O0FBQ2I7O0FBRUEsU0FBU0MsU0FBVCxDQUFvQkMsUUFBcEIsRUFBOEJDLE9BQTlCLEVBQXVDO0FBQ25DLE1BQUlDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QkgsUUFBeEIsTUFBc0MsSUFBMUMsRUFBZ0Q7QUFDNUNJLFdBQU8sQ0FBQ0MsR0FBUiw2QkFBZ0NMLFFBQWhDO0FBQ0E7QUFDSDs7QUFFRCxNQUFNTSxZQUFZLEdBQUksWUFBWTtBQUM5QixXQUFPLFVBQVVOLFFBQVYsUUFNSjtBQUFBLHNDQUxDTyxlQUtEO0FBQUEsVUFMQ0EsZUFLRCxxQ0FMbUIsS0FLbkI7QUFBQSx1Q0FKQ0MsZ0JBSUQ7QUFBQSxVQUpDQSxnQkFJRCxzQ0FKb0IsSUFJcEI7QUFBQSxxQ0FIQ0MsY0FHRDtBQUFBLFVBSENBLGNBR0Qsb0NBSGtCLElBR2xCO0FBQUEsK0JBRkNDLFFBRUQ7QUFBQSxVQUZDQSxRQUVELDhCQUZZLE9BRVo7QUFBQSxnQ0FEQ0MsU0FDRDtBQUFBLFVBRENBLFNBQ0QsK0JBRGEsT0FDYjtBQUNDQyxzRUFBa0IsQ0FBQ1osUUFBRCxDQUFsQjtBQUVBLFVBQU1hLE1BQU0sR0FBR1gsUUFBUSxDQUFDQyxjQUFULENBQXdCSCxRQUF4QixDQUFmO0FBQUEsVUFDSWMsZ0JBQWdCLEdBQUdELE1BQU0sQ0FBQ0Usc0JBQVAsQ0FBOEIsbUJBQTlCLEVBQW1ELENBQW5ELENBRHZCO0FBQUEsVUFFSUMsWUFBWSxHQUFHSCxNQUFNLENBQUNFLHNCQUFQLENBQThCLGNBQTlCLENBRm5CO0FBQUEsVUFHSUUsZUFBZSxHQUFHSixNQUFNLENBQUNFLHNCQUFQLENBQThCLGtCQUE5QixFQUFrRCxDQUFsRCxDQUh0QjtBQUFBLFVBSUlHLGFBQWEsR0FBRyxHQUpwQjtBQUFBLFVBS0lDLFdBQVcsR0FBRyxFQUxsQjtBQU9BLFVBQUlDLGVBQWUsR0FBRyxDQUF0QjtBQUFBLFVBQ0lDLGNBQWMsR0FBRyxDQURyQjtBQUFBLFVBRUlDLGFBRko7QUFBQSxVQUdJQyxtQkFBbUIsR0FBRyxLQUgxQjtBQUtBVixZQUFNLENBQUNXLEtBQVAsQ0FBYWQsUUFBYixHQUF3QkEsUUFBeEI7QUFDQUcsWUFBTSxDQUFDVyxLQUFQLENBQWFiLFNBQWIsR0FBeUJBLFNBQXpCOztBQUVBLFVBQUlLLFlBQVksQ0FBQ3BDLE1BQWIsR0FBc0IsQ0FBMUIsRUFBNkI7QUFDekIsYUFBSyxJQUFJTCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHeUMsWUFBWSxDQUFDcEMsTUFBakMsRUFBeUNMLENBQUMsRUFBMUMsRUFBOEM7QUFDMUM0QyxxQkFBVyxDQUFDcEMsSUFBWixDQUFpQjtBQUNiYixnQkFBSSxFQUFFOEMsWUFBWSxDQUFDekMsQ0FBRCxDQURMO0FBRWJrRCxvQkFBUSxFQUFFbEQsQ0FGRztBQUdibUQscUJBQVMsRUFBRTtBQUhFLFdBQWpCO0FBS0g7O0FBRUQsWUFBSVAsV0FBVyxDQUFDdkMsTUFBWixLQUF1QixDQUEzQixFQUE4QjtBQUMxQixjQUFNK0MsSUFBSSxHQUFHWCxZQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCWSxTQUFoQixDQUEwQixJQUExQixDQUFiO0FBQ0FaLHNCQUFZLENBQUMsQ0FBRCxDQUFaLENBQWdCYSxLQUFoQixDQUFzQkYsSUFBdEI7QUFDQVIscUJBQVcsQ0FBQ3BDLElBQVosQ0FBaUI7QUFDYmIsZ0JBQUksRUFBRXlELElBRE87QUFFYkYsb0JBQVEsRUFBRSxDQUZHO0FBR2JDLHFCQUFTLEVBQUU7QUFIRSxXQUFqQjtBQUtIO0FBQ0osT0FsQkQsTUFrQk87QUFDSHRCLGVBQU8sQ0FBQ0MsR0FBUixtQkFBdUJMLFFBQXZCO0FBQ0E7QUFDSDs7QUFFRCxVQUFNeUIsUUFBUSxHQUFHO0FBQ2JLLHdCQUFnQixFQUFFLDRCQUFZO0FBQzFCLGNBQU1DLFFBQVEsR0FBR1osV0FBVyxDQUFDYSxNQUFaLENBQW1CLFVBQVVDLFFBQVYsRUFBb0JDLE9BQXBCLEVBQTZCO0FBQzdELG1CQUFRRCxRQUFRLENBQUNSLFFBQVQsR0FBb0JTLE9BQU8sQ0FBQ1QsUUFBN0IsR0FBeUNRLFFBQXpDLEdBQW9EQyxPQUEzRDtBQUNILFdBRmdCLENBQWpCO0FBR0EsaUJBQU9mLFdBQVcsQ0FBQ2dCLE9BQVosQ0FBb0JKLFFBQXBCLENBQVA7QUFDSCxTQU5ZO0FBT2JLLHdCQUFnQixFQUFFLDRCQUFZO0FBQzFCLGNBQU1DLFFBQVEsR0FBR2xCLFdBQVcsQ0FBQ2EsTUFBWixDQUFtQixVQUFVQyxRQUFWLEVBQW9CQyxPQUFwQixFQUE2QjtBQUM3RCxtQkFBUUQsUUFBUSxDQUFDUixRQUFULEdBQW9CUyxPQUFPLENBQUNULFFBQTdCLEdBQXlDUSxRQUF6QyxHQUFvREMsT0FBM0Q7QUFDSCxXQUZnQixDQUFqQjtBQUdBLGlCQUFPZixXQUFXLENBQUNnQixPQUFaLENBQW9CRSxRQUFwQixDQUFQO0FBQ0gsU0FaWTtBQWFiQywyQkFBbUIsRUFBRSwrQkFBWTtBQUM3QixpQkFBT25CLFdBQVcsQ0FBQyxLQUFLVyxnQkFBTCxFQUFELENBQVgsQ0FBcUNMLFFBQTVDO0FBQ0gsU0FmWTtBQWdCYmMsMkJBQW1CLEVBQUUsK0JBQVk7QUFDN0IsaUJBQU9wQixXQUFXLENBQUMsS0FBS2lCLGdCQUFMLEVBQUQsQ0FBWCxDQUFxQ1gsUUFBNUM7QUFDSDtBQWxCWSxPQUFqQjs7QUFxQkEsZUFBU2UsV0FBVCxDQUFzQkMsU0FBdEIsRUFBaUM7QUFDN0IsWUFBSUMsU0FBUyxHQUFHLENBQWhCOztBQUNBLFlBQUlELFNBQVMsS0FBSyxNQUFsQixFQUEwQjtBQUN0QnJCLHlCQUFlOztBQUNmLGNBQUlBLGVBQWUsR0FBR0ssUUFBUSxDQUFDYyxtQkFBVCxFQUF0QixFQUFzRDtBQUNsREcscUJBQVMsR0FBR2pCLFFBQVEsQ0FBQ0ssZ0JBQVQsRUFBWjtBQUNBWCx1QkFBVyxDQUFDdUIsU0FBRCxDQUFYLENBQXVCakIsUUFBdkIsR0FBa0NBLFFBQVEsQ0FBQ2MsbUJBQVQsS0FBaUMsQ0FBbkU7QUFDQXBCLHVCQUFXLENBQUN1QixTQUFELENBQVgsQ0FBdUJoQixTQUF2QixJQUFvQ1AsV0FBVyxDQUFDdkMsTUFBWixHQUFxQixHQUF6RDtBQUNBdUMsdUJBQVcsQ0FBQ3VCLFNBQUQsQ0FBWCxDQUF1QnhFLElBQXZCLENBQTRCc0QsS0FBNUIsQ0FBa0NFLFNBQWxDLHdCQUE0RFAsV0FBVyxDQUFDdUIsU0FBRCxDQUFYLENBQXVCaEIsU0FBbkY7QUFDSDs7QUFDREwsd0JBQWMsSUFBSUgsYUFBbEI7QUFDSCxTQVRELE1BU087QUFDSEUseUJBQWU7O0FBQ2YsY0FBSUEsZUFBZSxHQUFHSyxRQUFRLENBQUNhLG1CQUFULEVBQXRCLEVBQXNEO0FBQ2xESSxxQkFBUyxHQUFHakIsUUFBUSxDQUFDVyxnQkFBVCxFQUFaO0FBQ0FqQix1QkFBVyxDQUFDdUIsU0FBRCxDQUFYLENBQXVCakIsUUFBdkIsR0FBa0NBLFFBQVEsQ0FBQ2EsbUJBQVQsS0FBaUMsQ0FBbkU7QUFDQW5CLHVCQUFXLENBQUN1QixTQUFELENBQVgsQ0FBdUJoQixTQUF2QixJQUFvQ1AsV0FBVyxDQUFDdkMsTUFBWixHQUFxQixHQUF6RDtBQUNBdUMsdUJBQVcsQ0FBQ3VCLFNBQUQsQ0FBWCxDQUF1QnhFLElBQXZCLENBQTRCc0QsS0FBNUIsQ0FBa0NFLFNBQWxDLHdCQUE0RFAsV0FBVyxDQUFDdUIsU0FBRCxDQUFYLENBQXVCaEIsU0FBbkY7QUFDSDs7QUFDREwsd0JBQWMsSUFBSUgsYUFBbEI7QUFDSDs7QUFFREosd0JBQWdCLENBQUNVLEtBQWpCLENBQXVCbUIsa0JBQXZCLEdBQTRDLE1BQTVDO0FBQ0E3Qix3QkFBZ0IsQ0FBQ1UsS0FBakIsQ0FBdUJFLFNBQXZCLHdCQUFpREwsY0FBakQ7QUFDSDs7QUFBQTs7QUFFRCxlQUFTdUIsaUJBQVQsR0FBOEI7QUFDMUI5Qix3QkFBZ0IsQ0FBQytCLGdCQUFqQixDQUFrQyxpQkFBbEMsRUFBcUQsWUFBWTtBQUM3RHRCLDZCQUFtQixHQUFHLElBQXRCO0FBQ0gsU0FGRDtBQUdBVCx3QkFBZ0IsQ0FBQytCLGdCQUFqQixDQUFrQyxlQUFsQyxFQUFtRCxZQUFZO0FBQzNEdEIsNkJBQW1CLEdBQUcsS0FBdEI7O0FBRUEsY0FBSXVCLElBQUksQ0FBQ0MsR0FBTCxDQUFTM0IsZUFBVCxNQUE4QkQsV0FBVyxDQUFDdkMsTUFBOUMsRUFBc0Q7QUFDbER3QywyQkFBZSxHQUFHLENBQWxCO0FBQ0FDLDBCQUFjLEdBQUcsQ0FBakI7QUFDQVAsNEJBQWdCLENBQUNVLEtBQWpCLENBQXVCbUIsa0JBQXZCLEdBQTRDLElBQTVDO0FBQ0E3Qiw0QkFBZ0IsQ0FBQ1UsS0FBakIsQ0FBdUJFLFNBQXZCLEdBQW1DLEVBQW5DO0FBQ0FQLHVCQUFXLENBQUM2QixPQUFaLENBQW9CLFVBQVVDLEtBQVYsRUFBaUIxRSxDQUFqQixFQUFvQjtBQUNwQzBFLG1CQUFLLENBQUN4QixRQUFOLEdBQWlCbEQsQ0FBakI7QUFDQTBFLG1CQUFLLENBQUN2QixTQUFOLEdBQWtCLENBQWxCO0FBQ0F1QixtQkFBSyxDQUFDL0UsSUFBTixDQUFXc0QsS0FBWCxHQUFtQixFQUFuQjtBQUNILGFBSkQ7QUFLSDtBQUNKLFNBZEQ7QUFnQkFYLGNBQU0sQ0FBQ0Usc0JBQVAsQ0FBOEIsYUFBOUIsRUFBNkMsQ0FBN0MsRUFBZ0Q4QixnQkFBaEQsQ0FBaUUsT0FBakUsRUFBMEUsVUFBVUssQ0FBVixFQUFhO0FBQ25GQSxXQUFDLENBQUNDLGNBQUY7O0FBQ0EsY0FBSSxDQUFDNUIsbUJBQUwsRUFBMEI7QUFDdEJpQix1QkFBVyxDQUFDLE1BQUQsQ0FBWDtBQUNIOztBQUNEWSx1QkFBYTtBQUNoQixTQU5EO0FBUUF2QyxjQUFNLENBQUNFLHNCQUFQLENBQThCLGlCQUE5QixFQUFpRCxDQUFqRCxFQUFvRDhCLGdCQUFwRCxDQUFxRSxPQUFyRSxFQUE4RSxVQUFVSyxDQUFWLEVBQWE7QUFDdkZBLFdBQUMsQ0FBQ0MsY0FBRjs7QUFDQSxjQUFJLENBQUM1QixtQkFBTCxFQUEwQjtBQUN0QmlCLHVCQUFXLENBQUMsVUFBRCxDQUFYO0FBQ0g7O0FBQ0RZLHVCQUFhO0FBQ2hCLFNBTkQ7QUFRQW5DLHVCQUFlLENBQUM0QixnQkFBaEIsQ0FBaUMsT0FBakMsRUFBMEMsVUFBVUssQ0FBVixFQUFhO0FBQ25EQSxXQUFDLENBQUNDLGNBQUY7O0FBQ0EsY0FBSWxDLGVBQWUsQ0FBQ29DLFVBQWhCLENBQTJCQyxTQUEzQixDQUFxQ0MsUUFBckMsQ0FBOEMsYUFBOUMsQ0FBSixFQUFrRTtBQUM5RHRDLDJCQUFlLENBQUNvQyxVQUFoQixDQUEyQkMsU0FBM0IsQ0FBcUNFLE1BQXJDLENBQTRDLGFBQTVDO0FBQ0F2QywyQkFBZSxDQUFDd0MsU0FBaEIsQ0FBMEJqQyxLQUExQixDQUFnQ2tDLE9BQWhDLEdBQTBDLE1BQTFDO0FBQ0FDLHNCQUFVO0FBQ2IsV0FKRCxNQUlPO0FBQ0gxQywyQkFBZSxDQUFDb0MsVUFBaEIsQ0FBMkJDLFNBQTNCLENBQXFDTSxHQUFyQyxDQUF5QyxhQUF6QztBQUNBM0MsMkJBQWUsQ0FBQ3dDLFNBQWhCLENBQTBCakMsS0FBMUIsQ0FBZ0NrQyxPQUFoQyxHQUEwQyxNQUExQztBQUNBRyx1QkFBVztBQUNkO0FBQ0osU0FYRDtBQWFBLFlBQUlDLE1BQU0sR0FBRyxDQUFiO0FBQ0FqRCxjQUFNLENBQUNnQyxnQkFBUCxDQUF3QixZQUF4QixFQUFzQyxVQUFVSyxDQUFWLEVBQWE7QUFDL0NZLGdCQUFNLEdBQUdaLENBQUMsQ0FBQ2EsY0FBRixDQUFpQixDQUFqQixFQUFvQkMsT0FBN0I7QUFDQVosdUJBQWE7QUFDaEIsU0FIRDtBQUlBdkMsY0FBTSxDQUFDZ0MsZ0JBQVAsQ0FBd0IsVUFBeEIsRUFBb0MsVUFBVUssQ0FBVixFQUFhO0FBQzdDLGNBQU1lLElBQUksR0FBR2YsQ0FBQyxDQUFDYSxjQUFGLENBQWlCLENBQWpCLEVBQW9CQyxPQUFqQztBQUFBLGNBQ0lFLEtBQUssR0FBR0QsSUFBSSxHQUFHSCxNQURuQjs7QUFFQSxjQUFJSSxLQUFLLEdBQUcsRUFBWixFQUFnQjtBQUNaMUIsdUJBQVcsQ0FBQyxVQUFELENBQVg7QUFDSCxXQUZELE1BRU8sSUFBSTBCLEtBQUssR0FBRyxDQUFDLEVBQWIsRUFBaUI7QUFDcEIxQix1QkFBVyxDQUFDLE1BQUQsQ0FBWDtBQUNIOztBQUNEWSx1QkFBYTtBQUNoQixTQVREO0FBV0F2QyxjQUFNLENBQUNnQyxnQkFBUCxDQUF3QixXQUF4QixFQUFxQyxVQUFVSyxDQUFWLEVBQWE7QUFDOUNZLGdCQUFNLEdBQUdaLENBQUMsQ0FBQ2MsT0FBWDtBQUNBWix1QkFBYTtBQUNoQixTQUhEO0FBSUF2QyxjQUFNLENBQUNnQyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFVSyxDQUFWLEVBQWE7QUFDNUMsY0FBTWUsSUFBSSxHQUFHZixDQUFDLENBQUNjLE9BQWY7QUFBQSxjQUNJRSxLQUFLLEdBQUdELElBQUksR0FBR0gsTUFEbkI7O0FBRUEsY0FBSUksS0FBSyxHQUFHLEVBQVosRUFBZ0I7QUFDWjFCLHVCQUFXLENBQUMsVUFBRCxDQUFYO0FBQ0gsV0FGRCxNQUVPLElBQUkwQixLQUFLLEdBQUcsQ0FBQyxFQUFiLEVBQWlCO0FBQ3BCMUIsdUJBQVcsQ0FBQyxNQUFELENBQVg7QUFDSDs7QUFDRFksdUJBQWE7QUFDaEIsU0FURDs7QUFXQSxZQUFJM0MsY0FBSixFQUFvQjtBQUNoQkksZ0JBQU0sQ0FBQ2dDLGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDLFlBQVk7QUFDOUM1QiwyQkFBZSxDQUFDTyxLQUFoQixDQUFzQmtDLE9BQXRCLEdBQWdDLE1BQWhDO0FBQ0gsV0FGRDtBQUdBN0MsZ0JBQU0sQ0FBQ2dDLGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDLFlBQVk7QUFDOUM1QiwyQkFBZSxDQUFDTyxLQUFoQixDQUFzQmtDLE9BQXRCLEdBQWdDLE1BQWhDO0FBQ0gsV0FGRDtBQUdILFNBUEQsTUFPTztBQUNILGNBQU1TLGFBQWEsR0FBR3RELE1BQU0sQ0FBQ0Usc0JBQVAsQ0FBOEIsZUFBOUIsQ0FBdEI7QUFDQW9ELHVCQUFhLENBQUNuQixPQUFkLENBQXNCLFVBQVVvQixNQUFWLEVBQWtCO0FBQ3BDQSxrQkFBTSxDQUFDNUMsS0FBUCxDQUFha0MsT0FBYixHQUF1QixNQUF2QjtBQUNILFdBRkQ7QUFHSDtBQUNKOztBQUFBO0FBRURkLHVCQUFpQjs7QUFFakIsZUFBU1EsYUFBVCxHQUEwQjtBQUN0QixZQUFJLENBQUM3QyxlQUFMLEVBQXNCO0FBQ2xCVSx5QkFBZSxDQUFDb0MsVUFBaEIsQ0FBMkJDLFNBQTNCLENBQXFDTSxHQUFyQyxDQUF5QyxhQUF6QztBQUNBO0FBQ0g7O0FBQ0QzQyx1QkFBZSxDQUFDd0MsU0FBaEIsQ0FBMEJqQyxLQUExQixDQUFnQ2tDLE9BQWhDLEdBQTBDLE1BQTFDO0FBRUFXLG9CQUFZO0FBQ1ovQyxxQkFBYSxHQUFHZ0QsV0FBVyxDQUFDLFlBQVk7QUFDcEM5QixxQkFBVyxDQUFDLE1BQUQsQ0FBWDtBQUNILFNBRjBCLEVBRXhCaEMsZ0JBRndCLENBQTNCO0FBR0g7O0FBQUE7O0FBRUQsZUFBUzZELFlBQVQsR0FBeUI7QUFDckJFLHFCQUFhLENBQUNqRCxhQUFELENBQWI7QUFDSDs7QUFBQTtBQUVEOEIsbUJBQWE7O0FBRWIsZUFBU08sVUFBVCxHQUF1QjtBQUNuQnBELHVCQUFlLEdBQUcsSUFBbEI7QUFDQTZDLHFCQUFhO0FBQ2hCOztBQUNELGVBQVNTLFdBQVQsR0FBd0I7QUFDcEJ0RCx1QkFBZSxHQUFHLEtBQWxCO0FBQ0E4RCxvQkFBWTtBQUNmOztBQUVELGFBQU87QUFDSEcsWUFBSSxFQUFFYixVQURIO0FBRUhjLGFBQUssRUFBRVo7QUFGSixPQUFQO0FBSUgsS0EvTkQ7QUFnT0gsR0FqT3FCLEVBQXRCOztBQW1PQSxTQUFPdkQsWUFBWSxDQUFDTixRQUFELEVBQVdDLE9BQVgsQ0FBbkI7QUFDSDs7QUFFY0Ysd0VBQWYsRTs7Ozs7Ozs7Ozs7O0FDL09BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBYTs7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNhLGtCQUFULENBQTZCWixRQUE3QixFQUF1QztBQUNuQyxNQUFNMEUsZUFBZSxHQUFHeEUsUUFBUSxDQUFDQyxjQUFULENBQXdCSCxRQUF4QixDQUF4QjtBQUVBLE1BQUkyRSxXQUFXLEdBQUdELGVBQWUsQ0FBQ0UsUUFBbEM7QUFDQUQsYUFBVyxHQUFHRSxLQUFLLENBQUNDLFNBQU4sQ0FBZ0JDLEtBQWhCLENBQXNCQyxJQUF0QixDQUEyQkwsV0FBM0IsQ0FBZDs7QUFFQSxNQUFJQSxXQUFXLENBQUMvRixNQUFaLEdBQXFCLENBQXpCLEVBQTRCO0FBQ3hCLFFBQU1rQyxnQkFBZ0IsR0FBR1osUUFBUSxDQUFDK0UsYUFBVCxDQUF1QixLQUF2QixDQUF6QjtBQUNBbkUsb0JBQWdCLENBQUN3QyxTQUFqQixDQUEyQk0sR0FBM0IsQ0FBK0JzQixpREFBTSxDQUFDcEUsZ0JBQXRDO0FBRUE2RCxlQUFXLENBQUMzQixPQUFaLENBQW9CLFVBQVVtQyxPQUFWLEVBQW1CO0FBQ25DLFVBQUlBLE9BQU8sQ0FBQ0MsT0FBUixLQUFvQixLQUF4QixFQUErQjtBQUMzQkQsZUFBTyxDQUFDN0IsU0FBUixDQUFrQk0sR0FBbEIsQ0FBc0JzQixpREFBTSxDQUFDRyxVQUE3QjtBQUNBRixlQUFPLENBQUNHLFlBQVIsQ0FBcUIsV0FBckIsRUFBa0MsT0FBbEM7QUFFQSxZQUFNQyxvQkFBb0IsR0FBR3JGLFFBQVEsQ0FBQytFLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBN0I7QUFDQU0sNEJBQW9CLENBQUNqQyxTQUFyQixDQUErQk0sR0FBL0IsQ0FBbUNzQixpREFBTSxDQUFDTSxXQUExQztBQUNBRCw0QkFBb0IsQ0FBQ0UsV0FBckIsQ0FBaUNOLE9BQWpDO0FBRUFyRSx3QkFBZ0IsQ0FBQzJFLFdBQWpCLENBQTZCRixvQkFBN0I7QUFDSCxPQVRELE1BU087QUFDSEosZUFBTyxDQUFDN0IsU0FBUixDQUFrQk0sR0FBbEIsQ0FBc0JzQixpREFBTSxDQUFDTSxXQUE3QjtBQUVBMUUsd0JBQWdCLENBQUMyRSxXQUFqQixDQUE2Qk4sT0FBN0I7QUFDSDtBQUNKLEtBZkQ7QUFpQkFULG1CQUFlLENBQUNlLFdBQWhCLENBQTRCM0UsZ0JBQTVCO0FBQ0E0RCxtQkFBZSxDQUFDcEIsU0FBaEIsQ0FBMEJNLEdBQTFCLENBQThCc0IsaURBQU0sQ0FBQ3JFLE1BQXJDO0FBRUEsUUFBTTZFLFVBQVUsR0FBR3hGLFFBQVEsQ0FBQytFLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBbkI7QUFDQVMsY0FBVSxDQUFDcEMsU0FBWCxDQUFxQk0sR0FBckIsQ0FBeUJzQixpREFBTSxDQUFDUSxVQUFoQztBQUNBQSxjQUFVLENBQUNwQyxTQUFYLENBQXFCTSxHQUFyQixDQUF5QnNCLGlEQUFNLENBQUNTLFlBQWhDO0FBQ0FELGNBQVUsQ0FBQ0UsU0FBWCxHQUF1QkMsNERBQXZCO0FBQ0FILGNBQVUsQ0FBQ0ksSUFBWCxHQUFrQixHQUFsQjtBQUNBLFFBQU1DLGNBQWMsR0FBRzdGLFFBQVEsQ0FBQytFLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBdkI7QUFDQWMsa0JBQWMsQ0FBQ3pDLFNBQWYsQ0FBeUJNLEdBQXpCLENBQTZCc0IsaURBQU0sQ0FBQ2EsY0FBcEM7QUFDQUEsa0JBQWMsQ0FBQ3pDLFNBQWYsQ0FBeUJNLEdBQXpCLENBQTZCc0IsaURBQU0sQ0FBQ1MsWUFBcEM7QUFDQUksa0JBQWMsQ0FBQ0gsU0FBZixHQUEyQkksZ0VBQTNCO0FBQ0FELGtCQUFjLENBQUNELElBQWYsR0FBc0IsR0FBdEI7QUFDQSxRQUFNN0UsZUFBZSxHQUFHZixRQUFRLENBQUMrRSxhQUFULENBQXVCLEdBQXZCLENBQXhCO0FBQ0FoRSxtQkFBZSxDQUFDcUMsU0FBaEIsQ0FBMEJNLEdBQTFCLENBQThCc0IsaURBQU0sQ0FBQ2pFLGVBQXJDO0FBQ0FBLG1CQUFlLENBQUNxQyxTQUFoQixDQUEwQk0sR0FBMUIsQ0FBOEJzQixpREFBTSxDQUFDUyxZQUFyQztBQUNBMUUsbUJBQWUsQ0FBQzJFLFNBQWhCLEdBQTRCSyw2REFBZSxHQUFHQyw0REFBOUM7QUFDQWpGLG1CQUFlLENBQUM2RSxJQUFoQixHQUF1QixHQUF2QjtBQUVBcEIsbUJBQWUsQ0FBQ2UsV0FBaEIsQ0FBNEJNLGNBQTVCO0FBQ0FyQixtQkFBZSxDQUFDZSxXQUFoQixDQUE0QkMsVUFBNUI7QUFDQWhCLG1CQUFlLENBQUNlLFdBQWhCLENBQTRCeEUsZUFBNUI7QUFDSDtBQUNKOztBQUVjTCxpRkFBZixFOzs7Ozs7Ozs7OztBQzNEQSxVQUFVLG1CQUFPLENBQUMsb0pBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLDBIQUFnRTs7QUFFbEc7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoiaW1nU2xpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiaW1nU2xpZGVyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImltZ1NsaWRlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbWdTbGlkZXIuanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJDYXBhXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgNDQ0LjgxOSA0NDQuODE5XFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NDQuODE5IDQ0NC44MTk7XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48Zz48cGF0aCBkPVxcXCJNMzUyLjAyNSwxOTYuNzEyTDE2NS44ODQsMTAuODQ4QzE1OS4wMjksMy42MTUsMTUwLjQ2OSwwLDE0MC4xODcsMGMtMTAuMjgyLDAtMTguODQyLDMuNjE5LTI1LjY5NywxMC44NDhMOTIuNzkyLDMyLjI2NCBjLTcuMDQ0LDcuMDQzLTEwLjU2NiwxNS42MDQtMTAuNTY2LDI1LjY5MmMwLDkuODk3LDMuNTIxLDE4LjU2LDEwLjU2NiwyNS45ODFsMTM4Ljc1MywxMzguNDczTDkyLjc4NiwzNjEuMTY4IGMtNy4wNDIsNy4wNDMtMTAuNTY0LDE1LjYwNC0xMC41NjQsMjUuNjkzYzAsOS44OTYsMy41MjEsMTguNTYyLDEwLjU2NCwyNS45OGwyMS43LDIxLjQxMyBjNy4wNDMsNy4wNDMsMTUuNjEyLDEwLjU2NCwyNS42OTcsMTAuNTY0YzEwLjA4OSwwLDE4LjY1Ni0zLjUyMSwyNS42OTctMTAuNTY0bDE4Ni4xNDUtMTg1Ljg2NCBjNy4wNDYtNy40MjMsMTAuNTcxLTE2LjA4NCwxMC41NzEtMjUuOTgxQzM2Mi41OTcsMjEyLjMyMSwzNTkuMDcxLDIwMy43NTUsMzUyLjAyNSwxOTYuNzEyelxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkNhcGFfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCA0NS45NzUgNDUuOTc1XFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NS45NzUgNDUuOTc1O1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+PGc+PGc+PHBhdGggZD1cXFwiTTEzLjk4NywwYy0yLjc2MiwwLTUsMi4yMzktNSw1djM1Ljk3NWMwLDIuNzYzLDIuMjM4LDUsNSw1czUtMi4yMzgsNS01VjVDMTguOTg3LDIuMjM4LDE2Ljc1LDAsMTMuOTg3LDB6XFxcIj48L3BhdGg+PHBhdGggZD1cXFwiTTMxLjk4NywwYy0yLjc2MiwwLTUsMi4yMzktNSw1djM1Ljk3NWMwLDIuNzYyLDIuMjM4LDUsNSw1czUtMi4yMzgsNS01VjVDMzYuOTg3LDIuMjM5LDM0Ljc0OSwwLDMxLjk4NywwelxcXCI+PC9wYXRoPjwvZz48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJDYXBhXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgMTYzLjg2MSAxNjMuODYxXFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxNjMuODYxIDE2My44NjE7XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48Zz48cGF0aCBkPVxcXCJNMzQuODU3LDMuNjEzQzIwLjA4NC00Ljg2MSw4LjEwNywyLjA4MSw4LjEwNywxOS4xMDZ2MTI1LjYzN2MwLDE3LjA0MiwxMS45NzcsMjMuOTc1LDI2Ljc1LDE1LjUwOUwxNDQuNjcsOTcuMjc1IGMxNC43NzgtOC40NzcsMTQuNzc4LTIyLjIxMSwwLTMwLjY4NkwzNC44NTcsMy42MTN6XFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiQ2FwYV8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDQ0NC41MzEgNDQ0LjUzMVxcXCIgc3R5bGU9XFxcImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDQ0LjUzMSA0NDQuNTMxO1xcXCIgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCI+PGc+PHBhdGggZD1cXFwiTTIxMy4xMywyMjIuNDA5TDM1MS44OCw4My42NTNjNy4wNS03LjA0MywxMC41NjctMTUuNjU3LDEwLjU2Ny0yNS44NDFjMC0xMC4xODMtMy41MTgtMTguNzkzLTEwLjU2Ny0yNS44MzUgbC0yMS40MDktMjEuNDE2QzMyMy40MzIsMy41MjEsMzE0LjgxNywwLDMwNC42MzcsMHMtMTguNzkxLDMuNTIxLTI1Ljg0MSwxMC41NjFMOTIuNjQ5LDE5Ni40MjUgYy03LjA0NCw3LjA0My0xMC41NjYsMTUuNjU2LTEwLjU2NiwyNS44NDFzMy41MjEsMTguNzkxLDEwLjU2NiwyNS44MzdsMTg2LjE0NiwxODUuODY0YzcuMDUsNy4wNDMsMTUuNjYsMTAuNTY0LDI1Ljg0MSwxMC41NjQgczE4Ljc5NS0zLjUyMSwyNS44MzQtMTAuNTY0bDIxLjQwOS0yMS40MTJjNy4wNS03LjAzOSwxMC41NjctMTUuNjA0LDEwLjU2Ny0yNS42OTdjMC0xMC4wODUtMy41MTgtMTguNzQ2LTEwLjU2Ny0yNS45NzggTDIxMy4xMywyMjIuNDA5elxcXCI+PC9wYXRoPjwvZz48L3N2Zz5cIiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5zbGlkZXIge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICAgIGN1cnNvcjogZ3JhYjtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlcy1jb2xsZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24tc2VsZjogbm9ybWFsO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpbmdsZS1zbGlkZSB7XFxyXFxuICAgIGZsZXg6IDAgMCAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlLWltYWdlIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1idXR0b24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMzVweDtcXHJcXG4gICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1idXR0b246aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItYnV0dG9uIHN2ZyB7XFxyXFxuICAgIHdpZHRoOiAxNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJldmlvdXMtYnV0dG9uIHtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5leHQtYnV0dG9uIHtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5wbGF5cGF1c2UtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhdXNlZFN0YXRlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJzdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwyQ0FBMkM7SUFDM0MscUJBQXFCO0lBQ3JCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QlwiLFwiZmlsZVwiOlwic3R5bGUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5zbGlkZXIge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICAgIGN1cnNvcjogZ3JhYjtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlcy1jb2xsZWN0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24tc2VsZjogbm9ybWFsO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpbmdsZS1zbGlkZSB7XFxyXFxuICAgIGZsZXg6IDAgMCAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlLWltYWdlIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1idXR0b24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMzVweDtcXHJcXG4gICAgaGVpZ2h0OiAzNXB4O1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1idXR0b246aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItYnV0dG9uIHN2ZyB7XFxyXFxuICAgIHdpZHRoOiAxNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJldmlvdXMtYnV0dG9uIHtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5leHQtYnV0dG9uIHtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5wbGF5cGF1c2UtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhdXNlZFN0YXRlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbn1cIl19XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwic2xpZGVyXCI6IFwic2xpZGVyXCIsXG5cdFwic2xpZGVzLWNvbGxlY3Rpb25cIjogXCJzbGlkZXMtY29sbGVjdGlvblwiLFxuXHRcInNsaWRlc0NvbGxlY3Rpb25cIjogXCJzbGlkZXMtY29sbGVjdGlvblwiLFxuXHRcInNpbmdsZS1zbGlkZVwiOiBcInNpbmdsZS1zbGlkZVwiLFxuXHRcInNpbmdsZVNsaWRlXCI6IFwic2luZ2xlLXNsaWRlXCIsXG5cdFwic2xpZGUtaW1hZ2VcIjogXCJzbGlkZS1pbWFnZVwiLFxuXHRcInNsaWRlSW1hZ2VcIjogXCJzbGlkZS1pbWFnZVwiLFxuXHRcInNsaWRlci1idXR0b25cIjogXCJzbGlkZXItYnV0dG9uXCIsXG5cdFwic2xpZGVyQnV0dG9uXCI6IFwic2xpZGVyLWJ1dHRvblwiLFxuXHRcInByZXZpb3VzLWJ1dHRvblwiOiBcInByZXZpb3VzLWJ1dHRvblwiLFxuXHRcInByZXZpb3VzQnV0dG9uXCI6IFwicHJldmlvdXMtYnV0dG9uXCIsXG5cdFwibmV4dC1idXR0b25cIjogXCJuZXh0LWJ1dHRvblwiLFxuXHRcIm5leHRCdXR0b25cIjogXCJuZXh0LWJ1dHRvblwiLFxuXHRcInBsYXlwYXVzZS1idXR0b25cIjogXCJwbGF5cGF1c2UtYnV0dG9uXCIsXG5cdFwicGxheXBhdXNlQnV0dG9uXCI6IFwicGxheXBhdXNlLWJ1dHRvblwiLFxuXHRcInBhdXNlZFN0YXRlXCI6IFwicGF1c2VkU3RhdGVcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgY3JlYXRlU2xpZGVyTGF5b3V0IGZyb20gJy4vc2xpZGVyTGF5b3V0LmpzJztcclxuXHJcbmZ1bmN0aW9uIGltZ1NsaWRlciAoc2xpZGVySWQsIG9wdGlvbnMpIHtcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzbGlkZXJJZCkgPT09IG51bGwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgRWxlbWVudCB3aXRoIGlkPVwiJHtzbGlkZXJJZH1cIiBub3QgZm91bmQuYCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGxhdW5jaFNsaWRlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzbGlkZXJJZCwge1xyXG4gICAgICAgICAgICBhdXRvcGxheUVuYWJsZWQgPSBmYWxzZSxcclxuICAgICAgICAgICAgYXV0b3BsYXlJbnRlcnZhbCA9IDUwMDAsXHJcbiAgICAgICAgICAgIGJ1dHRvbnNWaXNpYmxlID0gdHJ1ZSxcclxuICAgICAgICAgICAgbWF4V2lkdGggPSAnNTAwcHgnLFxyXG4gICAgICAgICAgICBtYXhIZWlnaHQgPSAnNTAwcHgnLFxyXG4gICAgICAgIH0pIHtcclxuICAgICAgICAgICAgY3JlYXRlU2xpZGVyTGF5b3V0KHNsaWRlcklkKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNsaWRlcklkKSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc0NvbGxlY3Rpb24gPSBzbGlkZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2xpZGVzLWNvbGxlY3Rpb24nKVswXSxcclxuICAgICAgICAgICAgICAgIHNpbmdsZVNsaWRlcyA9IHNsaWRlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaW5nbGUtc2xpZGUnKSxcclxuICAgICAgICAgICAgICAgIHBsYXlwYXVzZUJ1dHRvbiA9IHNsaWRlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwbGF5cGF1c2UtYnV0dG9uJylbMF0sXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1TdGVwID0gMTAwLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzQXJyYXkgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSAwLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtVmFsdWUgPSAwLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVyVGltZXJJZCxcclxuICAgICAgICAgICAgICAgIGlzU2xpZGVJblRyYW5zaXRpb24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHNsaWRlci5zdHlsZS5tYXhXaWR0aCA9IG1heFdpZHRoO1xyXG4gICAgICAgICAgICBzbGlkZXIuc3R5bGUubWF4SGVpZ2h0ID0gbWF4SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHNpbmdsZVNsaWRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpbmdsZVNsaWRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc0FycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiBzaW5nbGVTbGlkZXNbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlc0FycmF5Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvcHkgPSBzaW5nbGVTbGlkZXNbMF0uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpbmdsZVNsaWRlc1swXS5hZnRlcihjb3B5KTtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTogY29weSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogMCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFbGVtZW50ICR7c2xpZGVySWR9IGRvZXNuJ3QgY29udGFpbiBhbnkgc2xpZGVzLmApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIGdldE1pblNsaWRlSW5kZXg6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaW5TbGlkZSA9IHNsaWRlc0FycmF5LnJlZHVjZShmdW5jdGlvbiAocHJldmlvdXMsIGN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChwcmV2aW91cy5wb3NpdGlvbiA8IGN1cnJlbnQucG9zaXRpb24pID8gcHJldmlvdXMgOiBjdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbGlkZXNBcnJheS5pbmRleE9mKG1pblNsaWRlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRNYXhTbGlkZUluZGV4OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF4U2xpZGUgPSBzbGlkZXNBcnJheS5yZWR1Y2UoZnVuY3Rpb24gKHByZXZpb3VzLCBjdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAocHJldmlvdXMucG9zaXRpb24gPiBjdXJyZW50LnBvc2l0aW9uKSA/IHByZXZpb3VzIDogY3VycmVudDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2xpZGVzQXJyYXkuaW5kZXhPZihtYXhTbGlkZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0TWluU2xpZGVQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbGlkZXNBcnJheVt0aGlzLmdldE1pblNsaWRlSW5kZXgoKV0ucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0TWF4U2xpZGVQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbGlkZXNBcnJheVt0aGlzLmdldE1heFNsaWRlSW5kZXgoKV0ucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc3dpdGNoU2xpZGUgKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRTbGlkZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24rKztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBvc2l0aW9uID4gcG9zaXRpb24uZ2V0TWF4U2xpZGVQb3NpdGlvbigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRTbGlkZSA9IHBvc2l0aW9uLmdldE1pblNsaWRlSW5kZXgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzQXJyYXlbbmV4dFNsaWRlXS5wb3NpdGlvbiA9IHBvc2l0aW9uLmdldE1heFNsaWRlUG9zaXRpb24oKSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc0FycmF5W25leHRTbGlkZV0udHJhbnNmb3JtICs9IHNsaWRlc0FycmF5Lmxlbmd0aCAqIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzQXJyYXlbbmV4dFNsaWRlXS5pdGVtLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7c2xpZGVzQXJyYXlbbmV4dFNsaWRlXS50cmFuc2Zvcm19JSlgO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1WYWx1ZSAtPSB0cmFuc2Zvcm1TdGVwO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24tLTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBvc2l0aW9uIDwgcG9zaXRpb24uZ2V0TWluU2xpZGVQb3NpdGlvbigpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRTbGlkZSA9IHBvc2l0aW9uLmdldE1heFNsaWRlSW5kZXgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzQXJyYXlbbmV4dFNsaWRlXS5wb3NpdGlvbiA9IHBvc2l0aW9uLmdldE1pblNsaWRlUG9zaXRpb24oKSAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc0FycmF5W25leHRTbGlkZV0udHJhbnNmb3JtIC09IHNsaWRlc0FycmF5Lmxlbmd0aCAqIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzQXJyYXlbbmV4dFNsaWRlXS5pdGVtLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7c2xpZGVzQXJyYXlbbmV4dFNsaWRlXS50cmFuc2Zvcm19JSlgO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1WYWx1ZSArPSB0cmFuc2Zvcm1TdGVwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNsaWRlc0NvbGxlY3Rpb24uc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzAuNXMnO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzQ29sbGVjdGlvbi5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3RyYW5zZm9ybVZhbHVlfSUpYDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc0NvbGxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbnN0YXJ0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU2xpZGVJblRyYW5zaXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNDb2xsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTbGlkZUluVHJhbnNpdGlvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoY3VycmVudFBvc2l0aW9uKSA9PT0gc2xpZGVzQXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybVZhbHVlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzQ29sbGVjdGlvbi5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMHMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNDb2xsZWN0aW9uLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChzbGlkZSwgaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUucG9zaXRpb24gPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUudHJhbnNmb3JtID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlLml0ZW0uc3R5bGUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2xpZGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25leHQtYnV0dG9uJylbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzU2xpZGVJblRyYW5zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoU2xpZGUoJ25leHQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlTdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2xpZGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ByZXZpb3VzLWJ1dHRvbicpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1NsaWRlSW5UcmFuc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaFNsaWRlKCdwcmV2aW91cycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheVN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBwbGF5cGF1c2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGxheXBhdXNlQnV0dG9uLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYXVzZWRTdGF0ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlwYXVzZUJ1dHRvbi5maXJzdENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ3BhdXNlZFN0YXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlwYXVzZUJ1dHRvbi5sYXN0Q2hpbGQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheVNsaWRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlwYXVzZUJ1dHRvbi5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ3BhdXNlZFN0YXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlwYXVzZUJ1dHRvbi5sYXN0Q2hpbGQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF1c2VTbGlkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnRYID0gMDtcclxuICAgICAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlTdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ID0gZW5kWCAtIHN0YXJ0WDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpZnQgPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hTbGlkZSgncHJldmlvdXMnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNoaWZ0IDwgLTEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaFNsaWRlKCduZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5U3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0WCA9IGUuY2xpZW50WDtcclxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheVN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmRYID0gZS5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlmdCA9IGVuZFggLSBzdGFydFg7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoaWZ0ID4gMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoU2xpZGUoJ3ByZXZpb3VzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlmdCA8IC0xMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hTbGlkZSgnbmV4dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheVN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYnV0dG9uc1Zpc2libGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheXBhdXNlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlwYXVzZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzbGlkZXJCdXR0b25zID0gc2xpZGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NsaWRlci1idXR0b24nKTtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXJCdXR0b25zLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBhdXRvcGxheVN0YXJ0ICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghYXV0b3BsYXlFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheXBhdXNlQnV0dG9uLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgncGF1c2VkU3RhdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwbGF5cGF1c2VCdXR0b24ubGFzdENoaWxkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXJUaW1lcklkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFNsaWRlKCduZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICB9LCBhdXRvcGxheUludGVydmFsKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGF1dG9wbGF5U3RvcCAoKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHNsaWRlclRpbWVySWQpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgYXV0b3BsYXlTdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcGxheVNsaWRlciAoKSB7XHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheUVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHBhdXNlU2xpZGVyICgpIHtcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5RW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTdG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwbGF5OiBwbGF5U2xpZGVyLFxyXG4gICAgICAgICAgICAgICAgcGF1c2U6IHBhdXNlU2xpZGVyLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcbiAgICB9KCkpO1xyXG5cclxuICAgIHJldHVybiBsYXVuY2hTbGlkZXIoc2xpZGVySWQsIG9wdGlvbnMpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbWdTbGlkZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLmNzcyc7XHJcbmltcG9ydCBuZXh0QnV0dG9uSWNvbiBmcm9tICcuLi9pY29ucy9uZXh0QnV0dG9uLnN2Zyc7XHJcbmltcG9ydCBwcmV2aW91c0J1dHRvbkljb24gZnJvbSAnLi4vaWNvbnMvcHJldmlvdXNCdXR0b24uc3ZnJztcclxuaW1wb3J0IHBhdXNlQnV0dG9uSWNvbiBmcm9tICcuLi9pY29ucy9wYXVzZUJ1dHRvbi5zdmcnO1xyXG5pbXBvcnQgcGxheUJ1dHRvbkljb24gZnJvbSAnLi4vaWNvbnMvcGxheUJ1dHRvbi5zdmcnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlU2xpZGVyTGF5b3V0IChzbGlkZXJJZCkge1xyXG4gICAgY29uc3Qgc2xpZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2xpZGVySWQpO1xyXG5cclxuICAgIGxldCBpbWdFbGVtZW50cyA9IHNsaWRlckNvbnRhaW5lci5jaGlsZHJlbjtcclxuICAgIGltZ0VsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoaW1nRWxlbWVudHMpO1xyXG5cclxuICAgIGlmIChpbWdFbGVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3Qgc2xpZGVzQ29sbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHNsaWRlc0NvbGxlY3Rpb24uY2xhc3NMaXN0LmFkZChzdHlsZXMuc2xpZGVzQ29sbGVjdGlvbik7XHJcblxyXG4gICAgICAgIGltZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ0lNRycpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChzdHlsZXMuc2xpZGVJbWFnZSk7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZHJhZ2dhYmxlJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2luZ2xlU2xpZGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIHNpbmdsZVNsaWRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnNpbmdsZVNsaWRlKTtcclxuICAgICAgICAgICAgICAgIHNpbmdsZVNsaWRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNsaWRlc0NvbGxlY3Rpb24uYXBwZW5kQ2hpbGQoc2luZ2xlU2xpZGVDb250YWluZXIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zaW5nbGVTbGlkZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2xpZGVzQ29sbGVjdGlvbi5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzbGlkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2xpZGVzQ29sbGVjdGlvbik7XHJcbiAgICAgICAgc2xpZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnNsaWRlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgbmV4dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHN0eWxlcy5uZXh0QnV0dG9uKTtcclxuICAgICAgICBuZXh0QnV0dG9uLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnNsaWRlckJ1dHRvbik7XHJcbiAgICAgICAgbmV4dEJ1dHRvbi5pbm5lckhUTUwgPSBuZXh0QnV0dG9uSWNvbjtcclxuICAgICAgICBuZXh0QnV0dG9uLmhyZWYgPSAnIyc7XHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgcHJldmlvdXNCdXR0b24uY2xhc3NMaXN0LmFkZChzdHlsZXMucHJldmlvdXNCdXR0b24pO1xyXG4gICAgICAgIHByZXZpb3VzQnV0dG9uLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnNsaWRlckJ1dHRvbik7XHJcbiAgICAgICAgcHJldmlvdXNCdXR0b24uaW5uZXJIVE1MID0gcHJldmlvdXNCdXR0b25JY29uO1xyXG4gICAgICAgIHByZXZpb3VzQnV0dG9uLmhyZWYgPSAnIyc7XHJcbiAgICAgICAgY29uc3QgcGxheXBhdXNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIHBsYXlwYXVzZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKHN0eWxlcy5wbGF5cGF1c2VCdXR0b24pO1xyXG4gICAgICAgIHBsYXlwYXVzZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zbGlkZXJCdXR0b24pO1xyXG4gICAgICAgIHBsYXlwYXVzZUJ1dHRvbi5pbm5lckhUTUwgPSBwYXVzZUJ1dHRvbkljb24gKyBwbGF5QnV0dG9uSWNvbjtcclxuICAgICAgICBwbGF5cGF1c2VCdXR0b24uaHJlZiA9ICcjJztcclxuXHJcbiAgICAgICAgc2xpZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHByZXZpb3VzQnV0dG9uKTtcclxuICAgICAgICBzbGlkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobmV4dEJ1dHRvbik7XHJcbiAgICAgICAgc2xpZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXlwYXVzZUJ1dHRvbik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNsaWRlckxheW91dDtcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=