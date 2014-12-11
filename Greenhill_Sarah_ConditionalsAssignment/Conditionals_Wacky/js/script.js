//Sarah R. Greenhill - 12/11/14 - Conditionals Assignment - Wacky

//Oh no, a zombie apocalypse! Who's infected and who isn't? 

var survivorTemps = prompt ("It's the zombie apocalypse! Any and all survivors must be checked for infection.\nWhat is your current tempurature?");

var survivorPick = prompt ("Choose an apocalypse survivor with a number from 0 to 7.");
//var survivorTemps = ["109" , "100" , "104" , "101" , "105" , "99.9" , "35" , "98.6" , "100.3" , "103" , "102" , "97.9" , "100.2" , "10"];
var survivors = ["Sarah" , "Paul" , "Kyle" , "Steph" , "Amanda" , "Ed" , "Tim" , "Gabby"];


if (survivorPick == 0){
	
		console.log("You chose survivor " + survivors[0] + ".");
}

if (survivorPick == 1){
	
		console.log("You chose survivor " + survivors[1] + ".");
}



if (survivorTemps >= 102 ){
	
	console.log("This survivor is infected, put them down or run for your life!");
} else if (survivorTemps < 79){
	
	console.log("This is not a survivor at all. This person is dead.");
}else {
	
	console.log("This survivor is NOT infected. They're safe, for now...");
}


