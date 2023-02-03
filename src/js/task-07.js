const rangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

const onInputChange = (event) => {
textEl.style.fontSize = rangeEl.value + 'px';
};

rangeEl.addEventListener('input', onInputChange)