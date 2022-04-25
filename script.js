let form= document.forms['form'];
let fullName = form['fullname'];
let email = form['email'];
let pNumber = form['pnumber'];
let address = form['address'];
let password = form['password'];
let confirmPassword = form['confirm-password'];
let sex = form['radio']

let fullNameError = document.getElementById("name-error");
let emailError = document.getElementById("email-error");
let pNumberError = document.getElementById("pnumber-error");
let pNumberError2 = document.getElementById("pnumber-error-2");
let addressError = document.getElementById("address-error");
let passwordError = document.getElementById("password-error");
let confirmPasswordError = document.getElementById("confirm-password-error");

let fullNameRequiredError = document.getElementById("name-required");
let emailRequiredError = document.getElementById("email-required");
let pNumberRequiredError = document.getElementById("pnumber-required");
let addressRequiredError = document.getElementById("address-required");
let passwordRequiredError = document.getElementById("password-required");
let sexRequiredError = document.getElementById("sex-required");

function submitForm (e) {
    e.preventDefault();

    checkRequired();
    validateName();
    validatePhoneNumber();
    validateAddress();
    validateEmail();
    validatePassword();
}; 
function checkRequired () {
        if (fullName.value.length == 0) {
            fullNameRequiredError.innerHTML = "required *"}
        else{
            fullNameRequiredError.innerHTML = " "
        }
        if (pNumber.value.length == 0) {
            pNumberRequiredError.innerHTML = "required *"}
        else{
            pNumberRequiredError.innerHTML = " "
        }
        if (address.value.length == 0) {
            addressRequiredError.innerHTML = "required *"}
        else{
            addressRequiredError.innerHTML = " "
        }
        if (password.value.length == 0) {
            passwordRequiredError.innerHTML = "required *"}
        else{
            passwordRequiredError.innerHTML = " "
        }
        if (sex.value.length == 0) {
            sexRequiredError.innerHTML = "required *"}
        else{
            sexRequiredError.innerHTML = " "
        }
    }
function validateName(){
    fullName.value = fullName.value.trim();
    var arrOfFullName = fullName.value.split(" ");
    if(arrOfFullName.length < 2){
        fullNameError.innerHTML = "Your Full name must include First name and Surname; both separated by a space."
    }
    else if(arrOfFullName.length > 4){
        fullNameError.innerHTML = "Your Full name should not be more than 4 words."
    }
    else{
        fullNameError.innerHTML = ""
    }   
}
function validatePhoneNumber(){
    theNumber = pNumber.value.trim();
    let firstThreeDigit = theNumber.substr(0, 3);
    theNumber = Number(theNumber);

    if (isNaN(theNumber)) {
        pNumberError.innerHTML = "Please enter numbers only."
    }else{
        switch (theNumber.toString().length == 10) {
            case true:
                pNumberError2.innerHTML = ""
                break;
            default:
                pNumberError2.innerHTML = "Your phone number should be 11 digits"
                break;
        }

        switch (firstThreeDigit) {
            case '080':
                pNumberError.innerHTML = ""
                break;
            case '081':
                pNumberError.innerHTML = ""
                break;
            case '070':
                pNumberError.innerHTML = ""
                break;
            case '090':
                pNumberError.innerHTML = ""
                break;
            case '091':
                pNumberError.innerHTML = ""
                break;
        
            default:
                pNumberError.innerHTML = "Phone number must start with any of 080, 081, 070, 090, 091."
                break;
        }
    }
}
function validateAddress(){
    if(typeof address.value === 'string'){
        addressError.innerHTML = "";  }
            else{
        addressError.innerHTML = "Please don't be unfortunate, use usual characters";     }

}
function validateEmail(){
    let emailChar =  Array.from(email.value);
    let arrayOfAt = emailChar.filter(function (e) {
        return e === '@';
    });
    switch (arrayOfAt.length) {
        case 0:
            emailError.innerHTML = "Enter a valid email";
            break;
        case 1:
            let positionAt = emailChar.indexOf('@');
            if ((emailChar.lastIndexOf('.')) < positionAt) {
            emailError.innerHTML = "Enter a valid email";}
            else{
                emailError.innerHTML = ""; 
            }
            break;
        default:
            emailError.innerHTML = "There are more than one '@'";
            break;
    }

}
function validatePassword(){
    if((password.value.length < 8) || (password.value.length > 12)){
        passwordError.innerHTML = "Your password cannot be less than 8 or greater than 12 characters.";
    }
    else {
        passwordError.innerHTML = "" 
        switch (password.value) {
            case confirmPassword.value:
                confirmPasswordError.innerHTML = "";  
                break;
            default:
                confirmPasswordError.innerHTML = "Your password did not match.";
                break;
        }
    } 
}

form.addEventListener('submit', submitForm);