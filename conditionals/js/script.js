//Conditional Logic - Logical Operators 
//Logical operators only go between booleans or comparisons
// && = And || = or ^ = Exclusive or XOR ! = Not === = strict equality 

var budget = 100;
var iPhonePrice  = 199.99;
var wonLottery = true; 

//if the price f the phone is less than budget and if our paycheck is over 300
//|| only needs one in the pair to be true don't even have to write the === 
//^ means only one can be true, not both 
//! uses negation to convert to fals or true 

if(iPhonePrice < budget || wonLottery){
	console.log("We can buy the phone!");
} else {
	consolee.log("No phone for you!");
}
