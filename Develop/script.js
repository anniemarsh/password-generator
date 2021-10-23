// Assignment code here
var generateBtn = document.querySelector("#generate");

let totalLength;

//generate password
function generatePassword() {
  totalLength = prompt("How many characters would you like to use?");
  if(totalLength >= 8 && totalLength <= 128) {
    alert(`Your new password will be ${totalLength} characters long.`);
  }

 //array 
let upper = confirm("Would you like to include uppercase letters?");
let lower = confirm("Would you like to include lowercase letters?");
let symbol = confirm("Would you like to include special characters?");
let number = confirm("Would you like to include numbers?");

let allChars = "";
let password = "";

//conditional
if (upper) {
  allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
if (lower) {
  allChars += "abcdefghijklmnopqrstuvwxyz";
}
if (symbol) {
  allChars += "@'%+\\/!#$^?:,)(}{][~-_";
}
if (number) {
  allChars += "123456789";
}

//create loop to iterate over the chosen characters

//return the generated password
  else {
    alert("Your password must be 8 - 128 characters!")
  }

  var num = randomNumber(0, allChars.length)
  console.log(num)
  var num2 = allChars.charAt(num)
  console.log(num2)

  //not sure if this is the right return?
  return password;
}

function randomNumber(min, max) { 
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//build a string for random numbers & return it
const characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@%+\\/!#$^?:,)(}{][~-_0123456789';"

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(generateString(totalLength));

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //does this need a return?
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
