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
___CSS_LOADER_EXPORT___.push([module.i, ".slider {\r\n    overflow: hidden;\r\n    position: relative;\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    max-width: 500px;\r\n    cursor: grab;\r\n}\r\n\r\n.slides-collection {\r\n    display: flex;\r\n    align-self: normal;\r\n    transition: transform 0.5s ease-in-out;\r\n}\r\n\r\n.single-slide {\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    user-select: none;\r\n}\r\n\r\n.slide-image {\r\n    display: inline-block;\r\n    height: auto;\r\n    max-width: 100%;\r\n}\r\n\r\n.slider-button {\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 35px;\r\n    height: 35px;\r\n    color: black;\r\n    background: white;\r\n    border-radius: 50%;\r\n    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);\r\n    text-decoration: none;\r\n    transition: transform .2s ease-in-out;\r\n}\r\n\r\n.slider-button:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.previous-button {\r\n    left: 0;\r\n}\r\n\r\n.next-button {\r\n    right: 0;\r\n}\r\n\r\n.playpause-button {\r\n    display: none;\r\n    width: 0;\r\n    height: 0;\r\n    padding: 20px;\r\n}\r\n\r\n.pausedState {\r\n    background: orangered;\r\n}", "",{"version":3,"sources":["style.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,sCAAsC;AAC1C;;AAEA;IACI,cAAc;IACd,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;IACrB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;IAClB,2CAA2C;IAC3C,qBAAqB;IACrB,qCAAqC;AACzC;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,OAAO;AACX;;AAEA;IACI,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,QAAQ;IACR,SAAS;IACT,aAAa;AACjB;;AAEA;IACI,qBAAqB;AACzB","file":"style.css","sourcesContent":[".slider {\r\n    overflow: hidden;\r\n    position: relative;\r\n    margin: auto;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    max-width: 500px;\r\n    cursor: grab;\r\n}\r\n\r\n.slides-collection {\r\n    display: flex;\r\n    align-self: normal;\r\n    transition: transform 0.5s ease-in-out;\r\n}\r\n\r\n.single-slide {\r\n    flex: 0 0 100%;\r\n    max-width: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    user-select: none;\r\n}\r\n\r\n.slide-image {\r\n    display: inline-block;\r\n    height: auto;\r\n    max-width: 100%;\r\n}\r\n\r\n.slider-button {\r\n    position: absolute;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 35px;\r\n    height: 35px;\r\n    color: black;\r\n    background: white;\r\n    border-radius: 50%;\r\n    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);\r\n    text-decoration: none;\r\n    transition: transform .2s ease-in-out;\r\n}\r\n\r\n.slider-button:hover {\r\n    transform: scale(1.2);\r\n}\r\n\r\n.previous-button {\r\n    left: 0;\r\n}\r\n\r\n.next-button {\r\n    right: 0;\r\n}\r\n\r\n.playpause-button {\r\n    display: none;\r\n    width: 0;\r\n    height: 0;\r\n    padding: 20px;\r\n}\r\n\r\n.pausedState {\r\n    background: orangered;\r\n}"]}]);
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
          transformStep = 100;
      var slidesArray = [],
          currentPosition = 0,
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

          if (e.target.classList.contains('pausedState')) {
            e.target.classList.remove('pausedState');
            playSlider();
          } else {
            e.target.classList.add('pausedState');
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
          sliderButtons = slider.getElementsByClassName('slider-button');
          sliderButtons.forEach(function (button) {
            button.style.display = 'none';
          });
        }
      }

      ;
      addEventListeners();

      function autoplayStart() {
        if (!autoplayEnabled) {
          playpauseButton.classList.add('pausedState');
          return;
        }

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




function createSliderLayout(sliderId) {
  var sliderContainer = document.getElementById(sliderId);
  var imgElements = sliderContainer.children;
  imgElements = Array.prototype.slice.call(imgElements);

  if (imgElements.length > 0) {
    var slidesCollection = document.createElement("div");
    slidesCollection.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.slidesCollection);
    imgElements.forEach(function (element) {
      if (element.tagName === "IMG") {
        element.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.slideImage);
        element.setAttribute("draggable", "false");
        var singleSlideContainer = document.createElement("div");
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
    var nextButton = document.createElement("a");
    nextButton.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.nextButton);
    nextButton.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.sliderButton);
    nextButton.innerText = ">";
    nextButton.href = "#";
    var previousButton = document.createElement("a");
    previousButton.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.previousButton);
    previousButton.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.sliderButton);
    previousButton.innerText = "<";
    previousButton.href = "#";
    var playpauseButton = document.createElement("a");
    playpauseButton.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.playpauseButton);
    playpauseButton.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a.sliderButton);
    playpauseButton.innerText = "||";
    playpauseButton.href = "#";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWdTbGlkZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2ltZ1NsaWRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbWdTbGlkZXIvLi9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vaW1nU2xpZGVyLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaW1nU2xpZGVyLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9pbWdTbGlkZXIvLi9pbWdTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vaW1nU2xpZGVyLy4vc2xpZGVyTGF5b3V0LmpzIiwid2VicGFjazovL2ltZ1NsaWRlci8uL3N0eWxlLmNzcz81M2U3Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ1c2VTb3VyY2VNYXAiLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJjb25jYXQiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYVF1ZXJ5IiwiZGVkdXBlIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImxlbmd0aCIsImlkIiwiX2kiLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJzb3VyY2VNYXBwaW5nIiwidG9Db21tZW50Iiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290Iiwic291cmNlTWFwIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImltZ1NsaWRlciIsInNsaWRlcklkIiwib3B0aW9ucyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb25zb2xlIiwibG9nIiwibGF1bmNoU2xpZGVyIiwiYXV0b3BsYXlFbmFibGVkIiwiYXV0b3BsYXlJbnRlcnZhbCIsImJ1dHRvbnNWaXNpYmxlIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJjcmVhdGVTbGlkZXJMYXlvdXQiLCJzbGlkZXIiLCJzbGlkZXNDb2xsZWN0aW9uIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNpbmdsZVNsaWRlcyIsInBsYXlwYXVzZUJ1dHRvbiIsInRyYW5zZm9ybVN0ZXAiLCJzbGlkZXNBcnJheSIsImN1cnJlbnRQb3NpdGlvbiIsInRyYW5zZm9ybVZhbHVlIiwic2xpZGVyVGltZXJJZCIsImlzU2xpZGVJblRyYW5zaXRpb24iLCJzdHlsZSIsInBvc2l0aW9uIiwidHJhbnNmb3JtIiwiY29weSIsImNsb25lTm9kZSIsImFmdGVyIiwiZ2V0TWluU2xpZGVJbmRleCIsIm1pblNsaWRlIiwicmVkdWNlIiwicHJldmlvdXMiLCJjdXJyZW50IiwiaW5kZXhPZiIsImdldE1heFNsaWRlSW5kZXgiLCJtYXhTbGlkZSIsImdldE1pblNsaWRlUG9zaXRpb24iLCJnZXRNYXhTbGlkZVBvc2l0aW9uIiwic3dpdGNoU2xpZGUiLCJkaXJlY3Rpb24iLCJuZXh0U2xpZGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJhZGRFdmVudExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJNYXRoIiwiYWJzIiwiZm9yRWFjaCIsInNsaWRlIiwiZSIsInByZXZlbnREZWZhdWx0IiwiYXV0b3BsYXlTdGFydCIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwicGxheVNsaWRlciIsImFkZCIsInBhdXNlU2xpZGVyIiwic3RhcnRYIiwiY2hhbmdlZFRvdWNoZXMiLCJjbGllbnRYIiwiZW5kWCIsInNoaWZ0IiwiZGlzcGxheSIsInNsaWRlckJ1dHRvbnMiLCJidXR0b24iLCJhdXRvcGxheVN0b3AiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJwbGF5IiwicGF1c2UiLCJzbGlkZXJDb250YWluZXIiLCJpbWdFbGVtZW50cyIsImNoaWxkcmVuIiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImNhbGwiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGVzIiwiZWxlbWVudCIsInRhZ05hbWUiLCJzbGlkZUltYWdlIiwic2V0QXR0cmlidXRlIiwic2luZ2xlU2xpZGVDb250YWluZXIiLCJzaW5nbGVTbGlkZSIsImFwcGVuZENoaWxkIiwibmV4dEJ1dHRvbiIsInNsaWRlckJ1dHRvbiIsImlubmVyVGV4dCIsImhyZWYiLCJwcmV2aW91c0J1dHRvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFDeUY7QUFDekYsOEJBQThCLG1GQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLFlBQVkseUJBQXlCLDJCQUEy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QUExQixDQUE4QnVCLGlEQUFNLENBQUNTLFlBQXJDO0FBQ0F6RSxtQkFBZSxDQUFDMEUsU0FBaEIsR0FBNEIsSUFBNUI7QUFDQTFFLG1CQUFlLENBQUMyRSxJQUFoQixHQUF1QixHQUF2QjtBQUVBbkIsbUJBQWUsQ0FBQ2UsV0FBaEIsQ0FBNEJLLGNBQTVCO0FBQ0FwQixtQkFBZSxDQUFDZSxXQUFoQixDQUE0QkMsVUFBNUI7QUFDQWhCLG1CQUFlLENBQUNlLFdBQWhCLENBQTRCdkUsZUFBNUI7QUFDSDtBQUNKOztBQUVjTCxpRkFBZixFOzs7Ozs7Ozs7OztBQ3hEQSxVQUFVLG1CQUFPLENBQUMsb0pBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLDBIQUFnRTs7QUFFbEc7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0MiLCJmaWxlIjoiaW1nU2xpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiaW1nU2xpZGVyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImltZ1NsaWRlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbWdTbGlkZXIuanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2xpZGVyIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgICBjdXJzb3I6IGdyYWI7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXMtY29sbGVjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLXNlbGY6IG5vcm1hbDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5zaW5nbGUtc2xpZGUge1xcclxcbiAgICBmbGV4OiAwIDAgMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZS1pbWFnZSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItYnV0dG9uIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDM1cHg7XFxyXFxuICAgIGhlaWdodDogMzVweDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJldmlvdXMtYnV0dG9uIHtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5leHQtYnV0dG9uIHtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5wbGF5cGF1c2UtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhdXNlZFN0YXRlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogb3JhbmdlcmVkO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJzdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQiwyQ0FBMkM7SUFDM0MscUJBQXFCO0lBQ3JCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsU0FBUztJQUNULGFBQWE7QUFDakI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekJcIixcImZpbGVcIjpcInN0eWxlLmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuc2xpZGVyIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgICBjdXJzb3I6IGdyYWI7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXMtY29sbGVjdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLXNlbGY6IG5vcm1hbDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5zaW5nbGUtc2xpZGUge1xcclxcbiAgICBmbGV4OiAwIDAgMTAwJTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZS1pbWFnZSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItYnV0dG9uIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDM1cHg7XFxyXFxuICAgIGhlaWdodDogMzVweDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxufVxcclxcblxcclxcbi5zbGlkZXItYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJldmlvdXMtYnV0dG9uIHtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5leHQtYnV0dG9uIHtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5wbGF5cGF1c2UtYnV0dG9uIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIGhlaWdodDogMDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnBhdXNlZFN0YXRlIHtcXHJcXG4gICAgYmFja2dyb3VuZDogb3JhbmdlcmVkO1xcclxcbn1cIl19XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwic2xpZGVyXCI6IFwic2xpZGVyXCIsXG5cdFwic2xpZGVzLWNvbGxlY3Rpb25cIjogXCJzbGlkZXMtY29sbGVjdGlvblwiLFxuXHRcInNsaWRlc0NvbGxlY3Rpb25cIjogXCJzbGlkZXMtY29sbGVjdGlvblwiLFxuXHRcInNpbmdsZS1zbGlkZVwiOiBcInNpbmdsZS1zbGlkZVwiLFxuXHRcInNpbmdsZVNsaWRlXCI6IFwic2luZ2xlLXNsaWRlXCIsXG5cdFwic2xpZGUtaW1hZ2VcIjogXCJzbGlkZS1pbWFnZVwiLFxuXHRcInNsaWRlSW1hZ2VcIjogXCJzbGlkZS1pbWFnZVwiLFxuXHRcInNsaWRlci1idXR0b25cIjogXCJzbGlkZXItYnV0dG9uXCIsXG5cdFwic2xpZGVyQnV0dG9uXCI6IFwic2xpZGVyLWJ1dHRvblwiLFxuXHRcInByZXZpb3VzLWJ1dHRvblwiOiBcInByZXZpb3VzLWJ1dHRvblwiLFxuXHRcInByZXZpb3VzQnV0dG9uXCI6IFwicHJldmlvdXMtYnV0dG9uXCIsXG5cdFwibmV4dC1idXR0b25cIjogXCJuZXh0LWJ1dHRvblwiLFxuXHRcIm5leHRCdXR0b25cIjogXCJuZXh0LWJ1dHRvblwiLFxuXHRcInBsYXlwYXVzZS1idXR0b25cIjogXCJwbGF5cGF1c2UtYnV0dG9uXCIsXG5cdFwicGxheXBhdXNlQnV0dG9uXCI6IFwicGxheXBhdXNlLWJ1dHRvblwiLFxuXHRcInBhdXNlZFN0YXRlXCI6IFwicGF1c2VkU3RhdGVcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgY3JlYXRlU2xpZGVyTGF5b3V0IGZyb20gJy4vc2xpZGVyTGF5b3V0LmpzJztcclxuXHJcbmZ1bmN0aW9uIGltZ1NsaWRlcihzbGlkZXJJZCwgb3B0aW9ucykge1xyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNsaWRlcklkKSA9PT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBFbGVtZW50IHdpdGggaWQ9XCIke3NsaWRlcklkfVwiIG5vdCBmb3VuZC5gKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGF1bmNoU2xpZGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHNsaWRlcklkLCB7XHJcbiAgICAgICAgICAgIGF1dG9wbGF5RW5hYmxlZCA9IGZhbHNlLFxyXG4gICAgICAgICAgICBhdXRvcGxheUludGVydmFsID0gNTAwMCxcclxuICAgICAgICAgICAgYnV0dG9uc1Zpc2libGUgPSB0cnVlLFxyXG4gICAgICAgICAgICBtYXhXaWR0aCA9ICc1MDBweCcsXHJcbiAgICAgICAgICAgIG1heEhlaWdodCA9ICc1MDBweCdcclxuICAgICAgICB9KSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVNsaWRlckxheW91dChzbGlkZXJJZCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzbGlkZXJJZCksXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNDb2xsZWN0aW9uID0gc2xpZGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NsaWRlcy1jb2xsZWN0aW9uJylbMF0sXHJcbiAgICAgICAgICAgICAgICBzaW5nbGVTbGlkZXMgPSBzbGlkZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2luZ2xlLXNsaWRlJyksXHJcbiAgICAgICAgICAgICAgICBwbGF5cGF1c2VCdXR0b24gPSBzbGlkZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGxheXBhdXNlLWJ1dHRvbicpWzBdLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtU3RlcCA9IDEwMDtcclxuXHJcbiAgICAgICAgICAgIGxldCBzbGlkZXNBcnJheSA9IFtdLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID0gMCxcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVZhbHVlID0gMCxcclxuICAgICAgICAgICAgICAgIHNsaWRlclRpbWVySWQsXHJcbiAgICAgICAgICAgICAgICBpc1NsaWRlSW5UcmFuc2l0aW9uID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBzbGlkZXIuc3R5bGUubWF4V2lkdGggPSBtYXhXaWR0aDtcclxuICAgICAgICAgICAgc2xpZGVyLnN0eWxlLm1heEhlaWdodCA9IG1heEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIGlmIChzaW5nbGVTbGlkZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaW5nbGVTbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTogc2luZ2xlU2xpZGVzW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogaSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlc0FycmF5Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvcHkgPSBzaW5nbGVTbGlkZXNbMF0uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpbmdsZVNsaWRlc1swXS5hZnRlcihjb3B5KTtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTogY29weSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEVsZW1lbnQgJHtzbGlkZXJJZH0gZG9lc24ndCBjb250YWluIGFueSBzbGlkZXMuYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIGdldE1pblNsaWRlSW5kZXg6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtaW5TbGlkZSA9IHNsaWRlc0FycmF5LnJlZHVjZShmdW5jdGlvbiAocHJldmlvdXMsIGN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChwcmV2aW91cy5wb3NpdGlvbiA8IGN1cnJlbnQucG9zaXRpb24pID8gcHJldmlvdXMgOiBjdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbGlkZXNBcnJheS5pbmRleE9mKG1pblNsaWRlKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRNYXhTbGlkZUluZGV4OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF4U2xpZGUgPSBzbGlkZXNBcnJheS5yZWR1Y2UoZnVuY3Rpb24gKHByZXZpb3VzLCBjdXJyZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAocHJldmlvdXMucG9zaXRpb24gPiBjdXJyZW50LnBvc2l0aW9uKSA/IHByZXZpb3VzIDogY3VycmVudDtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2xpZGVzQXJyYXkuaW5kZXhPZihtYXhTbGlkZSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0TWluU2xpZGVQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbGlkZXNBcnJheVt0aGlzLmdldE1pblNsaWRlSW5kZXgoKV0ucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0TWF4U2xpZGVQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbGlkZXNBcnJheVt0aGlzLmdldE1heFNsaWRlSW5kZXgoKV0ucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzd2l0Y2hTbGlkZShkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXh0U2xpZGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbiA+IHBvc2l0aW9uLmdldE1heFNsaWRlUG9zaXRpb24oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0U2xpZGUgPSBwb3NpdGlvbi5nZXRNaW5TbGlkZUluZGV4KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc0FycmF5W25leHRTbGlkZV0ucG9zaXRpb24gPSBwb3NpdGlvbi5nZXRNYXhTbGlkZVBvc2l0aW9uKCkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNBcnJheVtuZXh0U2xpZGVdLnRyYW5zZm9ybSArPSBzbGlkZXNBcnJheS5sZW5ndGggKiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc0FycmF5W25leHRTbGlkZV0uaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3NsaWRlc0FycmF5W25leHRTbGlkZV0udHJhbnNmb3JtfSUpYDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtVmFsdWUgLT0gdHJhbnNmb3JtU3RlcDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uLS07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbiA8IHBvc2l0aW9uLmdldE1pblNsaWRlUG9zaXRpb24oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0U2xpZGUgPSBwb3NpdGlvbi5nZXRNYXhTbGlkZUluZGV4KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc0FycmF5W25leHRTbGlkZV0ucG9zaXRpb24gPSBwb3NpdGlvbi5nZXRNaW5TbGlkZVBvc2l0aW9uKCkgLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNBcnJheVtuZXh0U2xpZGVdLnRyYW5zZm9ybSAtPSBzbGlkZXNBcnJheS5sZW5ndGggKiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc0FycmF5W25leHRTbGlkZV0uaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3NsaWRlc0FycmF5W25leHRTbGlkZV0udHJhbnNmb3JtfSUpYDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtVmFsdWUgKz0gdHJhbnNmb3JtU3RlcDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNDb2xsZWN0aW9uLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwLjVzJztcclxuICAgICAgICAgICAgICAgIHNsaWRlc0NvbGxlY3Rpb24uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0cmFuc2Zvcm1WYWx1ZX0lKWA7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc0NvbGxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbnN0YXJ0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU2xpZGVJblRyYW5zaXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNDb2xsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTbGlkZUluVHJhbnNpdGlvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoY3VycmVudFBvc2l0aW9uKSA9PT0gc2xpZGVzQXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybVZhbHVlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzQ29sbGVjdGlvbi5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMHMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNDb2xsZWN0aW9uLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChzbGlkZSwgaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUucG9zaXRpb24gPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUudHJhbnNmb3JtID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlLml0ZW0uc3R5bGUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2xpZGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25leHQtYnV0dG9uJylbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzU2xpZGVJblRyYW5zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoU2xpZGUoJ25leHQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlTdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2xpZGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ByZXZpb3VzLWJ1dHRvbicpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1NsaWRlSW5UcmFuc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaFNsaWRlKCdwcmV2aW91cycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheVN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBwbGF5cGF1c2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYXVzZWRTdGF0ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3BhdXNlZFN0YXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlTbGlkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdwYXVzZWRTdGF0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXVzZVNsaWRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzdGFydFggPSAwO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0WCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheVN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5kWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnQgPSBlbmRYIC0gc3RhcnRYO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGlmdCA+IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaFNsaWRlKCdwcmV2aW91cycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpZnQgPCAtMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoU2xpZGUoJ25leHQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlTdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRYID0gZS5jbGllbnRYO1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5U3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZFggPSBlLmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ID0gZW5kWCAtIHN0YXJ0WDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpZnQgPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hTbGlkZSgncHJldmlvdXMnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNoaWZ0IDwgLTEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaFNsaWRlKCduZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5U3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChidXR0b25zVmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5cGF1c2VCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheXBhdXNlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlckJ1dHRvbnMgPSBzbGlkZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2xpZGVyLWJ1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlckJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGF1dG9wbGF5U3RhcnQoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWF1dG9wbGF5RW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXlwYXVzZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwYXVzZWRTdGF0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVyVGltZXJJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hTbGlkZSgnbmV4dCcpO1xyXG4gICAgICAgICAgICAgICAgfSwgYXV0b3BsYXlJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBhdXRvcGxheVN0b3AoKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHNsaWRlclRpbWVySWQpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgYXV0b3BsYXlTdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcGxheVNsaWRlcigpIHtcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5RW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gcGF1c2VTbGlkZXIoKSB7XHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheUVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3RvcCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcGxheTogcGxheVNsaWRlcixcclxuICAgICAgICAgICAgICAgIHBhdXNlOiBwYXVzZVNsaWRlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSgpKTtcclxuXHJcbiAgICByZXR1cm4gbGF1bmNoU2xpZGVyKHNsaWRlcklkLCBvcHRpb25zKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW1nU2xpZGVyOyIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlLmNzcydcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNsaWRlckxheW91dChzbGlkZXJJZCkge1xyXG4gICAgbGV0IHNsaWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNsaWRlcklkKTtcclxuXHJcbiAgICBsZXQgaW1nRWxlbWVudHMgPSBzbGlkZXJDb250YWluZXIuY2hpbGRyZW47XHJcbiAgICBpbWdFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGltZ0VsZW1lbnRzKTtcclxuXHJcbiAgICBpZiAoaW1nRWxlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IHNsaWRlc0NvbGxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHNsaWRlc0NvbGxlY3Rpb24uY2xhc3NMaXN0LmFkZChzdHlsZXMuc2xpZGVzQ29sbGVjdGlvbik7XHJcblxyXG4gICAgICAgIGltZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gXCJJTUdcIikge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zbGlkZUltYWdlKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIFwiZmFsc2VcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2luZ2xlU2xpZGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgc2luZ2xlU2xpZGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChzdHlsZXMuc2luZ2xlU2xpZGUpO1xyXG4gICAgICAgICAgICAgICAgc2luZ2xlU2xpZGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2xpZGVzQ29sbGVjdGlvbi5hcHBlbmRDaGlsZChzaW5nbGVTbGlkZUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoc3R5bGVzLnNpbmdsZVNsaWRlKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNDb2xsZWN0aW9uLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNsaWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzbGlkZXNDb2xsZWN0aW9uKTtcclxuICAgICAgICBzbGlkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChzdHlsZXMuc2xpZGVyKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIG5leHRCdXR0b24uY2xhc3NMaXN0LmFkZChzdHlsZXMubmV4dEJ1dHRvbik7XHJcbiAgICAgICAgbmV4dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKHN0eWxlcy5zbGlkZXJCdXR0b24pO1xyXG4gICAgICAgIG5leHRCdXR0b24uaW5uZXJUZXh0ID0gXCI+XCI7XHJcbiAgICAgICAgbmV4dEJ1dHRvbi5ocmVmID0gXCIjXCI7XHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBwcmV2aW91c0J1dHRvbi5jbGFzc0xpc3QuYWRkKHN0eWxlcy5wcmV2aW91c0J1dHRvbik7XHJcbiAgICAgICAgcHJldmlvdXNCdXR0b24uY2xhc3NMaXN0LmFkZChzdHlsZXMuc2xpZGVyQnV0dG9uKTtcclxuICAgICAgICBwcmV2aW91c0J1dHRvbi5pbm5lclRleHQgPSBcIjxcIjtcclxuICAgICAgICBwcmV2aW91c0J1dHRvbi5ocmVmID0gXCIjXCI7XHJcbiAgICAgICAgY29uc3QgcGxheXBhdXNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgcGxheXBhdXNlQnV0dG9uLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnBsYXlwYXVzZUJ1dHRvbik7XHJcbiAgICAgICAgcGxheXBhdXNlQnV0dG9uLmNsYXNzTGlzdC5hZGQoc3R5bGVzLnNsaWRlckJ1dHRvbik7XHJcbiAgICAgICAgcGxheXBhdXNlQnV0dG9uLmlubmVyVGV4dCA9IFwifHxcIjtcclxuICAgICAgICBwbGF5cGF1c2VCdXR0b24uaHJlZiA9IFwiI1wiO1xyXG5cclxuICAgICAgICBzbGlkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocHJldmlvdXNCdXR0b24pO1xyXG4gICAgICAgIHNsaWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXh0QnV0dG9uKTtcclxuICAgICAgICBzbGlkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheXBhdXNlQnV0dG9uKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2xpZGVyTGF5b3V0OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS0xIS4vc3R5bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9