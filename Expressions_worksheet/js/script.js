//Sarah R. Greenhill 12/4/14 Expressions Worksheet

//Dog Years - Dogs age 7 times faster than humans so a dog that is 1 year old in human years is 7 years old in “dog years.”  Calculate how old Sparky the pit bull is in dog years based on his actual age.

/* var sparkysAge = 7; //Setting Sparky's accelerated dog age
var ageInHuman = 5; //Setting what age Sparky is in human years
var dogYears = sparkysAge * ageInHuman; //Calculating how old Sparky actually is

console.log("Sparky is " + ageInHuman + " human years old which is " + dogYears + " in dog years!");
*/

//Slice of Pie Part 1 - A bunch of students are having a party and somebody ordered pizza. Create an expression that calculates how much pizza each partygoer will get at the party.  (Assume all pizzas have the same number of slices and that the person dividing the pizza is really precise, so this can be a decimal, like 3.52 slices, etc.)

/* var slicesPerPizza = 8; //Setting how many slices each pizza has
var peopleAtParty = 8; //Setting how many people attend the party
var pizzasOrdered = 2; //Setting how many pizzas they ordered
var eachPersonGot = (slicesPerPizza * pizzasOrdered) / peopleAtParty; //Calculating how many slices each person gets

console.log("Each person ate " + eachPersonGot + " slices of pizza at the party.")
*/

//Slice of Pie Part 2 - At the pizza party Sparky, the host’s dog is excited, because he gets the leftover pizza after the slices have been divided up evenly among the guests. Assume guests get whole slices, how many whole slices will Sparky feast on? 

/* var slicesPerPizza = 8; //Setting how many slices each pizza has
var peopleAtParty = 10; //Setting how many people attend the party
var pizzasOrdered = 4; //Setting how many pizzas they ordered
var eachPersonGot = (slicesPerPizza * pizzasOrdered) / peopleAtParty; //Calculating how many slices each person gets
var sparkysSlices = slicesPerPizza / eachPersonGot; //Calculating up what Sparky gets

console.log("Each person ate " + eachPersonGot + " slices of pizza at the party.")
console.log("Sparky got " + sparkysSlices + " slices of pizza.");
*/

//Average Shopping Bill -  You are budgeting your money for the year and must calculate your average weekly grocery shopping spending over the past five weeks. Store the past five grocery totals as a list in an array. Create an expression that will use the items in the array to calculate the average amount spent on groceries. Please note: there should only be one given for this problem set, the array holding the five weekly totals.  You should be able to access the array using the array access notation discussed earlier in the course. 

/* var groceryTotals = [100 , 50 , 200 , 150 , 25]; //Setting the amounts spent for each week
var total = groceryTotals[0] + groceryTotals[1] + groceryTotals[2] + groceryTotals[3] + groceryTotals[4]; //Adding the amount spent each week together through the array
var average = total / 5; //Getting the average spent by dividing the total by the number of weeks

console.log("You have spent a total of $" + total + " on groceries over the past 5 weeks. That is an average of $" + average + " per week.")
*/

//Discounts - Calculate the discounted price for an item. Create an expression that will calculate the discounted price with and without sales tax. (It is acceptable for the result to have more than two digits after the decimal. $345.896 for example.)

//Item is a gluten free cupcake
/* var origPrice = 4; //Set original price of cupcake
var discountPercent = 50; //Set percentage off
var getPercentOff = (origPrice * .5); //Subtract a 50% discount
var discountPrice = origPrice - getPercentOff; //Calculate discounted price
var calcTax = discountPrice * .635; //Calculate sales tax on discounted price
var yesTax = discountPrice + calcTax; //Calculate new price of the cupcake with tax 


console.log("Your gluten free cupcake was originally $" + origPrice + " but after a " + discountPercent + "% discount, it is now $" +  discountPrice + " without tax, and $" + yesTax + " with tax in the state of Connecticut.")
*/