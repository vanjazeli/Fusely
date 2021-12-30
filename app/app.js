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
  } else {
    let swiperOffset = 129;
    mySwiper.style.transform = `translateX(-${swiperOffset}px)`;
    mySwiper.style.width = `calc(100% + 2 * 129px)`;
  }
}

window.onload = swiperPosition();
window.addEventListener("resize", swiperPosition);

// hamburger

let hamburgerToggler = false;

const popup = document.querySelector(".popup");
const hamburger = document.querySelector(
  ".header__navbar__secondary-container__hamburger"
);

function hamburgerToggle(e) {
  if (
    e.target.getAttribute("data-role") === "hamburger" &&
    hamburgerToggler === false
  ) {
    popup.style.top = "0";
    hamburger.innerHTML = `<img src="/img/Menu Close.svg" alt="" data-role="hamburger"/>`;
    hamburgerToggler = true;
  } else {
    popup.style.top = `-100vh`;
    hamburger.innerHTML = `<img src="/img/hamburger.svg" alt="" data-role="hamburger"/>`;
    hamburgerToggler = false;
  }
}

document.addEventListener("click", hamburgerToggle);
