function imgSlider(sliderId) {
    createSliderLayout(sliderId);

    launchSlider(sliderId);
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
                element.firstChild.classList.add("slide-image");

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

        sliderContainer.appendChild(previousButton);
        sliderContainer.appendChild(nextButton);
    }
}

function launchSlider(sliderId) {
    let slider = document.querySelector(sliderId),
        slidesCollection = slider.querySelector('.slides-collection'),
        singleSlides = slider.querySelectorAll('.single-slide'),
        slidesArray = [],
        currentPosition = 0,
        transformValue = 0,
        transformStep = 100;

    for (let i = 0; i < singleSlides.length; i++) {
        slidesArray.push({
            item: singleSlides[i],
            position: i,
            transform: 0
        });
    }

    let position = {
        getSlideIndex: function (value) {
            let index = 0;
            for (let i = 0; i < slidesArray.length; i++) {
                if ((slidesArray[i].position < slidesArray[index].position && value === 'min') || (slidesArray[i].position > slidesArray[index].position && value === 'max')) {
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
            if (currentPosition > position.getSlidePosition('max')) {
                nextSlide = position.getSlideIndex('min');
                slidesArray[nextSlide].position = position.getSlidePosition('max') + 1;
                slidesArray[nextSlide].transform += slidesArray.length * 100;
                slidesArray[nextSlide].item.style.transform = `translateX(${slidesArray[nextSlide].transform}%)`;
            }
            transformValue -= transformStep;
        } else {
            currentPosition--;
            if (currentPosition < position.getSlidePosition('min')) {
                nextSlide = position.getSlideIndex('max');
                slidesArray[nextSlide].position = position.getSlidePosition('min') - 1;
                slidesArray[nextSlide].transform -= slidesArray.length * 100;
                slidesArray[nextSlide].item.style.transform = `translateX(${slidesArray[nextSlide].transform}%)`;
            }
            transformValue += transformStep;
        }
        slidesCollection.style.transform = 'translateX(' + transformValue + '%)';
    };

    function addEventListeners() {
        slider.addEventListener('click', function (e) {
            if (e.target.classList.contains('slider-button')) {
                switchSlide(e.target.classList.contains('next-button') ? 'next' : 'previous');
            }
        });
    };

    addEventListeners();
}