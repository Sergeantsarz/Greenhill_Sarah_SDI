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

//Ask the user for a max value 

var max =  prompt("Please type in a maximum value!");

//Validate the prompt
While(max === "" || isNaN(max)){
	
	max = prompt("Please do not leave blank and only use numbers. \nPlease type in a max value!");
}

//Parameters are used to catch the incoming arguments
function randomizer(minNum , maxNum){
	//What happens inside the function, stays inside the function
	console.log("Inside the function");
	//Use paraeters instead of the main code variables ORDER MATTERS
	//Find a random number between two values 
	//How to get random number - Math.random() * (max value - min value) + min value
	var randomNumber = Math.round(Math.random() * (maxNum - minNum) + Number(minNum));
	//DO NOT USE CONSOLE.LOG INSIDE OF A FUNCTION - use return values instead
	
}

//We need a fucntion call to "run" the function
//Arguments go inside the function call 
//What information in our main code, does our function need access to 

//We have to "catch" the returned value of our function call
var results = randomizer(min , max);

//We use this results variabl in our final console.log IN MAIN CODE
console.log("The random number is " + results ".");

//Test if the user types in something specific
//Example yes or no questions

/* var userGoodMood = prompt("Are you in a good mood? \nPlease answer yes or no.");

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
}*/