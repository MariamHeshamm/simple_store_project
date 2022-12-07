const usernameInput = document.getElementById("signUpName")

const userEmailInput = document.getElementById("signUpEmail");

const userPasswordInput = document.getElementById("signUpPass");
const signupBtn = document.getElementById("signupBtn");

const usernameAlert = document.getElementById("usernameAlert");
const userPasswordAlert = document.getElementById("userPasswordAlert");
const userEmailAlert = document.getElementById("userEmailAlert");

let usersInfo;

// Cookies
function signUp()
{
     //isExist();
    if(usernameAlert.innerText.length == 0 && userPasswordAlert.innerText.length == 0 && userPasswordAlert.innerText.length==0)
    {
        SetCookie(userEmailInput.value , usernameInput.value + "*" + userPasswordInput.value);
        location.assign("./login.html");
    }
}
//username validation
function usernameValidation() {
    
    if (usernameInput.value.length != 0) {
        usernameAlert.innerText = "";
        usernameAlert.classList.replace("d-block", "d-none");
    }
    else {
        usernameAlert.classList.replace("d-none", "d-block");
        usernameAlert.innerText = "You must enter your name !!";
    }
}

function userPasswordValidation() {
    let regex = /^.{5,15}$/;
    

    if(userPasswordInput.value.length != 0)
    {
       if(regex.test(userPasswordInput.value))
         {
            userPasswordAlert.innerText = "";
            userPasswordAlert.classList.replace("d-block", "d-none");
         }
         else
         {
            userPasswordAlert.classList.replace("d-none", "d-block");
            userPasswordAlert.innerText = "you password must contain from 5 to 15 characters";
         }
    }
    else
    {
        userPasswordAlert.classList.replace("d-none", "d-block");
        userPasswordAlert.innerText = "you must enter your password !!";
    }
}

//regex 
function userEmailValidation() {
    
    let regex = /@[a-z]{5,10}(\.com)$/;

    if(userEmailInput.value.length != 0)
    {
        if(regex.test(userEmailInput.value))
        {
           if(isExist())
           {
            userEmailAlert.innerText = "this email already exists !!";
            userEmailAlert.classList.replace("d-none", "d-block");
           }
           else
           {
           userEmailAlert.innerText = "";
           userEmailAlert.classList.replace("d-block", "d-none");
           }
        }
        else
        {
            userEmailAlert.innerText = "Please enter a valid email address (name@example.com)";
            userEmailAlert.classList.replace("d-none", "d-block");
        }
    }
    else
    {
        userEmailAlert.classList.replace("d-none", "d-block");
        userEmailAlert.innerText = "you must enter your email !!";
    }

}

function isExist() {
    let check = GetCookie(userEmailInput.value);
    
    if(check == -1)
       return false;

    return true;

}

