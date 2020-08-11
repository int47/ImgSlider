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
    let launchSlider = (function () {
        return function (sliderId, options) {
            Object(_sliderLayout_js__WEBPACK_IMPORTED_MODULE_0__["default"])(sliderId);

            let slider = document.querySelector(sliderId),
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

            for (let key in options) {
                if (key in sliderOptions) {
                    sliderOptions[key] = options[key];
                }
            }

            slider.style.maxWidth = sliderOptions.maxWidth;
            slider.style.maxHeight = sliderOptions.maxHeight;

            if (singleSlides.length > 0) {
                for (let i = 0; i < singleSlides.length; i++) {
                    slidesArray.push({
                        item: singleSlides[i],
                        position: i,
                        transform: 0
                    });
                }

                if (slidesArray.length === 1) {
                    let copy = singleSlides[0].cloneNode(true);
                    singleSlides[0].after(copy);
                    slidesArray.push({
                        item: copy,
                        position: 1,
                        transform: 0
                    });
                }
            }
            else {
                console.log(`Element ${sliderId} doesn't contain any slides.`);
                return;
            }


            let position = {
                min: 'min',
                max: 'max',
                getSlideIndex: function (value) {
                    let index = 0;
                    for (let i = 0; i < slidesArray.length; i++) {
                        if ((slidesArray[i].position < slidesArray[index].position && value === this.min) || (slidesArray[i].position > slidesArray[index].position && value === this.max)) {
                            index = i;
                        }
                    }
                    return index;
                },
                getSlidePosition: function (value) {
                    return slidesArray[this.getSlideIndex(value)].position;
                }
            };

            function switchSlide(direction) {
                let nextSlide = 0;
                if (direction === 'next') {
                    currentPosition++;
                    if (currentPosition > position.getSlidePosition(position.max)) {
                        nextSlide = position.getSlideIndex(position.min);
                        slidesArray[nextSlide].position = position.getSlidePosition(position.max) + 1;
                        slidesArray[nextSlide].transform += slidesArray.length * 100;
                        slidesArray[nextSlide].item.style.transform = `translateX(${slidesArray[nextSlide].transform}%)`;
                    }
                    transformValue -= transformStep;
                } else {
                    currentPosition--;
                    if (currentPosition < position.getSlidePosition(position.min)) {
                        nextSlide = position.getSlideIndex(position.max);
                        slidesArray[nextSlide].position = position.getSlidePosition(position.min) - 1;
                        slidesArray[nextSlide].transform -= slidesArray.length * 100;
                        slidesArray[nextSlide].item.style.transform = `translateX(${slidesArray[nextSlide].transform}%)`;
                    }
                    transformValue += transformStep;
                }

                slidesCollection.style.transitionDuration = '0.5s';
                slidesCollection.style.transform = `translateX(${transformValue}%)`;
            };

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

                let startX = 0;
                slider.addEventListener('touchstart', function (e) {
                    startX = e.changedTouches[0].clientX;
                    autoplayStart();
                });
                slider.addEventListener('touchend', function (e) {
                    let endX = e.changedTouches[0].clientX,
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
                    let endX = e.clientX,
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
            };

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
            };

            function autoplayStop() {
                clearInterval(sliderTimerId);
            };

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
            }
        }
    }());

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
    let sliderContainer = document.querySelector(sliderId);

    let imgElements = sliderContainer.children;
    imgElements = Array.prototype.slice.call(imgElements);

    if (imgElements.length > 0) {
        const slidesCollection = document.createElement("div");
        slidesCollection.classList.add("slides-collection");

        imgElements.forEach(function (element) {
            if (element.tagName === "IMG") {
                element.classList.add("slide-image");
                element.setAttribute("draggable", "false");

                const singleSlideContainer = document.createElement("div");
                singleSlideContainer.classList.add("single-slide");
                singleSlideContainer.appendChild(element);

                slidesCollection.appendChild(singleSlideContainer);
            }
            else {
                element.classList.add("single-slide");

                slidesCollection.appendChild(element);
            }
        });

        sliderContainer.appendChild(slidesCollection);
        sliderContainer.classList.add("slider");

        const nextButton = document.createElement("a");
        nextButton.classList.add("next-button");
        nextButton.classList.add("slider-button");
        nextButton.innerText = ">";
        nextButton.href = "#";
        const previousButton = document.createElement("a");
        previousButton.classList.add("previous-button");
        previousButton.classList.add("slider-button");
        previousButton.innerText = "<";
        previousButton.href = "#";
        const playpauseButton = document.createElement("a");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWdTbGlkZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2ltZ1NsaWRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbWdTbGlkZXIvLi9pbWdTbGlkZXIuanMiLCJ3ZWJwYWNrOi8vaW1nU2xpZGVyLy4vc2xpZGVyTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBYTtBQUNzQzs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnRUFBa0I7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLHlCQUF5QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsU0FBUztBQUNoRDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHdCQUF3QjtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0YsaUNBQWlDO0FBQ3JIO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GQUFvRixpQ0FBaUM7QUFDckg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUVBQWlFLGVBQWU7QUFDaEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRWUsd0VBQVMsRTs7Ozs7Ozs7Ozs7O0FDMU94QjtBQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsaUZBQWtCLEUiLCJmaWxlIjoiaW1nU2xpZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiaW1nU2xpZGVyXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImltZ1NsaWRlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbWdTbGlkZXIuanNcIik7XG4iLCIndXNlIHN0cmljdCc7XHJcbmltcG9ydCBjcmVhdGVTbGlkZXJMYXlvdXQgZnJvbSAnLi9zbGlkZXJMYXlvdXQuanMnO1xyXG5cclxuZnVuY3Rpb24gaW1nU2xpZGVyKHNsaWRlcklkLCBvcHRpb25zKSB7XHJcbiAgICBsZXQgbGF1bmNoU2xpZGVyID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHNsaWRlcklkLCBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVNsaWRlckxheW91dChzbGlkZXJJZCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzbGlkZXJJZCksXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNDb2xsZWN0aW9uID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXMtY29sbGVjdGlvbicpLFxyXG4gICAgICAgICAgICAgICAgc2luZ2xlU2xpZGVzID0gc2xpZGVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaW5nbGUtc2xpZGUnKSxcclxuICAgICAgICAgICAgICAgIHBsYXlwYXVzZUJ1dHRvbiA9IHNsaWRlci5xdWVyeVNlbGVjdG9yKCcucGxheXBhdXNlLWJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzQXJyYXkgPSBbXSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRQb3NpdGlvbiA9IDAsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1WYWx1ZSA9IDAsXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1TdGVwID0gMTAwLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVyVGltZXJJZCxcclxuICAgICAgICAgICAgICAgIGlzU2xpZGVJblRyYW5zaXRpb24gPSBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNsaWRlck9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlFbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheUludGVydmFsOiA1MDAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnNTAwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogJzUwMHB4J1xyXG4gICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGtleSBpbiBvcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5IGluIHNsaWRlck9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXJPcHRpb25zW2tleV0gPSBvcHRpb25zW2tleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNsaWRlci5zdHlsZS5tYXhXaWR0aCA9IHNsaWRlck9wdGlvbnMubWF4V2lkdGg7XHJcbiAgICAgICAgICAgIHNsaWRlci5zdHlsZS5tYXhIZWlnaHQgPSBzbGlkZXJPcHRpb25zLm1heEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIGlmIChzaW5nbGVTbGlkZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaW5nbGVTbGlkZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTogc2luZ2xlU2xpZGVzW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogaSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlc0FycmF5Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjb3B5ID0gc2luZ2xlU2xpZGVzWzBdLmNsb25lTm9kZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzaW5nbGVTbGlkZXNbMF0uYWZ0ZXIoY29weSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzQXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW06IGNvcHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IDBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFbGVtZW50ICR7c2xpZGVySWR9IGRvZXNuJ3QgY29udGFpbiBhbnkgc2xpZGVzLmApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IHBvc2l0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgbWluOiAnbWluJyxcclxuICAgICAgICAgICAgICAgIG1heDogJ21heCcsXHJcbiAgICAgICAgICAgICAgICBnZXRTbGlkZUluZGV4OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChzbGlkZXNBcnJheVtpXS5wb3NpdGlvbiA8IHNsaWRlc0FycmF5W2luZGV4XS5wb3NpdGlvbiAmJiB2YWx1ZSA9PT0gdGhpcy5taW4pIHx8IChzbGlkZXNBcnJheVtpXS5wb3NpdGlvbiA+IHNsaWRlc0FycmF5W2luZGV4XS5wb3NpdGlvbiAmJiB2YWx1ZSA9PT0gdGhpcy5tYXgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGdldFNsaWRlUG9zaXRpb246IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzbGlkZXNBcnJheVt0aGlzLmdldFNsaWRlSW5kZXgodmFsdWUpXS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHN3aXRjaFNsaWRlKGRpcmVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5leHRTbGlkZSA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24rKztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBvc2l0aW9uID4gcG9zaXRpb24uZ2V0U2xpZGVQb3NpdGlvbihwb3NpdGlvbi5tYXgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRTbGlkZSA9IHBvc2l0aW9uLmdldFNsaWRlSW5kZXgocG9zaXRpb24ubWluKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzQXJyYXlbbmV4dFNsaWRlXS5wb3NpdGlvbiA9IHBvc2l0aW9uLmdldFNsaWRlUG9zaXRpb24ocG9zaXRpb24ubWF4KSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc0FycmF5W25leHRTbGlkZV0udHJhbnNmb3JtICs9IHNsaWRlc0FycmF5Lmxlbmd0aCAqIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzQXJyYXlbbmV4dFNsaWRlXS5pdGVtLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7c2xpZGVzQXJyYXlbbmV4dFNsaWRlXS50cmFuc2Zvcm19JSlgO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1WYWx1ZSAtPSB0cmFuc2Zvcm1TdGVwO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50UG9zaXRpb24tLTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY3VycmVudFBvc2l0aW9uIDwgcG9zaXRpb24uZ2V0U2xpZGVQb3NpdGlvbihwb3NpdGlvbi5taW4pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRTbGlkZSA9IHBvc2l0aW9uLmdldFNsaWRlSW5kZXgocG9zaXRpb24ubWF4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzQXJyYXlbbmV4dFNsaWRlXS5wb3NpdGlvbiA9IHBvc2l0aW9uLmdldFNsaWRlUG9zaXRpb24ocG9zaXRpb24ubWluKSAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc0FycmF5W25leHRTbGlkZV0udHJhbnNmb3JtIC09IHNsaWRlc0FycmF5Lmxlbmd0aCAqIDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzQXJyYXlbbmV4dFNsaWRlXS5pdGVtLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7c2xpZGVzQXJyYXlbbmV4dFNsaWRlXS50cmFuc2Zvcm19JSlgO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm1WYWx1ZSArPSB0cmFuc2Zvcm1TdGVwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNsaWRlc0NvbGxlY3Rpb24uc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzAuNXMnO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzQ29sbGVjdGlvbi5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3RyYW5zZm9ybVZhbHVlfSUpYDtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzQ29sbGVjdGlvbi5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uc3RhcnQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNTbGlkZUluVHJhbnNpdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNsaWRlc0NvbGxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1NsaWRlSW5UcmFuc2l0aW9uID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhjdXJyZW50UG9zaXRpb24pID09PSBzbGlkZXNBcnJheS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtVmFsdWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNDb2xsZWN0aW9uLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICcwcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc0NvbGxlY3Rpb24uc3R5bGUudHJhbnNmb3JtID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc0FycmF5LmZvckVhY2goZnVuY3Rpb24gKHNsaWRlLCBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZS5wb3NpdGlvbiA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZS50cmFuc2Zvcm0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGUuaXRlbS5zdHlsZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzbGlkZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmV4dC1idXR0b24nKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNTbGlkZUluVHJhbnNpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hTbGlkZSgnbmV4dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheVN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzbGlkZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJldmlvdXMtYnV0dG9uJylbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzU2xpZGVJblRyYW5zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoU2xpZGUoJ3ByZXZpb3VzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5U3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHBsYXlwYXVzZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BhdXNlZFN0YXRlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgncGF1c2VkU3RhdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheVNsaWRlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3BhdXNlZFN0YXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdXNlU2xpZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0WCA9IDA7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRYID0gZS5jaGFuZ2VkVG91Y2hlc1swXS5jbGllbnRYO1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5U3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW5kWCA9IGUuY2hhbmdlZFRvdWNoZXNbMF0uY2xpZW50WCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnQgPSBlbmRYIC0gc3RhcnRYO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGlmdCA+IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaFNsaWRlKCdwcmV2aW91cycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hpZnQgPCAtMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoU2xpZGUoJ25leHQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b3BsYXlTdGFydCgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRYID0gZS5jbGllbnRYO1xyXG4gICAgICAgICAgICAgICAgICAgIGF1dG9wbGF5U3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBlbmRYID0gZS5jbGllbnRYLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlmdCA9IGVuZFggLSBzdGFydFg7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoaWZ0ID4gMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoU2xpZGUoJ3ByZXZpb3VzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzaGlmdCA8IC0xMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2hTbGlkZSgnbmV4dCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBhdXRvcGxheVN0YXJ0KCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVyT3B0aW9ucy5idXR0b25zVmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5cGF1c2VCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheXBhdXNlQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlckJ1dHRvbnMgPSBzbGlkZXIucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlci1idXR0b24nKTtcclxuICAgICAgICAgICAgICAgICAgICBzbGlkZXJCdXR0b25zLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBhdXRvcGxheVN0YXJ0KCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzbGlkZXJPcHRpb25zLmF1dG9wbGF5RW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXlwYXVzZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwYXVzZWRTdGF0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3RvcCgpO1xyXG4gICAgICAgICAgICAgICAgc2xpZGVyVGltZXJJZCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2hTbGlkZSgnbmV4dCcpO1xyXG4gICAgICAgICAgICAgICAgfSwgc2xpZGVyT3B0aW9ucy5hdXRvcGxheUludGVydmFsKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGF1dG9wbGF5U3RvcCgpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc2xpZGVyVGltZXJJZCk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBhdXRvcGxheVN0YXJ0KCk7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBwbGF5U2xpZGVyKCkge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVyT3B0aW9ucy5hdXRvcGxheUVuYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHBhdXNlU2xpZGVyKCkge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVyT3B0aW9ucy5hdXRvcGxheUVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3RvcCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcGxheTogcGxheVNsaWRlcixcclxuICAgICAgICAgICAgICAgIHBhdXNlOiBwYXVzZVNsaWRlclxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSgpKTtcclxuXHJcbiAgICByZXR1cm4gbGF1bmNoU2xpZGVyKHNsaWRlcklkLCBvcHRpb25zKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW1nU2xpZGVyOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVNsaWRlckxheW91dChzbGlkZXJJZCkge1xyXG4gICAgbGV0IHNsaWRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2xpZGVySWQpO1xyXG5cclxuICAgIGxldCBpbWdFbGVtZW50cyA9IHNsaWRlckNvbnRhaW5lci5jaGlsZHJlbjtcclxuICAgIGltZ0VsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoaW1nRWxlbWVudHMpO1xyXG5cclxuICAgIGlmIChpbWdFbGVtZW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgY29uc3Qgc2xpZGVzQ29sbGVjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgc2xpZGVzQ29sbGVjdGlvbi5jbGFzc0xpc3QuYWRkKFwic2xpZGVzLWNvbGxlY3Rpb25cIik7XHJcblxyXG4gICAgICAgIGltZ0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQudGFnTmFtZSA9PT0gXCJJTUdcIikge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2xpZGUtaW1hZ2VcIik7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShcImRyYWdnYWJsZVwiLCBcImZhbHNlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNpbmdsZVNsaWRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgICAgIHNpbmdsZVNsaWRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaW5nbGUtc2xpZGVcIik7XHJcbiAgICAgICAgICAgICAgICBzaW5nbGVTbGlkZUNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNDb2xsZWN0aW9uLmFwcGVuZENoaWxkKHNpbmdsZVNsaWRlQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInNpbmdsZS1zbGlkZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNDb2xsZWN0aW9uLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHNsaWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChzbGlkZXNDb2xsZWN0aW9uKTtcclxuICAgICAgICBzbGlkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNsaWRlclwiKTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIG5leHRCdXR0b24uY2xhc3NMaXN0LmFkZChcIm5leHQtYnV0dG9uXCIpO1xyXG4gICAgICAgIG5leHRCdXR0b24uY2xhc3NMaXN0LmFkZChcInNsaWRlci1idXR0b25cIik7XHJcbiAgICAgICAgbmV4dEJ1dHRvbi5pbm5lclRleHQgPSBcIj5cIjtcclxuICAgICAgICBuZXh0QnV0dG9uLmhyZWYgPSBcIiNcIjtcclxuICAgICAgICBjb25zdCBwcmV2aW91c0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIHByZXZpb3VzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcmV2aW91cy1idXR0b25cIik7XHJcbiAgICAgICAgcHJldmlvdXNCdXR0b24uY2xhc3NMaXN0LmFkZChcInNsaWRlci1idXR0b25cIik7XHJcbiAgICAgICAgcHJldmlvdXNCdXR0b24uaW5uZXJUZXh0ID0gXCI8XCI7XHJcbiAgICAgICAgcHJldmlvdXNCdXR0b24uaHJlZiA9IFwiI1wiO1xyXG4gICAgICAgIGNvbnN0IHBsYXlwYXVzZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xyXG4gICAgICAgIHBsYXlwYXVzZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicGxheXBhdXNlLWJ1dHRvblwiKTtcclxuICAgICAgICBwbGF5cGF1c2VCdXR0b24uY2xhc3NMaXN0LmFkZChcInNsaWRlci1idXR0b25cIik7XHJcbiAgICAgICAgcGxheXBhdXNlQnV0dG9uLmlubmVyVGV4dCA9IFwifHxcIjtcclxuICAgICAgICBwbGF5cGF1c2VCdXR0b24uaHJlZiA9IFwiI1wiO1xyXG5cclxuICAgICAgICBzbGlkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocHJldmlvdXNCdXR0b24pO1xyXG4gICAgICAgIHNsaWRlckNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXh0QnV0dG9uKTtcclxuICAgICAgICBzbGlkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQocGxheXBhdXNlQnV0dG9uKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2xpZGVyTGF5b3V0OyJdLCJzb3VyY2VSb290IjoiIn0=