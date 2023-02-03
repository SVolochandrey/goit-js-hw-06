const ingredients = [
'Potatoes',
'Mushrooms',
'Garlic',
'Tomatos',
'Herbs',
'Condiments',
];

const listEl = document.querySelector("#ingredients");

const creatList = content => {
return content.map((ingredient) => {
const itemEl = document.createElement("li");
itemEl.textContent = ingredient;
itemEl.classList.add("item");

return itemEl;
});
}

const elements = creatList(ingredients);
listEl.append(...elements);

console.log(listEl)











