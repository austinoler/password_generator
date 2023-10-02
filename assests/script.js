// Function to generate a password
function generatePassword() {
    // Define character sets for password
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var specialCharacters = "!@#$%^&*()_+[]{}|;:,.<>?";
  
    // create an empty password string
    var password = "";
  
    // Prompt the user for password length
    var length = parseInt(prompt("Enter password length (between 8 and 128):"));
  
    // Validate user input for password length
    if (isNaN(length) || length < 8 || length > 128) {
      alert("Please enter a valid password length between 8 and 128.");
      return ""; // Return an empty string if validation fails
    }
  
    // Ask the user to include character types in the password
    var includeLowercase = confirm("Include lowercase characters?");
    var includeUppercase = confirm("Include uppercase characters?");
    var includeNumeric = confirm("Include numeric characters?");
    var includeSpecial = confirm("Include special characters?");
  
    // Check if at least one character type is selected
    if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
      alert("At least one character type must be selected.");
      return ""; // Return an empty string if no character type is selected
    }
  
    // create a string to store the characters to be used
    var charsToUse = "";
  
    // Build the character set based on user selections
    if (includeLowercase) charsToUse += lowercase;
    if (includeUppercase) charsToUse += uppercase;
    if (includeNumeric) charsToUse += numbers;
    if (includeSpecial) charsToUse += specialCharacters;
  
    // Generate the password by selecting random characters from charsToUse
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charsToUse.length);
      password += charsToUse.charAt(randomIndex);
    }
  
    // Return the generated password
    return password;
  }
  
  // Get the "Generate Password" button element
  var generateBtn = document.querySelector("#generate");
  
  // Function to write the generated password to the textarea
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  // Add an event listener to the "Generate Password" button
  generateBtn.addEventListener("click", writePassword);