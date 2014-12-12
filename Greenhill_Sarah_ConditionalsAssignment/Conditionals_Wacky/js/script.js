//Sarah R. Greenhill - 12/11/14 - Conditionals Assignment - Wacky

//Oh no, a zombie apocalypse! Who's infected and who isn't? 

var survivorTemps = prompt ("It's the zombie apocalypse! Any and all survivors must be checked for infection.\nWhat is your current tempurature?"); //Prompts the user to input a tempurature that will determine if the survivor is infected

var survivorPick = prompt ("Choose an apocalypse survivor with a number from 0 to 7.");//Prompts the user to input a number from 0  to 7 which will determine which survivor in the array the person will be testing for infection 

var survivors = ["Sarah" , "Paul" , "Kyle" , "Steph" , "Amanda" , "Ed" , "Tim" , "Gabby"];//This array holds the names of each survivor

if (survivorTemps === ""){
	
	survivorTemps = prompt ("You never picked a tempurature!");
	
} else if (isNaN(survivorTemps)){

	survivorTemps = prompt ("Only use numbers to select a survivor's tempurature!");
	
} //This validates that the person is entering a value and that it is a number

if (survivorPick === ""){
	
	survivorPick = prompt ("You never picked a number from 0 to 7!");
	
} else if (isNaN(survivorPick)){

	survivorPick = prompt ("Only use numbers  0 to 7 to select a survivor!");
	
} //This validates that the person is entering a value and that it is a number

if (survivorPick == 0){
	
		console.log("You chose survivor " + survivors[0] + ".");
} //Prompt the user who they have picked

if (survivorPick == 1){
	
		console.log("You chose survivor " + survivors[1] + ".");
} //Prompt the user who they have picked

if (survivorPick == 2){
	
		console.log("You chose survivor " + survivors[2] + ".");
} //Prompt the user who they have picked

if (survivorPick == 3){
	
		console.log("You chose survivor " + survivors[3] + ".");
} //Prompt the user who they have picked

if (survivorPick == 4){
	
		console.log("You chose survivor " + survivors[4] + ".");
} //Prompt the user who they have picked

if (survivorPick == 5){
	
		console.log("You chose survivor " + survivors[5] + ".");
} //Prompt the user who they have picked

if (survivorPick == 6){
	
		console.log("You chose survivor " + survivors[6] + ".");
} //Prompt the user who they have picked

if (survivorPick == 7){
	
		console.log("You chose survivor " + survivors[7] + ".");
} //Prompt the user who they have picked



if (survivorTemps >= 102 ){
	
	console.log("This survivor is infected, put them down or run for your life!");
} else if (survivorTemps < 79){
	
	console.log("This is not a survivor at all. This person is dead.");
}else {
	
	console.log("This survivor is NOT infected. They're safe, for now...");
}//This conditonal tests the tempurature that the user put in to begin with, if it is above 102, the survivor is infected. If their temp is below 79, the person is dead. And finally, if neither of those are true, the survivor is NOT infected


