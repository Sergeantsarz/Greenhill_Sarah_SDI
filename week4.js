//Sarah R. Greenhill - 12/18/14 - ADI Week 4 GoTo 

//Create a function that spits out a random integer between two given values. 
//Ask the user for a minimum number

var min = prompt("Let's get a random number between two values. \nPlease type in the minimum value.");

//Validate that the user actually typed in something, didn't leave it blank
//Old Way 
/* if (min === ""){
	
	//reprompt the user
	min = prompt("Please do not leave blank! \nPlease type in a minimum number!");
} */ 

//New way, validate using a while loop
//Test to see if blank

/*while(min === "")[
	//Reprompt
	min = prompt("Please do not leave blank! \nPlease type in a minimum number!");
]

//Validate that it is a number using a while loop

while(isNaN(min)){
	//Reprompt
	min = prompt("Please only type in numbers! \nPlease type in a minimum number!");
}*/

//Validate using a combined while loop

while(min === "" || isNaN(min)){
	//reprompt
	min = prompt("Please do not leave blank and only type in numbers! \nPlease type in a minimum value.");
}

