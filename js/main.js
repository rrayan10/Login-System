// DOM
var userName = document.querySelector('.name');
var userEmail = document.querySelector('.email');
var userPassword = document.querySelector('.password');
var signUpBtn = document.querySelector('.signUpBtn');
var users = [];


// Save User Data
function saveUserData() {
    var userData = {
        u_name: userName.value,
        u_email: userEmail.value,
        u_password: userPassword.value
    }

    localStorage.setItem('userData', JSON.stringify(userData));
    users.push(userData);
    clearInputs();
};


// Clear Inputs
function clearInputs() {
    userName.value = '';
    userEmail.value = '';
    userPassword.value = '';
}


// Sign Up Action!
signUpBtn.addEventListener('click', function() {
    saveUserData();
});
