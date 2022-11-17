
function signUp() {
    let usersObj = {};
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
        console.log(usersObj);
    }

}