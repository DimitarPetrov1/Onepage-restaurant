const links = document.querySelectorAll("a");
let reservationFormOpened = false;
let menuOpen = false;
const resetvationForm = document.querySelector(".reservation-form");
const reservationButton = document.getElementById("reservationButton");
const reservationFormCloseBtn = document.getElementById("closeBtn");
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.querySelector(".nav-mobile");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    if (menuOpen) {
      mobileNav.style.visibility = "hidden";
      menuOpen = false;
    }
  });
});

reservationButton.addEventListener("click", () => {
  if (!reservationFormOpened) {
    resetvationForm.style.visibility = "visible";
    reservationFormOpened = true;
  }
});
reservationFormCloseBtn.addEventListener("click", () => {
  if (reservationFormOpened) {
    resetvationForm.style.visibility = "hidden";
    reservationFormOpened = false;
  }
});
// scroll to location
function scrollToLocation(target) {
  let Target = document.querySelector(target).offsetTop;
  window.scrollTo(0, Target);
}

// the mobile nav
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    mobileNav.style.visibility = "visible";
    menuOpen = true;
  } else {
    mobileNav.style.visibility = "hidden";
    menuOpen = false;
  }
});
