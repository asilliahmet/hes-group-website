let nav = document.querySelector("nav");

function fx(x) {
  return Math.atan((-x+700)/150) * 9.5 + 45;
}

function sizenav() {
  let wi = fx(window.outerWidth);
  wi = Math.round((wi*window.outerWidth)/100);
  nav.style.width = (`${wi}px`);
  nav.style.setProperty("--left", `${-wi+35}px`);
  nav.style.setProperty("--font", `${(+wi-35)/7}px`);
}

window.addEventListener ("DOMContentLoaded", sizenav);
window.addEventListener ("resize", sizenav);
