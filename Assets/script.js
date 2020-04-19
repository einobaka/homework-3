// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword, generatePassword);

// First method to confirm if the characters are set between 8 and 128
function generatePassword() {
  var askLength = prompt('How long would you like your password? Pick between 8-128 characters.');

  if (askLength >= 8 && askLength <= 128) {
    askLowercase = confirm('Would you like lowercase letters?');
    askUppercase = confirm('Would you like uppercase letters?');
    askNumeric = confirm('Would you like numeric characters?');
    askSpecial = confirm('Would you like special characters?');
  }
  else {
    alert('Password does not meet parameters; please choose the length between 8 & 128.')
  }
  if (askLowercase === true) {
    var lowercase = ['abcdefghijklmnopqrstuvwxyz'];
  }
  else if (askLowercase === false) {
    var lowercase = '';
  }
  if (askUppercase === true) {
    var uppercase = ['ABCDEFGHIJKLMNOPQRSTUVWZYZ'];
  }
  else if (askUppercase === false) {
    var uppercase = '';
  }
  if (askNumeric === true) {
    var numeric = ['1234567890'];
  }
  else if (askNumeric === false) {
    var numeric = '';
  }
  if (askSpecial === true) {
    var special = ['!@#$%^&*()'];
  }
  else if (askSpecial === false) {
    var special = '';
  }
  if (askLowercase === true || askUppercase === true || askNumeric === true || askSpecial === true) {
    var promptResult = [
      "These are your following parameters: ",
      "\n\n Desired password length: " + askLength,
      "\n You picked lower case letters: " + askLowercase,
      "\n You picked upper case letters: " + askUppercase,
      "\n You picked numeric characters: " + askNumeric,
      "\n You picked special characters: " + askSpecial
    ];
    alert(promptResult);

    var characters = lowercase + uppercase + numeric + special;
    var randomize = [];
    for (var i = 0; i < askLength; i++) {
      randomize += characters[Math.floor(Math.random() * characters.length)];
    };

    return randomize;
  }
  else {
    alert('Password does not meet parameters; please choose at least one character type.')
  }
}

console.log("Result: " + generatePassword());
