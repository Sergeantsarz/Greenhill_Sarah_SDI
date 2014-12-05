//Sarah R. Greenhill 12/4/14 Expressions Assignment PERSONAL

//Personal Problem (lol): Each morning, Sarah wakes up and must take a series of medications in order to be able to function properly for the rest of the day. Daily activity reduces end of day energy cache, affecting the week's resulting energy reserve. Calculate how much energy she's lost by the end of the week and how much she has left. 

var totalEnergy = 100;
var medValue = 5;
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
var restDays = [10 , 20 , 30 , 40];

var netEnergy0 = restDays[0] + endWeekEnergy;
var netEnergy1 = restDays[1] + endWeekEnergy;
var netEnergy2 = restDays[2] + endWeekEnergy;
var netEnergy3 = restDays[3] + endWeekEnergy;



console.log("This week, Sarah missed her medications on the following days in the following amounts: \nMonday: " + medsMissedMon + "\nTuesday: " + medsMissedTues + " \nWednesday: " + medsMissedWed + "\nThursday: " + medsMissedThurs + "\nFriday: " + medsMissedFri + " \nSaturday: " + medsMissedSat + "\nSunday: " + medsMissedSun + "\nThat is a total of " + totalMissed + " missed medications for the week.");

console.log("Sarah started with " + totalEnergy + "% energy at the beginning of the week, and ended up with " + endWeekEnergy + ". Taking all meds and resting for one day will leave Sarah with " + netEnergy0 + " energy. Two rest days will leave her with " + netEnergy1 + " energy. Three rest days will leave her with " + netEnergy2  + " energy. Four full rest days will leave Sarah with " + netEnergy3 + " energy.")