// create new Swiper instance
var swiper = new Swiper(".swiper", {
  // set effect to coverflow
  effect: "coverflow",

  // enable grab cursor
  grabCursor: true,

  // center active slide
  centeredSlides: true,

  // configure coverflow effect
  coverflowEffect: {
    // set rotation degree to 0
    rotate: 0,

    // set stretching degree to 0
    stretch: 0,

    // set depth of each slide to 100
    depth: 100,

    // increase modifier for stronger effect
    modifier: 3,

    // enable slide shadows
    slideShadows: true,
  },

  // enable infinite loop
  loop: true,

  // enable pagination with clickable bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // set breakpoints for different screen sizes
  breakpoints: {
    // for screen width >= 640px, show 2 slides
    640: {
      slidesPerView: 2,
    },

    // for screen width >= 768px, show 1 slide
    768: {
      slidesPerView: 1,
    },

    // for screen width >= 1024px, show 2 slides
    1024: {
      slidesPerView: 2,
    },

    // for screen width >= 1560px, show 3 slides
    1560: {
      slidesPerView: 3,
    },
  },
});

//nav bar
$(".navTrigger").click(function () {
  $(this).toggleClass("active");
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});

//photos
const container = document.getElementById("myCarousel");
const options = { Dots: false };

new Carousel(container, options, { Thumbs });

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
