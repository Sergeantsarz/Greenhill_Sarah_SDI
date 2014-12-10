//Sarah R. Greenhill - December 10, 2014 - Conditionals Worksheet

//Group 1 - Celsius to Fahrenheit converter - Convert a temperature to either degrees Celsius or degrees Fahrenheit depending on what the user has entered. If the user puts a “C” for the unit, the calculator should convert to Celsius. If the user puts “F” for the unit, the calculator should convert to Fahrenheit.

//F to C = Deduct 32, then multiply by 5, then divide by 9
//C to F = Multiply by 9, then divide by 5, then add 32

var celcius = "C";
var fahrenheit = "F"; 
var cToF = userInputNum * 9 / 5 + 32; 
var fToC = (userInputNum - 32) * 5 / 9;
var upperCaseUserLet = userInputLet.toUpperCase(); 
var userInputNum = prompt ("How many degrees are we converting?");
var userInputLet = prompt ("Choose C for Celcius or F for Fahrenheit.");


if (userInputNum === "" || userInputLet === ""){
	//The user left it blank
	//Re-prompt the user
	userInput = prompt("Please input a degree amount!");
} 

if(upperCaseUserLet === "C"){
	console.log("You entered " + userInputNum "ºF to be converted into Celcius, resulting in " + fToC + "ºC");
} else (upperCaseUserLet === "F"){
	
	console.log("You entered " + userInputNum "ºC to be converted into Fahrenheit, resulting in " + cToF + "ºF");
} 


