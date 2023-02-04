const formEl = document.querySelector(".login-form");
const formData = {
email: "",
password: "",
};

formEl.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event){
event.preventDefault();


const elements = event.currentTarget.elements;

if(elements.email.value === "" || elements.password.value === "") {
    alert('Заповніть всі поля!')
}
else {formData.email = elements.email.value;
formData.password = elements.password.value;;

console.log(formData)};

event.currentTarget.reset();
}