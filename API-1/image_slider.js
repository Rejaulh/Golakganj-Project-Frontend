// scripts.js

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Show the first slide
showSlide(currentSlide);

// Function to move slides
function moveSlides(n) {
    currentSlide += n;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}

// Function to display the current slide
function showSlide(n) {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${-100 * n}%)`;
    });
}

// Auto-slide functionality (optional)
setInterval(() => {
    moveSlides(1);
}, 3000); // Change slides every 3 seconds
