//String: a sequence of charcters which is ecloded by double or single quotes
//Everything in JS is treated as Object
//Every objcte will have probs and Methods


// let a = "Hello JavScript";

// //1. length-->to fing the length of the string

// console.log(a.length);

// //2. Uppercase()

// let name = "Raghavendra";

// console.log(name.toUpperCase());

// //3. LowerCase

// let email = "RAGHAVENDRABOYA03@gmail.com";

// console.log(email.toLowerCase());

// //trim()-->removes the unwanted spaces from the string\

// let serachInput = "    hp    laptops    ";
// console.log(serachInput.trim());

// //indexOF()--->helps to find the specific index of a charecter

// console.log(email.lastIndexOf("A"));

// //includes()-->checks if the charecter is available in the existing String

// console.log(email.includes("S"));

// //7. slice-->extracts the Specific portion from the String

// console.log(email.slice(-19,-14));

// //8. SubString()--->

// console.log(email.substring(-11,0));

// //Difference b/w SLice and SubString:


// //Slice: 


// //9. replace

// console.log(email.replaceAll("A","a"));

// //10.split()-->splits a string into an array of strings


// let address = "A23, KPHB Colony, Hyd";
// console.log(email.split("@"));


// //11.  charAT & charCodeAT

// console.log(address.charAt(0));
// console.log(address.charCodeAt(0));

// //12. concat()

// let fName = "Amar"
// let lName= "B"
// console.log(lName.concat(fName));


function validateLogin(){
    let userName = document.getElementById('username').value;
let email = document.getElementById('email').value.trim();
let password = document.getElementById('password').value.trim();


if (userName.length <= 5) {
    document.getElementById('loginMessage').innerText = "UserName must be atleat 5 charecters";
    return;
}

if (!email.includes("@")) {
    document.getElementById('loginMessage').innerText = "Invalid Email ID";
    return;
}

if(password.length<8 && !password.includes("@")){
    document.getElementById('loginMessage').innerText = "Password must be atleast 8 charecters and include special charecter @";
    return;
}
document.getElementById('loginMessage').innerText = "Login Successful";
username = "";
email = "";
password = "";


}


