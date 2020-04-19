// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {
  // First prompt for character length between 8 and 128.
  var askLength = prompt('How long would you like your password? Pick between 8-128 characters.');
  // Second set of confirms for character selection.
  if (askLength >= 8 && askLength <= 128) {
    var askLowercase = confirm('Would you like lowercase letters?');
    var askUppercase = confirm('Would you like uppercase letters?');
    var askNumeric = confirm('Would you like numeric characters?');
    var askSpecial = confirm('Would you like special characters?');
  }
  // Reject right away if user does not meet the length.
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
    // Alert the confirms from previous selection.
    var promptResult = [
      "These are your following parameters: ",
      "\n\n Desired password length: " + askLength,
      "\n You picked lower case letters: " + askLowercase,
      "\n You picked upper case letters: " + askUppercase,
      "\n You picked numeric characters: " + askNumeric,
      "\n You picked special characters: " + askSpecial
    ];
    alert(promptResult);
    // Randomize and generate the password via for()loop
    var characters = lowercase + uppercase + numeric + special;
    var randomize = [];
    for (var i = 0; i < askLength; i++) {
      randomize += characters[Math.floor(Math.random() * characters.length)];
    };
    // Return the final result to generatePassword();
    return randomize;
  }
  // If user doesn't select enough characters, return of reject will happen instead.
  else {
    return alert('Password does not meet parameters; please choose at least one character type.')
  }

};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


