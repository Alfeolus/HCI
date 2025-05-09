let form = document.getElementById("register");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    let username = document.getElementById("inputUsername");
    let password = document.getElementById("inputPassword");
    let confirmPassword = document.getElementById("confirmPassword");
    let email = document.getElementById("inputEmail");
    let phoneNumber = document.getElementById("inputPhone");

    if(username.value == "" || password.value == "" || 
        confirmPassword.value == "" || email.value == "" || 
        phoneNumber.value == "") {
        alert("Please fill in all fields.");
        return;
    }

    if (password.value !== confirmPassword.value) {
        alert("Passwords and Confirm Password must be same!");
        return;
    }

    if(email.value.endsWith("@gmail.com")){
        alert("Email must end with @gmail.com");
        return;
    }

    if(checkPhone(phoneNumber.value) == false){
        alert("Phone number must contain only numbers.");
        return;
    }

    alert("Register Success");
});

function checkPhone(phone){
    for(let i = 0; i < phone.length; i++){
        if(phone[i] < "0" || phone[i] > "9"){
            return false;
        }
    }
    return true;
}