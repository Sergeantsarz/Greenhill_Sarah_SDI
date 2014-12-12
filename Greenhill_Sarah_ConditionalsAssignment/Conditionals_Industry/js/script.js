//Sarah R. Greenhill - 12/11/14 - Conditionals Assignment - Industry

//Full Sail University isn't only known as a great place to go to school, but also for how difficult it is to be successful there if you are not diligent enough. Calculate Full Sail Student drop-out rates and let them know the probability of getting a job upon graduation from the BS Web Design & Dev degree program. 

// The program is designed to take 27 months to complete. Of those that completed the program in 2012-2013, 55% finished in 27 months. The job placement rate for students who completed this program is 75%.
var passed = 0;
var failed = 0;

var studentList = ["Sarah" , "Bob" , "Carl" , "Daryl" , "Rick" , "Carole" , "Khaleesi" , "Hodor"];

var student = prompt ("Did " + studentList[0] + " graduate?");
var student2 = prompt ("Did " + studentList[1] + " graduate?");
var student3 = prompt ("Did " + studentList[2] + " graduate?");
var student4 = prompt ("Did " + studentList[3] + " graduate?");
var student5 = prompt ("Did " + studentList[4] + " graduate?");
var student6 = prompt ("Did " + studentList[5] + " graduate?");
var student7 = prompt ("Did " + studentList[6] + " graduate?");
var student8 = prompt ("Did " + studentList[7] + " graduate?");


var studentStatus = student.toUpperCase(); 
var studentStatus2 = student2.toUpperCase();
var studentStatus3 = student3.toUpperCase();
var studentStatus4 = student4.toUpperCase();
var studentStatus5 = student5.toUpperCase();
var studentStatus6 = student6.toUpperCase();
var studentStatus7 = student7.toUpperCase();
var studentStatus8 = student8.toUpperCase();

(studentStatus === "YES") ? passed++ : failed++; 
(studentStatus2 === "YES") ? passed++ : failed++; 
(studentStatus3 === "YES") ? passed++ : failed++; 
(studentStatus4 === "YES") ? passed++ : failed++; 
(studentStatus5 === "YES") ? passed++ : failed++; 
(studentStatus6 === "YES") ? passed++ : failed++; 
(studentStatus7 === "YES") ? passed++ : failed++;
(studentStatus8 === "YES") ? passed++ : failed++;  

var averageSuccess = passed / studentList.length * 100;

console.log(passed + " students have graduated from Full Sail University in the Web Design & Development degree program this month.");

console.log(failed + " students have failed out of Full Sail University in the Web Design & Development degree program this month.");


