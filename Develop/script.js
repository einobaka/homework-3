// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Array for the password definitions

var pwLength = [];
var pwUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P", "Q","R","S","T","U","V","W","X","Y","ZEBRA"];
var pwLower = pwUpper[25].toLowerCase();
var pwNumeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var pwSpecial = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// Start
var hello = alert("Welcome, lets generate your PW!");
var pwLength = prompt("What length of characters would you like, select between 8-128");
var pwUpper = confirm("Do you want upper case letters?");
var pwLower = confirm("Do you want lower case letters?");
var pwNumeric = confirm("Do you want numeric characters?");
var pwSpecial = confirm("Do you want special characters?");
var showResult= []; 

showResult.push (
  "\n Desired password length: " +pwLength, 
  "\n You would like upper case letters: " + pwUpper, 
  "\n You would like lower case letters: " + pwLower, 
  "\n You would like numeric characters: " + pwNumeric,
  "\n You would like special characters: " + pwSpecial);
  alert(showResult);





console.log(pwLength);
console.log(pwLower);
console.log(pwUpper);
console.log(pwNumeric);
console.log(pwSpecial);






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
