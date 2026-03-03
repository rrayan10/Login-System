// DOM.
var welcomeUser = document.querySelector('.welcomeUser');
var logoutBtn = document.querySelector('.logout-btn');
var currentUser = localStorage.getItem('currentUser');


// Welcome User!
welcomeUser.textContent = `Welcome ${currentUser}!`


// Logout Action.
logoutBtn.addEventListener('click', function() {
    document.location.href = "../index.html";
});