function imgSlider(sliderId) {
    createSliderLayout(sliderId);
}

function createSliderLayout(sliderId) {
    sliderContainer = document.getElementById(sliderId);

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
        nextButton.innerText = ">";
        nextButton.href = "#";
        const previousButton = document.createElement("a");
        previousButton.classList.add("previous-button");
        previousButton.innerText ="<";
        previousButton.href = "#";

        sliderContainer.appendChild(previousButton);
        sliderContainer.appendChild(nextButton);
    }
}