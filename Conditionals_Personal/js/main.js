//Brandon Hess
//9-15-2014
// WPF
//Conditionals

//Personal

console.log("Personal");
//Title

alert("Area of the room");
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

var area = length * width;
//Area

console.log("The Area of the room is "+area+"");
//Answer in console

alert("The Area of the room is "+area+"ft");
//Answer on browser

