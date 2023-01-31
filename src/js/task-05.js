const inputEl = document.querySelector('#name-input');
const nameUserEl = document.querySelector('#name-output');

const onInputChange = (event) => {
inputEl.value === ""
? nameUserEl.textContent = "Anonymous"
: nameUserEl.textContent = inputEl.value
};

inputEl.addEventListener("input", onInputChange);