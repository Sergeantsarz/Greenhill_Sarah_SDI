//Sarah R. Greenhill - 12/15/14  - Functions - Variable Scope 

//Functions being "invoked" is being called or summoned into action 

/*function outptMsg(){
	console.log("Hello World!");
	
}*/

var width = 5; //The "scope" of a variable is determined by the location of the variable itself. This variable is scoped to the larger document, whereas the variables inside the calcArea function are scoped to that function specifically. 

function calcArea(){
	
	var width = 20; 
	var height = 30;
	var area = width * height;
	console.log(area);
} //The actual function definition. What the function "does". 

calcArea(); //This is the function being invoked or "called" 
