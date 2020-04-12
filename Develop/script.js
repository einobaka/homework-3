// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Array for the password definitions

// pwLength defined as reference for now
var pwLength = 10;
// variables - still untested with prompts
var pwUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var pwLower = pwUpper[25].toLowerCase();
var pwNumeric = "0123456789";
var pwSpecial = "!@#$%^&*()";

var genSpecial = [];
var genUpper = [];

  for (var i = 0; i < pwLength; i++) {
    var genUpper = Math.floor(Math.random() * pwUpper.length);
    console.log (pwUpper.charAt(genUpper));
  }





// Start
// var hello = alert("Welcome, lets generate your PW!");
// var pwLength = prompt("What length of characters would you like, select between 8-128");
// var pwUpper = confirm("Do you want upper case letters?");
// var pwLower = confirm("Do you want lower case letters?");
// var pwNumeric = confirm("Do you want numeric characters?");
// var pwSpecial = confirm("Do you want special characters?");
// var showResult= []; 

// showResult.push (
//   "\n Desired password length: " + pwLength, 
//   "\n You would like upper case letters: " + pwUpper, 
//   "\n You would like lower case letters: " + pwLower, 
//   "\n You would like numeric characters: " + pwNumeric,
//   "\n You would like special characters: " + pwSpecial,
//   "\n \n Click Generate Password below!"
//   );
//   alert(showResult);

  // for (var i = 0; i < 10; i++) {

  //   var generatePassword = 
  //     Math.floor(Math.random() * 10) +
  //     Math.floor(Math.random() * 10) +
  //     Math.floor(Math.random() * 10) +
  //     + 1;
 


  

  // for (var j = 0; j < 1; i++) {
  //   var genNumeric = Math.floor(Math.random() * 10) +1;
  //   console.log(genNumeric);
  // }
  




// console.log(pwLength);
// console.log(pwLower);
// console.log(pwUpper);
// console.log(pwNumeric);
// console.log(pwSpecial);






// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
