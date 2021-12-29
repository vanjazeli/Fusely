// slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 45,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// let swiperOffset;

const mySwiper = document.querySelector(".mySwiper");

function swiperPosition() {
  let windowWidth = window.innerWidth;
  let slideWidth = document.querySelector(".swiper-slide").offsetWidth;
  let containerWidth =
    document.querySelector(".primary-container").offsetWidth - 80;
  if (windowWidth < 1400) {
    let swiperOffset = (windowWidth - containerWidth) / 2;
    mySwiper.style.transform = `translateX(-${swiperOffset}px)`;
    mySwiper.style.width = `calc(100vw)`;
    console.log(swiperOffset);
  } else {
    let swiperOffset = 129;
    mySwiper.style.transform = `translateX(-${swiperOffset}px)`;
    mySwiper.style.width = `calc(100% + 2 * 129px)`;
  }
}

window.onload = swiperPosition();
window.addEventListener("resize", swiperPosition);
