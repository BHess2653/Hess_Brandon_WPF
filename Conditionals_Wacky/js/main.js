//Brandon Hess
//9-15-2014
// WPF
//Conditionals

//Wacky
console.log("Wacky");
console.log("How many strange coins do you earn a week?");
alert("How many strange coins do you earn a week?");
//Title and Question

console.log("How many strange coins do you earn per mission?");
var coins = prompt("How many strange coins do you earn per mission?");
//Prompt how many coins

console.log("How many missions have you completed this week?");
var missions = prompt("How many missions have you completed this week?");
//Prompt how many missions

if(coins===""){
    console.log("You did not enter an amount for coins earned!");
    coins = prompt("PLEASE enter an amount for coins earned");
}
//Prompt for coins if entered blank

if(missions===""){
    console.log("You did not enter an amount for missions completed!");
    missions = prompt("PLEASE enter an amount for missions completed");
}
//prompt for missions if entered blank

if(isNaN(coins) || coins===""){
    coins = prompt("Pease enter an amount and do not leave blank");
}
//Prompt for coins if still entered blank

if(isNaN(missions) || missions===""){
    missions = prompt("Please enter an amount and do not leave blank");
}
//Prompt for missions if still entered blank

var answer = coins * missions;
//Answer

console.log("You earned:"+" "+ answer +" "+"strange coins this week!");
alert("You earned:"+" "+ answer +" "+"strange coins this week!");
//Alert message for answer