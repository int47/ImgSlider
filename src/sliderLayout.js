'use strict';

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

export default createSliderLayout;