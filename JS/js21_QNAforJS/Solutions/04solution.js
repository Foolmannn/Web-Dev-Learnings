
// 4. The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

password ="sdfjksad"
password2 ="Suman123"


const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8}$/;
function passcheck(pass){
    if(passwordRegex.test(pass)){
        console.log("valid password")
    }
    else{
        console.log("try another password")
    }
}
passcheck(password)
passcheck(password2)
