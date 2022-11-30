let usersObj_deserialized = JSON.parse(localStorage.getItem('usersObj'));
let inputFields = document.querySelectorAll('.form-control');
let editButton = document.getElementById('edit-profile');
let saveProfile = document.getElementById('save-button');
function test() {
    inputFields.forEach(element => element.disabled = true);
    saveProfile.style.display = 'none';
    console.log(usersObj_deserialized);
    firstName.value = usersObj_deserialized.name;
    lastName.value = usersObj_deserialized.lastName;
    phoneNumber.value = usersObj_deserialized.phoneNumber;
    email.value = usersObj_deserialized.email;
    country.value = usersObj_deserialized.country;
    region.value = usersObj_deserialized.region;
}

function editProfile() {
    console.log("this was clicked");
    editButton.style.display = 'none';
    saveProfile.style.display = 'block'
    inputFields.forEach(element => element.disabled = false);
}

