// Gestion du menu burger
const mobileMenu = document.getElementById("mobile-menu");
const navList = document.getElementById("nav-list");

mobileMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// Bouton de redirection
const btn = document.querySelector(".arrow");

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// JavaScript pour les effets de la barre de navigation lors du défilement
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".container, .heading", { origin: "top" });
ScrollReveal().reveal(".col-md-4, form", { origin: "top" });
ScrollReveal().reveal("h1, h3, h4, h5, h2, span, li", { origin: "top" });
ScrollReveal().reveal("p, .row", { origin: "top" });
ScrollReveal().reveal("i, a, strong", { origin: "right" });
