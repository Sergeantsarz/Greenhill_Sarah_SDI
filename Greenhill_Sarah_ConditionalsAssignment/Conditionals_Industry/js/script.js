//Sarah R. Greenhill - 12/11/14 - Conditionals Assignment - Industry

//Full Sail University isn't only known as a great place to go to school, but also for how difficult it is to be successful there if you are not diligent enough. Calculate Full Sail Student drop-out rates and let them know the probability of getting a job upon graduation from the BS Web Design & Dev degree program. 

// The program is designed to take 27 months to complete. Of those that completed the program in 2012-2013, 55% finished in 27 months. The job placement rate for students who completed this program is 75%.
var passed = 0;
var failed = 0;

var studentList ["Sarah" , "Bob" , "Carl" , "Daryl" , "Rick" , "Carole" , "Khaleesi" , "Hodor"];
var student = prompt ("Did this student graduate?");
var student2 = prompt ("Did this student graduate?");
var student3 = prompt ("Did this student graduate?");
var student4 = prompt ("Did this student graduate?");
var student5 = prompt ("Did this student graduate?");
var student6 = prompt ("Did this student graduate?");
var student7 = prompt ("Did this student graduate?");
var student8 = prompt ("Did this student graduate?");
var student9 = prompt ("Did this student graduate?");
var student10 = prompt ("Did this student graduate?");

var studentStatus = student.toUpperCase(); 

(studentStatus === "YES") ? passed++ : failed++; 

