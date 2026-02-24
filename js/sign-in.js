// DOM
var loginEmail = document.querySelector('.loginEmail');
var loginPassword = document.querySelector('.loginPassword');
var loginInBtn = document.querySelector('.loginInBtn');
var loginForm = document.querySelector('.login-form');
var success = document.querySelector('.success');
var incorrectEmail = document.querySelector('.incorrectEmail');
var incorrectPassword = document.querySelector('.incorrectPassword');
var users = JSON.parse(localStorage.getItem('data'));
var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// Sign In Action!
loginInBtn.addEventListener('click', function () {
    if (emailRegex.test(loginEmail.value)) {
        loginEmail.classList.remove('is-invalid');
        incorrectEmail.classList.add('d-none');

        for (var i = 0; i < users.length; i++) {
            if (users[i].u_email == loginEmail.value && users[i].u_password == loginPassword.value) {
                clearInputs();
                success.classList.remove('d-none');
                loginPassword.classList.remove('is-invalid');
                incorrectPassword.classList.add('d-none');
                loginForm.style.cssText = `box-shadow: -5px 10px 100px 10px rgba(37, 216, 30, 0.5);`
            }
            else if (users[i].u_email == loginEmail.value && users[i].u_password != loginPassword.value) {
                loginPassword.classList.add('is-invalid');
                incorrectPassword.classList.remove('d-none');
                loginForm.style.cssText = `box-shadow: -5px 10px 100px 10px rgba(182, 65, 65, 0.5);`
            }
        }
    }
    else {
        loginEmail.classList.add('is-invalid');
        incorrectEmail.classList.remove('d-none');
        loginPassword.classList.remove('is-invalid');
        incorrectPassword.classList.add('d-none');
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