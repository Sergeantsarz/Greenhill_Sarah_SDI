//Sarah R. Greenhill - 12/11/14 - Conditionals Assignment - Industry

//Full Sail University isn't only known as a great place to go to school, but also for how difficult it is to be successful there if you are not diligent enough. Calculate Full Sail Student drop-out rates and let them know the probability of getting a job upon graduation from the BS Web Design & Dev degree program. 

var passed = 0; //Container for number of students passed
var failed = 0; //Container for number of students failed

var studentList = ["Sarah" , "Bob" , "Carl" , "Daryl" , "Rick" , "Carole" , "Khaleesi" , "Hodor" , "Bethany" , "Charles" , "Beebee" , "Jessica" , "Garen" , "Onyx" , "Dean" , "Sam"]; //This array holds the names of all the students in class this month 

var student = prompt ("Did " + studentList[0] + " graduate?"); //Prompts the user for whether student #1 has passed
var student2 = prompt ("Did " + studentList[1] + " graduate?"); //Prompts the user for whether student #2 has passed
var student3 = prompt ("Did " + studentList[2] + " graduate?"); //Prompts the user for whether student #3 has passed
var student4 = prompt ("Did " + studentList[3] + " graduate?"); //Prompts the user for whether student #4 has passed
var student5 = prompt ("Did " + studentList[4] + " graduate?"); //Prompts the user for whether student #5 has passed
var student6 = prompt ("Did " + studentList[5] + " graduate?"); //Prompts the user for whether student #6 has passed
var student7 = prompt ("Did " + studentList[6] + " graduate?"); //Prompts the user for whether student #7 has passed
var student8 = prompt ("Did " + studentList[7] + " graduate?"); //Prompts the user for whether student #8 has passed
var student9 = prompt ("Did " + studentList[8] + " graduate?"); //Prompts the user for whether student #9 has passed
var student10 = prompt ("Did " + studentList[9] + " graduate?"); //Prompts the user for whether student #10 has passed
var student11 = prompt ("Did " + studentList[10] + " graduate?"); //Prompts the user for whether student #11 has passed
var student12 = prompt ("Did " + studentList[11] + " graduate?"); //Prompts the user for whether student #12 has passed
var student13 = prompt ("Did " + studentList[12] + " graduate?"); //Prompts the user for whether student #13 has passed
var student14 = prompt ("Did " + studentList[13] + " graduate?"); //Prompts the user for whether student #14 has passed
var student15 = prompt ("Did " + studentList[14] + " graduate?"); //Prompts the user for whether student #15 has passed
var student16 = prompt ("Did " + studentList[15] + " graduate?"); //Prompts the user for whether student #16 has passed


var studentStatus = student.toUpperCase(); //Forces the user input to all caps
var studentStatus2 = student2.toUpperCase(); //Forces the user input to all caps
var studentStatus3 = student3.toUpperCase(); //Forces the user input to all caps
var studentStatus4 = student4.toUpperCase(); //Forces the user input to all caps
var studentStatus5 = student5.toUpperCase(); //Forces the user input to all caps
var studentStatus6 = student6.toUpperCase(); //Forces the user input to all caps
var studentStatus7 = student7.toUpperCase(); //Forces the user input to all caps
var studentStatus8 = student8.toUpperCase(); //Forces the user input to all caps
var studentStatus9 = student9.toUpperCase(); //Forces the user input to all caps
var studentStatus10 = student10.toUpperCase(); //Forces the user input to all caps
var studentStatus11 = student11.toUpperCase(); //Forces the user input to all caps
var studentStatus12 = student12.toUpperCase(); //Forces the user input to all caps
var studentStatus13 = student13.toUpperCase(); //Forces the user input to all caps
var studentStatus14 = student14.toUpperCase(); //Forces the user input to all caps
var studentStatus15 = student15.toUpperCase(); //Forces the user input to all caps
var studentStatus16 = student16.toUpperCase(); //Forces the user input to all caps


(studentStatus === "YES") ? passed++ : failed++; //Adds to passed or failed container based off of if the studentStatus variable is true or false
(studentStatus2 === "YES") ? passed++ : failed++; //Adds to passed or failed container based off of if the studentStatus2 variable is true or false
(studentStatus3 === "YES") ? passed++ : failed++; //Adds to passed or failed container based off of if the studentStatus3 variable is true or false
(studentStatus4 === "YES") ? passed++ : failed++; //Adds to passed or failed container based off of if the studentStatus4 variable is true or false
(studentStatus5 === "YES") ? passed++ : failed++; //Adds to passed or failed container based off of if the studentStatus5 variable is true or false
(studentStatus6 === "YES") ? passed++ : failed++; //Adds to passed or failed container based off of if the studentStatus6 variable is true or false
(studentStatus7 === "YES") ? passed++ : failed++; //Adds to passed or failed container based off of if the studentStatus7 variable is true or false
(studentStatus8 === "YES") ? passed++ : failed++;  //Adds to passed or failed container based off of if the studentStatus8 variable is true or false
(studentStatus9 === "YES") ? passed++ : failed++; //Adds to passed or failed container based off of if the studentStatus9 variable is true or false
(studentStatus10 === "YES") ? passed++ : failed++; //Adds to passed or failed container based off of if the studentStatus10 variable is true or false
(studentStatus11 === "YES") ? passed++ : failed++; //Adds to passed or failed container based off of if the studentStatus11 variable is true or false
(studentStatus12 === "YES") ? passed++ : failed++; //Adds to passed or failed container based off of if the studentStatus12 variable is true or false
(studentStatus13 === "YES") ? passed++ : failed++; //Adds to passed or failed container based off of if the studentStatus13 variable is true or false
(studentStatus14 === "YES") ? passed++ : failed++; //Adds to passed or failed container based off of if the studentStatus14 variable is true or false
(studentStatus15 === "YES") ? passed++ : failed++; //Adds to passed or failed container based off of if the studentStatus15 variable is true or false
(studentStatus16 === "YES") ? passed++ : failed++; //Adds to passed or failed container based off of if the studentStatus16 variable is true or false

var averageSuccess = passed / studentList.length * 100; //Gets the average success rate by dividing the number of students that passed by the amount of students in teh array and multiplying that by 100

console.log(passed + " students have graduated from Full Sail University in the Web Design & Development degree program this month."); //Tells the user how many students have passed

console.log(failed + " students have failed out of Full Sail University in the Web Design & Development degree program this month."); //Tells the user how many students have failed

console.log("The average success rate of this program for this month is " + parseInt(averageSuccess) + "%."); //Tells the user the average rate of success for this program in this particular month
