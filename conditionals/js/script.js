//Conditional Logic - Logical Operators 
//Logical operators only go between booleans or comparisons
// && = And || = or ^ = Exclusive or XOR ! = Not === = strict equality 
//Ternaries use ? to do if else all in one line 

var budget = 100;
var iPhonePrice  = 199.99;
var wonLottery = true; 

//if the price f the phone is less than budget and if our paycheck is over 300
//|| only needs one in the pair to be true don't even have to write the === 
//^ means only one can be true, not both 
//! uses negation to convert to false or true 

/* var gps = 48;


if (gpa > 2.0){
	console.log("You can graduate!");
} else {
	console.log("GPA is too low!");
}*/

//if the gpa is over the min 2.0 score, the student can graduate 
(gpa > 2.0) ? console.log("You can graduate") : console.log("GPA too low!");
