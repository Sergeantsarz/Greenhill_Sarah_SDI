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

var slicesPerPizza = 10; //Setting how many slices each pizza has
var peopleAtParty = 8; //Setting how many people attend the party
var pizzasOrdered = 4; //Setting how many pizzas they ordered
var eachPersonGot = (slicesPerPizza * pizzasOrdered) / peopleAtParty; //Calculating how many slices each person gets
var pizzaSlices = eachPersonGot % peopleAtParty; 
console.log("Sparky got " + pizzaSlices + " slices of pizza.");