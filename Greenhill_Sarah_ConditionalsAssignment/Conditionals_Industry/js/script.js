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


var studentStatus = student.toUpperCase(); 
var studentStatus2 = student2.toUpperCase();
var studentStatus3 = student3.toUpperCase();
var studentStatus4 = student4.toUpperCase();
var studentStatus5 = student5.toUpperCase();
var studentStatus6 = student6.toUpperCase();
var studentStatus7 = student7.toUpperCase();
var studentStatus8 = student8.toUpperCase();
var studentStatus9 = student9.toUpperCase();
var studentStatus10 = student10.toUpperCase();
var studentStatus11 = student11.toUpperCase();
var studentStatus12 = student12.toUpperCase();
var studentStatus13 = student13.toUpperCase();
var studentStatus14 = student14.toUpperCase();
var studentStatus15 = student15.toUpperCase();
var studentStatus16 = student16.toUpperCase();


(studentStatus === "YES") ? passed++ : failed++; 
(studentStatus2 === "YES") ? passed++ : failed++; 
(studentStatus3 === "YES") ? passed++ : failed++; 
(studentStatus4 === "YES") ? passed++ : failed++; 
(studentStatus5 === "YES") ? passed++ : failed++; 
(studentStatus6 === "YES") ? passed++ : failed++; 
(studentStatus7 === "YES") ? passed++ : failed++;
(studentStatus8 === "YES") ? passed++ : failed++;  
(studentStatus9 === "YES") ? passed++ : failed++; 
(studentStatus10 === "YES") ? passed++ : failed++; 
(studentStatus11 === "YES") ? passed++ : failed++; 
(studentStatus12 === "YES") ? passed++ : failed++; 
(studentStatus13 === "YES") ? passed++ : failed++; 
(studentStatus14 === "YES") ? passed++ : failed++; 
(studentStatus15 === "YES") ? passed++ : failed++; 
(studentStatus16 === "YES") ? passed++ : failed++; 

var averageSuccess = passed / studentList.length * 100;

console.log(passed + " students have graduated from Full Sail University in the Web Design & Development degree program this month.");

console.log(failed + " students have failed out of Full Sail University in the Web Design & Development degree program this month.");

console.log("The average success rate of this program for this month is " + parseInt(averageSuccess) + "%.");
