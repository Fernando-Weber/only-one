const hamburger_menu = document.querySelector(".hamburguer-menu");
const container = document. querySelector(".container");

hamburger_menu.addEventListener("click", () => {
    container.classList.toggle("active");
})
