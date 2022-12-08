var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");
var username;

function login() {
    let loginAlert = document.getElementById("loginAlert");
    let value = GetCookie(loginEmail.value);

    if (loginEmail.value.length == 0 || loginPassword.value.length == 0) {
        loginAlert.innerText = "Fill the inputs first";
        loginAlert.classList.replace("d-none", "d-block");
    }
    else {
        if (value == -1) {
            //console.log("Email does not exist");
            loginAlert.innerText = "Email does not exist";
            loginAlert.classList.replace("d-none", "d-block");
        }
        else {
            let userInfo = value.split('*');
            username = userInfo[0];
            //console.log(username);
            let realPass = userInfo[1];
            if (realPass == loginPassword.value) {
                location.assign("./hompage.html?"+username);
            }
            else {
                //console.log("Wrong Password");
                loginAlert.innerText = "Wrong Password";
                loginAlert.classList.replace("d-none", "d-block");
            }
        }
    }
}
