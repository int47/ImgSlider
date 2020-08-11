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
	"single-slide": "single-slide",
	"slide-image": "slide-image",
	"slider-button": "slider-button",
	"previous-button": "previous-button",
	"next-button": "next-button",
	"playpause-button": "playpause-button",
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
  var launchSlider = function () {
    return function (sliderId, options) {
      Object(_sliderLayout_js__WEBPACK_IMPORTED_MODULE_0__["default"])(sliderId);
      var slider = document.querySelector(sliderId),
          slidesCollection = slider.querySelector('.slides-collection'),
          singleSlides = slider.querySelectorAll('.single-slide'),
          playpauseButton = slider.querySelector('.playpause-button'),
          slidesArray = [],
          currentPosition = 0,
          transformValue = 0,
          transformStep = 100,
          sliderTimerId,
          isSlideInTransition = false,
          sliderOptions = {
        autoplayEnabled: false,
        autoplayInterval: 5000,
        buttonsVisible: true,
        maxWidth: '500px',
        maxHeight: '500px'
      };

      for (var key in options) {
        if (key in sliderOptions) {
          sliderOptions[key] = options[key];
        }
      }

      slider.style.maxWidth = sliderOptions.maxWidth;
      slider.style.maxHeight = sliderOptions.maxHeight;

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
        min: 'min',
        max: 'max',
        getSlideIndex: function getSlideIndex(value) {
          var index = 0;

          for (var _i = 0; _i < slidesArray.length; _i++) {
            if (slidesArray[_i].position < slidesArray[index].position && value === this.min || slidesArray[_i].position > slidesArray[index].position && value === this.max) {
              index = _i;
            }
          }

          return index;
        },
        getSlidePosition: function getSlidePosition(value) {
          return slidesArray[this.getSlideIndex(value)].position;
        }
      };

      function switchSlide(direction) {
        var nextSlide = 0;

        if (direction === 'next') {
          currentPosition++;

          if (currentPosition > position.getSlidePosition(position.max)) {
            nextSlide = position.getSlideIndex(position.min);
            slidesArray[nextSlide].position = position.getSlidePosition(position.max) + 1;
            slidesArray[nextSlide].transform += slidesArray.length * 100;
            slidesArray[nextSlide].item.style.transform = "translateX(".concat(slidesArray[nextSlide].transform, "%)");
          }

          transformValue -= transformStep;
        } else {
          currentPosition--;

          if (currentPosition < position.getSlidePosition(position.min)) {
            nextSlide = position.getSlideIndex(position.max);
            slidesArray[nextSlide].position = position.getSlidePosition(position.min) - 1;
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

        if (sliderOptions.buttonsVisible) {
          slider.addEventListener('mouseenter', function () {
            playpauseButton.style.display = 'flex';
          });
          slider.addEventListener('mouseleave', function () {
            playpauseButton.style.display = 'none';
          });
        } else {
          sliderButtons = slider.querySelectorAll('.slider-button');
          sliderButtons.forEach(function (button) {
            button.style.display = 'none';
          });
        }
      }

      ;
      addEventListeners();

      function autoplayStart() {
        if (!sliderOptions.autoplayEnabled) {
          playpauseButton.classList.add('pausedState');
          return;
        }

        autoplayStop();
        sliderTimerId = setInterval(function () {
          switchSlide('next');
        }, sliderOptions.autoplayInterval);
      }

      ;

      function autoplayStop() {
        clearInterval(sliderTimerId);
      }

      ;
      autoplayStart();

      function playSlider() {
        sliderOptions.autoplayEnabled = true;
        autoplayStart();
      }

      function pauseSlider() {
        sliderOptions.autoplayEnabled = false;
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
  var sliderContainer = document.querySelector(sliderId);
  var imgElements = sliderContainer.children;
  imgElements = Array.prototype.slice.call(imgElements);

  if (imgElements.length > 0) {
    var slidesCollection = document.createElement("div");
    slidesCollection.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a['slides-collection']);
    imgElements.forEach(function (element) {
      if (element.tagName === "IMG") {
        element.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a['slide-image']);
        element.setAttribute("draggable", "false");
        var singleSlideContainer = document.createElement("div");
        singleSlideContainer.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a['single-slide']);
        singleSlideContainer.appendChild(element);
        slidesCollection.appendChild(singleSlideContainer);
      } else {
        element.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a['single-slide']);
        slidesCollection.appendChild(element);
      }
    });
    sliderContainer.appendChild(slidesCollection);
    sliderContainer.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a['slider']);
    var nextButton = document.createElement("a");
    nextButton.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a['next-button']);
    nextButton.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a['slider-button']);
    nextButton.innerText = ">";
    nextButton.href = "#";
    var previousButton = document.createElement("a");
    previousButton.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a['previous-button']);
    previousButton.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a['slider-button']);
    previousButton.innerText = "<";
    previousButton.href = "#";
    var playpauseButton = document.createElement("a");
    playpauseButton.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a['playpause-button']);
    playpauseButton.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0___default.a['slider-button']);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWdTbGlkZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2ltZ1NsaWRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbWdTbGlkZXIvLi9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vaW1nU2xpZGVyLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaW1nU2xpZGVyLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9pbWdTbGlkZXIvLi9pbWdTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vaW1nU2xpZGVyLy4vc2xpZGVyTGF5b3V0LmpzIiwid2VicGFjazovL2ltZ1NsaWRlci8uL3N0eWxlLmNzcz81M2U3Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJ1c2VTb3VyY2VNYXAiLCJsaXN0IiwidG9TdHJpbmciLCJtYXAiLCJpdGVtIiwiY29udGVudCIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJjb25jYXQiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYVF1ZXJ5IiwiZGVkdXBlIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImxlbmd0aCIsImlkIiwiX2kiLCJwdXNoIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJzb3VyY2VNYXBwaW5nIiwidG9Db21tZW50Iiwic291cmNlVVJMcyIsInNvdXJjZXMiLCJzb3VyY2UiLCJzb3VyY2VSb290Iiwic291cmNlTWFwIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImltZ1NsaWRlciIsInNsaWRlcklkIiwib3B0aW9ucyIsImxhdW5jaFNsaWRlciIsImNyZWF0ZVNsaWRlckxheW91dCIsInNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlc0NvbGxlY3Rpb24iLCJzaW5nbGVTbGlkZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGxheXBhdXNlQnV0dG9uIiwic2xpZGVzQXJyYXkiLCJjdXJyZW50UG9zaXRpb24iLCJ0cmFuc2Zvcm1WYWx1ZSIsInRyYW5zZm9ybVN0ZXAiLCJzbGlkZXJUaW1lcklkIiwiaXNTbGlkZUluVHJhbnNpdGlvbiIsInNsaWRlck9wdGlvbnMiLCJhdXRvcGxheUVuYWJsZWQiLCJhdXRvcGxheUludGVydmFsIiwiYnV0dG9uc1Zpc2libGUiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImtleSIsInN0eWxlIiwicG9zaXRpb24iLCJ0cmFuc2Zvcm0iLCJjb3B5IiwiY2xvbmVOb2RlIiwiYWZ0ZXIiLCJjb25zb2xlIiwibG9nIiwibWluIiwibWF4IiwiZ2V0U2xpZGVJbmRleCIsInZhbHVlIiwiaW5kZXgiLCJnZXRTbGlkZVBvc2l0aW9uIiwic3dpdGNoU2xpZGUiLCJkaXJlY3Rpb24iLCJuZXh0U2xpZGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJhZGRFdmVudExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJNYXRoIiwiYWJzIiwiZm9yRWFjaCIsInNsaWRlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImF1dG9wbGF5U3RhcnQiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsInBsYXlTbGlkZXIiLCJhZGQiLCJwYXVzZVNsaWRlciIsInN0YXJ0WCIsImNoYW5nZWRUb3VjaGVzIiwiY2xpZW50WCIsImVuZFgiLCJzaGlmdCIsImRpc3BsYXkiLCJzbGlkZXJCdXR0b25zIiwiYnV0dG9uIiwiYXV0b3BsYXlTdG9wIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicGxheSIsInBhdXNlIiwic2xpZGVyQ29udGFpbmVyIiwiaW1nRWxlbWVudHMiLCJjaGlsZHJlbiIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiY3JlYXRlRWxlbWVudCIsImNzcyIsImVsZW1lbnQiLCJ0YWdOYW1lIiwic2V0QXR0cmlidXRlIiwic2luZ2xlU2xpZGVDb250YWluZXIiLCJhcHBlbmRDaGlsZCIsIm5leHRCdXR0b24iLCJpbm5lclRleHQiLCJocmVmIiwicHJldmlvdXNCdXR0b24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQ3lGO0FBQ3pGLDhCQUE4QixtRkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyxZQUFZLHlCQUF5QiwyQkFBMkIscUJBQXFCLHNCQUFzQixnQ0FBZ0MsNEJBQTRCLHlCQUF5QixxQkFBcUIsS0FBSyw0QkFBNEIsc0JBQXNCLDJCQUEyQiwrQ0FBK0MsS0FBSyx1QkFB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QUFoQixDQUEwQkksR0FBMUIsQ0FBOEJ1QixpREFBRyxDQUFDLGVBQUQsQ0FBakM7QUFDQXRFLG1CQUFlLENBQUM2RSxTQUFoQixHQUE0QixJQUE1QjtBQUNBN0UsbUJBQWUsQ0FBQzhFLElBQWhCLEdBQXVCLEdBQXZCO0FBRUFoQixtQkFBZSxDQUFDYSxXQUFoQixDQUE0QkksY0FBNUI7QUFDQWpCLG1CQUFlLENBQUNhLFdBQWhCLENBQTRCQyxVQUE1QjtBQUNBZCxtQkFBZSxDQUFDYSxXQUFoQixDQUE0QjNFLGVBQTVCO0FBQ0g7QUFDSjs7QUFFY1AsaUZBQWYsRTs7Ozs7Ozs7Ozs7QUN4REEsVUFBVSxtQkFBTyxDQUFDLG9KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQywwSEFBZ0U7O0FBRWxHOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDIiwiZmlsZSI6ImltZ1NsaWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImltZ1NsaWRlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJpbWdTbGlkZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW1nU2xpZGVyLmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnNsaWRlciB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gICAgY3Vyc29yOiBncmFiO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVzLWNvbGxlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1zZWxmOiBub3JtYWw7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2luZ2xlLXNsaWRlIHtcXHJcXG4gICAgZmxleDogMCAwIDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGUtaW1hZ2Uge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLWJ1dHRvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAzNXB4O1xcclxcbiAgICBoZWlnaHQ6IDM1cHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByZXZpb3VzLWJ1dHRvbiB7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5uZXh0LWJ1dHRvbiB7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheXBhdXNlLWJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wYXVzZWRTdGF0ZSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IG9yYW5nZXJlZDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wic3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsMkNBQTJDO0lBQzNDLHFCQUFxQjtJQUNyQixxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxPQUFPO0FBQ1g7O0FBRUE7SUFDSSxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsUUFBUTtJQUNSLFNBQVM7SUFDVCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCXCIsXCJmaWxlXCI6XCJzdHlsZS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnNsaWRlciB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gICAgY3Vyc29yOiBncmFiO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVzLWNvbGxlY3Rpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1zZWxmOiBub3JtYWw7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2luZ2xlLXNsaWRlIHtcXHJcXG4gICAgZmxleDogMCAwIDEwMCU7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGUtaW1hZ2Uge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLWJ1dHRvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAzNXB4O1xcclxcbiAgICBoZWlnaHQ6IDM1cHg7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2xpZGVyLWJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLnByZXZpb3VzLWJ1dHRvbiB7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5uZXh0LWJ1dHRvbiB7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucGxheXBhdXNlLWJ1dHRvbiB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgICBoZWlnaHQ6IDA7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5wYXVzZWRTdGF0ZSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IG9yYW5nZXJlZDtcXHJcXG59XCJdfV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInNsaWRlclwiOiBcInNsaWRlclwiLFxuXHRcInNsaWRlcy1jb2xsZWN0aW9uXCI6IFwic2xpZGVzLWNvbGxlY3Rpb25cIixcblx0XCJzaW5nbGUtc2xpZGVcIjogXCJzaW5nbGUtc2xpZGVcIixcblx0XCJzbGlkZS1pbWFnZVwiOiBcInNsaWRlLWltYWdlXCIsXG5cdFwic2xpZGVyLWJ1dHRvblwiOiBcInNsaWRlci1idXR0b25cIixcblx0XCJwcmV2aW91cy1idXR0b25cIjogXCJwcmV2aW91cy1idXR0b25cIixcblx0XCJuZXh0LWJ1dHRvblwiOiBcIm5leHQtYnV0dG9uXCIsXG5cdFwicGxheXBhdXNlLWJ1dHRvblwiOiBcInBsYXlwYXVzZS1idXR0b25cIixcblx0XCJwYXVzZWRTdGF0ZVwiOiBcInBhdXNlZFN0YXRlXCJcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0JztcclxuaW1wb3J0IGNyZWF0ZVNsaWRlckxheW91dCBmcm9tICcuL3NsaWRlckxheW91dC5qcyc7XHJcblxyXG5mdW5jdGlvbiBpbWdTbGlkZXIoc2xpZGVySWQsIG9wdGlvbnMpIHtcclxuICAgIGxldCBsYXVuY2hTbGlkZXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoc2xpZGVySWQsIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgY3JlYXRlU2xpZGVyTGF5b3V0KHNsaWRlcklkKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNsaWRlcklkKSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc0NvbGxlY3Rpb24gPSBzbGlkZXIucXVlcnlTZWxlY3RvcignLnNsaWRlcy1jb2xsZWN0aW9uJyksXHJcbiAgICAgICAgICAgICAgICBzaW5nbGVTbGlkZXMgPSBzbGlkZXIucXVlcnlTZWxlY3RvckFsbCgnLnNpbmdsZS1zbGlkZScpLFxyXG4gICAgICAgICAgICAgICAgcGxheXBhdXNlQnV0dG9uID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5wbGF5cGF1c2UtYnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNBcnJheSA9IFtdLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID0gMCxcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVZhbHVlID0gMCxcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybVN0ZXAgPSAxMDAsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXJUaW1lcklkLFxyXG4gICAgICAgICAgICAgICAgaXNTbGlkZUluVHJhbnNpdGlvbiA9IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVyT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheUVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5SW50ZXJ2YWw6IDUwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1Zpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc1MDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAnNTAwcHgnXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIG9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgaW4gc2xpZGVyT3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlck9wdGlvbnNba2V5XSA9IG9wdGlvbnNba2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc2xpZGVyLnN0eWxlLm1heFdpZHRoID0gc2xpZGVyT3B0aW9ucy5tYXhXaWR0aDtcclxuICAgICAgICAgICAgc2xpZGVyLnN0eWxlLm1heEhlaWdodCA9IHNsaWRlck9wdGlvbnMubWF4SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgaWYgKHNpbmdsZVNsaWRlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpbmdsZVNsaWRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc0FycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiBzaW5nbGVTbGlkZXNbaV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IDBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVzQXJyYXkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvcHkgPSBzaW5nbGVTbGlkZXNbMF0uY2xvbmVOb2RlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNpbmdsZVNsaWRlc1swXS5hZnRlcihjb3B5KTtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTogY29weSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEVsZW1lbnQgJHtzbGlkZXJJZH0gZG9lc24ndCBjb250YWluIGFueSBzbGlkZXMuYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICBtaW46ICdtaW4nLFxyXG4gICAgICAgICAgICAgICAgbWF4OiAnbWF4JyxcclxuICAgICAgICAgICAgICAgIGdldFNsaWRlSW5kZXg6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbGlkZXNBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHNsaWRlc0FycmF5W2ldLnBvc2l0aW9uIDwgc2xpZGVzQXJyYXlbaW5kZXhdLnBvc2l0aW9uICYmIHZhbHVlID09PSB0aGlzLm1pbikgfHwgKHNsaWRlc0FycmF5W2ldLnBvc2l0aW9uID4gc2xpZGVzQXJyYXlbaW5kZXhdLnBvc2l0aW9uICYmIHZhbHVlID09PSB0aGlzLm1heCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZ2V0U2xpZGVQb3NpdGlvbjogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNsaWRlc0FycmF5W3RoaXMuZ2V0U2xpZGVJbmRleCh2YWx1ZSldLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gc3dpdGNoU2xpZGUoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV4dFNsaWRlID0gMDtcclxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICduZXh0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbisrO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UG9zaXRpb24gPiBwb3NpdGlvbi5nZXRTbGlkZVBvc2l0aW9uKHBvc2l0aW9uLm1heCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFNsaWRlID0gcG9zaXRpb24uZ2V0U2xpZGVJbmRleChwb3NpdGlvbi5taW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNBcnJheVtuZXh0U2xpZGVdLnBvc2l0aW9uID0gcG9zaXRpb24uZ2V0U2xpZGVQb3NpdGlvbihwb3NpdGlvbi5tYXgpICsgMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzQXJyYXlbbmV4dFNsaWRlXS50cmFuc2Zvcm0gKz0gc2xpZGVzQXJyYXkubGVuZ3RoICogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNBcnJheVtuZXh0U2xpZGVdLml0ZW0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtzbGlkZXNBcnJheVtuZXh0U2xpZGVdLnRyYW5zZm9ybX0lKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybVZhbHVlIC09IHRyYW5zZm9ybVN0ZXA7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbi0tO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50UG9zaXRpb24gPCBwb3NpdGlvbi5nZXRTbGlkZVBvc2l0aW9uKHBvc2l0aW9uLm1pbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dFNsaWRlID0gcG9zaXRpb24uZ2V0U2xpZGVJbmRleChwb3NpdGlvbi5tYXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNBcnJheVtuZXh0U2xpZGVdLnBvc2l0aW9uID0gcG9zaXRpb24uZ2V0U2xpZGVQb3NpdGlvbihwb3NpdGlvbi5taW4pIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzQXJyYXlbbmV4dFNsaWRlXS50cmFuc2Zvcm0gLT0gc2xpZGVzQXJyYXkubGVuZ3RoICogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNBcnJheVtuZXh0U2xpZGVdLml0ZW0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtzbGlkZXNBcnJheVtuZXh0U2xpZGVdLnRyYW5zZm9ybX0lKWA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybVZhbHVlICs9IHRyYW5zZm9ybVN0ZXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2xpZGVzQ29sbGVjdGlvbi5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMC41cyc7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNDb2xsZWN0aW9uLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7dHJhbnNmb3JtVmFsdWV9JSlgO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNDb2xsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25zdGFydCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1NsaWRlSW5UcmFuc2l0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzQ29sbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU2xpZGVJblRyYW5zaXRpb24gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKE1hdGguYWJzKGN1cnJlbnRQb3NpdGlvbikgPT09IHNsaWRlc0FycmF5Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1WYWx1ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc0NvbGxlY3Rpb24uc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzBzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzQ29sbGVjdGlvbi5zdHlsZS50cmFuc2Zvcm0gPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoc2xpZGUsIGkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlLnBvc2l0aW9uID0gaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlLnRyYW5zZm9ybSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZS5pdGVtLnN0eWxlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNsaWRlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCduZXh0LWJ1dHRvbicpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1NsaWRlSW5UcmFuc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaFNsaWRlKCduZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5U3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNsaWRlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcmV2aW91cy1idXR0b24nKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNTbGlkZUluVHJhbnNpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hTbGlkZSgncHJldmlvdXMnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlTdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcGxheXBhdXNlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncGF1c2VkU3RhdGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdwYXVzZWRTdGF0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5U2xpZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgncGF1c2VkU3RhdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF1c2VTbGlkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnRYID0gMDtcclxuICAgICAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlTdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlmdCA9IGVuZFggLSBzdGFydFg7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoaWZ0ID4gMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoU2xpZGUoJ3ByZXZpb3VzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlmdCA8IC0xMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hTbGlkZSgnbmV4dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheVN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydFggPSBlLmNsaWVudFg7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlTdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZFggPSBlLmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ID0gZW5kWCAtIHN0YXJ0WDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpZnQgPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hTbGlkZSgncHJldmlvdXMnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNoaWZ0IDwgLTEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaFNsaWRlKCduZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5U3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzbGlkZXJPcHRpb25zLmJ1dHRvbnNWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlwYXVzZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5cGF1c2VCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyQnV0dG9ucyA9IHNsaWRlci5xdWVyeVNlbGVjdG9yQWxsKCcuc2xpZGVyLWJ1dHRvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlckJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGF1dG9wbGF5U3RhcnQoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXNsaWRlck9wdGlvbnMuYXV0b3BsYXlFbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheXBhdXNlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3BhdXNlZFN0YXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTdG9wKCk7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXJUaW1lcklkID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaFNsaWRlKCduZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICB9LCBzbGlkZXJPcHRpb25zLmF1dG9wbGF5SW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gYXV0b3BsYXlTdG9wKCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChzbGlkZXJUaW1lcklkKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGF1dG9wbGF5U3RhcnQoKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHBsYXlTbGlkZXIoKSB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXJPcHRpb25zLmF1dG9wbGF5RW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZnVuY3Rpb24gcGF1c2VTbGlkZXIoKSB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXJPcHRpb25zLmF1dG9wbGF5RW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTdG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwbGF5OiBwbGF5U2xpZGVyLFxyXG4gICAgICAgICAgICAgICAgcGF1c2U6IHBhdXNlU2xpZGVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KCkpO1xyXG5cclxuICAgIHJldHVybiBsYXVuY2hTbGlkZXIoc2xpZGVySWQsIG9wdGlvbnMpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbWdTbGlkZXI7IiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgY3NzIGZyb20gJy4vc3R5bGUuY3NzJ1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlU2xpZGVyTGF5b3V0KHNsaWRlcklkKSB7XHJcbiAgICBsZXQgc2xpZGVyQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzbGlkZXJJZCk7XHJcblxyXG4gICAgbGV0IGltZ0VsZW1lbnRzID0gc2xpZGVyQ29udGFpbmVyLmNoaWxkcmVuO1xyXG4gICAgaW1nRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChpbWdFbGVtZW50cyk7XHJcblxyXG4gICAgaWYgKGltZ0VsZW1lbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBzbGlkZXNDb2xsZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBzbGlkZXNDb2xsZWN0aW9uLmNsYXNzTGlzdC5hZGQoY3NzWydzbGlkZXMtY29sbGVjdGlvbiddKTtcclxuXHJcbiAgICAgICAgaW1nRWxlbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC50YWdOYW1lID09PSBcIklNR1wiKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzWydzbGlkZS1pbWFnZSddKTtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIFwiZmFsc2VcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2luZ2xlU2xpZGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICAgICAgc2luZ2xlU2xpZGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChjc3NbJ3NpbmdsZS1zbGlkZSddKTtcclxuICAgICAgICAgICAgICAgIHNpbmdsZVNsaWRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNsaWRlc0NvbGxlY3Rpb24uYXBwZW5kQ2hpbGQoc2luZ2xlU2xpZGVDb250YWluZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNzc1snc2luZ2xlLXNsaWRlJ10pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNsaWRlc0NvbGxlY3Rpb24uYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2xpZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHNsaWRlc0NvbGxlY3Rpb24pO1xyXG4gICAgICAgIHNsaWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNzc1snc2xpZGVyJ10pO1xyXG5cclxuICAgICAgICBjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgbmV4dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKGNzc1snbmV4dC1idXR0b24nXSk7XHJcbiAgICAgICAgbmV4dEJ1dHRvbi5jbGFzc0xpc3QuYWRkKGNzc1snc2xpZGVyLWJ1dHRvbiddKTtcclxuICAgICAgICBuZXh0QnV0dG9uLmlubmVyVGV4dCA9IFwiPlwiO1xyXG4gICAgICAgIG5leHRCdXR0b24uaHJlZiA9IFwiI1wiO1xyXG4gICAgICAgIGNvbnN0IHByZXZpb3VzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgcHJldmlvdXNCdXR0b24uY2xhc3NMaXN0LmFkZChjc3NbJ3ByZXZpb3VzLWJ1dHRvbiddKTtcclxuICAgICAgICBwcmV2aW91c0J1dHRvbi5jbGFzc0xpc3QuYWRkKGNzc1snc2xpZGVyLWJ1dHRvbiddKTtcclxuICAgICAgICBwcmV2aW91c0J1dHRvbi5pbm5lclRleHQgPSBcIjxcIjtcclxuICAgICAgICBwcmV2aW91c0J1dHRvbi5ocmVmID0gXCIjXCI7XHJcbiAgICAgICAgY29uc3QgcGxheXBhdXNlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgcGxheXBhdXNlQnV0dG9uLmNsYXNzTGlzdC5hZGQoY3NzWydwbGF5cGF1c2UtYnV0dG9uJ10pO1xyXG4gICAgICAgIHBsYXlwYXVzZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKGNzc1snc2xpZGVyLWJ1dHRvbiddKTtcclxuICAgICAgICBwbGF5cGF1c2VCdXR0b24uaW5uZXJUZXh0ID0gXCJ8fFwiO1xyXG4gICAgICAgIHBsYXlwYXVzZUJ1dHRvbi5ocmVmID0gXCIjXCI7XHJcblxyXG4gICAgICAgIHNsaWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmV2aW91c0J1dHRvbik7XHJcbiAgICAgICAgc2xpZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG5leHRCdXR0b24pO1xyXG4gICAgICAgIHNsaWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChwbGF5cGF1c2VCdXR0b24pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTbGlkZXJMYXlvdXQ7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LTEhLi9zdHlsZS5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=