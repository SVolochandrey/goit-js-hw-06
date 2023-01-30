const counterValue = {
value: 0,

decrement() {
return this.value -= 1;
},

increment() {
return this.value += 1;
},
};

const valueEl = document.querySelector("#value");
const buttonDecrementEl = document.querySelector('[data-action="decrement"]');
const buttonIncrementEl = document.querySelector('[data-action="increment"]');

const onButtonDecrementClick = (event) => {
console.log('You clicked -1');
counterValue.decrement();
valueEl.textContent = counterValue.value;
};

const onButtonIncrementClick = (event) => {
console.log('You clicked +1');
counterValue.increment();
valueEl.textContent = counterValue.value;
};

buttonDecrementEl.addEventListener('click', onButtonDecrementClick);
buttonIncrementEl.addEventListener('click', onButtonIncrementClick);