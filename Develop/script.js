// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//character array
let lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "~", "?", "<", ">", "/"];

let masterArray = [];
let randomPassword = "";

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generate password function
function generatePassword() {
  let passwordLength = prompt("Please enter your desired password character count between 8 - 128 characters.");
  if (!passwordLength || passwordLength <= 7 || passwordLength >= 129) {
  return alert("Your password must be between 8 -128 characters. Please enter a valid count.");
  }

  //let statements to confirm characters

  let useLower = confirm("Do you want to include lowercase letters?");
  if (useLower === true) {
    masterArray = masterArray.concat(lower)
  }
  let useUpper = confirm("Do you want to include uppercase letters?");
  if (useUpper === true) {
    masterArray = masterArray.concat(upper)
  }
  let useNumbers = confirm("Do you want to include numbers?");
  if (useNumbers === true) {
    masterArray = masterArray.concat(numbers)
  }
  let useSpecial = confirm("Do you want to include special characters?");
  if (useSpecial === true) {
    masterArray = masterArray.concat(special)
  }

  let randomPassword = " ";

  //for loop
  for (let i = 0; i < passwordLength; i++) {
  randomPassword += masterArray[Math.floor(Math.random() * (masterArray.length))];
  console.log(Math.floor(Math.random() * (masterArray.length)));
  console.log(randomPassword);
  }
  
  //add return
  return randomPassword;

}