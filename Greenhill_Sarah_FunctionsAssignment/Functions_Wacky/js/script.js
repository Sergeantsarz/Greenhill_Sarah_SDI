//Sarah R. Greenhill - 12/18/14 - Wacky Functions 
//You took a trip to vegas, enter how many drinks you had, how long it's been since your last drink, your weight and your sex. Get a readout of your current BAC. 
 
//Formula - BAC = (Standard Drinks * 0.06 * 100 * 1.055 / Weight * Gender Constant) - (0.015 * Hours)
//One 12oz beer, 5oz glass of wine or 1.5oz shot of liquor each equal one standard drink
//Gender constant is 0.68 for men and 0.55 for women. 

var Male = 0.68; //Gender Constant for males
var Female = 0.55; //Gender Constant for females
var drinks =  prompt("How many drinks did you have?"); //Prompts the user for how many drinks they had
var weight =  prompt("What is your weight?"); //Prompts the user for their weight
var yourSex =  prompt("Are you male or female?"); //Prompts the user for their sex 
var hours =  prompt("How many hours has it been since your last drink?"); //Prompts the user for how many hours since last alcoholic drink

while(isNaN(drinks) || drinks === ""){
	
if(drinks === ""){
	drinks = prompt("You didn't enter anything! How many drinks did you have?");
	}else {
		drinks = prompt("Only use numbers please! How many drinks did you have?");
	}
} //Validates for the drink prompt if they left it blank or used text instead of numbers

while(isNaN(weight) || weight === ""){
	
if(weight === ""){
	weight = prompt("You didn't enter anything! What is your weight?");
	}else {
		weight = prompt("Only use numbers please! What is your weight?");
	}
} //Validates for the weight prompt if they left it blank or used text instead of numbers

while(!isNaN(yourSex) || yourSex === ""){
	
if(yourSex === ""){
	yourSex = prompt("You didn't enter anything! What is your sex?");
	}else {
		yourSex = prompt("Only use letters please! What is your sex?");
	}
	
} //Validates for the yourSex prompt whether the user left it blank or used numbers instead of text 

while(yourSex != "Female" && yourSex != "Male"){

if(yourSex != "Female" || yourSex != "Male"){
		
		yourSex = prompt("Please only use capitalized 'Female' or 'Male' when choosing your sex.");
		}
} //Validates for the yourSex prompt if they used anything other than capitalized Female and Male 

while(isNaN(hours) || hours === ""){
	
if(hours === ""){
	hours = prompt("You didn't enter anything! What is your weight?");
	}else {
		hours = prompt("Only use numbers please! What is your weight?");
	}
} //Validates for the hours prompt if they left it blank or used text instead of numbers


function vegasLady(drinks , weight, Female , hours){
	
	var bloodAlcohol = (drinks * 0.06 * 100 * 1.055 / weight * Female) - (0.015 * hours);
	
	return bloodAlcohol;
	} //This function does the math for a female's blood alcohol level, accounting for time passed since last drink and deducting that from the BAC


function vegasGuy(drinks , weight, Male , hours){
	
	var bloodAlcohol = (drinks * 0.06 * 100 * 1.055 / weight * Male) - (0.015 * hours);
	
	return bloodAlcohol;
} //This function does the math for a male's blood alcohol level, accounting for time passed since last drink and deducting that from the BAC

var theGirlStory = vegasLady(drinks , weight, Female , hours); //The container for the female's BAC function vegasLady
var theBoyStory = vegasGuy(drinks , weight, Male , hours); //The container for the male's BAC function vegasGuy

(yourSex === "Female") ? console.log("You're a woman, your weight is " + weight + ", you had " + drinks +  " drink(s) and it has been " + hours + " hours since your last alcoholic beverage. Your Blood Alcohol Content is " + theGirlStory + ".") : console.log("You're a man, your weight is " + weight + ", you had " + drinks +  " drink(s) and it has been " + hours + " hours since your last alcoholic beverage. Your Blood Alcohol Content is " + theBoyStory + "."); //The final output of all the values entered and the user's current blood alcohol level

