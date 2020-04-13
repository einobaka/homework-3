// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// List of defined variables
var pwUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var pwLower = pwUpper[25].toLowerCase();
var pwNumeric = "0123456789";
var pwSpecial = "!@#$%^&*()";

// Place holder variables
var showResult = [];
var genUpper = [];

// start chain
var hello = alert("Welcome, lets generate your PW!");
var askLength = prompt("What length of characters would you like, select between 8-128");
var askUpper = confirm("Do you want upper case letters?");
var askLower = confirm("Do you want lower case letters?");
var askNumeric = confirm("Do you want numeric characters?");
var askSpecial = confirm("Do you want special characters?");

  showResult.push
  (
    "\n Desired password length: " + askLength, 
    "\n You would like upper case letters: " + askUpper, 
    "\n You would like lower case letters: " + askLower, 
    "\n You would like numeric characters: " + askNumeric,
    "\n You would like special characters: " + askSpecial,
    "\n \n Click Generate Password below!"
  );
  alert(showResult);

// IF statements

    // upper characters
    if(askUpper === true){
      for (var i = 0; i < 1; i++) { 
        var genUpper = Math.floor(Math.random() * pwUpper.length);
        console.log (pwUpper.charAt(genUpper));
      }
    }
    //lower character
    if(askLower === true){
      for (var i = 0; i < 1; i++) 
      {
        var genLower = Math.floor(Math.random() * pwLower.length);
        console.log (pwLower.charAt(genLower));
      }
    }
    // numeric character
    if(askNumeric === true){
      for (var i = 0; i < 1; i++) 
      {
        var genNumeric= Math.floor(Math.random() * pwNumeric.length);
        console.log (pwNumeric.charAt(genNumeric));
      }
    }
    // special character
    if(askSpecial === true){
      for (var i = 0; i < 1; i++) 
      {
        var genSpecial = Math.floor(Math.random() * pwSpecial.length);
        console.log (pwSpecial.charAt(genSpecial));
      }
    }

  
// Generate anoteher loop or put everything in a FUNCTION

console.log("----Console log for my own sanity------");
console.log("Length of characters: " + askLength);
console.log("Lower characters :" + askLower);
console.log("Upper characters :" + askUpper);
console.log("Numeric charaters: " + askNumeric);
console.log("Special characters: " + askSpecial);


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
