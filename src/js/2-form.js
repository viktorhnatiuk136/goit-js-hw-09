const formData = {
    email: "",
    message: ""
};

const form = document.querySelector(".feedback-form");


const saveDataString = localStorage.getItem("feedback-form-state");
const saveData = saveDataString ? JSON.parse(saveDataString) : formData;

form.elements.email.value = saveData.email;
form.elements.message.value = saveData.message;
formData.email = saveData.email;
formData.message = saveData.message;

form.addEventListener("input", (event) => {
    
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    
    if (fieldName === "email" || fieldName === "message") {
        formData[fieldName] = fieldValue;
        localStorage.setItem("feedback-form-state", JSON.stringify(formData))
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields");
        return;
    } console.log(formData);
    localStorage.removeItem("feedback-form-state");
    formData.email = "";
    formData.message = "";
    form.reset();
});




