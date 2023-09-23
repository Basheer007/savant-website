let hamburger = document.querySelector(".hamburger");
let ul = document.querySelector("ul");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("openmenu");
  ul.classList.toggle("showmenu");
});
