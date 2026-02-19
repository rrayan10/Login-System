// DOM
var userName = document.querySelector('.name');
var userEmail = document.querySelector('.email');
var userPassword = document.querySelector('.password');
var allInpts = document.querySelectorAll('.allInpts')
var signUpBtn = document.querySelector('.signUpBtn');
var success = document.querySelector('.success');
var alreadyExists = document.querySelector('.alreadyExists');
var users = [JSON.parse(localStorage.getItem('data'))];
var regex = {
    u_name: /^[a-zA-z]{3,20}$/,
    u_email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    u_password: /^.{8,}$/
};


if (JSON.parse(localStorage.getItem('data'))) {
    var oldData = JSON.parse(localStorage.getItem('data'));
    users.push(oldData);
}
else {
    users = [];
}


// Save User Data
function saveUserData() {
    if (userName.classList.contains('is-valid') && userEmail.classList.contains('is-valid') && userPassword.classList.contains('is-valid')) {
        var userData = {
            u_name: userName.value,
            u_email: userEmail.value,
            u_password: userPassword.value
        }

        users.push(userData);
        clearInputs();
        success.classList.remove('d-none');
        localStorage.setItem('data', JSON.stringify(users));
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
for (var i = 0; i < allInpts.length; i++) {
    allInpts[i].addEventListener('input', function (e) {
        var currentInput = e.target;
        var currentInputId = e.target.id;

        if (currentInputId == 'u_name') {
            if (regex.u_name.test(currentInput.value)) {
                currentInput.classList.remove('is-invalid');
                currentInput.classList.add('is-valid');
            }
            else {
                currentInput.classList.remove('is-valid');
                currentInput.classList.add('is-invalid');
            };
        }
        else if (currentInputId == 'u_email') {
            if (regex.u_email.test(currentInput.value)) {
                currentInput.classList.remove('is-invalid');
                currentInput.classList.add('is-valid');
            }
            else {
                currentInput.classList.remove('is-valid');
                currentInput.classList.add('is-invalid');
            };
        }
        else if (currentInputId == 'u_password') {
            if (regex.u_password.test(currentInput.value)) {
                currentInput.classList.remove('is-invalid');
                currentInput.classList.add('is-valid');
            }
            else {
                currentInput.classList.remove('is-valid');
                currentInput.classList.add('is-invalid');
            };
        }
    });
};