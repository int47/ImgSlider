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


function createSliderLayout(sliderId) {
  var sliderContainer = document.querySelector(sliderId);
  var imgElements = sliderContainer.children;
  imgElements = Array.prototype.slice.call(imgElements);

  if (imgElements.length > 0) {
    var slidesCollection = document.createElement("div");
    slidesCollection.classList.add("slides-collection");
    imgElements.forEach(function (element) {
      if (element.tagName === "IMG") {
        element.classList.add("slide-image");
        element.setAttribute("draggable", "false");
        var singleSlideContainer = document.createElement("div");
        singleSlideContainer.classList.add("single-slide");
        singleSlideContainer.appendChild(element);
        slidesCollection.appendChild(singleSlideContainer);
      } else {
        element.classList.add("single-slide");
        slidesCollection.appendChild(element);
      }
    });
    sliderContainer.appendChild(slidesCollection);
    sliderContainer.classList.add("slider");
    var nextButton = document.createElement("a");
    nextButton.classList.add("next-button");
    nextButton.classList.add("slider-button");
    nextButton.innerText = ">";
    nextButton.href = "#";
    var previousButton = document.createElement("a");
    previousButton.classList.add("previous-button");
    previousButton.classList.add("slider-button");
    previousButton.innerText = "<";
    previousButton.href = "#";
    var playpauseButton = document.createElement("a");
    playpauseButton.classList.add("playpause-button");
    playpauseButton.classList.add("slider-button");
    playpauseButton.innerText = "||";
    playpauseButton.href = "#";
    sliderContainer.appendChild(previousButton);
    sliderContainer.appendChild(nextButton);
    sliderContainer.appendChild(playpauseButton);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (createSliderLayout);

/***/ })

/******/ })["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWdTbGlkZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2ltZ1NsaWRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbWdTbGlkZXIvLi9pbWdTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vaW1nU2xpZGVyLy4vc2xpZGVyTGF5b3V0LmpzIl0sIm5hbWVzIjpbImltZ1NsaWRlciIsInNsaWRlcklkIiwib3B0aW9ucyIsImxhdW5jaFNsaWRlciIsImNyZWF0ZVNsaWRlckxheW91dCIsInNsaWRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlc0NvbGxlY3Rpb24iLCJzaW5nbGVTbGlkZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicGxheXBhdXNlQnV0dG9uIiwic2xpZGVzQXJyYXkiLCJjdXJyZW50UG9zaXRpb24iLCJ0cmFuc2Zvcm1WYWx1ZSIsInRyYW5zZm9ybVN0ZXAiLCJzbGlkZXJUaW1lcklkIiwiaXNTbGlkZUluVHJhbnNpdGlvbiIsInNsaWRlck9wdGlvbnMiLCJhdXRvcGxheUVuYWJsZWQiLCJhdXRvcGxheUludGVydmFsIiwiYnV0dG9uc1Zpc2libGUiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsImtleSIsInN0eWxlIiwibGVuZ3RoIiwiaSIsInB1c2giLCJpdGVtIiwicG9zaXRpb24iLCJ0cmFuc2Zvcm0iLCJjb3B5IiwiY2xvbmVOb2RlIiwiYWZ0ZXIiLCJjb25zb2xlIiwibG9nIiwibWluIiwibWF4IiwiZ2V0U2xpZGVJbmRleCIsInZhbHVlIiwiaW5kZXgiLCJnZXRTbGlkZVBvc2l0aW9uIiwic3dpdGNoU2xpZGUiLCJkaXJlY3Rpb24iLCJuZXh0U2xpZGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJhZGRFdmVudExpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJNYXRoIiwiYWJzIiwiZm9yRWFjaCIsInNsaWRlIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImF1dG9wbGF5U3RhcnQiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInJlbW92ZSIsInBsYXlTbGlkZXIiLCJhZGQiLCJwYXVzZVNsaWRlciIsInN0YXJ0WCIsImNoYW5nZWRUb3VjaGVzIiwiY2xpZW50WCIsImVuZFgiLCJzaGlmdCIsImRpc3BsYXkiLCJzbGlkZXJCdXR0b25zIiwiYnV0dG9uIiwiYXV0b3BsYXlTdG9wIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwicGxheSIsInBhdXNlIiwic2xpZGVyQ29udGFpbmVyIiwiaW1nRWxlbWVudHMiLCJjaGlsZHJlbiIsIkFycmF5IiwicHJvdG90eXBlIiwic2xpY2UiLCJjYWxsIiwiY3JlYXRlRWxlbWVudCIsImVsZW1lbnQiLCJ0YWdOYW1lIiwic2V0QXR0cmlidXRlIiwic2luZ2xlU2xpZGVDb250YWluZXIiLCJhcHBlbmRDaGlsZCIsIm5leHRCdXR0b24iLCJpbm5lclRleHQiLCJocmVmIiwicHJldmlvdXNCdXR0b24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtR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QUFDQTRCLGNBQVUsQ0FBQ0MsU0FBWCxHQUF1QixHQUF2QjtBQUNBRCxjQUFVLENBQUNFLElBQVgsR0FBa0IsR0FBbEI7QUFDQSxRQUFNQyxjQUFjLEdBQUd2RixRQUFRLENBQUM4RSxhQUFULENBQXVCLEdBQXZCLENBQXZCO0FBQ0FTLGtCQUFjLENBQUNuQyxTQUFmLENBQXlCSSxHQUF6QixDQUE2QixpQkFBN0I7QUFDQStCLGtCQUFjLENBQUNuQyxTQUFmLENBQXlCSSxHQUF6QixDQUE2QixlQUE3QjtBQUNBK0Isa0JBQWMsQ0FBQ0YsU0FBZixHQUEyQixHQUEzQjtBQUNBRSxrQkFBYyxDQUFDRCxJQUFmLEdBQXNCLEdBQXRCO0FBQ0EsUUFBTWpGLGVBQWUsR0FBR0wsUUFBUSxDQUFDOEUsYUFBVCxDQUF1QixHQUF2QixDQUF4QjtBQUNBekUsbUJBQWUsQ0FBQytDLFNBQWhCLENBQTBCSSxHQUExQixDQUE4QixrQkFBOUI7QUFDQW5ELG1CQUFlLENBQUMrQyxTQUFoQixDQUEwQkksR0FBMUIsQ0FBOEIsZUFBOUI7QUFDQW5ELG1CQUFlLENBQUNnRixTQUFoQixHQUE0QixJQUE1QjtBQUNBaEYsbUJBQWUsQ0FBQ2lGLElBQWhCLEdBQXVCLEdBQXZCO0FBRUFmLG1CQUFlLENBQUNZLFdBQWhCLENBQTRCSSxjQUE1QjtBQUNBaEIsbUJBQWUsQ0FBQ1ksV0FBaEIsQ0FBNEJDLFVBQTVCO0FBQ0FiLG1CQUFlLENBQUNZLFdBQWhCLENBQTRCOUUsZUFBNUI7QUFDSDtBQUNKOztBQUVjUCxpRkFBZixFIiwiZmlsZSI6ImltZ1NsaWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImltZ1NsaWRlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJpbWdTbGlkZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW1nU2xpZGVyLmpzXCIpO1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgY3JlYXRlU2xpZGVyTGF5b3V0IGZyb20gJy4vc2xpZGVyTGF5b3V0LmpzJztcclxuXHJcbmZ1bmN0aW9uIGltZ1NsaWRlcihzbGlkZXJJZCwgb3B0aW9ucykge1xyXG4gICAgbGV0IGxhdW5jaFNsaWRlciA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzbGlkZXJJZCwgb3B0aW9ucykge1xyXG4gICAgICAgICAgICBjcmVhdGVTbGlkZXJMYXlvdXQoc2xpZGVySWQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2xpZGVySWQpLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzQ29sbGVjdGlvbiA9IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcuc2xpZGVzLWNvbGxlY3Rpb24nKSxcclxuICAgICAgICAgICAgICAgIHNpbmdsZVNsaWRlcyA9IHNsaWRlci5xdWVyeVNlbGVjdG9yQWxsKCcuc2luZ2xlLXNsaWRlJyksXHJcbiAgICAgICAgICAgICAgICBwbGF5cGF1c2VCdXR0b24gPSBzbGlkZXIucXVlcnlTZWxlY3RvcignLnBsYXlwYXVzZS1idXR0b24nKSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc0FycmF5ID0gW10sXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24gPSAwLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtVmFsdWUgPSAwLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtU3RlcCA9IDEwMCxcclxuICAgICAgICAgICAgICAgIHNsaWRlclRpbWVySWQsXHJcbiAgICAgICAgICAgICAgICBpc1NsaWRlSW5UcmFuc2l0aW9uID0gZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXJPcHRpb25zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5RW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlJbnRlcnZhbDogNTAwMCxcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25zVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzUwMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6ICc1MDBweCdcclxuICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gb3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleSBpbiBzbGlkZXJPcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyT3B0aW9uc1trZXldID0gb3B0aW9uc1trZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzbGlkZXIuc3R5bGUubWF4V2lkdGggPSBzbGlkZXJPcHRpb25zLm1heFdpZHRoO1xyXG4gICAgICAgICAgICBzbGlkZXIuc3R5bGUubWF4SGVpZ2h0ID0gc2xpZGVyT3B0aW9ucy5tYXhIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2luZ2xlU2xpZGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2luZ2xlU2xpZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzQXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IHNpbmdsZVNsaWRlc1tpXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogMFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzbGlkZXNBcnJheS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29weSA9IHNpbmdsZVNsaWRlc1swXS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2luZ2xlU2xpZGVzWzBdLmFmdGVyKGNvcHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc0FycmF5LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtOiBjb3B5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgRWxlbWVudCAke3NsaWRlcklkfSBkb2Vzbid0IGNvbnRhaW4gYW55IHNsaWRlcy5gKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIG1pbjogJ21pbicsXHJcbiAgICAgICAgICAgICAgICBtYXg6ICdtYXgnLFxyXG4gICAgICAgICAgICAgICAgZ2V0U2xpZGVJbmRleDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlc0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoc2xpZGVzQXJyYXlbaV0ucG9zaXRpb24gPCBzbGlkZXNBcnJheVtpbmRleF0ucG9zaXRpb24gJiYgdmFsdWUgPT09IHRoaXMubWluKSB8fCAoc2xpZGVzQXJyYXlbaV0ucG9zaXRpb24gPiBzbGlkZXNBcnJheVtpbmRleF0ucG9zaXRpb24gJiYgdmFsdWUgPT09IHRoaXMubWF4KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBnZXRTbGlkZVBvc2l0aW9uOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2xpZGVzQXJyYXlbdGhpcy5nZXRTbGlkZUluZGV4KHZhbHVlKV0ucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBzd2l0Y2hTbGlkZShkaXJlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGxldCBuZXh0U2xpZGUgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbiA+IHBvc2l0aW9uLmdldFNsaWRlUG9zaXRpb24ocG9zaXRpb24ubWF4KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0U2xpZGUgPSBwb3NpdGlvbi5nZXRTbGlkZUluZGV4KHBvc2l0aW9uLm1pbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc0FycmF5W25leHRTbGlkZV0ucG9zaXRpb24gPSBwb3NpdGlvbi5nZXRTbGlkZVBvc2l0aW9uKHBvc2l0aW9uLm1heCkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNBcnJheVtuZXh0U2xpZGVdLnRyYW5zZm9ybSArPSBzbGlkZXNBcnJheS5sZW5ndGggKiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc0FycmF5W25leHRTbGlkZV0uaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3NsaWRlc0FycmF5W25leHRTbGlkZV0udHJhbnNmb3JtfSUpYDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtVmFsdWUgLT0gdHJhbnNmb3JtU3RlcDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uLS07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRQb3NpdGlvbiA8IHBvc2l0aW9uLmdldFNsaWRlUG9zaXRpb24ocG9zaXRpb24ubWluKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0U2xpZGUgPSBwb3NpdGlvbi5nZXRTbGlkZUluZGV4KHBvc2l0aW9uLm1heCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc0FycmF5W25leHRTbGlkZV0ucG9zaXRpb24gPSBwb3NpdGlvbi5nZXRTbGlkZVBvc2l0aW9uKHBvc2l0aW9uLm1pbikgLSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNBcnJheVtuZXh0U2xpZGVdLnRyYW5zZm9ybSAtPSBzbGlkZXNBcnJheS5sZW5ndGggKiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc0FycmF5W25leHRTbGlkZV0uaXRlbS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3NsaWRlc0FycmF5W25leHRTbGlkZV0udHJhbnNmb3JtfSUpYDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtVmFsdWUgKz0gdHJhbnNmb3JtU3RlcDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNDb2xsZWN0aW9uLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwLjVzJztcclxuICAgICAgICAgICAgICAgIHNsaWRlc0NvbGxlY3Rpb24uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHt0cmFuc2Zvcm1WYWx1ZX0lKWA7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc0NvbGxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbnN0YXJ0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzU2xpZGVJblRyYW5zaXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNDb2xsZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTbGlkZUluVHJhbnNpdGlvbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoY3VycmVudFBvc2l0aW9uKSA9PT0gc2xpZGVzQXJyYXkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybVZhbHVlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzQ29sbGVjdGlvbi5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnMHMnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNDb2xsZWN0aW9uLnN0eWxlLnRyYW5zZm9ybSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChzbGlkZSwgaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUucG9zaXRpb24gPSBpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUudHJhbnNmb3JtID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlLml0ZW0uc3R5bGUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2xpZGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25leHQtYnV0dG9uJylbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzU2xpZGVJblRyYW5zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoU2xpZGUoJ25leHQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlTdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2xpZGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3ByZXZpb3VzLWJ1dHRvbicpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1NsaWRlSW5UcmFuc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaFNsaWRlKCdwcmV2aW91cycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheVN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBwbGF5cGF1c2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYXVzZWRTdGF0ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ3BhdXNlZFN0YXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlTbGlkZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdwYXVzZWRTdGF0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXVzZVNsaWRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzdGFydFggPSAwO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0WCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WDtcclxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheVN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVuZFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0ID0gZW5kWCAtIHN0YXJ0WDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpZnQgPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hTbGlkZSgncHJldmlvdXMnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNoaWZ0IDwgLTEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaFNsaWRlKCduZXh0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5U3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0WCA9IGUuY2xpZW50WDtcclxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheVN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5kWCA9IGUuY2xpZW50WCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnQgPSBlbmRYIC0gc3RhcnRYO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGlmdCA+IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaFNsaWRlKCdwcmV2aW91cycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpZnQgPCAtMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoU2xpZGUoJ25leHQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlTdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlck9wdGlvbnMuYnV0dG9uc1Zpc2libGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheXBhdXNlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlwYXVzZUJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXJCdXR0b25zID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXItYnV0dG9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyQnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uIChidXR0b24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBhZGRFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gYXV0b3BsYXlTdGFydCgpIHtcclxuICAgICAgICAgICAgICAgIGlmICghc2xpZGVyT3B0aW9ucy5hdXRvcGxheUVuYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5cGF1c2VCdXR0b24uY2xhc3NMaXN0LmFkZCgncGF1c2VkU3RhdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVN0b3AoKTtcclxuICAgICAgICAgICAgICAgIHNsaWRlclRpbWVySWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoU2xpZGUoJ25leHQnKTtcclxuICAgICAgICAgICAgICAgIH0sIHNsaWRlck9wdGlvbnMuYXV0b3BsYXlJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBhdXRvcGxheVN0b3AoKSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHNsaWRlclRpbWVySWQpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgYXV0b3BsYXlTdGFydCgpO1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcGxheVNsaWRlcigpIHtcclxuICAgICAgICAgICAgICAgIHNsaWRlck9wdGlvbnMuYXV0b3BsYXlFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmdW5jdGlvbiBwYXVzZVNsaWRlcigpIHtcclxuICAgICAgICAgICAgICAgIHNsaWRlck9wdGlvbnMuYXV0b3BsYXlFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVN0b3AoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHBsYXk6IHBsYXlTbGlkZXIsXHJcbiAgICAgICAgICAgICAgICBwYXVzZTogcGF1c2VTbGlkZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0oKSk7XHJcblxyXG4gICAgcmV0dXJuIGxhdW5jaFNsaWRlcihzbGlkZXJJZCwgb3B0aW9ucyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGltZ1NsaWRlcjsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTbGlkZXJMYXlvdXQoc2xpZGVySWQpIHtcclxuICAgIGxldCBzbGlkZXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNsaWRlcklkKTtcclxuXHJcbiAgICBsZXQgaW1nRWxlbWVudHMgPSBzbGlkZXJDb250YWluZXIuY2hpbGRyZW47XHJcbiAgICBpbWdFbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGltZ0VsZW1lbnRzKTtcclxuXHJcbiAgICBpZiAoaW1nRWxlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IHNsaWRlc0NvbGxlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHNsaWRlc0NvbGxlY3Rpb24uY2xhc3NMaXN0LmFkZChcInNsaWRlcy1jb2xsZWN0aW9uXCIpO1xyXG5cclxuICAgICAgICBpbWdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChlbGVtZW50LnRhZ05hbWUgPT09IFwiSU1HXCIpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNsaWRlLWltYWdlXCIpO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkcmFnZ2FibGVcIiwgXCJmYWxzZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzaW5nbGVTbGlkZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgICAgICBzaW5nbGVTbGlkZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2luZ2xlLXNsaWRlXCIpO1xyXG4gICAgICAgICAgICAgICAgc2luZ2xlU2xpZGVDb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2xpZGVzQ29sbGVjdGlvbi5hcHBlbmRDaGlsZChzaW5nbGVTbGlkZUNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzaW5nbGUtc2xpZGVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgc2xpZGVzQ29sbGVjdGlvbi5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzbGlkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2xpZGVzQ29sbGVjdGlvbik7XHJcbiAgICAgICAgc2xpZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXJcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBuZXh0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuZXh0LWJ1dHRvblwiKTtcclxuICAgICAgICBuZXh0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXItYnV0dG9uXCIpO1xyXG4gICAgICAgIG5leHRCdXR0b24uaW5uZXJUZXh0ID0gXCI+XCI7XHJcbiAgICAgICAgbmV4dEJ1dHRvbi5ocmVmID0gXCIjXCI7XHJcbiAgICAgICAgY29uc3QgcHJldmlvdXNCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBwcmV2aW91c0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJldmlvdXMtYnV0dG9uXCIpO1xyXG4gICAgICAgIHByZXZpb3VzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXItYnV0dG9uXCIpO1xyXG4gICAgICAgIHByZXZpb3VzQnV0dG9uLmlubmVyVGV4dCA9IFwiPFwiO1xyXG4gICAgICAgIHByZXZpb3VzQnV0dG9uLmhyZWYgPSBcIiNcIjtcclxuICAgICAgICBjb25zdCBwbGF5cGF1c2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBwbGF5cGF1c2VCdXR0b24uY2xhc3NMaXN0LmFkZChcInBsYXlwYXVzZS1idXR0b25cIik7XHJcbiAgICAgICAgcGxheXBhdXNlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzbGlkZXItYnV0dG9uXCIpO1xyXG4gICAgICAgIHBsYXlwYXVzZUJ1dHRvbi5pbm5lclRleHQgPSBcInx8XCI7XHJcbiAgICAgICAgcGxheXBhdXNlQnV0dG9uLmhyZWYgPSBcIiNcIjtcclxuXHJcbiAgICAgICAgc2xpZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHByZXZpb3VzQnV0dG9uKTtcclxuICAgICAgICBzbGlkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobmV4dEJ1dHRvbik7XHJcbiAgICAgICAgc2xpZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHBsYXlwYXVzZUJ1dHRvbik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNsaWRlckxheW91dDsiXSwic291cmNlUm9vdCI6IiJ9