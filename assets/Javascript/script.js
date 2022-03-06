// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    var password = generatePassword();


    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Where the function of generate password begins
function generatePassword() {
    var password = ""

    //all the available choices
    var choices = {
        upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        lowerCase: "abcdefghijklmnopqrstuvwxyz",
        numberCase: "0123456789",
        specialCharacters: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
    }
    //setting the selectedOption variable to be an array for pushing chosen options
    var selectedOptions = []

    //start of prompts
    var numberOfChara = window.prompt("What is the desired length, oh mighty one? \nYour mighty domain is between 8 and 128", 8)


    if (numberOfChara >= 8 && numberOfChara <= 128) {
        window.alert("You have chosen " + numberOfChara + " number of characters")
    }
    else {
        window.alert("FOOL! You need to enter a NUMBER between 8 and 128")
        return "Try again";
    }


    // function that pushes the options out into an array selectedOption as defined above

    if (window.confirm("Would you like upperCase")) {
        selectedOptions.push(choices.upperCase);
    }
    if (window.confirm("Would you like lowerCase?")) {
        selectedOptions.push(choices.lowerCase)
    }
    if (window.confirm("Would you like numbers?")) {
        selectedOptions.push(choices.numberCase)
    }
    if (window.confirm("Would you like special characters?")) {
        selectedOptions.push(choices.specialCharacters)
    }

    // the selectedOptions currently looks like an array, so will neeed to join/concatenate into one string

    var finalOptions = selectedOptions.join('');

    var finalOptionsLength = finalOptions.length

    // checking if there was any options actually selected. 

    if (finalOptionsLength < 1) {
        alert("You didn't specify any requirements")
        return "Try again with requirements"
    }

    // generate password from selected characters 

    function createPassword(numberOfChara) {
        for (var i = 0; i < numberOfChara; i++) {
            password += finalOptions.charAt(Math.floor(Math.random() * finalOptionsLength));
        }
        return password;
    }

    return createPassword(numberOfChara);

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


