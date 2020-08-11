'use strict';
function imgSlider(sliderId, options) {
    let launchSlider = (function () {
        return function (sliderId, options) {
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
            createSliderLayout(sliderId);

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