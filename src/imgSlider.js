'use strict';
import createSliderLayout from './sliderLayout.js';

function imgSlider(sliderId, options) {
    if (document.getElementById(sliderId) === null) {
        console.log(`Element with id="${sliderId}" not found.`);
        return;
    }

    const launchSlider = (function () {
        return function (sliderId, {
            autoplayEnabled = false,
            autoplayInterval = 5000,
            buttonsVisible = true,
            maxWidth = '500px',
            maxHeight = '500px'
        }) {
            createSliderLayout(sliderId);

            const slider = document.getElementById(sliderId),
                slidesCollection = slider.getElementsByClassName('slides-collection')[0],
                singleSlides = slider.getElementsByClassName('single-slide'),
                playpauseButton = slider.getElementsByClassName('playpause-button')[0],
                transformStep = 100;

            let slidesArray = [],
                currentPosition = 0,
                transformValue = 0,
                sliderTimerId,
                isSlideInTransition = false;

            slider.style.maxWidth = maxWidth;
            slider.style.maxHeight = maxHeight;

            if (singleSlides.length > 0) {
                for (let i = 0; i < singleSlides.length; i++) {
                    slidesArray.push({
                        item: singleSlides[i],
                        position: i,
                        transform: 0
                    });
                }

                if (slidesArray.length === 1) {
                    const copy = singleSlides[0].cloneNode(true);
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


            const position = {
                getMinSlideIndex: function () {
                    const minSlide = slidesArray.reduce(function (previous, current) {
                        return (previous.position < current.position) ? previous : current;
                    });
                    return slidesArray.indexOf(minSlide);
                },
                getMaxSlideIndex: function () {
                    const maxSlide = slidesArray.reduce(function (previous, current) {
                        return (previous.position > current.position) ? previous : current;
                    });
                    return slidesArray.indexOf(maxSlide);
                },
                getMinSlidePosition: function () {
                    return slidesArray[this.getMinSlideIndex()].position;
                },
                getMaxSlidePosition: function () {
                    return slidesArray[this.getMaxSlideIndex()].position;
                }
            };

            function switchSlide(direction) {
                let nextSlide = 0;
                if (direction === 'next') {
                    currentPosition++;
                    if (currentPosition > position.getMaxSlidePosition()) {
                        nextSlide = position.getMinSlideIndex();
                        slidesArray[nextSlide].position = position.getMaxSlidePosition() + 1;
                        slidesArray[nextSlide].transform += slidesArray.length * 100;
                        slidesArray[nextSlide].item.style.transform = `translateX(${slidesArray[nextSlide].transform}%)`;
                    }
                    transformValue -= transformStep;
                } else {
                    currentPosition--;
                    if (currentPosition < position.getMinSlidePosition()) {
                        nextSlide = position.getMaxSlideIndex();
                        slidesArray[nextSlide].position = position.getMinSlidePosition() - 1;
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

                let startX = 0;
                slider.addEventListener('touchstart', function (e) {
                    startX = e.changedTouches[0].clientX;
                    autoplayStart();
                });
                slider.addEventListener('touchend', function (e) {
                    const endX = e.changedTouches[0].clientX,
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
                    const endX = e.clientX,
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
            };

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
            };

            function autoplayStop() {
                clearInterval(sliderTimerId);
            };

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
            }
        }
    }());

    return launchSlider(sliderId, options);
}

export default imgSlider;