//Sarah R. Greenhill 12/4/14 Expressions Assignment WACKY

//Problem: Beebee hates cats, but loves to eat them. Calcluate how many cats Beebee can eat before she becomes full. Once Beebee is full, she still wants to eat more but can't unless she poops. Calculate how many times Beebee has to poop in order to eat more cats. How many cats can Beebee still eat? Making Beebee vomit will open up more space to fit consumed cats. 

var beebeeGutCapacity = 100; //The value of Beebee's full belly
var poop = 2; //The amount that each poop grants Beebee towards empty gut space
var catNumInput = prompt("How many cats has Beebee eaten?"); //Input for the number of cats Beebee has eaten
var catWeightInput = prompt("How much does one cat weigh?"); //Input for how much each individual cat weighs
var timesPooped = prompt("How many times did Beebee poop?"); //Input for the amount of times Beebee pooped

var totalPoop = timesPooped * poop; //Calculating the total gut space Beebee gets back from pooping
var totalCat = catNumInput * catWeightInput; //Calculating how much gut space the amount of cats Beebee has eaten occupies
var spaceLeft = beebeeGutCapacity - totalCat + totalPoop; //Calculating how much gut space is left after eating the specified number of cats and pooping
var howManyMoreCats = spaceLeft / catWeightInput; //Calculating how many more cats Beebee has room to eat 

var vomit = [2 , 4 , 6 , 8]; //An array containing the amounts Beebee will gain towards gut space if she vomits
var noPuke = howManyMoreCats ++; //Calculating that if Beebee does not vomit she loses 1 cat's worth of space
var once = howManyMoreCats + vomit[0]; //Calculating how many more cats Beebee can eat if she pukes once
var twice = howManyMoreCats + vomit[1] --; //Calculating how many more cats Beebee can eat if she pukes twice adding on 1 unit of space per puke
var thrice = howManyMoreCats + vomit[2] --; //Calculating how many more cats Beebee can eat if she pukes three times adding on 1 unit of space per puke
var fourTimes = howManyMoreCats + vomit[3] --; //Calculating how many more cats Beebee can eat if she pukes four times adding on 1 unit of space per puke



console.log("Beebee has eaten " + catNumInput + " cats and pooped " + timesPooped + " times. Her belly can now hold " + howManyMoreCats + " more cats. If she does not vomit at all, she will be able to fit " + noPuke + " cats. If Beebee vomits once, she can fit " + once + " more cats, twice and she can fit " + twice + ". If she blows chunks three times, she will have room for " + thrice + " more cats, four times will leave room for " + fourTimes + " horrible felines."); //Output of how many cats Beebee has eaten, how many times she pooped, how many cats her gut can now contain and how many more cats she can eat if she vomits a certain number of times 


