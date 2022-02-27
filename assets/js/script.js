// Assignment code here
var password = "";
var charSelected = "";

var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var numericChar = "0123456789";
var specialChar = "!@#$%^&*()_+|:<>?";

var getPasswordLength = function () {
  var passwordLengthPrompt = prompt("Enter a password length (8-128)");
  var passwordLength = parseInt(passwordLengthPrompt);
  
  if (parseInt(passwordLengthPrompt) <8 || parseInt(passwordLengthPrompt) >128) {
    alert("Password must be between 8-128 characters.");
    return getPasswordLength();
  }
  if (!passwordLength) {
    alert("Password cannot be blank.");
    return getPasswordLength();
  }
  return passwordLength;
}

var validatePassword = function () {
  
  var lowerConfirm = confirm("Would you like to include lower case characters?");
  var upperConfirm = confirm("Would you like to include uppercase characters?");
  var numericConfirm = confirm("Would you like to incliude numeric characters?");
  var specialConfirm = confirm("Would you like to include special characters?");

  if (lowerConfirm) {
    charSelected = charSelected.concat(lowerChar);
  }
  if (upperConfirm) {
    charSelected = charSelected.concat(upperChar);
  }
  if (numericConfirm) {
    charSelected = charSelected.concat(numericChar);
  }
  if (specialConfirm) {
    charSelected = charSelected.concat(specialChar);
  }
  console.log(charSelected);
  return charSelected;
}

var generatePassword = function () {

  passwordLength = getPasswordLength();
  charSelected = validatePassword();
  password = "";
  
  for (i = 0; i <passwordLength; i++) {
    var number = Math.floor(Math.random() * charSelected.length);
    password += charSelected.substring(number, number + 1);
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

