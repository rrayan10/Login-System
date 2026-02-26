// DOM.
var loginForm = document.querySelector('.login-form');
var emailInput = document.querySelector('.email-input');
var passwordInput = document.querySelector('.password-input');
var loginBtn = document.querySelector('.login-btn');
var success = document.querySelector('.success');
var incorrectEmail = document.querySelector('.incorrectEmail');
var incorrectPassword = document.querySelector('.incorrectPassword');
var emailNotRegistered = document.querySelector('.emailNotRegistered');
var users = JSON.parse(localStorage.getItem('data'));
// Email Validation (Regex).
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// Sign In Action!
loginBtn.addEventListener('click', function (e) {
    var yes = 0;

    if (emailInput.value == '' && passwordInput.value == '') {
        // Have to handle this.
        console.log('All inputs is required');
    }
    // Email Validation Check.
    else if (emailRegex.test(emailInput.value)) {
        emailInput.classList.remove('is-invalid');
        incorrectEmail.classList.add('d-none');

        for (var i = 0; i < users.length; i++) {
            if (users[i].u_email == emailInput.value) {
                yes++;
                // Success.
                if (users[i].u_password == passwordInput.value) {
                    clearInputs();
                    success.classList.remove('d-none');
                    incorrectEmail.classList.add('d-none');
                    incorrectPassword.classList.add('d-none');
                    emailNotRegistered.classList.add('d-none');
                    emailInput.classList.remove('is-invalid');
                    passwordInput.classList.remove('is-invalid');
                    loginForm.style.cssText = `box-shadow: -5px 10px 100px 10px rgba(37, 216, 30, 0.5);`
                    // Go to Welcome Page.
                    document.location.href = "./pages/welcome.html";
                }
                // Incorrect password.
                else {
                    success.classList.add('d-none');
                    incorrectEmail.classList.add('d-none');
                    incorrectPassword.classList.remove('d-none');
                    emailNotRegistered.classList.add('d-none');
                    emailInput.classList.remove('is-invalid');
                    passwordInput.classList.add('is-invalid');
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
            emailInput.classList.add('is-invalid');
            passwordInput.classList.remove('is-invalid');
            loginForm.style.cssText = `box-shadow: -5px 10px 100px 10px rgba(182, 65, 65, 0.5);`
        }

    }
    // Incorrect email.
    else {
        success.classList.add('d-none');
        incorrectEmail.classList.remove('d-none');
        incorrectPassword.classList.add('d-none');
        emailNotRegistered.classList.add('d-none');
        emailInput.classList.add('is-invalid');
        passwordInput.classList.remove('is-invalid');
        loginForm.style.cssText = `box-shadow: -5px 10px 100px 10px rgba(182, 65, 65, 0.5);`
    }
});


// Clear Inputs.
function clearInputs() {
    emailInput.value = '';
    passwordInput.value = '';
}