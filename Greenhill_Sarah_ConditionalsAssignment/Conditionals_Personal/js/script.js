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

var giftBudgetTotal = parseInt(giftBudget) - 40;

var totalGiftPrice = parseInt(giftPrice) + parseInt(giftPrice2) + parseInt(giftPrice3) + parseInt(giftPrice4) + parseInt(giftPrice5) + parseInt(giftPrice6) + parseInt(giftPrice7) + parseInt(giftPrice8) + parseInt(giftPrice9) + parseInt(giftPrice10) + parseInt(giftPrice11);

var giftAverage = (parseInt(giftPrice) + parseInt(giftPrice2) + parseInt(giftPrice3) + parseInt(giftPrice4) + parseInt(giftPrice5) + parseInt(giftPrice6) + parseInt(giftPrice7) + parseInt(giftPrice8) + parseInt(giftPrice9) + parseInt(giftPrice10) + parseInt(giftPrice11)) / 11;

(giftBudgetTotal >= totalGiftPrice) ? console.log("Huzzah, you can afford to buy everyone what you picked out!") : console.log("I'm sorry, you cannot afford to buy everyone what you picked out this year.")

console.log("Your budget was " + giftBudget + ", and you would end up spending " + totalGiftPrice + ".");
console.log("You spent an average of " + giftAverage + " on each person.");

console.log("You spent " + giftPrice + " on " + giftees[0] + ".");
console.log("You spent " + giftPrice + " on " + giftees[1] + ".");
console.log("You spent " + giftPrice + " on " + giftees[2] + ".");
console.log("You spent " + giftPrice + " on " + giftees[3] + ".");
console.log("You spent " + giftPrice + " on " + giftees[4] + ".");
console.log("You spent " + giftPrice + " on " + giftees[5] + ".");
console.log("You spent " + giftPrice + " on " + giftees[6] + ".");
console.log("You spent " + giftPrice + " on " + giftees[7] + ".");
console.log("You spent " + giftPrice + " on " + giftees[8] + ".");
console.log("You spent " + giftPrice + " on " + giftees[9] + ".");
console.log("You spent " + giftPrice + " on " + giftees[10] + ".");