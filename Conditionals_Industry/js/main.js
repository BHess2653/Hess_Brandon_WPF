//Brandon Hess
//9-15-2014
// WPF
//Conditionals


//Industry-Specific

console.log("yard to feet");
alert("Yard to feet converter");

var yard = prompt("Please enter amount in yards you want to convert");

if(yard===""){
    console.log("You did not enter an amount to convert!");
    yard = prompt("ERROR! no amount entered please try again");
}

if(isNaN(yard) || yard===""){
    yard = prompt("Please enter an amount and do not leave blank");
}


var feet = 3;

var answer = yard * feet;

console.log("Your answer is"+" "+ answer+"ft");
alert("Your answer is "+" "+ answer+"ft");





















