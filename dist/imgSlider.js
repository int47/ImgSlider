this["imgSlider"] =
/******/ (function(modules) { // webpackBootstrap
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


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



function imgSlider(sliderId, _ref) {
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

  if (document.getElementById(sliderId) === null) {
    console.log("Element with id=\"".concat(sliderId, "\" not found."));
    return;
  }

  Object(_sliderLayout_js__WEBPACK_IMPORTED_MODULE_0__["default"])(sliderId);

  var slider = document.getElementById(sliderId),
      slidesCollection = slider.getElementsByClassName('slides-collection')[0],
      singleSlides = slider.getElementsByClassName('single-slide'),
      playpauseButton = slider.getElementsByClassName('playpause-button')[0],
      transformStep = 100,
      slidesArray = _toConsumableArray(singleSlides).map(function (item, position) {
    return {
      item: item,
      position: position,
      transform: 0
    };
  }),
      slideDirection = {
    next: 'next',
    previous: 'previous'
  };

  var transformValue = 0,
      sliderTimerId,
      isSlideInTransition = false;
  slider.style.maxWidth = maxWidth;
  slider.style.maxHeight = maxHeight;

  if (slidesArray.length === 0) {
    console.log("Element ".concat(sliderId, " doesn't contain any slides."));
    return;
  } else {
    if (slidesArray.length === 1) {
      var copy = singleSlides[0].cloneNode(true);
      singleSlides[0].after(copy);
      slidesArray.push({
        item: copy,
        position: 1,
        transform: 0
      });
    }
  }

  var position = {
    currentPosition: 0,
    clearCurrentPosition: function clearCurrentPosition() {
      position.currentPosition = 0;
    },
    nextCurrentPosition: function nextCurrentPosition() {
      position.currentPosition++;
    },
    prevCurrentPosition: function prevCurrentPosition() {
      position.currentPosition--;
    },
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

    if (direction === slideDirection.next) {
      position.nextCurrentPosition();

      if (position.currentPosition > position.getMaxSlidePosition()) {
        nextSlide = position.getMinSlideIndex();
        slidesArray[nextSlide].position = position.getMaxSlidePosition() + 1;
        slidesArray[nextSlide].transform += slidesArray.length * 100;
        slidesArray[nextSlide].item.style.transform = "translateX(".concat(slidesArray[nextSlide].transform, "%)");
      }

      transformValue -= transformStep;
    } else {
      position.prevCurrentPosition();

      if (position.currentPosition < position.getMinSlidePosition()) {
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

      if (Math.abs(position.currentPosition) === slidesArray.length) {
        position.clearCurrentPosition();
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
        switchSlide(slideDirection.next);
      }

      clearAutoplayTimer();
    });
    slider.getElementsByClassName('previous-button')[0].addEventListener('click', function (e) {
      e.preventDefault();

      if (!isSlideInTransition) {
        switchSlide(slideDirection.previous);
      }

      clearAutoplayTimer();
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
    var startX = 0,
        isMousedownOnSlider = false;

    function switchSlideByEvent(endX) {
      var shift = endX - startX;

      if (shift > 10) {
        switchSlide(slideDirection.previous);
      } else if (shift < -10) {
        switchSlide(slideDirection.next);
      }

      clearAutoplayTimer();
    }

    slider.addEventListener('touchstart', function (e) {
      startX = e.changedTouches[0].clientX;
      clearAutoplayTimer();
    });
    slider.addEventListener('touchend', function (e) {
      switchSlideByEvent(e.changedTouches[0].clientX);
    });
    slider.addEventListener('mousedown', function (e) {
      isMousedownOnSlider = true;
      startX = e.clientX;
      clearAutoplayTimer();
    });
    slider.addEventListener('mouseup', function (e) {
      isMousedownOnSlider = false;
      switchSlideByEvent(e.clientX);
    });
    slider.addEventListener('mouseleave', function (e) {
      if (isMousedownOnSlider) {
        isMousedownOnSlider = false;
        switchSlideByEvent(e.clientX);
      }
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

  function clearAutoplayTimer() {
    if (!autoplayEnabled) {
      return;
    }

    autoplayStop();
    sliderTimerId = setInterval(function () {
      switchSlide(slideDirection.next);
    }, autoplayInterval);
  }

  function autoplayStart() {
    if (!autoplayEnabled) {
      playpauseButton.firstChild.classList.add('pausedState');
      return;
    }

    playpauseButton.lastChild.style.display = 'none';
    clearAutoplayTimer();
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
  var sliderContainer = document.getElementById(sliderId),
      imgElements = Array.prototype.slice.call(sliderContainer.children);

  if (imgElements.length === 0) {
    return;
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWdTbGlkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW1nU2xpZGVyLy4uL2ljb25zL25leHRCdXR0b24uc3ZnIiwid2VicGFjazovL2ltZ1NsaWRlci8uLi9pY29ucy9wYXVzZUJ1dHRvbi5zdmciLCJ3ZWJwYWNrOi8vaW1nU2xpZGVyLy4uL2ljb25zL3BsYXlCdXR0b24uc3ZnIiwid2VicGFjazovL2ltZ1NsaWRlci8uLi9pY29ucy9wcmV2aW91c0J1dHRvbi5zdmciLCJ3ZWJwYWNrOi8vaW1nU2xpZGVyLy4vc3R5bGUuY3NzIiwid2VicGFjazovL2ltZ1NsaWRlci8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2ltZ1NsaWRlci8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vaW1nU2xpZGVyLy4vaW1nU2xpZGVyLmpzIiwid2VicGFjazovL2ltZ1NsaWRlci8uL3NsaWRlckxheW91dC5qcyIsIndlYnBhY2s6Ly9pbWdTbGlkZXIvLi9zdHlsZS5jc3M/NTNlNyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwidXNlU291cmNlTWFwIiwibGlzdCIsInRvU3RyaW5nIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwiY29uY2F0Iiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWFRdWVyeSIsImRlZHVwZSIsImFscmVhZHlJbXBvcnRlZE1vZHVsZXMiLCJsZW5ndGgiLCJpZCIsIl9pIiwicHVzaCIsImNzc01hcHBpbmciLCJidG9hIiwic291cmNlTWFwcGluZyIsInRvQ29tbWVudCIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsInNvdXJjZU1hcCIsImJhc2U2NCIsInVuZXNjYXBlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJpbWdTbGlkZXIiLCJzbGlkZXJJZCIsImF1dG9wbGF5RW5hYmxlZCIsImF1dG9wbGF5SW50ZXJ2YWwiLCJidXR0b25zVmlzaWJsZSIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVTbGlkZXJMYXlvdXQiLCJzbGlkZXIiLCJzbGlkZXNDb2xsZWN0aW9uIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNpbmdsZVNsaWRlcyIsInBsYXlwYXVzZUJ1dHRvbiIsInRyYW5zZm9ybVN0ZXAiLCJzbGlkZXNBcnJheSIsInBvc2l0aW9uIiwidHJhbnNmb3JtIiwic2xpZGVEaXJlY3Rpb24iLCJuZXh0IiwicHJldmlvdXMiLCJ0cmFuc2Zvcm1WYWx1ZSIsInNsaWRlclRpbWVySWQiLCJpc1NsaWRlSW5UcmFuc2l0aW9uIiwic3R5bGUiLCJjb3B5IiwiY2xvbmVOb2RlIiwiYWZ0ZXIiLCJjdXJyZW50UG9zaXRpb24iLCJjbGVhckN1cnJlbnRQb3NpdGlvbiIsIm5leHRDdXJyZW50UG9zaXRpb24iLCJwcmV2Q3VycmVudFBvc2l0aW9uIiwiZ2V0TWluU2xpZGVJbmRleCIsIm1pblNsaWRlIiwicmVkdWNlIiwiY3VycmVudCIsImluZGV4T2YiLCJnZXRNYXhTbGlkZUluZGV4IiwibWF4U2xpZGUiLCJnZXRNaW5TbGlkZVBvc2l0aW9uIiwiZ2V0TWF4U2xpZGVQb3NpdGlvbiIsInN3aXRjaFNsaWRlIiwiZGlyZWN0aW9uIiwibmV4dFNsaWRlIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVyIiwiTWF0aCIsImFicyIsImZvckVhY2giLCJzbGlkZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNsZWFyQXV0b3BsYXlUaW1lciIsImZpcnN0Q2hpbGQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsImxhc3RDaGlsZCIsImRpc3BsYXkiLCJwbGF5U2xpZGVyIiwiYWRkIiwicGF1c2VTbGlkZXIiLCJzdGFydFgiLCJpc01vdXNlZG93bk9uU2xpZGVyIiwic3dpdGNoU2xpZGVCeUV2ZW50IiwiZW5kWCIsInNoaWZ0IiwiY2hhbmdlZFRvdWNoZXMiLCJjbGllbnRYIiwic2xpZGVyQnV0dG9ucyIsImJ1dHRvbiIsImF1dG9wbGF5U3RvcCIsInNldEludGVydmFsIiwiYXV0b3BsYXlTdGFydCIsImNsZWFySW50ZXJ2YWwiLCJwbGF5IiwicGF1c2UiLCJzbGlkZXJDb250YWluZXIiLCJpbWdFbGVtZW50cyIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiY2hpbGRyZW4iLCJjcmVhdGVFbGVtZW50Iiwic3R5bGVzIiwiZWxlbWVudCIsInRhZ05hbWUiLCJzbGlkZUltYWdlIiwic2V0QXR0cmlidXRlIiwic2luZ2xlU2xpZGVDb250YWluZXIiLCJzaW5nbGVTbGlkZSIsImFwcGVuZENoaWxkIiwibmV4dEJ1dHRvbiIsInNsaWRlckJ1dHRvbiIsImlubmVySFRNTCIsIm5leHRCdXR0b25JY29uIiwiaHJlZiIsInByZXZpb3VzQnV0dG9uIiwicHJldmlvdXNCdXR0b25JY29uIiwicGF1c2VCdXR0b25JY29uIiwicGxheUJ1dHRvbkljb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QjtBQUNBRCxnQkFBYyxDQUFDRCxJQUFmLEdBQXNCLEdBQXRCO0FBQ0EsTUFBTXJGLGVBQWUsR0FBR1QsUUFBUSxDQUFDaUYsYUFBVCxDQUF1QixHQUF2QixDQUF4QjtBQUNBeEUsaUJBQWUsQ0FBQzBDLFNBQWhCLENBQTBCTSxHQUExQixDQUE4QnlCLGlEQUFNLENBQUN6RSxlQUFyQztBQUNBQSxpQkFBZSxDQUFDMEMsU0FBaEIsQ0FBMEJNLEdBQTFCLENBQThCeUIsaURBQU0sQ0FBQ1MsWUFBckM7QUFDQWxGLGlCQUFlLENBQUNtRixTQUFoQixHQUE0QkssNkRBQWUsR0FBR0MsNERBQTlDO0FBQ0F6RixpQkFBZSxDQUFDcUYsSUFBaEIsR0FBdUIsR0FBdkI7QUFFQXBCLGlCQUFlLENBQUNlLFdBQWhCLENBQTRCTSxjQUE1QjtBQUNBckIsaUJBQWUsQ0FBQ2UsV0FBaEIsQ0FBNEJDLFVBQTVCO0FBQ0FoQixpQkFBZSxDQUFDZSxXQUFoQixDQUE0QmhGLGVBQTVCO0FBQ0g7O0FBRWNMLGlGQUFmLEU7Ozs7Ozs7Ozs7O0FDM0RBLFVBQVUsbUJBQU8sQ0FBQyxvSkFBd0U7QUFDMUYsMEJBQTBCLG1CQUFPLENBQUMsMEhBQWdFOztBQUVsRzs7QUFFQTtBQUNBLDBCQUEwQixRQUFTO0FBQ25DOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFJQSxzQyIsImZpbGUiOiJpbWdTbGlkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2ltZ1NsaWRlci5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkNhcGFfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCA0NDQuODE5IDQ0NC44MTlcXFwiIHN0eWxlPVxcXCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ0NC44MTkgNDQ0LjgxOTtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxnPjxwYXRoIGQ9XFxcIk0zNTIuMDI1LDE5Ni43MTJMMTY1Ljg4NCwxMC44NDhDMTU5LjAyOSwzLjYxNSwxNTAuNDY5LDAsMTQwLjE4NywwYy0xMC4yODIsMC0xOC44NDIsMy42MTktMjUuNjk3LDEwLjg0OEw5Mi43OTIsMzIuMjY0IGMtNy4wNDQsNy4wNDMtMTAuNTY2LDE1LjYwNC0xMC41NjYsMjUuNjkyYzAsOS44OTcsMy41MjEsMTguNTYsMTAuNTY2LDI1Ljk4MWwxMzguNzUzLDEzOC40NzNMOTIuNzg2LDM2MS4xNjggYy03LjA0Miw3LjA0My0xMC41NjQsMTUuNjA0LTEwLjU2NCwyNS42OTNjMCw5Ljg5NiwzLjUyMSwxOC41NjIsMTAuNTY0LDI1Ljk4bDIxLjcsMjEuNDEzIGM3LjA0Myw3LjA0MywxNS42MTIsMTAuNTY0LDI1LjY5NywxMC41NjRjMTAuMDg5LDAsMTguNjU2LTMuNTIxLDI1LjY5Ny0xMC41NjRsMTg2LjE0NS0xODUuODY0IGM3LjA0Ni03LjQyMywxMC41NzEtMTYuMDg0LDEwLjU3MS0yNS45ODFDMzYyLjU5NywyMTIuMzIxLDM1OS4wNzEsMjAzLjc1NSwzNTIuMDI1LDE5Ni43MTJ6XFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiBpZD1cXFwiQ2FwYV8xXFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCIgdmlld0JveD1cXFwiMCAwIDQ1Ljk3NSA0NS45NzVcXFwiIHN0eWxlPVxcXCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1Ljk3NSA0NS45NzU7XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48Zz48Zz48cGF0aCBkPVxcXCJNMTMuOTg3LDBjLTIuNzYyLDAtNSwyLjIzOS01LDV2MzUuOTc1YzAsMi43NjMsMi4yMzgsNSw1LDVzNS0yLjIzOCw1LTVWNUMxOC45ODcsMi4yMzgsMTYuNzUsMCwxMy45ODcsMHpcXFwiPjwvcGF0aD48cGF0aCBkPVxcXCJNMzEuOTg3LDBjLTIuNzYyLDAtNSwyLjIzOS01LDV2MzUuOTc1YzAsMi43NjIsMi4yMzgsNSw1LDVzNS0yLjIzOCw1LTVWNUMzNi45ODcsMi4yMzksMzQuNzQ5LDAsMzEuOTg3LDB6XFxcIj48L3BhdGg+PC9nPjwvZz48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHZlcnNpb249XFxcIjEuMVxcXCIgaWQ9XFxcIkNhcGFfMVxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCAxNjMuODYxIDE2My44NjFcXFwiIHN0eWxlPVxcXCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE2My44NjEgMTYzLjg2MTtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiPjxnPjxwYXRoIGQ9XFxcIk0zNC44NTcsMy42MTNDMjAuMDg0LTQuODYxLDguMTA3LDIuMDgxLDguMTA3LDE5LjEwNnYxMjUuNjM3YzAsMTcuMDQyLDExLjk3NywyMy45NzUsMjYuNzUsMTUuNTA5TDE0NC42Nyw5Ny4yNzUgYzE0Ljc3OC04LjQ3NywxNC43NzgtMjIuMjExLDAtMzAuNjg2TDM0Ljg1NywzLjYxM3pcXFwiPjwvcGF0aD48L2c+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB2ZXJzaW9uPVxcXCIxLjFcXFwiIGlkPVxcXCJDYXBhXzFcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiB2aWV3Qm94PVxcXCIwIDAgNDQ0LjUzMSA0NDQuNTMxXFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NDQuNTMxIDQ0NC41MzE7XFxcIiB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIj48Zz48cGF0aCBkPVxcXCJNMjEzLjEzLDIyMi40MDlMMzUxLjg4LDgzLjY1M2M3LjA1LTcuMDQzLDEwLjU2Ny0xNS42NTcsMTAuNTY3LTI1Ljg0MWMwLTEwLjE4My0zLjUxOC0xOC43OTMtMTAuNTY3LTI1LjgzNSBsLTIxLjQwOS0yMS40MTZDMzIzLjQzMiwzLjUyMSwzMTQuODE3LDAsMzA0LjYzNywwcy0xOC43OTEsMy41MjEtMjUuODQxLDEwLjU2MUw5Mi42NDksMTk2LjQyNSBjLTcuMDQ0LDcuMDQzLTEwLjU2NiwxNS42NTYtMTAuNTY2LDI1Ljg0MXMzLjUyMSwxOC43OTEsMTAuNTY2LDI1LjgzN2wxODYuMTQ2LDE4NS44NjRjNy4wNSw3LjA0MywxNS42NiwxMC41NjQsMjUuODQxLDEwLjU2NCBzMTguNzk1LTMuNTIxLDI1LjgzNC0xMC41NjRsMjEuNDA5LTIxLjQxMmM3LjA1LTcuMDM5LDEwLjU2Ny0xNS42MDQsMTAuNTY3LTI1LjY5N2MwLTEwLjA4NS0zLjUxOC0xOC43NDYtMTAuNTY3LTI1Ljk3OCBMMjEzLjEzLDIyMi40MDl6XFxcIj48L3BhdGg+PC9nPjwvc3ZnPlwiIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNsaWRlciB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gICAgY3Vyc29yOiBncmFiO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVzLWNvbGxlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1zZWxmOiBub3JtYWw7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2luZ2xlLXNsaWRlIHtcXHJcXG4gICAgZmxleDogMCAwIDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGUtaW1hZ2Uge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLWJ1dHRvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAzNXB4O1xcclxcbiAgICBoZWlnaHQ6IDM1cHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1idXR0b246aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItYnV0dG9uIHN2ZyB7XFxyXFxuICAgIHdpZHRoOiAxNXB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuLnByZXZpb3VzLWJ1dHRvbiB7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5uZXh0LWJ1dHRvbiB7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheXBhdXNlLWJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wYXVzZWRTdGF0ZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wic3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsMkNBQTJDO0lBQzNDLHFCQUFxQjtJQUNyQixzQ0FBc0M7QUFDMUM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksT0FBTztBQUNYOztBQUVBO0lBQ0ksUUFBUTtBQUNaOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkJcIixcImZpbGVcIjpcInN0eWxlLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2xpZGVyIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgICBjdXJzb3I6IGdyYWI7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXMtY29sbGVjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLXNlbGY6IG5vcm1hbDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5zaW5nbGUtc2xpZGUge1xcclxcbiAgICBmbGV4OiAwIDAgMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZS1pbWFnZSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItYnV0dG9uIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDM1cHg7XFxyXFxuICAgIGhlaWdodDogMzVweDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnNsaWRlci1idXR0b24gc3ZnIHtcXHJcXG4gICAgd2lkdGg6IDE1cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJldmlvdXMtYnV0dG9uIHtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5leHQtYnV0dG9uIHtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5wbGF5cGF1c2UtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnBhdXNlZFN0YXRlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcclxcbn1cIl19XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwic2xpZGVyXCI6IFwic2xpZGVyXCIsXG5cdFwic2xpZGVzLWNvbGxlY3Rpb25cIjogXCJzbGlkZXMtY29sbGVjdGlvblwiLFxuXHRcInNsaWRlc0NvbGxlY3Rpb25cIjogXCJzbGlkZXMtY29sbGVjdGlvblwiLFxuXHRcInNpbmdsZS1zbGlkZVwiOiBcInNpbmdsZS1zbGlkZVwiLFxuXHRcInNpbmdsZVNsaWRlXCI6IFwic2luZ2xlLXNsaWRlXCIsXG5cdFwic2xpZGUtaW1hZ2VcIjogXCJzbGlkZS1pbWFnZVwiLFxuXHRcInNsaWRlSW1hZ2VcIjogXCJzbGlkZS1pbWFnZVwiLFxuXHRcInNsaWRlci1idXR0b25cIjogXCJzbGlkZXItYnV0dG9uXCIsXG5cdFwic2xpZGVyQnV0dG9uXCI6IFwic2xpZGVyLWJ1dHRvblwiLFxuXHRcInByZXZpb3VzLWJ1dHRvblwiOiBcInByZXZpb3VzLWJ1dHRvblwiLFxuXHRcInByZXZpb3VzQnV0dG9uXCI6IFwicHJldmlvdXMtYnV0dG9uXCIsXG5cdFwibmV4dC1idXR0b25cIjogXCJuZXh0LWJ1dHRvblwiLFxuXHRcIm5leHRCdXR0b25cIjogXCJuZXh0LWJ1dHRvblwiLFxuXHRcInBsYXlwYXVzZS1idXR0b25cIjogXCJwbGF5cGF1c2UtYnV0dG9uXCIsXG5cdFwicGxheXBhdXNlQnV0dG9uXCI6IFwicGxheXBhdXNlLWJ1dHRvblwiLFxuXHRcInBhdXNlZFN0YXRlXCI6IFwicGF1c2VkU3RhdGVcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgY3JlYXRlU2xpZGVyTGF5b3V0IGZyb20gJy4vc2xpZGVyTGF5b3V0LmpzJztcclxuXHJcbmZ1bmN0aW9uIGltZ1NsaWRlciAoXHJcbiAgICBzbGlkZXJJZCxcclxuICAgIHtcclxuICAgICAgICBhdXRvcGxheUVuYWJsZWQgPSBmYWxzZSxcclxuICAgICAgICBhdXRvcGxheUludGVydmFsID0gNTAwMCxcclxuICAgICAgICBidXR0b25zVmlzaWJsZSA9IHRydWUsXHJcbiAgICAgICAgbWF4V2lkdGggPSAnNTAwcHgnLFxyXG4gICAgICAgIG1heEhlaWdodCA9ICc1MDBweCcsXHJcbiAgICB9LFxyXG4pIHtcclxuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzbGlkZXJJZCkgPT09IG51bGwpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgRWxlbWVudCB3aXRoIGlkPVwiJHtzbGlkZXJJZH1cIiBub3QgZm91bmQuYCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY3JlYXRlU2xpZGVyTGF5b3V0KHNsaWRlcklkKTtcclxuXHJcbiAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzbGlkZXJJZCksXHJcbiAgICAgICAgc2xpZGVzQ29sbGVjdGlvbiA9IHNsaWRlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzbGlkZXMtY29sbGVjdGlvbicpWzBdLFxyXG4gICAgICAgIHNpbmdsZVNsaWRlcyA9IHNsaWRlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaW5nbGUtc2xpZGUnKSxcclxuICAgICAgICBwbGF5cGF1c2VCdXR0b24gPSBzbGlkZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGxheXBhdXNlLWJ1dHRvbicpWzBdLFxyXG4gICAgICAgIHRyYW5zZm9ybVN0ZXAgPSAxMDAsXHJcbiAgICAgICAgc2xpZGVzQXJyYXkgPSBbLi4uc2luZ2xlU2xpZGVzXS5tYXAoKGl0ZW0sIHBvc2l0aW9uKSA9PiAoeyBpdGVtLCBwb3NpdGlvbiwgdHJhbnNmb3JtOiAwIH0pKSxcclxuICAgICAgICBzbGlkZURpcmVjdGlvbiA9IHsgbmV4dDogJ25leHQnLCBwcmV2aW91czogJ3ByZXZpb3VzJyB9O1xyXG5cclxuICAgIGxldCB0cmFuc2Zvcm1WYWx1ZSA9IDAsXHJcbiAgICAgICAgc2xpZGVyVGltZXJJZCxcclxuICAgICAgICBpc1NsaWRlSW5UcmFuc2l0aW9uID0gZmFsc2U7XHJcblxyXG4gICAgc2xpZGVyLnN0eWxlLm1heFdpZHRoID0gbWF4V2lkdGg7XHJcbiAgICBzbGlkZXIuc3R5bGUubWF4SGVpZ2h0ID0gbWF4SGVpZ2h0O1xyXG5cclxuICAgIGlmIChzbGlkZXNBcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhgRWxlbWVudCAke3NsaWRlcklkfSBkb2Vzbid0IGNvbnRhaW4gYW55IHNsaWRlcy5gKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChzbGlkZXNBcnJheS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgY29uc3QgY29weSA9IHNpbmdsZVNsaWRlc1swXS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIHNpbmdsZVNsaWRlc1swXS5hZnRlcihjb3B5KTtcclxuICAgICAgICAgICAgc2xpZGVzQXJyYXkucHVzaCh7IGl0ZW06IGNvcHksIHBvc2l0aW9uOiAxLCB0cmFuc2Zvcm06IDAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBvc2l0aW9uID0ge1xyXG4gICAgICAgIGN1cnJlbnRQb3NpdGlvbjogMCxcclxuICAgICAgICBjbGVhckN1cnJlbnRQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbi5jdXJyZW50UG9zaXRpb24gPSAwO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbmV4dEN1cnJlbnRQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbi5jdXJyZW50UG9zaXRpb24rKztcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByZXZDdXJyZW50UG9zaXRpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcG9zaXRpb24uY3VycmVudFBvc2l0aW9uLS07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRNaW5TbGlkZUluZGV4OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1pblNsaWRlID0gc2xpZGVzQXJyYXkucmVkdWNlKGZ1bmN0aW9uIChwcmV2aW91cywgY3VycmVudCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzLnBvc2l0aW9uIDwgY3VycmVudC5wb3NpdGlvbiA/IHByZXZpb3VzIDogY3VycmVudDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBzbGlkZXNBcnJheS5pbmRleE9mKG1pblNsaWRlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldE1heFNsaWRlSW5kZXg6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgbWF4U2xpZGUgPSBzbGlkZXNBcnJheS5yZWR1Y2UoZnVuY3Rpb24gKHByZXZpb3VzLCBjdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldmlvdXMucG9zaXRpb24gPiBjdXJyZW50LnBvc2l0aW9uID8gcHJldmlvdXMgOiBjdXJyZW50O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHNsaWRlc0FycmF5LmluZGV4T2YobWF4U2xpZGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0TWluU2xpZGVQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2xpZGVzQXJyYXlbdGhpcy5nZXRNaW5TbGlkZUluZGV4KCldLnBvc2l0aW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0TWF4U2xpZGVQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2xpZGVzQXJyYXlbdGhpcy5nZXRNYXhTbGlkZUluZGV4KCldLnBvc2l0aW9uO1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHN3aXRjaFNsaWRlIChkaXJlY3Rpb24pIHtcclxuICAgICAgICBsZXQgbmV4dFNsaWRlID0gMDtcclxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSBzbGlkZURpcmVjdGlvbi5uZXh0KSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uLm5leHRDdXJyZW50UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uLmN1cnJlbnRQb3NpdGlvbiA+IHBvc2l0aW9uLmdldE1heFNsaWRlUG9zaXRpb24oKSkge1xyXG4gICAgICAgICAgICAgICAgbmV4dFNsaWRlID0gcG9zaXRpb24uZ2V0TWluU2xpZGVJbmRleCgpO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzQXJyYXlbbmV4dFNsaWRlXS5wb3NpdGlvbiA9IHBvc2l0aW9uLmdldE1heFNsaWRlUG9zaXRpb24oKSArIDE7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNBcnJheVtuZXh0U2xpZGVdLnRyYW5zZm9ybSArPSBzbGlkZXNBcnJheS5sZW5ndGggKiAxMDA7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNBcnJheVtuZXh0U2xpZGVdLml0ZW0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtzbGlkZXNBcnJheVtuZXh0U2xpZGVdLnRyYW5zZm9ybX0lKWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJhbnNmb3JtVmFsdWUgLT0gdHJhbnNmb3JtU3RlcDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwb3NpdGlvbi5wcmV2Q3VycmVudFBvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbi5jdXJyZW50UG9zaXRpb24gPCBwb3NpdGlvbi5nZXRNaW5TbGlkZVBvc2l0aW9uKCkpIHtcclxuICAgICAgICAgICAgICAgIG5leHRTbGlkZSA9IHBvc2l0aW9uLmdldE1heFNsaWRlSW5kZXgoKTtcclxuICAgICAgICAgICAgICAgIHNsaWRlc0FycmF5W25leHRTbGlkZV0ucG9zaXRpb24gPSBwb3NpdGlvbi5nZXRNaW5TbGlkZVBvc2l0aW9uKCkgLSAxO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzQXJyYXlbbmV4dFNsaWRlXS50cmFuc2Zvcm0gLT0gc2xpZGVzQXJyYXkubGVuZ3RoICogMTAwO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzQXJyYXlbbmV4dFNsaWRlXS5pdGVtLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7c2xpZGVzQXJyYXlbbmV4dFNsaWRlXS50cmFuc2Zvcm19JSlgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybVZhbHVlICs9IHRyYW5zZm9ybVN0ZXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzbGlkZXNDb2xsZWN0aW9uLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwLjVzJztcclxuICAgICAgICBzbGlkZXNDb2xsZWN0aW9uLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dHJhbnNmb3JtVmFsdWV9JSlgO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzICgpIHtcclxuICAgICAgICBzbGlkZXNDb2xsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25zdGFydCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaXNTbGlkZUluVHJhbnNpdGlvbiA9IHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2xpZGVzQ29sbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpc1NsaWRlSW5UcmFuc2l0aW9uID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAoTWF0aC5hYnMocG9zaXRpb24uY3VycmVudFBvc2l0aW9uKSA9PT0gc2xpZGVzQXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbi5jbGVhckN1cnJlbnRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtVmFsdWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzQ29sbGVjdGlvbi5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMHMnO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzQ29sbGVjdGlvbi5zdHlsZS50cmFuc2Zvcm0gPSAnJztcclxuICAgICAgICAgICAgICAgIHNsaWRlc0FycmF5LmZvckVhY2goZnVuY3Rpb24gKHNsaWRlLCBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGUucG9zaXRpb24gPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlLnRyYW5zZm9ybSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGUuaXRlbS5zdHlsZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2xpZGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25leHQtYnV0dG9uJylbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGlmICghaXNTbGlkZUluVHJhbnNpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoU2xpZGUoc2xpZGVEaXJlY3Rpb24ubmV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2xlYXJBdXRvcGxheVRpbWVyKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNsaWRlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcmV2aW91cy1idXR0b24nKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKCFpc1NsaWRlSW5UcmFuc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2hTbGlkZShzbGlkZURpcmVjdGlvbi5wcmV2aW91cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2xlYXJBdXRvcGxheVRpbWVyKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHBsYXlwYXVzZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgaWYgKHBsYXlwYXVzZUJ1dHRvbi5maXJzdENoaWxkLmNsYXNzTGlzdC5jb250YWlucygncGF1c2VkU3RhdGUnKSkge1xyXG4gICAgICAgICAgICAgICAgcGxheXBhdXNlQnV0dG9uLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgncGF1c2VkU3RhdGUnKTtcclxuICAgICAgICAgICAgICAgIHBsYXlwYXVzZUJ1dHRvbi5sYXN0Q2hpbGQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgIHBsYXlTbGlkZXIoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBsYXlwYXVzZUJ1dHRvbi5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoJ3BhdXNlZFN0YXRlJyk7XHJcbiAgICAgICAgICAgICAgICBwbGF5cGF1c2VCdXR0b24ubGFzdENoaWxkLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgICAgICAgICBwYXVzZVNsaWRlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBzdGFydFggPSAwLFxyXG4gICAgICAgICAgICBpc01vdXNlZG93bk9uU2xpZGVyID0gZmFsc2U7XHJcbiAgICAgICAgZnVuY3Rpb24gc3dpdGNoU2xpZGVCeUV2ZW50IChlbmRYKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNoaWZ0ID0gZW5kWCAtIHN0YXJ0WDtcclxuICAgICAgICAgICAgaWYgKHNoaWZ0ID4gMTApIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaFNsaWRlKHNsaWRlRGlyZWN0aW9uLnByZXZpb3VzKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlmdCA8IC0xMCkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoU2xpZGUoc2xpZGVEaXJlY3Rpb24ubmV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2xlYXJBdXRvcGxheVRpbWVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgc3RhcnRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgICAgICBjbGVhckF1dG9wbGF5VGltZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBzd2l0Y2hTbGlkZUJ5RXZlbnQoZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlzTW91c2Vkb3duT25TbGlkZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICBzdGFydFggPSBlLmNsaWVudFg7XHJcbiAgICAgICAgICAgIGNsZWFyQXV0b3BsYXlUaW1lcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaXNNb3VzZWRvd25PblNsaWRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICBzd2l0Y2hTbGlkZUJ5RXZlbnQoZS5jbGllbnRYKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChpc01vdXNlZG93bk9uU2xpZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBpc01vdXNlZG93bk9uU2xpZGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2hTbGlkZUJ5RXZlbnQoZS5jbGllbnRYKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoYnV0dG9uc1Zpc2libGUpIHtcclxuICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBwbGF5cGF1c2VCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcGxheXBhdXNlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNsaWRlckJ1dHRvbnMgPSBzbGlkZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2xpZGVyLWJ1dHRvbicpO1xyXG4gICAgICAgICAgICBzbGlkZXJCdXR0b25zLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGRFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyQXV0b3BsYXlUaW1lciAoKSB7XHJcbiAgICAgICAgaWYgKCFhdXRvcGxheUVuYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXV0b3BsYXlTdG9wKCk7XHJcbiAgICAgICAgc2xpZGVyVGltZXJJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc3dpdGNoU2xpZGUoc2xpZGVEaXJlY3Rpb24ubmV4dCk7XHJcbiAgICAgICAgfSwgYXV0b3BsYXlJbnRlcnZhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYXV0b3BsYXlTdGFydCAoKSB7XHJcbiAgICAgICAgaWYgKCFhdXRvcGxheUVuYWJsZWQpIHtcclxuICAgICAgICAgICAgcGxheXBhdXNlQnV0dG9uLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZCgncGF1c2VkU3RhdGUnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwbGF5cGF1c2VCdXR0b24ubGFzdENoaWxkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgIGNsZWFyQXV0b3BsYXlUaW1lcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGF1dG9wbGF5U3RvcCAoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChzbGlkZXJUaW1lcklkKTtcclxuICAgIH1cclxuXHJcbiAgICBhdXRvcGxheVN0YXJ0KCk7XHJcblxyXG4gICAgZnVuY3Rpb24gcGxheVNsaWRlciAoKSB7XHJcbiAgICAgICAgYXV0b3BsYXlFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBhdXRvcGxheVN0YXJ0KCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwYXVzZVNsaWRlciAoKSB7XHJcbiAgICAgICAgYXV0b3BsYXlFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgYXV0b3BsYXlTdG9wKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwbGF5OiBwbGF5U2xpZGVyLFxyXG4gICAgICAgIHBhdXNlOiBwYXVzZVNsaWRlcixcclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGltZ1NsaWRlcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IG5leHRCdXR0b25JY29uIGZyb20gJy4uL2ljb25zL25leHRCdXR0b24uc3ZnJztcclxuaW1wb3J0IHByZXZpb3VzQnV0dG9uSWNvbiBmcm9tICcuLi9pY29ucy9wcmV2aW91c0J1dHRvbi5zdmcnO1xyXG5pbXBvcnQgcGF1c2VCdXR0b25JY29uIGZyb20gJy4uL2ljb25zL3BhdXNlQnV0dG9uLnN2Zyc7XHJcbmltcG9ydCBwbGF5QnV0dG9uSWNvbiBmcm9tICcuLi9pY29ucy9wbGF5QnV0dG9uLnN2Zyc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTbGlkZXJMYXlvdXQgKHNsaWRlcklkKSB7XHJcbiAgICBjb25zdCBzbGlkZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzbGlkZXJJZCksXHJcbiAgICAgICAgaW1nRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChzbGlkZXJDb250YWluZXIuY2hpbGRyZW4pO1xyXG5cclxuICAgIGlmIChpbWdFbGVtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2xpZGVzQ29sbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2xpZGVzQ29sbGVjdGlvbi5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zbGlkZXNDb2xsZWN0aW9uKTtcclxuXHJcbiAgICBpbWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gJ0lNRycpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zbGlkZUltYWdlKTtcclxuICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RyYWdnYWJsZScsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc2luZ2xlU2xpZGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgc2luZ2xlU2xpZGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChzdHlsZXMuc2luZ2xlU2xpZGUpO1xyXG4gICAgICAgICAgICBzaW5nbGVTbGlkZUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgIHNsaWRlc0NvbGxlY3Rpb24uYXBwZW5kQ2hpbGQoc2luZ2xlU2xpZGVDb250YWluZXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChzdHlsZXMuc2luZ2xlU2xpZGUpO1xyXG5cclxuICAgICAgICAgICAgc2xpZGVzQ29sbGVjdGlvbi5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBzbGlkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2xpZGVzQ29sbGVjdGlvbik7XHJcbiAgICBzbGlkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChzdHlsZXMuc2xpZGVyKTtcclxuXHJcbiAgICBjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbmV4dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHN0eWxlcy5uZXh0QnV0dG9uKTtcclxuICAgIG5leHRCdXR0b24uY2xhc3NMaXN0LmFkZChzdHlsZXMuc2xpZGVyQnV0dG9uKTtcclxuICAgIG5leHRCdXR0b24uaW5uZXJIVE1MID0gbmV4dEJ1dHRvbkljb247XHJcbiAgICBuZXh0QnV0dG9uLmhyZWYgPSAnIyc7XHJcbiAgICBjb25zdCBwcmV2aW91c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIHByZXZpb3VzQnV0dG9uLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnByZXZpb3VzQnV0dG9uKTtcclxuICAgIHByZXZpb3VzQnV0dG9uLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnNsaWRlckJ1dHRvbik7XHJcbiAgICBwcmV2aW91c0J1dHRvbi5pbm5lckhUTUwgPSBwcmV2aW91c0J1dHRvbkljb247XHJcbiAgICBwcmV2aW91c0J1dHRvbi5ocmVmID0gJyMnO1xyXG4gICAgY29uc3QgcGxheXBhdXNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgcGxheXBhdXNlQnV0dG9uLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnBsYXlwYXVzZUJ1dHRvbik7XHJcbiAgICBwbGF5cGF1c2VCdXR0b24uY2xhc3NMaXN0LmFkZChzdHlsZXMuc2xpZGVyQnV0dG9uKTtcclxuICAgIHBsYXlwYXVzZUJ1dHRvbi5pbm5lckhUTUwgPSBwYXVzZUJ1dHRvbkljb24gKyBwbGF5QnV0dG9uSWNvbjtcclxuICAgIHBsYXlwYXVzZUJ1dHRvbi5ocmVmID0gJyMnO1xyXG5cclxuICAgIHNsaWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmV2aW91c0J1dHRvbik7XHJcbiAgICBzbGlkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobmV4dEJ1dHRvbik7XHJcbiAgICBzbGlkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheXBhdXNlQnV0dG9uKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2xpZGVyTGF5b3V0O1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtMSEuL3N0eWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307Il0sInNvdXJjZVJvb3QiOiIifQ==