//GoTo Training Week 3 

//Create code that sorts through an array of fruit names and picks our pears

//Creat our "fruit bowl" array
var bowlOfFruit = ["apple" , "banana" , "pear" , "peach"];

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

if(bowlOfFruit [0] === "pear"){
	//this will run if it is true 
	//if it's true, add 1 to the counting variable
	console.log("This fruit is a pear!");
	totalNumPears++;
} else {
	//This code will run if the IF statement is false
	console.log("This fruit is NOT a pear!");
}
