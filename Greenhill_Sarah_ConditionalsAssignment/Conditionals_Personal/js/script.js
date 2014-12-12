//Sarah R. Greenhill - 12/11/14 - Conditionals Assignment - Personal

//Christmastime means presents and presents mean money. There are 14 different people that need to be purchased for with a total budget of 200 dollars. The grab bag and friends must be $20 each. 

var grabBag = 20;
var friends = 20;
var giftees = ["Luke" , "Kristy" , "Joel" , "Gabby" , "Dee" , "Mom", "Dad" , "inlaws" , "Uncle Chuck" , "Jen" , "Auntie Debbie"];
var giftBudget = prompt ("What would you like to spend, in total?");
var giftPrice = prompt ("Please enter how much you want to spend on " + giftees[0] + ".");
var giftPrice2 = prompt ("Please enter how much you want to spend on " + giftees[1] + ".");
var giftPrice3 = prompt ("Please enter how much you want to spend on " + giftees[2] + ".");
var giftPrice4 = prompt ("Please enter how much you want to spend on " + giftees[3] + ".");
var giftPrice5 = prompt ("Please enter how much you want to spend on " + giftees[4] + ".");
var giftPrice6 = prompt ("Please enter how much you want to spend on " + giftees[5] + ".");
var giftPrice7 = prompt ("Please enter how much you want to spend on " + giftees[6] + ".");
var giftPrice8 = prompt ("Please enter how much you want to spend on " + giftees[7] + ".");
var giftPrice9 = prompt ("Please enter how much you want to spend on " + giftees[8] + ".");
var giftPrice10 = prompt ("Please enter how much you want to spend on " + giftees[9] + ".");
var giftPrice11 = prompt ("Please enter how much you want to spend on " + giftees[10] + ".");

if (giftBudget === ""){
	
	giftBudget = prompt ("Make sure you enter what you'd like to spend in total!");
	
} else if (isNaN(giftBudget)){

	giftBudget = prompt ("Only use numbers to select your total budget!");
	
}

if (giftPrice === ""){
	
	giftPrice = prompt ("Make sure you enter how much you want to spend on " + giftees[0] + "!");
	
} else if (isNaN(giftPrice)){

	giftPrice = prompt ("Only use numbers for " + giftees[0] + "'s gift amount, please " + "!");
	
}

if (giftPrice2 === ""){
	
	giftPrice2 = prompt ("Make sure you enter how much you want to spend on " + giftees[1] + "!");
	
} else if (isNaN(giftPrice2)){
	
	giftPrice2 = prompt ("Only use numbers for " + giftees[1] + "'s gift amount, please " + "!");
	
} 

if (giftPrice3 === ""){
	
	giftPrice3 = prompt ("Make sure you enter how much you want to spend on " + giftees[2] + "!");
	
} else if (isNaN(giftPrice3)){
	
	giftPrice3 = prompt ("Only use numbers for " + giftees[2] + "'s gift amount, please " + "!");
	
} 


if (giftPrice4 === ""){
	
	giftPrice4 = prompt ("Make sure you enter how much you want to spend on " + giftees[3] + "!");
	
} else if (isNaN(giftPrice4)){
	
	giftPrice4 = prompt ("Only use numbers for " + giftees[3] + "'s gift amount, please " + "!");
	
} 


if (giftPrice5 === ""){
	
	giftPrice5 = prompt ("Make sure you enter how much you want to spend on " + giftees[4] + "!");
	
}  else 	if (isNaN(giftPrice5)){
	
	giftPrice5 = prompt ("Only use numbers for " + giftees[4] + "'s gift amount, please " + "!");
	
}  

if (giftPrice6 === ""){
	
	giftPrice6 = prompt ("Make sure you enter how much you want to spend on " + giftees[5] + "!");
	
} else if (isNaN(giftPrice6)){
	
	giftPrice6 = prompt ("Only use numbers for " + giftees[5] + "'s gift amount, please " + "!");
	
} 


if (giftPrice7 === ""){
	
	giftPrice7 = prompt ("Make sure you enter how much you want to spend on " + giftees[6] + "!");
	
}  else if (isNaN(giftPrice7)){
	
	giftPrice7 = prompt ("Only use numbers for " + giftees[6] + "'s gift amount, please " + "!");
	
}  

if (giftPrice8 === ""){
	
	giftPrice8 = prompt ("Make sure you enter how much you want to spend on " + giftees[7] + "!");
	
} else if (isNaN(giftPrice8)){
	
	giftPrice8 = prompt ("Only use numbers for " + giftees[7] + "'s gift amount, please " + "!");
	
} 

if (giftPrice9 === ""){
	
	giftPrice9 = prompt ("Make sure you enter how much you want to spend on " + giftees[8] + "!");
	
} else if (isNaN(giftPrice9)){
	
	giftPrice9 = prompt ("Only use numbers for " + giftees[8] + "'s gift amount, please " + "!");
	
} 

if (giftPrice10 === ""){
	
	giftPrice10 = prompt ("Make sure you enter how much you want to spend on " + giftees[9] + "!");
	
} else if (isNaN(giftPrice10)){
	
	giftPrice10 = prompt ("Only use numbers for " + giftees[9] + "'s gift amount, please " + "!");
	
} 

if (giftPrice11 === ""){
	
	giftPrice11 = prompt ("Make sure you enter how much you want to spend on " + giftees[10] + "!");
	
} else if (isNaN(giftPrice11)){
	
	giftPrice11 = prompt ("Only use numbers for " + giftees[10] + "'s gift amount, please " + "!");
	
}


console.log("You spent $" + giftPrice + " on " + giftees[0] + "." + " You spent $" + giftPrice2 + " on " + giftees[1] + "." + " You spent $" + giftPrice3 + " on " + giftees[2] + "." + " You spent $" + giftPrice4 + " on " + giftees[3] + "." + "\n You spent $" + giftPrice5 + " on " + giftees[4] + "." + " You spent $" + giftPrice6 + " on " + giftees[5] + "." + " You spent $" + giftPrice7 + " on " + giftees[6] + "." + " You spent $" + giftPrice8 + " on " + giftees[7] + "." + "\n You spent $" + giftPrice9 + " on " + giftees[8] + "." + " You spent $" + giftPrice10 + " on " + giftees[9] + "." + " You spent $" + giftPrice11 + " on " + giftees[10] + "."); 

var giftBudgetTotal = parseInt(giftBudget) - 40;

var totalGiftPrice = parseInt(giftPrice) + parseInt(giftPrice2) + parseInt(giftPrice3) + parseInt(giftPrice4) + parseInt(giftPrice5) + parseInt(giftPrice6) + parseInt(giftPrice7) + parseInt(giftPrice8) + parseInt(giftPrice9) + parseInt(giftPrice10) + parseInt(giftPrice11);

var giftAverage = (parseInt(giftPrice) + parseInt(giftPrice2) + parseInt(giftPrice3) + parseInt(giftPrice4) + parseInt(giftPrice5) + parseInt(giftPrice6) + parseInt(giftPrice7) + parseInt(giftPrice8) + parseInt(giftPrice9) + parseInt(giftPrice10) + parseInt(giftPrice11)) / 11;


(giftBudgetTotal >= totalGiftPrice) ? console.log("Huzzah, you can afford to buy everyone what you picked out!") : console.log("I'm sorry, you cannot afford to buy everyone what you picked out this year.")

console.log("Your budget was $" + giftBudget + ", and you would end up spending $" + totalGiftPrice + ".");
console.log("You spent an average of $" + giftAverage + " on each person.");


