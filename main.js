let homeButton = document.getElementById("home-btn");
let scrollButton = document.getElementById("scroll-btn");
let rightScroll = document.getElementById("right-scroll");
let leftScroll = document.getElementById("left-scroll");
let closeButton = document.getElementById("close-btn");
let openButton = document.getElementById("open-btn");
let deleteButton = document.getElementById("delete-btn");
let blogCards =document.querySelectorAll(".blog-card");
let blogModal = document.getElementById("blog-modal");

let slides = document.getElementsByClassName("slide-list");
document.addEventListener("DOMContentLoaded", () => {



let slideCount = 1;

slideScroller(slideCount);


function nextSlide(n) {
    slideScroller(slideCount += n);
};

function slideScroller(n) {
    

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

let slideIndex = 0;

showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("user-slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
}

// document.addEventListener("DOMContentLoaded", () => {

//     function openModal() {
//         blogModal.classList.add("open");
//     }

//     function closeModal() {
//         blogModal.classList.remove("open");
//     }

//     blogCards.forEach(card => {
//         card.addEventListener("click", openModal);
//     });

//     closeButton.addEventListener("click", closeModal);

//     window.addEventListener("click", (e) => {
//         if (e.target === blogModal) {
//             closeModal();
//         }
//     });

// })
// function openModal(){
//     blogModal.classList.add('open');
//     blogModal.body.classList.add('modal-open')
// }

// function closeModal() {
//     blogModal.classList.remove('open');
//     document.body.classList.remove('modal-open');
// }


// blogCards.forEach(card => {
//     card.addEventListener('click', openModal);
// })
// closeButton.addEventListener('click', closeModal);

// window.addEventListener('click', (event) => {
//     if (event.target === blogModal) {
//         closeModal();
//     }
// });

// function openmodal(){
//     blogCard.addEventListener("click", () =>{
//         blogModal.showModal()
//     })

// }