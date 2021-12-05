import Swiper from "swiper";
import "./home-cart";
import "./../css/main.css";

let OSName = "Unknown OS";
if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
if (
  navigator.appVersion.indexOf("Mac") != -1 &&
  navigator.appVersion.indexOf("iPhone") == -1 &&
  navigator.appVersion.indexOf("iPad") == -1
)
  OSName = "MacOS";
if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
if (
  navigator.appVersion.indexOf("Linux") != -1 &&
  navigator.appVersion.indexOf("Android") == -1
)
  OSName = "Linux";

let mySwiper;
let swiperEffect = "fade";
const appScreenshot1 = document.getElementById("app-screenshot-1");
const appScreenshot2 = document.getElementById("app-screenshot-2");
const appScreenshot3 = document.getElementById("app-screenshot-3");
const appScreenshot4 = document.getElementById("app-screenshot-4");

if (appScreenshot1 && appScreenshot2 && appScreenshot3) {
  switch (OSName) {
    case "Windows":
      appScreenshot1.src = "/img/screenshot_mac_1_v3.png";
      appScreenshot2.src = "/img/screenshot_mac_2_v3.png";
      appScreenshot3.src = "/img/screenshot_mac_3_v3.png";
      appScreenshot4.src = "/img/screenshot_mac_4_v3.png";
      break;
    case "MacOS":
      appScreenshot1.src = "/img/screenshot_mac_1_v3.png";
      appScreenshot2.src = "/img/screenshot_mac_2_v3.png";
      appScreenshot3.src = "/img/screenshot_mac_3_v3.png";
      appScreenshot4.src = "/img/screenshot_mac_4_v3.png";
      break;
    case "Linux":
      appScreenshot1.src = "/img/screenshot_mac_1_v3.png";
      appScreenshot2.src = "/img/screenshot_mac_2_v3.png";
      appScreenshot3.src = "/img/screenshot_mac_3_v3.png";
      appScreenshot4.src = "/img/screenshot_mac_4_v3.png";
      break;
    default:
      appScreenshot1.src = "/img/screenshot_mac_1_v3.png";
      appScreenshot2.src = "/img/screenshot_mac_2_v3.png";
      appScreenshot3.src = "/img/screenshot_mac_3_v3.png";
      appScreenshot4.src = "/img/screenshot_mac_4_v3.png";
  }

  initSwiper();
  window.addEventListener("resize", () => {
    initSwiper();
  });
}

function initSwiper() {
  const screenWidth = window.innerWidth > 0 ? window.innerWidth : screen.width;
  const newEffect = screenWidth >= 1100 ? "fade" : "coverflow";
  if (!mySwiper || swiperEffect !== newEffect) {
    if (mySwiper) {
      mySwiper.destroy(true, true);
    }
    swiperEffect = newEffect;
    mySwiper = new Swiper(".js-swiper-container", {
      direction: "horizontal",
      loop: true,
      effect: swiperEffect,
      speed: 800,
      fadeEffect: {
        crossFade: true,
      },
      coverflowEffect: {
        rotate: 30,
        slideShadows: false,
      },
      autoplay: {
        delay: 8000,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
  }
}
