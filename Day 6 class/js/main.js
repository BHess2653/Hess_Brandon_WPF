



//validating prompts

var min = /* (Number(*/prompt("Please enter a minimum number"/*)*/);
var max = /* (Number(*/prompt("Please enter a maximum number"/*)*/);

//test to see that a number was actually entered!

if(min===""){
    console.log("You did not enter a number!");
    min = /* Number(*/prompt("PLEASE enter a minimum number"/*)*/);
}

//isNaN
if(isNaN(min) || min===""){
    min = prompt("Pease enter a number and do not leave blank");
}

if(isNaN(max) || max===""){
    max = prompt("Please enter a number and do not leave blank");
}


































