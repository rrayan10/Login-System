// DOM.
var signUpForm = document.querySelector('.signUp-form');
var nameInput = document.querySelector('.name-input');
var emailInput = document.querySelector('.email-input');
var passwordInput = document.querySelector('.password-input');
var allInputs = document.querySelectorAll('.allInputs');
var signUpBtn = document.querySelector('.signUp-btn');
var success = document.querySelector('.success');
var invalidName = document.querySelector('.invalidName');
var invalidEmail = document.querySelector('.invalidEmail');
var invalidPassword = document.querySelector('.invalidPassword');
var alreadyExists = document.querySelector('.alreadyExists');
var users = [];


// Validation (Regex).
var regex = {
    u_name: /^[a-zA-z]{3,20}$/,
    u_email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    u_password: /^.{8,}$/
};


// localStorage Check.
if (localStorage.getItem('data')) {
    users = JSON.parse(localStorage.getItem('data'));
}


// Sign Up Action!
signUpBtn.addEventListener('click', function () {
    var yes = 0;

    // Inputs Validation Check.
    if (nameInput.classList.contains('is-valid') && emailInput.classList.contains('is-valid') && passwordInput.classList.contains('is-valid')) {
        for (var i = 0; i < users.length; i++) {
            // Email already exists.
            var oldEmail = users[i].u_email;
            if (emailInput.value === oldEmail) {
                yes++;
                success.classList.add('d-none');
                invalidName.classList.add('d-none');
                invalidEmail.classList.add('d-none');
                invalidPassword.classList.add('d-none');
                alreadyExists.classList.remove('d-none');
                emailInput.classList.add('is-invalid');
                signUpForm.style.cssText = `box-shadow: -5px 10px 100px 10px rgba(182, 65, 65, 0.5);`
                break;
            }
        }

        // Success.
        if (yes === 0) {
            var userData = {
                u_name: nameInput.value,
                u_email: emailInput.value,
                u_password: passwordInput.value
            }

            users.push(userData);
            localStorage.setItem('data', JSON.stringify(users));

            clearInputs();
            success.classList.remove('d-none');
            invalidName.classList.add('d-none');
            invalidEmail.classList.add('d-none');
            invalidPassword.classList.add('d-none');
            alreadyExists.classList.add('d-none');
            signUpForm.style.cssText = `box-shadow: -5px 10px 100px 10px rgba(37, 216, 30, 0.5);`
        }

    }
    // Have to handle this "invalid" validation.
    else if (nameInput.classList.contains('is-invalid')) {
        success.classList.add('d-none');
        invalidName.classList.remove('d-none');
        invalidEmail.classList.add('d-none');
        invalidPassword.classList.add('d-none');
        alreadyExists.classList.add('d-none');
        signUpForm.style.cssText = `box-shadow: -5px 10px 100px 10px rgba(182, 65, 65, 0.5);`
    }
    else if (emailInput.classList.contains('is-invalid')) {
        success.classList.add('d-none');
        invalidName.classList.add('d-none');
        invalidEmail.classList.remove('d-none');
        invalidPassword.classList.add('d-none');
        alreadyExists.classList.add('d-none');
        signUpForm.style.cssText = `box-shadow: -5px 10px 100px 10px rgba(182, 65, 65, 0.5);`
    }
    else if (passwordInput.classList.contains('is-invalid')) {
        success.classList.add('d-none');
        invalidName.classList.add('d-none');
        invalidEmail.classList.add('d-none');
        invalidPassword.classList.remove('d-none');
        alreadyExists.classList.add('d-none');
        signUpForm.style.cssText = `box-shadow: -5px 10px 100px 10px rgba(182, 65, 65, 0.5);`
    }
});


// Sign Up Validation.
for (var i = 0; i < allInputs.length; i++) {
    allInputs[i].addEventListener('input', function (e) {
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


// Clear Inputs.
function clearInputs() {
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
    nameInput.classList.remove('is-valid');
    emailInput.classList.remove('is-valid');
    passwordInput.classList.remove('is-valid');
}