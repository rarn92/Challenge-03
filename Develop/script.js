// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var generatedPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  if (generatedPassword) {
    passwordText.value = generatedPassword;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// My Code
function generatePassword(){
  // password prompt entry and validation
  var passLength = prompt("Please choose a password length (# of characters).");
  passLength = passLength.trim();
  console.log(passLength);

  if (passLength == null) {
    return;
  }

  if (passLength === "") {
    alert("ERROR: Password length must not be empty.");
    return;
  }

  if (isNaN(passLength)) {
    alert("ERROR: Password length must be a number.");
    return;
  }

  if (passLength < 8 || passLength > 128) {
    alert("ERROR: Password length must be between 8 and 128 characters.");
    return;
  }

  // confirm - lowercase, uppercase, numeric, special characters
  if (passLength >= 3) {
    lowerConfirm = confirm("Do you want to include lowercase letters in your password?");
    upperConfirm = confirm("Do you want to include uppercase letters in your password?");
    numberConfirm = confirm("Do you want to include numbers in your password?");
    specialConfirm = confirm("Do you want to include special characters in your password?");
  }

  var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

  var legalCharacterArray = [];
  console.log(legalCharacterArray);

  if (numberConfirm === true) {
    legalCharacterArray = legalCharacterArray.concat(number);
  }

  if (lowerConfirm === true) {
    legalCharacterArray = legalCharacterArray.concat(lower);
  }

  if (upperConfirm === true) {
    legalCharacterArray = legalCharacterArray.concat(upper);
  }

  if (specialConfirm === true) {
    legalCharacterArray = legalCharacterArray.concat(special);
  }

  if (numberConfirm === false && lowerConfirm === false && upperConfirm === false && specialConfirm === false) {
    alert("ERROR: Must select at least one character type.");
    return;
  }

  console.log(legalCharacterArray);

  var generatedPassword = "";

  for (var i=0; i<passLength; i++) {
    var randomIndex = Math.floor(Math.random() * legalCharacterArray.length);
    generatedPassword += legalCharacterArray[randomIndex];
  }
  console.log(generatedPassword);

  return generatedPassword;
}