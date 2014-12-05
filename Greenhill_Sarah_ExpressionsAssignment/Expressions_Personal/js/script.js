//Sarah R. Greenhill 12/4/14 Expressions Assignment PERSONAL

//Personal Problem (lol): Each morning, Sarah wakes up and must take a series of medications in order to be able to function properly for the rest of the day. Daily activity reduces end of day energy cache, affecting the week's resulting energy reserve. Calculate how much energy she's lost by the end of the week and how much she has left. 

var totalEnergy = 100; //This is Sarah's total energy for the week
var medValue = 5; //This is the assigned value that one medication has
var medsPerDay = 10; //This is how many medications Sarah must take in one day
var medsMissedMon = prompt("How many medications did Sarah miss on Monday? Choose 0 to 10."); //Inputting how many meds were missed on Monday
var medsMissedTues = prompt("How many medications did Sarah miss on Tuesday? Choose 0 to 10."); //Inputting how many meds were missed on Tuesday
var medsMissedWed = prompt("How many medications did Sarah miss on Wednesday? Choose 0 to 10."); //Inputting how many meds were missed on Wednesday
var medsMissedThurs = prompt("How many medications did Sarah miss on Thursday? Choose 0 to 10."); //Inputting how many meds were missed on Thursday
var medsMissedFri = prompt("How many medications did Sarah miss on Friday? Choose 0 to 10."); //Inputting how many meds were missed on Friday
var medsMissedSat = prompt("How many medications did Sarah miss on Saturday? Choose 0 to 10."); //Inputting how many meds were missed on Saturday
var medsMissedSun = prompt("How many medications did Sarah miss on Sunday? Choose 0 to 10."); //Inputting how many meds were missed on Sunday

var totalMissed = Number(medsMissedMon) + Number(medsMissedTues) + Number(medsMissedWed) + Number(medsMissedThurs) + Number(medsMissedFri) + Number(medsMissedSat) + Number(medsMissedSun); //This calculates the total number of missed medications for the entire week

var totalMedEnergyMissed = (totalMissed ++) * medValue; //This calculates the total amount of energy Sarah lacks at the end of the week where the total is incremented by one as missed energy from not taking meds in the first place
var endWeekEnergy = totalEnergy - totalMedEnergyMissed; //This calculates how much energy Sarah has remaining at the end of the week
var endWeekFinalEnergy = endWeekEnergy -= 10; //This accounts for weekly activity which drains reserve energy
var restDays = [10 , 20 , 30 , 40]; //This array contains values pertaining to how much energy is restored to Sarah upon taking all meds and resting

var netEnergy0 = restDays[0] + endWeekEnergy; //Calculating for one day of rest/full meds
var netEnergy1 = restDays[1] + endWeekEnergy; //Calculating for two days of rest/full meds
var netEnergy2 = restDays[2] + endWeekEnergy; //Calculating for three days of rest/full meds
var netEnergy3 = restDays[3] + endWeekEnergy; //Calculating for four days of rest/full meds



console.log("This week, Sarah missed her medications on the following days in the following amounts: \nMonday: " + medsMissedMon + "\nTuesday: " + medsMissedTues + " \nWednesday: " + medsMissedWed + "\nThursday: " + medsMissedThurs + "\nFriday: " + medsMissedFri + " \nSaturday: " + medsMissedSat + "\nSunday: " + medsMissedSun + "\nThat is a total of " + totalMissed + " missed medications for the week."); //Output of how many meds Sarah missed this week on each day and in total

console.log("Sarah started with " + totalEnergy + "% energy at the beginning of the week, and ended up with " + endWeekFinalEnergy + ". Taking all meds and resting for one day will leave Sarah with " + netEnergy0 + " energy. Two rest days will leave her with " + netEnergy1 + " energy. Three rest days will leave her with " + netEnergy2  + " energy. Four full rest days will leave Sarah with " + netEnergy3 + " energy.") //Output of Sarah's total energy to start, at the end of the week, and what it will be with different amounts of rest/full meds