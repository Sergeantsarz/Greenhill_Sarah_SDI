//GoTo Training Week 3 

//Create code that sorts through an array of fruit names and picks our pears

//Creat our "fruit bowl" array
var bowlOfFruit = ["apple" , "banana" , "pear" , "peach" , "pear" , "tomato" , "kiwi" , "pear" , "banana" , "pear"];

//This shows the whole array
console.log(bowlOfFruit);

//Display only one of the fruits 
console.log(bowlOfFruit[1]);

//How many items are in the array 
//Using Dot Syntax - Using a period
console.log(bowlOfFruit.length);

//What is the length  of the array, using the length property
//Last Index number is always one less than the length 
// bowlOfFruit.length - 1 = length of the array 

//Create a variable to track the number of pears we have
var totalNumPears = 0; 

//Test each item to see if it is a pear 
//if (condition) {code to run if true};

/*if(bowlOfFruit [0] === "pear"){
	//this will run if it is true 
	//if it's true, add 1 to the counting variable
	console.log("This fruit is a pear!");
	totalNumPears++;
} else {
	//This code will run if the IF statement is false
	console.log("This fruit is NOT a pear!");
}

if(bowlOfFruit [1] === "pear"){
	//this will run if it is true 
	//if it's true, add 1 to the counting variable
	console.log("This fruit is a pear!");
	totalNumPears++;
} else {
	//This code will run if the IF statement is false
	console.log("This fruit is NOT a pear!");
}

if(bowlOfFruit [2] === "pear"){
	//this will run if it is true 
	//if it's true, add 1 to the counting variable
	console.log("This fruit is a pear!");
	totalNumPears++;
} else {
	//This code will run if the IF statement is false
	console.log("This fruit is NOT a pear!");
}

if(bowlOfFruit [3] === "pear"){
	//this will run if it is true 
	//if it's true, add 1 to the counting variable
	console.log("This fruit is a pear!");
	totalNumPears++;
} else {
	//This code will run if the IF statement is false
	console.log("This fruit is NOT a pear!");
} */

//We want the computer to do the work for us
//Create a loop for repetitive code 

//Creat a new tracking variable 
var pearNumber = 0;
//For Loop - is great for when you know how many times it should run
// for(initialize a counting variable; condition to test; incremental change){code to run each loop around}
//This runs for the length of the array 
for(var i = 0; i < bowlOfFruit.length; i++ ){
	console.log("Inside of the loop" + i);
	console.log(bowlOfFruit[i]);
	
	//Test each fruit if it is a pear
	if(bowlOfFruit [i] === "pear"){
	//this will run if it is true 
	//if it's true, add 1 to the counting variable
	console.log("This fruit is a pear!");
	pearNumber++;
	} else {
	//This code will run if the IF statement is false
	console.log("This fruit is NOT a pear!");
	}
}
//Report out how many pears we have 
console.log("There are " + pearNumber + " in the bowl.");

//Using conditionals to validate user input

var userInput = prompt ("Please enter your name!");

//How to test if the user left it blank
if (userInput === ""){
	//The user left it blank
	//Re-prompt the user
	userInput = prompt("Please do not leave your name blank!");
}
console.log("Welcome " + userInput);

//Test if the user types in a number 
//isNaN() - Is Not A Number 
console.log(isNaN("Test"));
console.log(isNaN(7));

var userNumber = prompt("Type in any number!")
//Test if it is a number
if(isNaN(userNumber)){
	
	//This is a text string
	//Reprompt the user for a number
	userNumber = prompt("Only type in numbers, please!");
}
