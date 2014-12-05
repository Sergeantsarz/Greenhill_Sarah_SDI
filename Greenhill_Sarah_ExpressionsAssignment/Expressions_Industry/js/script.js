//Sarah R. Greenhill 12/4/14 Expressions Assignment INDUSTRY 

//Industry Problem: Sarah, Kyle, Ed, Stephanie, and Amanda are all web developers taking the same programming class. They have 8 graded assignments for this class. Upon reciving their test scores and final grade, each student can do extra credit assignments to bring their grade up. Calculate each student's final grade(average) and how many extra credit assignments they would need for a full letter grade improvement. 

var extraCredit = prompt("What is each extra credit assignment worth?")
var extraSa = prompt("How many extra credit assignments did Sarah do?");
var extraK = prompt("How many extra credit assignments did Kyle do?");
var extraE = prompt("How many extra credit assignments did Ed do?");
var extraSt = prompt("How many extra credit assignments did Stephanie do?");
var extraA = prompt("How many extra credit assignments did Amanda do?");

var sarah = [100 , 90 , 85 , 99 , 90 , 100 , 98 , 85];
var kyle = [80 , 90 , 70 , 88 , 100 , 100 , 65 , 83];
var ed = [90 , 76 , 55 , 82 , 90 , 100 , 55 , 80];
var steph = [30 , 60 , 75 , 65 , 70 , 60 , 0 , 20];
var amanda = [90 , 73 , 100 , 75 , 70 , 90 , 76 , 69]; 

var avgSa = (sarah[0] + sarah[1] + sarah[2] + sarah[3] + sarah[4] + sarah[5] + sarah[6] + sarah[7]) / 8;
var avgK = (kyle[0] + kyle[1] + kyle[2] + kyle[3] + kyle[4] + kyle[5] + kyle[6] + kyle[7]) / 8;
var avgE = (ed[0] + ed[1] + ed[2] + ed[3] + ed[4] + ed[5] + ed[6] + ed[7]) / 8;
var avgSt = (steph[0] + steph[1] + steph[2] + steph[3] + steph[4] + steph[5] + steph[6] + steph[7]) / 8;
var avgA = (amanda[0] + amanda[1] + amanda[2] + amanda[3] + amanda[4] + amanda[5] + amanda[6] + amanda[7]) / 8;

var finalS = extraSa * extraCredit + avgSa;
var finalK = extraK * extraCredit + avgK;
var finalE = extraE * extraCredit + avgE;
var finalSt = extraSt * extraCredit + avgSt;
var finalA = extraA * extraCredit + avgA;

console.log("Sarah's average before extra credit is " + avgSa + "\nKyle's average before extra credit is " + avgK + "\nEd's average before extra credit is " + avgE + "\nStephanie's average  before extra credit is " + avgSt + "\nAmanda's average before extra credit is " + avgA);

console.log("Sarah completed " + extraSa + " extra credit assignments. Her final average is now " + finalS + "\nKyle completed " + extraK + " extra credit assignments. His final average is now " + finalK);


 








