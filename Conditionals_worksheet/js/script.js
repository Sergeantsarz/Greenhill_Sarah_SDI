//Sarah R. Greenhill - December 10, 2014 - Conditionals Worksheet

//Group 1 - Celsius to Fahrenheit converter - Convert a temperature to either degrees Celsius or degrees Fahrenheit depending on what the user has entered. If the user puts a “C” for the unit, the calculator should convert to Celsius. If the user puts “F” for the unit, the calculator should convert to Fahrenheit.

//F to C = Deduct 32, then multiply by 5, then divide by 9
//C to F = Multiply by 9, then divide by 5, then add 32

/* var userInputNum = prompt ("How many degrees are we converting?"); //User is prompted for a number of degrees
var userInputLet = prompt ("Choose C for Celcius or F for Fahrenheit."); //User is prompted to choose C or F
var cToF = userInputNum * 9 / 5 + 32; //Does the math to convert to Fahrenheit
var fToC = (userInputNum - 32) * 5 / 9; //Does the math to convert to Celcius

var upperCaseUserLet = userInputLet.toUpperCase(); //Forces the input to be Upper Case


if(upperCaseUserLet === "C"){
	console.log("You entered " + userInputNum + "ºF to be converted into Celcius, resulting in " + fToC + "ºC");
} else if (upperCaseUserLet === "F"){
	
	console.log("You entered " + userInputNum + "ºC to be converted into Fahrenheit, resulting in " + cToF + "ºF");
} //This conditional tests to see what the user picked, C or F. Depending upon the input, the console will read back their initial degree input and what it is converted to. */

//Group 2 - Check the Login - Make sure the user has the correct username and password. If the username doesn’t match then a specific message for that should be printed to the console. If the password doesn’t match a message should appear for that, etc. Only one error message should appear. 

var username = "Sergeantsarz";
var password = "passWord1!"

if (username === "Sergeantsarz" && password === "passWord1!"){
	
	console.log("Welcome, " + username + "!");
} else {
	
	console.log("User not found. Please try again!");
}
