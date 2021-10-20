// Assignment code here
var generateBtn = document.querySelector("#generate");


//"ABCDEFGHIJKLMNOPQRSTUVWXYZ"

//"abcdefghijklmnopqrstuvwxyz"

//@%+\\/!#$^?:,)(}{][~-_

//"123456789"
//xxxx
//generate password
function generatePassword() {
  //do stuff
  const totalLength = prompt("How many characters would you like to use?");
  if(totalLength >= 8 && totalLength <= 128) {
    alert(`Your new password will be ${totalLength} characters long.`);
    //(`Your new password will be` + totalLength + `characters long`)
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
