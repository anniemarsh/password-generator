// Assignment code here
var generateBtn = document.querySelector("#generate");


//"ABCDEFGHIJKLMNOPQRSTUVWXYZ"

//"abcdefghijklmnopqrstuvwxyz"

//@%+\\/!#$^?:,)(}{][~-_

//"123456789"

//generate password
function generatePassword() {
  //do stuff
  const totalLength = prompt("How many characters would you like to use?");
  if(totalLength >= 8 && totalLength <= 128) {
    alert(`Your new password will be ${totalLength} characters long.`);
    //(`Your new password will be` + totalLength + `characters long`)
  }
  // var options = {
  //   hasNumber : window.confirm(`Would you like to include a number?`),
  //   hasUppercase : window.confirm(`Would you like to include upper case letters?`),
  //   hasLowercase : window.confirm(`Would you like to include lower case letters?`),
  //   hasSymbol : window.confirm(`Would you like to include a symbol?`)
  // };
  // if(options.hasLowercase === false && options.hasUppercase === false && options.hasNumber === false && options.hasSymbol === false)

let upper = confirm("Would you like to include uppercase letters?");
let lower = confirm("Would you like to include lowercase letters?");
let symbol = confirm("Would you like to include special characters?");
let number = confirm("Would you like to include numbers?");

let allChars = "";

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

//generate pw that matches selected criteria
else {
  alert("Your password must be 8 - 128 characters!")
}

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
