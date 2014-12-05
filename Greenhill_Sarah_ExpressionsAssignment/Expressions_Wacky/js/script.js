//Sarah R. Greenhill 12/4/14 Expressions Assignment WACKY

//Problem: Beebee hates cats, but loves to eat them. Calcluate how many cats Beebee can eat before she becomes full. Once Beebee is full, she still wants to eat more but can't unless she poops. Calculate how many times Beebee has to poop in order to eat more cats. How many cats can Beebee still eat? Making Beebee vomit will open up more space to fit consumed cats. 

var beebeeGutCapacity = 100;
var poop = 2;
var catNumInput = prompt("How many cats has Beebee eaten?");
var catWeightInput = prompt("How much does one cat weigh?");
var timesPooped = prompt("How many times did Beebee poop?");

var totalPoop = timesPooped * poop; 
var totalCat = catNumInput * catWeightInput; 
var spaceLeft = beebeeGutCapacity - totalCat + totalPoop;
var howManyMoreCats = spaceLeft / catWeightInput;

var vomit = [2 , 4 , 6 , 8];
var once = howManyMoreCats + vomit[0];
var twice = howManyMoreCats + vomit[1]
var thrice = howManyMoreCats + vomit[2]
var fourTimes = howManyMoreCats + vomit[3]


console.log("Beebee has eaten " + catNumInput + " cats and pooped " + timesPooped + " times. Her belly can now hold " + howManyMoreCats + " more cats. If Beebee vomits once, she can fit " + once + " more cats, twice and she can fit " + twice + ". If she blows chunks three times, she will have room for " + thrice + " more cats, four times will leave room for " + fourTimes + " horrible felines."); 


