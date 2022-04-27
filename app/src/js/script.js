let headerMenu = document.querySelector(".header__menu");
let navList = document.querySelector(".nav__list");
let body = document.querySelector('body');
let wrapper = document.querySelector('.wrapper');
headerMenu.addEventListener("click", () => {
    body.classList.add("active")
    navList.classList.add("active");
    wrapper.classList.add("active")
})
wrapper.addEventListener("click", () => {
    body.classList.remove("active")
    wrapper.classList.remove("active")
    navList.classList.remove("active");
})
