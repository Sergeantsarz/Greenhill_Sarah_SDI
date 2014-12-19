//Sarah R. Greenhill - 12/18/14 - Wacky Functions 
//You took a trip to vegas, enter your story, how many drinks you had, how long it's been since your last drink, and your sex. Get a readout of your story, your blood alcohol the past evening and your current blood alcohol level
 
//Formula - BAC = (Standard Drinks * 0.06 * 100 * 1.055 / Weight * Gender Constant) - (0.015 * Hours)
//One 12oz beer, 5oz glass of wine or 1.5oz shot of liquor each equal one standard drink
//Gender constant is 0.68 for men and 0.55 for women. 

//var hangOver =  prompt("So, what'd you do last night on the strip?");

/*while(hangOver === "" || !isNaN(hangOver)){
	
	if(!isNaN(hangOver)){
	hangOver = prompt("Please don't use numbers while so heavily hung over, it hurts us! \nSo what went down last night?");
	}else if (hangOver === ""){
		hangOver = prompt("Wow, you must be destroyedkl
	}
}*/
var Male = 0.68;
var Female = 0.55;
var drinks =  prompt("How many drinks did you have?");
var weight =  prompt("What is your weight?");
var yourSex =  prompt("Are you male or female?");
var hours =  prompt("How many hours has it been since your last drink?");
/*while(isNaN(drinks) || drinks === ""){
	
if(isNaN(drinks)){
	drinks = prompt("Only use numbers to tell me how many drinks you had! \nSo how many did you knock back?");
	}else if (drinks === ""){
		drinks = prompt("Get it together, you didn't enter a number of drinks! How many did you have?");
	}
}*/


/*while(!isNaN(yourSex) || yourSex === ""){
	
if(!isNaN(yourSex)){
	yourSex = prompt("Only use 'Male' or 'Female' to tell me your sex.");
	}else if (yourSex === ""){
		yourSex = prompt("You didn't enter anything. Are you male or female?");
	}


}*/

function vegasLady(drinks , weight, Female , hours){
	
	var bloodAlcohol = (drinks * 0.06 * 100 * 1.055 / weight * Female) - (0.015 * hours);
	
	return bloodAlcohol;
	}


function vegasGuy(drinks , weight, Male , hours){
	
	var bloodAlcohol = (drinks * 0.06 * 100 * 1.055 / weight * Male) - (0.015 * hours);
	
	return bloodAlcohol;
	}

var theGirlStory = vegasLady(drinks , weight, Female , hours);
var theBoyStory = vegasGuy(drinks , weight, Male , hours);

(yourSex === "Female") ? console.log("You're a woman, your weight is " + weight + ", you had " + drinks +  " drink(s) and it has been " + hours + " hours since your last alcoholic beverage. Your Blood Alcohol Content is " + theGirlStory + ".") : console.log("You're a man, your weight is " + weight + ", you had " + drinks +  " drink(s) and it has been " + hours + " hours since your last alcoholic beverage. Your Blood Alcohol Content is " + theBoyStory + ".");

