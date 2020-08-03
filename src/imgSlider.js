function imgSlider(sliderId, options) {
    createSliderLayout(sliderId);

    return launchSlider(sliderId, options);
}

function createSliderLayout(sliderId) {
    sliderContainer = document.querySelector(sliderId);

    let imgElements = sliderContainer.children;
    imgElements = Array.prototype.slice.call(imgElements);

    if (imgElements.length > 0) {
        const slidesCollection = document.createElement("div");
        slidesCollection.classList.add("slides-collection");

        imgElements.forEach(function (element) {
            if (element.tagName === "IMG") {
                element.classList.add("slide-image");

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

function launchSlider(sliderId, options) {
    let slider = document.querySelector(sliderId),
        slidesCollection = slider.querySelector('.slides-collection'),
        singleSlides = slider.querySelectorAll('.single-slide'),
        playpauseButton = slider.querySelector('.playpause-button'),
        slidesArray = [],
        currentPosition = 0,
        transformValue = 0,
        transformStep = 100,
        sliderTimerId,
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

    for (let i = 0; i < singleSlides.length; i++) {
        slidesArray.push({
            item: singleSlides[i],
            position: i,
            transform: 0
        });
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
            return slidesArray[position.getSlideIndex(value)].position;
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
        slidesCollection.style.transform = `translateX(${transformValue}%)`;
    };

    function addEventListeners() {
        slider.addEventListener('click', function (e) {
            if (e.target.classList.contains('playpause-button')) {
                if (e.target.classList.contains('pausedState')) {
                    e.preventDefault();
                    e.target.classList.remove('pausedState');
                    playSlider();
                } else {
                    e.preventDefault();
                    e.target.classList.add('pausedState');
                    pauseSlider();
                }
            } else if (e.target.classList.contains('slider-button')) {
                e.preventDefault();
                switchSlide(e.target.classList.contains('next-button') ? 'next' : 'previous');
                autoplayStart();
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