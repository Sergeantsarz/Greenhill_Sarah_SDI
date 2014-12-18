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

/* while(min === "" || isNaN(min)){
	//reprompt
	if(min === ""){
		min = prompt("Please do not leave blank! \nPlease type in a minumum value.");
		
	}else {
		
		min = prompt("Please only type in numbers! \nPlease type in a minimum value.");
	}
	
} */

//Test if the user types in something specific
//Example yes or no questions

var userGoodMood = prompt("Are you in a good mood? \nPlease answer yes or no.");

//Needs && because of the !=
while(userGoodMood != "yes" && userGoodMood != "Yes" && userGoodMood != "no" && userGoodMood != "No"){
	//Reprompt
	userGoodMood = prompt("Please only type in yes or no! \nAre you in a good mood?");
}

//toLowerCase() or toUpperCase() - converts text strings to all lower or all upper case
if(userGoodMood === "yes" || userGoodMood === "Yes"){
	console.log("Great! Glad you're in a fabulous mood!");
	
}else{
	
	console.log("Sorry to hear that, mabe you should code more. \nThat should make you happy!");
}