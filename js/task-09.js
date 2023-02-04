function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
const colorNameEl = document.querySelector(".color");
const buttonEl = document.querySelector(".change-color");

buttonEl.addEventListener('click', onButtonClick);

function onButtonClick(event) {
let randomColor = getRandomHexColor();
bodyEl.style.backgroundColor = randomColor;
colorNameEl.textContent = randomColor;}