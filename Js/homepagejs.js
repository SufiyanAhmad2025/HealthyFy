const slider = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
  index++;
  if (index >= slides.length) {
    index = 0;
  }
  slider.style.transform = `translateX(-${index * 100}%)`;
}


setInterval(showSlide, 8000);
