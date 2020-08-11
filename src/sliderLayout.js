'use strict';
import css from './style.css'

function createSliderLayout(sliderId) {
    let sliderContainer = document.querySelector(sliderId);

    let imgElements = sliderContainer.children;
    imgElements = Array.prototype.slice.call(imgElements);

    if (imgElements.length > 0) {
        const slidesCollection = document.createElement("div");
        slidesCollection.classList.add(css['slides-collection']);

        imgElements.forEach(function (element) {
            if (element.tagName === "IMG") {
                element.classList.add(css['slide-image']);
                element.setAttribute("draggable", "false");

                const singleSlideContainer = document.createElement("div");
                singleSlideContainer.classList.add(css['single-slide']);
                singleSlideContainer.appendChild(element);

                slidesCollection.appendChild(singleSlideContainer);
            }
            else {
                element.classList.add(css['single-slide']);

                slidesCollection.appendChild(element);
            }
        });

        sliderContainer.appendChild(slidesCollection);
        sliderContainer.classList.add(css['slider']);

        const nextButton = document.createElement("a");
        nextButton.classList.add(css['next-button']);
        nextButton.classList.add(css['slider-button']);
        nextButton.innerText = ">";
        nextButton.href = "#";
        const previousButton = document.createElement("a");
        previousButton.classList.add(css['previous-button']);
        previousButton.classList.add(css['slider-button']);
        previousButton.innerText = "<";
        previousButton.href = "#";
        const playpauseButton = document.createElement("a");
        playpauseButton.classList.add(css['playpause-button']);
        playpauseButton.classList.add(css['slider-button']);
        playpauseButton.innerText = "||";
        playpauseButton.href = "#";

        sliderContainer.appendChild(previousButton);
        sliderContainer.appendChild(nextButton);
        sliderContainer.appendChild(playpauseButton);
    }
}

export default createSliderLayout;