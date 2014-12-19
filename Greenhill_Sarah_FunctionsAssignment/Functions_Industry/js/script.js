//Sarah R. Greenhill - 12/18/14 - Industry Functions

//The user should be able to input popular/well known color names and output the hex number for that color



var hex1 = "#000000"; //black
var hex2 = "#ffffff"; //white
var hex3 = "#ff0000"; //red
var hex4 = "#cccccc"; //grey
var hex5 = "#ff00ff"; //magenta
var hex6 = "#0000ff"; //blue
var hex7 = "#008000"; //green
var hex8 = "#800080"; //purple
var hex9 = "#ffff00"; //yellow
var hex10 = "#00ffff"; //Cyan

var chosenHex = ""; //Container for the user's hex depending on their color choice

var colorChoice = prompt("Choose a color from this list to convert into a hex code: \n\n ~Black, White, Red, Grey, Magenta, Blue, Green, Purple, Yellow, Cyan~");

while(!isNaN(colorChoice) || colorChoice === ""){
	
if(colorChoice === ""){
	colorChoice = prompt("You didn't enter anything! What color would you like to convert from this list? \n\n ~Black, White, Red, Grey, Magenta, Blue, Green, Purple, Yellow, Cyan~");
	}else {
		colorChoice = prompt("Only use text please! What color would you like to convert from this list? \n\n ~Black, White, Red, Grey, Magenta, Blue, Green, Purple, Yellow, Cyan~");
	}
} //Validates for the colorChoice prompt if they left it blank or used numbers instead of text

while(colorChoice != "Black" && colorChoice != "black" && colorChoice != "White" && colorChoice != "white" && colorChoice != "Red" && colorChoice != "red" && colorChoice != "Grey" && colorChoice != "grey" && colorChoice != "Magenta" && colorChoice != "magenta" && colorChoice != "Blue" && colorChoice != "blue" && colorChoice != "Green" && colorChoice != "green" && colorChoice != "Purple" && colorChoice != "purple" && colorChoice != "Yellow" && colorChoice != "yellow" && colorChoice != "Cyan" && colorChoice != "cyan"){
	
	colorChoice = prompt("You didn't choose a color from the list! \n\nWhat color would you like to convert from this list? \n\n ~Black, White, Red, Grey, Magenta, Blue, Green, Purple, Yellow, Cyan~");
} //Validates to see if the user chose a color from the provided list 



if(colorChoice === "Black" || colorChoice === "black"){
		
		chosenHex = hex1;
	} //This if statement checks to see if the user chose black, if so, the chosenHex variable is assigned to the appropriate hex number
	
	if(colorChoice === "White" || colorChoice === "white"){
		
		chosenHex = hex2;
	} //This if statement checks to see if the user chose white, if so, the chosenHex variable is assigned to the appropriate hex Number
	
	if(colorChoice === "Red" || colorChoice === "red"){
		
		chosenHex = hex3;
	} //This if statement checks to see if the user chose red, if so, the chosenHex variable is assigned to the appropriate hex Number
	
		if(colorChoice === "Grey" || colorChoice === "grey"){
		
		chosenHex = hex4;
	} //This if statement checks to see if the user chose grey, if so, the chosenHex variable is assigned to the appropriate hex number
	
	if(colorChoice === "Magenta" || colorChoice === "magenta"){
		
		chosenHex = hex5;
	} //This if statement checks to see if the user chose magenta, if so, the chosenHex variable is assigned to the appropriate hex number
	
	if(colorChoice === "Blue" || colorChoice === "blue"){
		
		chosenHex = hex6;
	} //This if statement checks to see if the user chose blue, if so, the chosenHex variable is assigned to the appropriate hex number
	
	if(colorChoice === "Green" || colorChoice === "green"){
		
		chosenHex = hex7;
	} //This if statement checks to see if the user chose green, if so, the chosenHex variable is assigned to the appropriate hex number
	
	if(colorChoice === "Purple" || colorChoice === "purple"){
		
		chosenHex = hex8;
	} //This if statement checks to see if the user chose purple, if so, the chosenHex variable is assigned to the appropriate hex number
	
	if(colorChoice === "Yellow" || colorChoice === "yellow"){
		
		chosenHex = hex9;
	} //This if statement checks to see if the user chose yellow, if so, the chosenHex variable is assigned to the appropriate hex number
	
	if(colorChoice === "Cyan" || colorChoice === "cyan"){
		
		chosenHex = hex10;
	} //This if statement checks to see if the user chose cyan, if so, the chosenHex variable is assigned to the appropriate hex number
	
var totColors = 116777216;
var hexLength = "A color's hex number will always be 6 characters long!"
 

var hexAlert = hexInfo(totColors);

function hexInfo(totColors){
	
	return totColors - 10;
	
}

var totalHex = hexInfo(totColors);

console.log("The total number of hex colors on the web is " + totColors + ". " + hexLength);
console.log("The color you chose was " + colorChoice + ". This color converted into hex is " + chosenHex + "."); //Output to the user showing them their color and the hex for that color 
