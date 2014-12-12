//Sarah R. Greenhill - 12/11/14 - Conditionals Assignment - Industry

//Full Sail University isn't only known as a great place to go to school, but also for how difficult it is to be successful there if you are not diligent enough. Calculate Full Sail Student drop-out rates and let them know the probability of getting a job upon graduation from the BS Web Design & Dev degree program. 

// The program is designed to take 27 months to complete. Of those that completed the program in 2012-2013, 55% finished in 27 months. The job placement rate for students who completed this program is 75%.
var passed = 0;
var failed = 0;

var studentList = ["Sarah" , "Bob" , "Carl" , "Daryl" , "Rick" , "Carole" , "Khaleesi" , "Hodor" , "Bethany" , "Charles" , "Beebee" , "Jessica" , "Garen" , "Onyx" , "Dean" , "Sam"];

var student = prompt ("Did " + studentList[0] + " graduate?");
var student2 = prompt ("Did " + studentList[1] + " graduate?");
var student3 = prompt ("Did " + studentList[2] + " graduate?");
var student4 = prompt ("Did " + studentList[3] + " graduate?");
var student5 = prompt ("Did " + studentList[4] + " graduate?");
var student6 = prompt ("Did " + studentList[5] + " graduate?");
var student7 = prompt ("Did " + studentList[6] + " graduate?");
var student8 = prompt ("Did " + studentList[7] + " graduate?");
var student9 = prompt ("Did " + studentList[8] + " graduate?");
var student10 = prompt ("Did " + studentList[9] + " graduate?");
var student11 = prompt ("Did " + studentList[10] + " graduate?");
var student12 = prompt ("Did " + studentList[11] + " graduate?");
var student13 = prompt ("Did " + studentList[12] + " graduate?");
var student14 = prompt ("Did " + studentList[13] + " graduate?");
var student15 = prompt ("Did " + studentList[14] + " graduate?");
var student16 = prompt ("Did " + studentList[15] + " graduate?");


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
