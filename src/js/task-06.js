const inputEl = document.querySelector('[data-length="6"]');

inputEl.addEventListener("blur", onInputValidation);

function onInputValidation(event) {
if (inputEl.dataset.length == inputEl.value.length){
inputEl.classList.add('valid')
inputEl.classList.remove('invalid');
}
else{
inputEl.classList.add('invalid');
inputEl.classList.remove('valid')
}
}