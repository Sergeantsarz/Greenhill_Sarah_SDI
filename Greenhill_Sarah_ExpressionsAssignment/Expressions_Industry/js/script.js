//Sarah R. Greenhill 12/4/14 Expressions Assignment INDUSTRY 

//Industry Problem: Sarah, Kyle, Ed, Stephanie, and Amanda are all web developers taking the same programming class. They have 8 graded assignments for this class. Upon reciving their test scores and final grade, each student can do extra credit assignments to bring their grade up. Calculate each student's final grade(average) and how many extra credit assignments they would need for a full letter grade improvement. 

var extraCredit = prompt("What is each extra credit assignment worth?") //Input for how much each individual extra credit assignment is worth
var extraSa = prompt("How many extra credit assignments did Sarah do?"); //Input for the amount of extra credit assignments Sarah completed
var extraK = prompt("How many extra credit assignments did Kyle do?"); //Input for the amount of extra credit assignments Kyle completed
var extraE = prompt("How many extra credit assignments did Ed do?"); //Input for the amount of extra credit assignments Ed completed
var extraSt = prompt("How many extra credit assignments did Stephanie do?"); //Input for the amount of extra credit assignments Stephanie completed
var extraA = prompt("How many extra credit assignments did Amanda do?"); //Input for the amount of extra credit assignments Amanda completed

var sarah = [100 , 90 , 85 , 99 , 90 , 100 , 98 , 85]; //An array contining Sarah's grades
var kyle = [80 , 90 , 70 , 88 , 100 , 100 , 65 , 83]; //An array contining Kyle's grades
var ed = [90 , 76 , 55 , 82 , 90 , 100 , 55 , 80]; //An array contining Ed's grades
var steph = [30 , 60 , 75 , 65 , 70 , 60 , 0 , 20]; //An array contining Sarah's grades
var amanda = [90 , 73 , 100 , 75 , 70 , 90 , 76 , 69]; //An array contining Sarah's grades 

var avgSa = (sarah[0] + sarah[1] + sarah[2] + sarah[3] + sarah[4] + sarah[5] + sarah[6] + sarah[7]) / 8; //Calculating the average of Sarah's grades from the array
var avgK = (kyle[0] + kyle[1] + kyle[2] + kyle[3] + kyle[4] + kyle[5] + kyle[6] + kyle[7]) / 8; //Calculating the average of Kyle's grades from the array
var avgE = (ed[0] + ed[1] + ed[2] + ed[3] + ed[4] + ed[5] + ed[6] + ed[7]) / 8; //Calculating the average of Ed's grades from the array
var avgSt = (steph[0] + steph[1] + steph[2] + steph[3] + steph[4] + steph[5] + steph[6] + steph[7]) / 8; //Calculating the average of Stephanie's grades from the array
var avgA = (amanda[0] + amanda[1] + amanda[2] + amanda[3] + amanda[4] + amanda[5] + amanda[6] + amanda[7]) / 8; //Calculating the average of Amanda's grades from the array

var avgStP = avgSt --; //Calculating penalty against Steph for a totally incomplete assignment 
var finalS = extraSa * extraCredit + avgSa; //Calculating Sarah's final grade after extra credit is applied
var finalK = extraK * extraCredit + avgK; //Calculating Kyle's final grade after extra credit is applied
var finalE = extraE * extraCredit + avgE; //Calculating Ed's final grade after extra credit is applied
var finalSt = extraSt * extraCredit + avgStP; //Calculating Stephanie's final grade after extra credit is applied
var finalA = extraA * extraCredit + avgA; //Calculating Amanda's final grade after extra credit is applied

var finalBonusSa = finalS += 1; //Each student gets an extra point for completing extra credit added to their final score
var finalBonusK = finalK += 1; //Each student gets an extra point for completing extra credit added to their final score
var finalBonusE = finalE += 1; //Each student gets an extra point for completing extra credit added to their final score
var finalBonusSt = finalSt += 1; //Each student gets an extra point for completing extra credit added to their final score
var finalBonusA = finalA += 1; //Each student gets an extra point for completing extra credit added to their final score

console.log("Sarah's average before extra credit is " + avgSa + "\nKyle's average before extra credit is " + avgK + "\nEd's average before extra credit is " + avgE + "\nStephanie's average  before extra credit is " + avgStP + "\nAmanda's average before extra credit is " + avgA); //Output of everyone's grades before extra credit


console.log("Sarah completed " + extraSa + " extra credit assignments. Her final average is now " + finalBonusSa + "\nKyle completed " + extraK + " extra credit assignments. His final average is now " + finalBonusK + "\nEd completed " + extraE + " extra credit assignments. His final average is now " + finalBonusE + "\nStephanie completed " + extraSt + " extra credit assignments. Her final average is now " + finalBonusSt + "\nAmanda completed " + extraA + " extra credit assignments. Her final average is now " + finalBonusA); //Output of how many extra credit assignments each student did and what their final grade is after that extra credit is applied 


 








