// Image Slider with Fade
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    slide.style.opacity = 0;
    if (i === index) {
      slide.classList.add("active");
      slide.style.opacity = 1;
    }
  });
  index = (index + 1) % slides.length;
}

setInterval(showSlide, 4000); // Change every 4s
