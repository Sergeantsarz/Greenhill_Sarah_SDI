//Sarah R. Greenhill - 12/16/14 - Functions Worksheet

//Circumference - Calculate the circumference of a circle. Diameter = 2 * radius : Circumference = 3.14 * Diameter : Area = 3.14  * radius^2

var radius = prompt ("What's the radius of the circle?");
	
		if(radius === ""){
	
	radius = prompt ("You didn't choose a radius!");
}else if (isNaN(radius)){

	radius = prompt ("Only use numbers for your radius!");
	
}

var d = 2 * radius;
var p = 3.14; 

var circTotal = circumference(d, p);

function circumference(d, p){
	
	return d * p;
	
}
console.log("The radius of the circle is " + radius + ". The circumference of the circle is " + circTotal + ".");





//Stung! It takes 8.666666667 bee stings per pound to kill an animal. Calculate how many bee stings are needed to kill an animal in a function 

var animalWeight = prompt ("What's the animal's weight?"); 

if(animalWeight === ""){
	
	animalWeight = prompt ("You didn't choose a weight!");
}else if (isNaN(animalWeight)){

	animalWeight = prompt ("Only use numbers to select the weight of your animal!");
	
}


var beeSting = 8.666666667
var totalStings = howMany(beeSting, animalWeight);

function howMany(){
	return animalWeight / beeSting ;
	
	
}
console.log("Your animal weighs " + animalWeight+ " pound(s). It takes " + totalStings + " bee sting(s) to kill this animal.");