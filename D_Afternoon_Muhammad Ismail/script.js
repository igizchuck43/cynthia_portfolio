// Sticky Navbar
window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
});

// Show scrool btn when scroll down
window.addEventListener("scroll", function () {
  let scrool = document.querySelector("#scrool-up");
  scrool.classList.toggle("srcl", window.scrollY > 600);
});
