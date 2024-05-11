const formData = {
    email: "",
    message: ""
}

const form = document.querySelector(".feedback-form"); // отримою форму
const emailInput = form.querySelector("input"); // отримую поле email із форми
const messageInput = form.querySelector("textarea"); // отримую полу message із форми

const formStateKey = "feedback-form-state"; // вказую ключ

function saveFormDataToLocStor() {
    localStorage.setItem(formStateKey, JSON.stringify(formData)); // додаю дані в локальне сховище
}

function loadFormDataFromLocStor() {  

    const savedFormData = localStorage.getItem(formStateKey);  // отримую дані з локального сховища

    if(savedFormData) {
        const parsedFormData = JSON.parse(savedFormData);

        formData.email = parsedFormData.email;
        formData.message = parsedFormData.message;
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
}

function handleInputChange(event) {

    const { name, value} = event.target;

    formData[name] = value.trim(); // прибираю пробіли по краям

    saveFormDataToLocStor();
}



function handleSubmit(event) {

    event.preventDefault();


    if(!formData.email || !formData.message) {  // задаю alert  на випадок якщо якесь з полів не заповнене
        alert("Fill please all fields");
        return;
    }

    console.log(formData); // виводжу в консоль об*єкт formData"

    localStorage.removeItem(formStateKey); // очищую локальне сховище і форму

    emailInput.value = "";
    messageInput.value = "";  // задаю дані як пустий рядок
    formData.email = "";
    formData.message = "";

}



form.addEventListener("input", handleInputChange);
form.addEventListener("submit", handleSubmit);

loadFormDataFromLocStor();