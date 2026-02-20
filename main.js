let homeButton = document.getElementById("home-btn");
let scrollButton = document.getElementById("scroll-btn");
let rightScroll = document.getElementById("right-scroll")
let leftScroll = document.getElementById("left-scroll")

document.addEventListener("DOMContentLoaded", () => {
let slideCount = 1;
slideScroller(slideCount);


function nextSlide(n) {
    slideScroller(slideCount += n);
};

function slideScroller(n) {
    let slides = document.getElementsByClassName("slide-list");

    if (n > slides.length) {
        slideCount = 1;
    }

    if (n < 1) {
        slideCount = slides.length;
    }

    for (let i = 0; i <slides.length; i++){
        slides[i].style.display = "none";
    }
    
    slides[slideCount - 1].style.display = "block";
} 
    window.nextSlide = nextSlide;
});
