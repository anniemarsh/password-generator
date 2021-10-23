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

//generate pw that matches selected criteria
//create loop to iterate over the chosen characters

//return the generated password
  else {
    alert("Your password must be 8 - 128 characters!")
  }

  var num = randomNumber(0, allChars.length)
  console.log(num)
  var num2 = allChars.charAt(num)
  console.log(num2)
}

function randomNumber(min, max) { 
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
