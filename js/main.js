// DOM
var userName = document.querySelector('.name');
var userEmail = document.querySelector('.email');
var userPassword = document.querySelector('.password');
var allInpts = document.querySelectorAll('.allInpts');
var signUpBtn = document.querySelector('.signUpBtn');
var success = document.querySelector('.success');
var alreadyExists = document.querySelector('.alreadyExists');
var invalid = document.querySelector('.invalid');
var signForm = document.querySelector('.sign-form');
var users = [];
var regex = {
    u_name: /^[a-zA-z]{3,20}$/,
    u_email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    u_password: /^.{8,}$/
};


if (localStorage.getItem('data')) {
    users = JSON.parse(localStorage.getItem('data'));
}


// Save User Data
function saveUserData() {
    var yes = 0;

    if (userName.classList.contains('is-valid') && userEmail.classList.contains('is-valid') && userPassword.classList.contains('is-valid')) {
        for (var i = 0; i < users.length; i++) {
            var oldEmail = users[i].u_email;

            if (userEmail.value === oldEmail) {
                yes++;
                alreadyExists.classList.remove('d-none');
                success.classList.add('d-none');
                invalid.classList.add('d-none');
                break;
            }
        }

        if (yes === 0) {
            var userData = {
                u_name: userName.value,
                u_email: userEmail.value,
                u_password: userPassword.value
            }

            users.push(userData);
            localStorage.setItem('data', JSON.stringify(users));

            clearInputs();
            success.classList.remove('d-none');
            invalid.classList.add('d-none');
            alreadyExists.classList.add('d-none');
            signForm.style.cssText = `box-shadow: -5px 10px 100px 10px rgba(37, 216, 30, 0.5);`
        }
    }
    else if (userName.classList.contains('is-invalid') || userEmail.classList.contains('is-invalid') || userPassword.classList.contains('is-invalid')) {
        invalid.classList.remove('d-none');
        success.classList.add('d-none');
        alreadyExists.classList.add('d-none');
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