// DOM
var loginEmail = document.querySelector('.loginEmail');
var loginPassword = document.querySelector('.loginPassword');
var loginInBtn = document.querySelector('.loginInBtn');
var loginForm = document.querySelector('.login-form');
var success = document.querySelector('.success');
var incorrectEmail = document.querySelector('.incorrectEmail');
var incorrectPassword = document.querySelector('.incorrectPassword');
var emailNotRegistered = document.querySelector('.emailNotRegistered');
var users = JSON.parse(localStorage.getItem('data'));
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


console.log(users.length);


// Sign In Action!
loginInBtn.addEventListener('click', function () {
    var yes = 0;

    if (emailRegex.test(loginEmail.value)) {
        loginEmail.classList.remove('is-invalid');
        incorrectEmail.classList.add('d-none');

        for (var i = 0; i < users.length; i++) {
            if (users[i].u_email == loginEmail.value) {
                yes++;
                if (users[i].u_password == loginPassword.value) {
                    clearInputs();
                    success.classList.remove('d-none');
                    incorrectEmail.classList.add('d-none');
                    incorrectPassword.classList.add('d-none');
                    emailNotRegistered.classList.add('d-none');
                    loginEmail.classList.remove('is-invalid');
                    loginPassword.classList.remove('is-invalid');
                    loginForm.style.cssText = `box-shadow: -5px 10px 100px 10px rgba(37, 216, 30, 0.5);`
                }
                else {
                    success.classList.add('d-none');
                    incorrectEmail.classList.add('d-none');
                    incorrectPassword.classList.remove('d-none');
                    emailNotRegistered.classList.add('d-none');
                    loginEmail.classList.remove('is-invalid');
                    loginPassword.classList.add('is-invalid');
                    loginForm.style.cssText = `box-shadow: -5px 10px 100px 10px rgba(182, 65, 65, 0.5);`
                }
            }
        }

        // Email is not registered.
        if (yes == 0) {
            success.classList.add('d-none');
            incorrectEmail.classList.add('d-none');
            incorrectPassword.classList.add('d-none');
            emailNotRegistered.classList.remove('d-none');
            loginEmail.classList.add('is-invalid');
            loginPassword.classList.remove('is-invalid');
            loginForm.style.cssText = `box-shadow: -5px 10px 100px 10px rgba(182, 65, 65, 0.5);`
        }
    }
    // Incorrect email.
    else {
        success.classList.add('d-none');
        incorrectEmail.classList.remove('d-none');
        incorrectPassword.classList.add('d-none');
        emailNotRegistered.classList.add('d-none');
        loginEmail.classList.add('is-invalid');
        loginPassword.classList.remove('is-invalid');
        loginForm.style.cssText = `box-shadow: -5px 10px 100px 10px rgba(182, 65, 65, 0.5);`
    }
});

// Clear Inputs
function clearInputs() {
    loginEmail.value = '';
    loginPassword.value = '';
    loginEmail.classList.remove('is-valid');
    loginPassword.classList.remove('is-valid');
}
