// Get menu button and navigation links elements
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Event listener for menu button click
menuBtn.addEventListener("click", () => {
  // Toggle the 'open' class on navigation links
  navLinks.classList.toggle("open");

  // Check if the navigation links are open
  const isOpen = navLinks.classList.contains("open");
  // Toggle the icon between menu and close
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Event listener for navigation links click
navLinks.addEventListener("click", (e) => {
  // If a navigation link is clicked, close the menu
  if (e.target.tagName === "A") {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  }
});

// ScrollReveal animation options
const scrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
  opacity: 0,
  easing: "ease-in-out",
};

// Apply ScrollReveal animations with staggered delays
ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOptions,
  origin: "right",
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOptions,
  delay: 500,
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOptions,
  delay: 1000,
});
ScrollReveal().reveal(".header__content p", {
  ...scrollRevealOptions,
  delay: 1500,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOptions,
  delay: 2000,
});
ScrollReveal().reveal(".social_media", {
  ...scrollRevealOptions,
  delay: 2500,
});
ScrollReveal().reveal(".header__bar", {
  ...scrollRevealOptions,
  delay: 3000,
});
