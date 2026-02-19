// DOM
var userName = document.querySelector('.name');
var userEmail = document.querySelector('.email');
var userPassword = document.querySelector('.password');
var signUpBtn = document.querySelector('.signUpBtn');
var users = [];
var regex = {
    u_name: /^[a-zA-z]{3,20}$/,
    u_email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    u_password: /^.{8,}$/
};


// Save User Data
function saveUserData() {
    if (validateUserName && validateUserEmail && validateUserPassword) {
        var userData = {
            u_name: userName.value,
            u_email: userEmail.value,
            u_password: userPassword.value
        }

        localStorage.setItem('userData', JSON.stringify(userData));
        users.push(userData);
        clearInputs();
    }
};


// Clear Inputs
function clearInputs() {
    userName.value = '';
    userEmail.value = '';
    userPassword.value = '';
    userName.classList.remove('is-valid');
    userEmail.classList.remove('is-valid');
    userPassword.classList.remove('is-valid');
}


// Sign Up Action!
signUpBtn.addEventListener('click', function () {
    saveUserData();
});


// Sign Up Validation
function validateUserName(inputsValue) {
    if (regex.u_name.test(inputsValue.value)) {
        userName.classList.remove('is-invalid');
        userName.classList.add('is-valid');
    }
    else {
        userName.classList.remove('is-valid');
        userName.classList.add('is-invalid');
    }
};

function validateUserEmail(inputsValue) {
    if (regex.u_email.test(inputsValue.value)) {
        userEmail.classList.remove('is-invalid');
        userEmail.classList.add('is-valid');
    }
    else {
        userEmail.classList.remove('is-valid');
        userEmail.classList.add('is-invalid');
    }
};

function validateUserPassword(inputsValue) {
    if (regex.u_password.test(inputsValue.value)) {
        userPassword.classList.remove('is-invalid');
        userPassword.classList.add('is-valid');
    }
    else {
        userPassword.classList.remove('is-valid');
        userPassword.classList.add('is-invalid');
    }
};