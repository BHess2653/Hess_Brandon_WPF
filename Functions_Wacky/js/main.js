//Brandon Hess
//9-22-2014
// WPF
//Functions Wacky




alert("What is the area?");

//Area they want
var quest = prompt("What amount of area are you looking for?");

if(quest===""){
    console.log("You didn't enter an answer!");
    quest = prompt("You didn't enter an answer!");

}while(isNaN(quest) || quest===""){
    console.log("Please enter the area you want and do not leave it blank");
    quest = prompt("Please enter the area you and do not leave it blank");

}

//Length they have
var length = prompt("What is the length?");

if(length===""){
    console.log("You didn't enter a length!");
    length = prompt("You didn't enter a length!");

}while(isNaN(length) || length===""){
    console.log("Please enter a length and do not leave it blank");
    length = prompt("Please enter a length and do not leave it blank");

}

//Width they have
var width = prompt("What is the width?");

if(width===""){
    console.log("You didn't enter a width!");
    width = prompt("You didn't enter a width!");

}while(isNaN(width) || width===""){
    console.log("Please enter a width and do not leave it blank");
    width = prompt("Please enter a width and do not leave it blank");

}


//This multiples the length and the width to get the area
var area = length * width;
var mood = (area >= quest)?"The area was "+area+" which is bigger or equal to what you wanted "+quest:"The area smaller than what you wanted";



console.log(area);
console.log(mood);

alert(mood);



























