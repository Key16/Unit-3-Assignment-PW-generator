# Welcome to the Password Generator


To view the code on my github go to this [ link ](https://github.com/Key16/Unit-3-Assignment-PW-generator )

Or view it live [ here ](https://key16.github.io/Unit-3-Assignment-PW-generator/ )


## Brainstorming

Building of the possible scenarios

Generating password length
- Less or more than 8-128 characters
- not entering a number

Asking for what characters to include
- How to scramble the combinations availabble
- Concatenate or join the combinations dynamically
- what if none of the options were selected?

Types of characters
- numbers
- lower case
- upper case
- special characters

#

## Executing the code

First I had to set a password variable to be used later down the function, it could be placed lower but that was the varialbe that was being returned for a function at the end so i kept it at the top. 

Next was listing all the actual choices. We were given 4 so I placed them in an object to keep things clean and easy to look at.

I then made an undefined variable called selectedOption to be called later, as I wanted it to be an array to "push" the selection the user makes into a new variable. I had trouble here intially because I wasn't able to find a way to 'remember' the choices so instead it would make an 'action' everytime a user chose yes or no using the if/else statement.

The following statements were all prompts for the user, which was to capture all those who entered 8-128, and kick out all those who didn't. I included a returnn 'Try again' so that the message that returned in the text box wasn't 'undefined'.

The next commands were 'confirms' to ask if the user wanted the special characters. The if statements would push the choices in the object out into the array called selectedOptions which i set earlier up in the function. This would dynamically allow the available options to change instead of writing out every single possibility. 

Then i used 'join' to join or concatenate the array into a string, so that i could use the math random array on it. 

I added an extra if statement to catch annyonne that didn't actually select any optionns so they would try again with a custom message of 'try again with requirements'

The final line in the function would return the createPassword function that would pick the number of characters chosen with the options picked for choice of characters.


## Extra additions

I wanted to make the page look more sleek as a 'secure password generator' so just added some CSS and background to jazz it up. 

