// DOM
var loginEmail = document.querySelector('.loginEmail');
var loginPassword = document.querySelector('.loginPassword');
var loginInBtn = document.querySelector('.loginInBtn');
var loginForm = document.querySelector('.login-form');
var success = document.querySelector('.success');
var users = JSON.parse(localStorage.getItem('data'));


console.log(users);




// Sign In Action!
loginInBtn.addEventListener('click', function() {
    for (var i = 0; i < users.length; i++) {
        if (users[i].u_email == loginEmail.value && users[i].u_password == loginPassword.value) {
            success.classList.remove('d-none');
            loginForm.style.cssText = `box-shadow: -5px 10px 100px 10px rgba(37, 216, 30, 0.5);`
        }
    }
});
