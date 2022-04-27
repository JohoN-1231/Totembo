"use strict";

var headerMenu = document.querySelector(".header__menu");
var navList = document.querySelector(".nav__list");
var body = document.querySelector('body');
var wrapper = document.querySelector('.wrapper');
headerMenu.addEventListener("click", function () {
  body.classList.add("active");
  navList.classList.add("active");
  wrapper.classList.add("active");
});
wrapper.addEventListener("click", function () {
  body.classList.remove("active");
  wrapper.classList.remove("active");
  navList.classList.remove("active");
});