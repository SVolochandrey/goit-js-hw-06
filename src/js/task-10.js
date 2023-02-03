function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector("input");
const buttonCreateEl = document.querySelector("[data-create]");
const buttonDestroyEl = document.querySelector("[data-destroy]");
const boxEl = document.querySelector("#boxes");

buttonCreateEl.addEventListener("click", onCreateBoxex);
buttonDestroyEl.addEventListener("click", onDestroyBoxes);

function onCreateBoxex(event) {
  createBoxes(inputEl.value);
}

function createBoxes(amount) {
  let divArray = [];
  let sizeDefault = 30;

  for (let i = 1; i <= amount; i += 1) {
    let randomColor = getRandomHexColor();

    sizeDefault += 10;

    const newDivEl = document.createElement("div");
    newDivEl.style.margin = "10px";
    newDivEl.style.width = sizeDefault + "px";
    newDivEl.style.height = sizeDefault + "px";
    newDivEl.style.backgroundColor = randomColor;

    divArray.push(newDivEl);
  }
  return boxEl.append(...divArray);
}

function onDestroyBoxes(event) {
  boxEl.innerHTML = "";
}