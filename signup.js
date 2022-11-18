// let signUpEl = document.getElementById('sign-up');
// let signInEl = document.getElementById('sign-in');

let totalUsers = [];
let usersObj = {};

function signUp() {
    let name = document.getElementById('userName').value;
    let email = document.getElementById('userEmail').value;
    let password = document.getElementById('userPassword').value;
    let passwordConfirmation = document.getElementById('userPasswordConfirmation').value;
    // console.log(name, email, password); 
    
    if (name === '' || name === undefined || email === '' || email === undefined || password === '' || password === undefined) {
        alert('Please enter valid inputs');
    } else if (password !== passwordConfirmation) {
        alert('Passwords do not match');
    } else {
        usersObj.name = name;
        usersObj.email = email;
        usersObj.password = password;
        //totalUsers.push(usersObj);
        console.log(usersObj);
        document.getElementById('sign-up').style.display = 'none';
        document.getElementById('sign-in').style.display = 'block';
    }

}

function logIn() {
    let email = document.getElementById('users-email').value;
    let password = document.getElementById('users-password').value;

    if (email === usersObj.email && password === usersObj.password) {
        window.location.href = 'http://127.0.0.1:5500/account.html';
    } else {
        alert('Incorrect email or password!');
    }
}
