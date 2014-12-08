//Conditional Logic - With an Expression If, Else, & Else If 
var kidHeight = 30;
var minHeight = 48; 
var wParentHeight = 45; //height of the child with a parent 

//If the child is old enough, print to the consle "You can ride!" 
//If the child is over 48 inches in height
if(kidHeight > minHeight){
	//code performed if condition is true
	console.log("You can ride the coaster!");
} else if (kidHeight > wParentHeight){
	//Can ride with a parent
	console.log("You can ride, but only with a parent present.");
} else{
	//If all is false, child cannot ride 
	console.log("Sorry kid, you've got some growing to do.");
}