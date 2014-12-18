//Sarah R. Greenhill - 12/18/14 - Wacky Functions 
//You took a trip to vegas, enter your story, how many drinks you had, how long it's been since your last drink, and your sex. Get a readout of your story, your blood alcohol the past evening and your current blood alcohol level
 
//Formula - BAC = (Standard Drinks * 0.06 * 100 * 1.055 / Weight * Gender Constant) - (0.015 * Hours)
//One 12oz beer, 5oz glass of wine or 1.5oz shot of liquor each equal one standard drink
//Gender constant is 0.68 for men and 0.55 for women. 

var hangOver =  prompt("So, what'd you do last night on the strip?");

While(!isNaN(hangOver) || hangOver === ""){
	
	if(!isNaN(hangOver)){
	hangOver = prompt("Please don't use numbers while so heavily hung over, it hurts us! \nSo what went down last night?");
	}else if (hangOver === ""){
		hangOver = prompt("Wow, you must be destroyed. You didn't even tell me what happened! Spill the beans.");
	}
}

var drinks =  prompt("How many drinks did you have?");

While(!isNaN(hangOver) || hangOver === ""){
	
if(isNaN(drinks)){
	hangOver = prompt("Only use numbers to tell me how many drinks you had! \nSo how many did you knock back?");
	}else if (drinks === ""){
		drinks = prompt("Get it together, you didn't enter a number of drinks! How many did you have?");
	}
}
