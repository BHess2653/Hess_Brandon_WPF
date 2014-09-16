//Brandon Hess
//9-15-2014
// WPF
//Conditionals

//Personal

console.log("Personal");
//Title

alert("Perimeter of the room");
//Question

var length = prompt("Please enter the length of your room");
//Prompt for length

var width = prompt("Please enter the width of your room");
//Prompt for width

if(length===""){
    console.log("You did not enter a length!");
    length = prompt("PLEASE enter a length");
}
//If length is not entered it will ask again if it's still not entered then it'll ask once more

if(width===""){
    console.log("You did not enter a width!");
    width = prompt("PLEASE enter a width");
}
//If width is not entered it will ask again if it's still not entered then it'll ask once more


if(isNaN(length) || length===""){
    length = prompt("Pease enter a length and do not leave blank");
}
//Prompt if you leave length blank

if(isNaN(width) || width===""){
    width = prompt("Please enter a width and do not leave blank");
}
//Prompt if you leave width blank

var perimeter = length*2 + width*2;
//Perimeter

console.log("The Perimeter of the room is "+perimeter+"");
//Answer in console

alert("The perimeter of the room is "+perimeter+"ft");
//Answer on browser

