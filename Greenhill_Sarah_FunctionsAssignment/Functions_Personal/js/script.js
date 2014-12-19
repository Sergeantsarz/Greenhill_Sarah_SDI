//Sarah R. Greenhill - 12/18/14 - Personal Functions 

//The user wants to get a new dog. Prompt the user to input their budget, choose a dog breed from a list, whether or not it is purebred and calculate whether or not they can afford the dog. Also calculate how many dogs they can afford based upon their budget. 

var dogBreeds = ["Poodle" , "Boxer" , "German Shepherd" , "Bichon Frise" , "Golden Retriever" , "Laborador" , "Schnauzer" , "Bulldog" , "Pug" , "Yorkshire Terrier"];

dogBreeds[0] = 2500;
dogBreeds[1] = 1450;
dogBreeds[2] = 1000;
dogBreeds[3] = 1650;
dogBreeds[4] = 1250;
dogBreeds[5] = 1250;
dogBreeds[6] = 2000;
dogBreeds[7] = 1500;
dogBreeds[8] = 1350;
dogBreeds[9] = 2000;



var dog = function() {
	prompt ("Please choose a dog from this list: \n\n-Poodle, Boxer, German Shepherd, Bichon Frise, Golden Retriever, Laborador, Schnauzer, Bulldog, Pug, or Yorkshire Terrier-");
}//Don't forget to use this anonymous function

 
dog();