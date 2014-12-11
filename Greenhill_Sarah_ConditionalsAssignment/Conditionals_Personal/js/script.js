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

var totalGiftPrice = giftPrice + giftPrice2 + giftPrice3 + giftPrice4 + giftPrice5 + giftPrice6 + giftPrice7 + giftPrice8 + giftPrice9 + giftPrice10 + giftPrice11;



(giftBudget <= totalGiftPrice) ? "Huzzah, you can afford to buy everyone what you picked out!" : "I'm sorry, you cannot afford to buy everyone what you picked out this year."