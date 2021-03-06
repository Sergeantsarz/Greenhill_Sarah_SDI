//Expressions

/* var a = 2; //Sets the variable
a = a + 3; //Adding 3 to a by including an assignment operator 
*/

//Arithmetic Operators - + / *

/* var yearBorn = 1988; 
var age = 2014 - yearBorn; //Expression using subtraction operator
*/

//Area of a triangle is half of the width multiplied by the height 

/* var width = 4;
var height = 5;
var area = width * height/2;
*/

//Modulo - % finds the "left over" amounts, use for if numbers are even or odd or how numbers are sorted 

/* var remainder = 32 % 10;

console.log(remainder);
*/

//Order of Operations - PEMDAS 

//Find the average(mean) - sum of the items divided by the number of items
/* var quiz1 = 87;
var quiz2 = 100;
var quiz3 = 60;
var quiz4 = 80;

var average = (quiz1 + quiz2 + quiz3 + quiz4) / 4; 

var perimeter = length * 2 + width * 2; //Don't use uneccessary parenthesis

*/

//Expressions with Arrays

/* var orangeBins = [234, 567, 883];

var total = orangeBins[0] + orangeBins[1] + orangeBins[2];

console.log(total);
*/

//Concatenating

/*
var firstName = "Sarah";
var lastName = "Greenihll";
var fullName = firstName + " " + lastName;

console.log(fullName);
*/

//Difference between concatenating strings and integers - Strings use "" and absence of quotes uses integers

/* var a = 6;
var b = 7;

var result = a + b;
*/

//Strings And Numerical Values with casting 

/* var stringVar = "6";
var result = 7 + Number(stringVar); //casting (treat it as) the variable as a number
*/

/* var areaCode = "203"; //make sure to use "" so it doesn't see this as an integer and try to math them to death 
var firstPart = "804";
var secPart = "0724";

//(203) 804-0724
var phoneNo = "(" + String(areaCode) + ")" + String(firstPart) + "-" + String(secPart);
*/

//Assignment Operators in Expressions

var a = 3;
a = a + 4; //storage is always to the left 

/*
a += 4; //a = a + 4 
a *= 4; //a = a * 4
a /= 4; //a = a / 4 
a -= 4; //a = a - 4 
a += 4; //a = a + 4
a ++; //a = a + 1 or a += 1
a --; //a = a - 1 or a -= 1
*/



