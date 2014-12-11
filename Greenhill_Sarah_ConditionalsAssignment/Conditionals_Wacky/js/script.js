//Sarah R. Greenhill - 12/11/14 - Conditionals Assignment - Wacky

//Oh no, a zombie apocalypse! Who's infected and who isn't? 

var survivorTemps = prompt ("It's the zombie apocalypse! Any and all survivors must be checked for infection.\nWhat is your current tempurature?"); //Prompts the user to input a tempurature that will determine if the survivor is infected

var survivorPick = prompt ("Choose an apocalypse survivor with a number from 0 to 7.");//Prompts the user to input a number from 0  to 7 which will determine which survivor in the array the person will be testing for infection 

var survivors = ["Sarah" , "Paul" , "Kyle" , "Steph" , "Amanda" , "Ed" , "Tim" , "Gabby"];//This array holds the names of each survivor


if (survivorPick == 0){
	
		console.log("You chose survivor " + survivors[0] + ".");
} //Survivor 1 is picked do this

if (survivorPick == 1){
	
		console.log("You chose survivor " + survivors[1] + ".");
} //Survivor 2 is picked do this

if (survivorPick == 2){
	
		console.log("You chose survivor " + survivors[2] + ".");
} //Survivor 3 is picked do this

if (survivorPick == 3){
	
		console.log("You chose survivor " + survivors[3] + ".");
} //Survivor 4 is picked do this

if (survivorPick == 4){
	
		console.log("You chose survivor " + survivors[4] + ".");
} //Survivor 5 is picked do this

if (survivorPick == 5){
	
		console.log("You chose survivor " + survivors[5] + ".");
} //Survivor 6 is picked do this

if (survivorPick == 6){
	
		console.log("You chose survivor " + survivors[6] + ".");
} //Survivor 7 is picked do this

if (survivorPick == 7){
	
		console.log("You chose survivor " + survivors[7] + ".");
} //Survivor 8 is picked do this



if (survivorTemps >= 102 ){
	
	console.log("This survivor is infected, put them down or run for your life!");
} else if (survivorTemps < 79){
	
	console.log("This is not a survivor at all. This person is dead.");
}else {
	
	console.log("This survivor is NOT infected. They're safe, for now...");
}//This conditonal tests the tempurature that the user put in to begin with, if it is above 102, the survivor is infected. If their temp is below 79, the person is dead. And finally, if neither of those are true, the survivor is NOT infected


