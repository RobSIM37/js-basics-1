const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("Please enter a password with at least 10 characters: ", function(input){
	
    if (input.length >= 10) {
        console.log("You have entered a valid password.")
    } else {
        console.log("You have entered an invalid password. It must be at least 10 characters.")
    }


	// This line closes the connection to the command line interface.
	reader.close()

});