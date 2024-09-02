// Java for first gallery slider

let currentIndex = 0;
const slidesToShow = 4; // Number of slides to show at once
const totalSlides = 12; // Total number of slides

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const slidesContainer = document.querySelector('.slides');
    const maxIndex = totalSlides - slidesToShow; // Maximum index for sliding

    if (index > maxIndex) {
        currentIndex = 0; // Loop back to the start
    } else if (index < 0) {
        currentIndex = maxIndex; // Loop back to the end
    } else {
        currentIndex = index;
    }

    const offset = -(currentIndex * 100) / slidesToShow;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    showSlide(currentIndex + step);
}

// Auto-slide functionality
setInterval(() => {
    moveSlide(1);
}, 5000); // Change images every 5 seconds


// Java for 2nd gallery slider


let currentSecondIndex = 0;
const totalSecondSlides = 8; // Total number of slides in the second slider

function showSecondSlide(index) {
    const slides = document.querySelectorAll('.second-slider .slide');
    const slidesContainer = document.querySelector('.second-slider .slides');
    const maxIndex = totalSecondSlides - slidesToShow;

    if (index > maxIndex) {
        currentSecondIndex = 0;
    } else if (index < 0) {
        currentSecondIndex = maxIndex;
    } else {
        currentSecondIndex = index;
    }

    const offset = -(currentSecondIndex * 100) / slidesToShow;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

function moveSecondSlide(step) {
    showSecondSlide(currentSecondIndex + step);
}

// Auto-slide functionality for the second slider
setInterval(() => {
    moveSecondSlide(1);
}, 5000); // Change images every 5 seconds


// Java for 3rd gallery slider


let currentThirdIndex = 0;
const totalThirdSlides = 9; // Total number of slides in the third slider

function showThirdSlide(index) {
    const slides = document.querySelectorAll('.third-slider .slide');
    const slidesContainer = document.querySelector('.third-slider .slides');
    const maxIndex = totalThirdSlides - slidesToShow; // Maximum index for sliding

    if (index > maxIndex) {
        currentThirdIndex = 0; // Loop back to the start
    } else if (index < 0) {
        currentThirdIndex = maxIndex; // Loop back to the end
    } else {
        currentThirdIndex = index;
    }

    const offset = -(currentThirdIndex * 100) / slidesToShow;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

function moveThirdSlide(step) {
    showThirdSlide(currentThirdIndex + step);
}

// Auto-slide functionality for the third slider
setInterval(() => {
    moveThirdSlide(1);
}, 5000); // Change images every 5 seconds


// Java for 4th gallery slider


let currentForthIndex = 0;
const totalForthSlides = 6; // Total number of slides in the third slider

function showForthSlide(index) {
    const slides = document.querySelectorAll('.forth-slider .slide');
    const slidesContainer = document.querySelector('.forth-slider .slides');
    const maxIndex = totalForthSlides - slidesToShow; // Maximum index for sliding

    if (index > maxIndex) {
        currentForthIndex = 0; // Loop back to the start
    } else if (index < 0) {
        currentForthIndex = maxIndex; // Loop back to the end
    } else {
        currentForthIndex = index;
    }

    const offset = -(currentForthIndex * 100) / slidesToShow;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

function moveForthSlide(step) {
    showForthSlide(currentForthIndex + step);
}

// Auto-slide functionality for the third slider
setInterval(() => {
    moveForthSlide(1);
}, 5000); // Change images every 5 seconds


// Java for 5th gallery slider


let currentFifthIndex = 0;
const totalFifthSlides = 10; // Total number of slides in the third slider

function showFifthSlide(index) {
    const slides = document.querySelectorAll('.fifth-slider .slide');
    const slidesContainer = document.querySelector('.fifth-slider .slides');
    const maxIndex = totalFifthSlides - slidesToShow; // Maximum index for sliding

    if (index > maxIndex) {
        currentFifthIndex = 0; // Loop back to the start
    } else if (index < 0) {
        currentFifthIndex = maxIndex; // Loop back to the end
    } else {
        currentFifthIndex = index;
    }

    const offset = -(currentFifthIndex * 100) / slidesToShow;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

function moveFifthSlide(step) {
    showFifthSlide(currentFifthIndex + step);
}

// Auto-slide functionality for the third slider
setInterval(() => {
    moveFifthSlide(1);
}, 5000); // Change images every 5 seconds

// Java for 5th gallery slider


let currentSixthIndex = 0;
const totalSixthSlides = 10; // Total number of slides in the third slider

function showSixthSlide(index) {
    const slides = document.querySelectorAll('.sixth-slider .slide');
    const slidesContainer = document.querySelector('.sixth-slider .slides');
    const maxIndex = totalSixthSlides - slidesToShow; // Maximum index for sliding

    if (index > maxIndex) {
        currentSixthIndex = 0; // Loop back to the start
    } else if (index < 0) {
        currentSixthIndex = maxIndex; // Loop back to the end
    } else {
        currentSixthIndex = index;
    }

    const offset = -(currentSixthIndex * 100) / slidesToShow;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

function moveSixthSlide(step) {
    showSixthSlide(currentSixthIndex + step);
}

// Auto-slide functionality for the third slider
setInterval(() => {
    moveSixthSlide(1);
}, 5000); // Change images every 5 seconds

// Java for 7th gallery slider


let currentSeventhIndex = 0;
const totalSeventhSlides = 10; // Total number of slides in the third slider

function showSeventhSlide(index) {
    const slides = document.querySelectorAll('.seventh-slider .slide');
    const slidesContainer = document.querySelector('.seventh-slider .slides');
    const maxIndex = totalSeventhSlides - slidesToShow; // Maximum index for sliding

    if (index > maxIndex) {
        currentSeventhIndex = 0; // Loop back to the start
    } else if (index < 0) {
        currentSeventhIndex = maxIndex; // Loop back to the end
    } else {
        currentSeventhIndex = index;
    }

    const offset = -(currentSeventhIndex * 100) / slidesToShow;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

function moveSeventhSlide(step) {
    showSeventhSlide(currentSeventhIndex + step);
}

// Auto-slide functionality for the third slider
setInterval(() => {
    moveSeventhSlide(1);
}, 5000); // Change images every 5 seconds

// Java for 8th gallery slider


let currentEighthIndex = 0;
const totalEighthSlides = 5; // Total number of slides in the third slider

function showEighthSlide(index) {
    const slides = document.querySelectorAll('.eighth-slider .slide');
    const slidesContainer = document.querySelector('.eighth-slider .slides');
    const maxIndex = totalEighthSlides - slidesToShow; // Maximum index for sliding

    if (index > maxIndex) {
        currentEighthIndex = 0; // Loop back to the start
    } else if (index < 0) {
        currentEighthIndex = maxIndex; // Loop back to the end
    } else {
        currentEighthIndex = index;
    }

    const offset = -(currentEighthIndex * 100) / slidesToShow;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

function moveEighthSlide(step) {
    showEighthSlide(currentEighthIndex + step);
}

// Auto-slide functionality for the third slider
setInterval(() => {
    moveEighthSlide(1);
}, 5000); // Change images every 5 seconds

// Java for 9th gallery slider


let currentNinethIndex = 0;
const totalNinethSlides = 13; // Total number of slides in the Nineth slider

function showNinethSlide(index) {
    const slides = document.querySelectorAll('.nineth-slider .slide');
    const slidesContainer = document.querySelector('.nineth-slider .slides');
    const maxIndex = totalNinethSlides - slidesToShow; // Maximum index for sliding

    if (index > maxIndex) {
        currentNinethIndex = 0; // Loop back to the start
    } else if (index < 0) {
        currentNinethIndex = maxIndex; // Loop back to the end
    } else {
        currentNinethIndex = index;
    }

    const offset = -(currentNinethIndex * 100) / slidesToShow;
    slidesContainer.style.transform = `translateX(${offset}%)`;
}

function moveNinethSlide(step) {
    showNinethSlide(currentNinethIndex + step);
}

// Auto-slide functionality for the Nineth slider
setInterval(() => {
    moveNinethSlide(1);
}, 5000); // Change images every 5 seconds


