let button = document.querySelector('.menu__button');
const nav = document.querySelector('.header__nav');

alert("Javacript подключен");

button.onclick = function() {
    nav.classList.toggle('open');
};