//Sarah R. Greenhill - 12/11/14 - Conditionals Assignment - Personal

//Christmastime means presents and presents mean money. There are 14 different people that need to be purchased for with a total budget of 200 dollars. The grab bag and friends must be $20 each. 

var grabBag = 20;//Place holder to remember these items need to be deducted from the total budget
var friends = 20;//Place holder to remember these items need to be deducted from the total budget
var giftees = ["Luke" , "Kristy" , "Joel" , "Gabby" , "Dee" , "Mom", "Dad" , "inlaws" , "Uncle Chuck" , "Jen" , "Auntie Debbie"]; //This array holds the names of the giftees this holiday season
var giftBudget = prompt ("What would you like to spend, in total?"); //Prompts the user for what they would like to spend in total on all giftees + friends and a grab bag
var giftPrice = prompt ("Please enter how much you want to spend on " + giftees[0] + "."); //Prompts the user for what they'd like to spend on giftee #1
var giftPrice2 = prompt ("Please enter how much you want to spend on " + giftees[1] + ".");//Prompts the user for what they'd like to spend on giftee #2
var giftPrice3 = prompt ("Please enter how much you want to spend on " + giftees[2] + ".");//Prompts the user for what they'd like to spend on giftee #3
var giftPrice4 = prompt ("Please enter how much you want to spend on " + giftees[3] + ".");//Prompts the user for what they'd like to spend on giftee #4
var giftPrice5 = prompt ("Please enter how much you want to spend on " + giftees[4] + ".");//Prompts the user for what they'd like to spend on giftee #5
var giftPrice6 = prompt ("Please enter how much you want to spend on " + giftees[5] + ".");//Prompts the user for what they'd like to spend on giftee #6
var giftPrice7 = prompt ("Please enter how much you want to spend on " + giftees[6] + ".");//Prompts the user for what they'd like to spend on giftee #7
var giftPrice8 = prompt ("Please enter how much you want to spend on " + giftees[7] + ".");//Prompts the user for what they'd like to spend on giftee #8
var giftPrice9 = prompt ("Please enter how much you want to spend on " + giftees[8] + ".");//Prompts the user for what they'd like to spend on giftee #9
var giftPrice10 = prompt ("Please enter how much you want to spend on " + giftees[9] + ".");//Prompts the user for what they'd like to spend on giftee #10
var giftPrice11 = prompt ("Please enter how much you want to spend on " + giftees[10] + ".");//Prompts the user for what they'd like to spend on giftee #11

if (giftBudget === ""){
	
	giftBudget = prompt ("Make sure you enter what you'd like to spend in total!");
	
} else if (isNaN(giftBudget)){

	giftBudget = prompt ("Only use numbers to select your total budget!");
	
} //This conditional checks to see if the user has entered an amount and that it is a number for the total gift budget

if (giftPrice === ""){
	
	giftPrice = prompt ("Make sure you enter how much you want to spend on " + giftees[0] + "!");
	
} else if (isNaN(giftPrice)){

	giftPrice = prompt ("Only use numbers for " + giftees[0] + "'s gift amount, please " + "!");
	
} //This conditional checks to see if the user has entered an amount and that it is a number for giftee #1

if (giftPrice2 === ""){
	
	giftPrice2 = prompt ("Make sure you enter how much you want to spend on " + giftees[1] + "!");
	
} else if (isNaN(giftPrice2)){
	
	giftPrice2 = prompt ("Only use numbers for " + giftees[1] + "'s gift amount, please " + "!");
	
} //This conditional checks to see if the user has entered an amount and that it is a number for giftee #2

if (giftPrice3 === ""){
	
	giftPrice3 = prompt ("Make sure you enter how much you want to spend on " + giftees[2] + "!");
	
} else if (isNaN(giftPrice3)){
	
	giftPrice3 = prompt ("Only use numbers for " + giftees[2] + "'s gift amount, please " + "!");
	
} //This conditional checks to see if the user has entered an amount and that it is a number for giftee #3


if (giftPrice4 === ""){
	
	giftPrice4 = prompt ("Make sure you enter how much you want to spend on " + giftees[3] + "!");
	
} else if (isNaN(giftPrice4)){
	
	giftPrice4 = prompt ("Only use numbers for " + giftees[3] + "'s gift amount, please " + "!");
	
} //This conditional checks to see if the user has entered an amount and that it is a number for giftee #4


if (giftPrice5 === ""){
	
	giftPrice5 = prompt ("Make sure you enter how much you want to spend on " + giftees[4] + "!");
	
}  else 	if (isNaN(giftPrice5)){
	
	giftPrice5 = prompt ("Only use numbers for " + giftees[4] + "'s gift amount, please " + "!");
	
}  //This conditional checks to see if the user has entered an amount and that it is a number for giftee #5

if (giftPrice6 === ""){
	
	giftPrice6 = prompt ("Make sure you enter how much you want to spend on " + giftees[5] + "!");
	
} else if (isNaN(giftPrice6)){
	
	giftPrice6 = prompt ("Only use numbers for " + giftees[5] + "'s gift amount, please " + "!");
	
} //This conditional checks to see if the user has entered an amount and that it is a number for giftee #6


if (giftPrice7 === ""){
	
	giftPrice7 = prompt ("Make sure you enter how much you want to spend on " + giftees[6] + "!");
	
}  else if (isNaN(giftPrice7)){
	
	giftPrice7 = prompt ("Only use numbers for " + giftees[6] + "'s gift amount, please " + "!");
	
}  //This conditional checks to see if the user has entered an amount and that it is a number for giftee #7

if (giftPrice8 === ""){
	
	giftPrice8 = prompt ("Make sure you enter how much you want to spend on " + giftees[7] + "!");
	
} else if (isNaN(giftPrice8)){
	
	giftPrice8 = prompt ("Only use numbers for " + giftees[7] + "'s gift amount, please " + "!");
	
} //This conditional checks to see if the user has entered an amount and that it is a number for giftee #8

if (giftPrice9 === ""){
	
	giftPrice9 = prompt ("Make sure you enter how much you want to spend on " + giftees[8] + "!");
	
} else if (isNaN(giftPrice9)){
	
	giftPrice9 = prompt ("Only use numbers for " + giftees[8] + "'s gift amount, please " + "!");
	
} //This conditional checks to see if the user has entered an amount and that it is a number for giftee #9

if (giftPrice10 === ""){
	
	giftPrice10 = prompt ("Make sure you enter how much you want to spend on " + giftees[9] + "!");
	
} else if (isNaN(giftPrice10)){
	
	giftPrice10 = prompt ("Only use numbers for " + giftees[9] + "'s gift amount, please " + "!");
	
} //This conditional checks to see if the user has entered an amount and that it is a number for giftee #10

if (giftPrice11 === ""){
	
	giftPrice11 = prompt ("Make sure you enter how much you want to spend on " + giftees[10] + "!");
	
} else if (isNaN(giftPrice11)){
	
	giftPrice11 = prompt ("Only use numbers for " + giftees[10] + "'s gift amount, please " + "!");
	
} //This conditional checks to see if the user has entered an amount and that it is a number for giftee #11


console.log("You spent $" + giftPrice + " on " + giftees[0] + "." + " You spent $" + giftPrice2 + " on " + giftees[1] + "." + " You spent $" + giftPrice3 + " on " + giftees[2] + "." + " You spent $" + giftPrice4 + " on " + giftees[3] + "." + "\n You spent $" + giftPrice5 + " on " + giftees[4] + "." + " You spent $" + giftPrice6 + " on " + giftees[5] + "." + " You spent $" + giftPrice7 + " on " + giftees[6] + "." + " You spent $" + giftPrice8 + " on " + giftees[7] + "." + "\n You spent $" + giftPrice9 + " on " + giftees[8] + "." + " You spent $" + giftPrice10 + " on " + giftees[9] + "." + " You spent $" + giftPrice11 + " on " + giftees[10] + "."); //This prompts the user on what they spent on each person

var giftBudgetTotal = parseInt(giftBudget) - 40; //This deducts the friends price and the grab bag price from the total budget

var totalGiftPrice = parseInt(giftPrice) + parseInt(giftPrice2) + parseInt(giftPrice3) + parseInt(giftPrice4) + parseInt(giftPrice5) + parseInt(giftPrice6) + parseInt(giftPrice7) + parseInt(giftPrice8) + parseInt(giftPrice9) + parseInt(giftPrice10) + parseInt(giftPrice11); //This calculates how much would be spent based upon the amounts previously entered by the user

var giftAverage = (parseInt(giftPrice) + parseInt(giftPrice2) + parseInt(giftPrice3) + parseInt(giftPrice4) + parseInt(giftPrice5) + parseInt(giftPrice6) + parseInt(giftPrice7) + parseInt(giftPrice8) + parseInt(giftPrice9) + parseInt(giftPrice10) + parseInt(giftPrice11)) / 11; //This averages out the amount of money spent on each person


(giftBudgetTotal >= totalGiftPrice) ? console.log("Huzzah, you can afford to buy everyone what you picked out!") : console.log("I'm sorry, you cannot afford to buy everyone what you picked out this year.") //This conditional ternary sees whether or not you are able to afford the total cost of all the gifts based upon your chosen total budget price

console.log("Your budget was $" + giftBudget + ", and you would end up spending $" + totalGiftPrice + ".");
console.log("You spent an average of $" + parseInt(giftAverage) + " on each person."); //This lets the user know what their budget was, what the total price of all gifts was, and what the average amount spent on each person is


