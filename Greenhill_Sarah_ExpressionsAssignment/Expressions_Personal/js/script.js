//Sarah R. Greenhill 12/4/14 Expressions Assignment PERSONAL

//Personal Problem (lol): Each morning, Sarah wakes up and must take a series of medications in order to be able to function properly for the rest of the day. Daily activity reduces end of day energy cache, affecting the week's resulting energy reserve. Calculate how much energy she's lost by the end of the week and how much she has left. 

var totalEnergy = 700;
var medValue = 10;
var medsPerDay = 10;
var medsMissedMon = prompt("How many medications did Sarah miss on Monday? Choose 0 to 10.");
var medsMissedTues = prompt("How many medications did Sarah miss on Tuesday? Choose 0 to 10.");
var medsMissedWed = prompt("How many medications did Sarah miss on Wednesday? Choose 0 to 10.");
var medsMissedThurs = prompt("How many medications did Sarah miss on Thursday? Choose 0 to 10.");
var medsMissedFri = prompt("How many medications did Sarah miss on Friday? Choose 0 to 10.");
var medsMissedSat = prompt("How many medications did Sarah miss on Saturday? Choose 0 to 10.");
var medsMissedSun = prompt("How many medications did Sarah miss on Sunday? Choose 0 to 10.");

var totalMissed = Number(medsMissedMon) + Number(medsMissedTues) + Number(medsMissedWed) + Number(medsMissedThurs) + Number(medsMissedFri) + Number(medsMissedSat) + Number(medsMissedSun); 


var totalMedEnergyMissed = totalMissed * medValue; 

var endWeekEnergy = totalEnergy - totalMedEnergyMissed; 

var activityLevel = [10 , 20 , 30 , 40 , 50];

console.log("On Monday, Sarah missed " + medsMissedMon + " medications.");
