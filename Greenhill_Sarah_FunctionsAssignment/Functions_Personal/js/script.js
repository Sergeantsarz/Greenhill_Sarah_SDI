//Sarah R. Greenhill - 12/18/14 - Personal Functions 

//The user wants to get a new dog. Prompt the user to input their budget, choose a dog breed from a list, whether or not it is purebred and calculate whether or not they can afford the dog.  

var dogPrice = [2500 , 1450 , 1000 , 1650 , 1250 , 1250 , 2000 , 1500 , 1350 , 2050];


var dogCost = 0;


var dogType = prompt ("Please choose a dog from this list: \n\n-Poodle, Boxer, German Shepherd, Bichon Frise, Golden Retriever, Laborador, Schnauzer, Bulldog, Pug, or Yorkshire Terrier-");
	
var dogBudget =	prompt ("What is your budget for your new dog?");

var pureBred = prompt ("Is the dog you seek a purebred?");

if(pureBred === "No" || pureBred === "no"){
	
	dogCost - 500; 
	
}

if(dogType === "Poodle" || dogType === "poodle"){
		
		dogCost = dogPrice[0];
	}
	if(dogType === "Boxer" || dogType === "boxer"){
		
		dogCost = dogPrice[1];
	}
	if(dogType === "German Shepherd" || dogType === "german shepherd"){
		
		dogCost = dogPrice[2];
	}
	if(dogType === "Bichon Frise" || dogType === "bichon frise"){
		
		dogCost = dogPrice[3];
	}
	if(dogType === "Golden Retriever" || dogType === "golden retriever"){
		
		dogCost = dogPrice[4];
	}
	if(dogType === "Laborador" || dogType === "laborador"){
		
		dogCost = dogPrice[5];
	}
	if(dogType === "Schnauzer" || dogType === "schnauzer"){
		
		dogCost = dogPrice[6];
	}
	if(dogType === "Bulldog" || dogType === "bulldog"){
		
		dogCost = dogPrice[7];
	}
	if(dogType === "Pug" || dogType === "pug"){
		
		dogCost = dogPrice[8];
	}
	if(dogType === "Yorkshire Terrier" || dogType === "yorkshire terrier"){
		
		dogCost = dogPrice[9];
	}



dogTotal = function() {
 return dogBudget - dogCost;
}; //Anonymous function containing the left over money after purchase of the dog
 
var dogAfford = dogTotal();



console.log("The dog breed you chose is " + dogType + " and your budget is " + dogBudget + ". In order to afford this dog, you needed " + dogCost + ". You have $" + dogAfford + " left over.");

if(dogCost > dogBudget){
	
	console.log("You cannot afford this dog.");
	
}else{
	
	console.log("You can afford this dog.");
}



