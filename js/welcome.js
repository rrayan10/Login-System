var welcomeUser = document.querySelector('.welcomeUser');
var currentUser = localStorage.getItem('currentUser');

// Welcome User!
welcomeUser.textContent = `Welcome ${currentUser}!`