const cart = document.querySelector(".cart");
const cube = document.querySelector(".cube");
const gloss = document.querySelector(".gloss");

let scrollStart = 400;
let scrollLength = 10;

function clamp01(value) {
  return Math.max(0, Math.min(1, value));
}

function onScroll() {
  const t = clamp01((window.scrollY - scrollStart) / scrollLength);
  const rotateX = 70 - 55 * t;
  const offsetX = t * 350;
  cube.style.transform = "translateZ(-2em) rotateX(" + rotateX + "deg)";
  gloss.style.transform = "translateX(" + offsetX + "px)";
}

function onResize() {
  scrollStart = offsetTop(cart) - window.innerHeight / 2;
  scrollLength = window.innerHeight;
}

function offsetTop(el) {
  if (el.offsetParent) {
    return el.offsetTop + offsetTop(el.offsetParent);
  }
  return el.offsetTop;
}

if (cart && gloss && cube) {
  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", onResize);
  onScroll();
  onResize();
}
