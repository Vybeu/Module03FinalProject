// let usersObj_deserialized = JSON.parse(localStorage.getItem('usersObj'));
let usersObj = {}
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');
let phoneNumber = document.getElementById('phone-number');
let email = document.getElementById('email');
let country = document.getElementById('country');
let region = document.getElementById('region');

function changeProfile() {
    usersObj.name = firstName.value;
    usersObj.lastName = lastName.value;
    usersObj.phoneNumber = phoneNumber.value;
    usersObj.email = email.value;
    usersObj.country = country.value;
    usersObj.region = region.value;
    console.log(usersObj);
    localStorage.clear();
    // console.log(localStorage);
    editButton.style.display = 'block';
    saveProfile.style.display = 'none';
    let usersObj_serialized = JSON.stringify(usersObj);
    localStorage.setItem('usersObj', usersObj_serialized);
    console.log(localStorage, 'from new Local storage');
}