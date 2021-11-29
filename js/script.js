let menuicon = document.getElementById("menu-icon");
let menu = document.getElementById("mobile-menu");
let closeto = document.querySelector(".close");
let overlayto = document.querySelector(".overlay");
menuicon.addEventListener("click", function () {
    menu.classList.toggle("active");
    closeto.classList.toggle("active");
    overlayto.classList.toggle("active");
});
closeto.addEventListener("click", function () {
    menu.classList.toggle("active");
    closeto.classList.toggle("active");
    overlayto.classList.toggle("active");
});
overlayto.addEventListener("click", function () {
    menu.classList.toggle("active");
    closeto.classList.toggle("active");
    overlayto.classList.toggle("active");
});
