const selects = document.querySelectorAll(".custom-select")

selects.forEach((select) => {
    select.addEventListener("click", function(event) {
        let titleOption = select.children[0]
        select.classList.toggle('active');
        if (event.target.tagName == 'LI' && event.target.getAttribute('value') != '#') {
            titleOption.innerHTML = event.target.getAttribute('value');
        }
    });
});

const dateInputs = document.querySelectorAll(".date-custom-input");

dateInputs.forEach((input) => {
    input.addEventListener("change", function(event) {
        let date = event.target.value;
        let parentLabel = event.target.parentElement;
        parentLabel.setAttribute('data-title', date);
    });
});

const bookCarForm = document.querySelector("#book-car-form");

bookCarForm.addEventListener("submit", function() {
    alert("Form submitted successfully!");
});

const body = document.getElementsByTagName("body");
const loginModal = document.querySelector(".login-modal");
const loginBtn = document.querySelector(".header-sign-in");
const signUpBtn = document.querySelector(".header-sign-up");
const closeModalBtn = document.querySelector(".login-modal-close");

loginBtn.addEventListener("click", function() {
    loginModal.classList.toggle('active');
    body[0].classList.toggle('no-scroll');
});

closeModalBtn.addEventListener("click", function() {
    loginModal.classList.remove('active');
    body[0].classList.remove('no-scroll');
});