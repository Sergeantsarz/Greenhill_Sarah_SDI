//Sarah R. Greenhill - 12/15/14  - Functions - Function vs Procedure 

//Functions being "invoked" is being called or summoned into action 
//Functions return values, procedures do not

/*function outptMsg(){
	console.log("Hello World!");
	
}*/

//var width = 5; 
//The "scope" of a variable is determined by the location of the variable itself. This variable is scoped to the larger document, whereas the variables inside the calcArea function are scoped to that function specifically. 

/* function calcArea(){
	
	var width = 20; 
	var height = 30;
	var area = width * height;
	console.log(area);
} //The actual function definition. What the function "does". */

//calcArea(30, 20); //This is the function being invoked or "called" with the argmuents or values being input or stored in the parameters below

/*function calcArea(w, h){ //w=30 and h=20 <-arguments and w/h would be the parameter
	var area = w * h;
	console.log();
}*/

/* function dogYears(age){ //Parameters are what is changed 
	
	var dogYears = age * 7;
	console.log("Sparky is " + dogYears + " years old.");
}

dogYears(4); //The argument is the value that can be changed
dogYears(5); //The value is being "passed" in
*/
var total = calcArea(w, h);//functions that are returning should be assigned variables 

function calcArea(w, h){
	var area = w * h;
	return area; //function is spitting the info out and needs to be stored somewhere 
	}
console.log(total);
