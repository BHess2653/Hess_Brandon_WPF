//Brandon Hess
//9-8-2014
// WPF
//Class Conditionals

/*
//Basic Conditional

//var oldEnough = true;
var oldEnough = false;
//if child is old enough, they can ride!!

if(oldEnough){
    //if old enough is true, then you can ride!
     //if oldEnough is false, then nothing happens
    console.log("you can ride the coaster!");
}

//Relational Conditional
//if the kid is tall enough, then they can ride
//must be 48 inches tall or over

var kidHeight = 50;
//kids height
var minHeight = 48;
//minimum height to ride coaster

if(kidHeight >= minHeight){
    //if the kid is taller than or equal to the minimum
    // height they can ride the coaster
    console.log("You can ride the coaster!");

}


//Conditional with Expression

//set kids height
var kidHeight = 46;

//minimum height
var minHeight = 48;

//sneaker lift
var sneakerLift = 2;

//tall enough to ride with or without shoes?

//if kid is taller than min height with shoes, then can ride
if(kidHeight + sneakerLift >= minHeight){

    //if the kid is tall enough with shoes on, they can ride
    console.log("You are tall enough with shoes on!");
}



//If Else Statement
//Choosing between two blocks of code

var kidHeight = 40;
//kid height
var minHeight = 48;
//minimum height to ride

if(kidHeight >= minHeight){

    //if true then they can ride
    console.log("You can ride!");
}else{
    //if false (you are too short!), then you cannot ride!
    console.log("You cannot ride! You are too short!");
}



//Else if - choosing between 3 or more blocks of code
//40, 46, 48

var kidHeight = 46;
var minHeight = 48;
//kid height to ride with parent
var wParentHeight = 45;

//if taller then the min height, you can ride
//if shorted then min height but with parent and meet that height
// requirement, you can ride
//you are to short you can't ride

if(kidHeight >= minHeight){

    console.log("You can ride!");
}else if(kidHeight >= wParentHeight){

    //with parent and tall enough
    console.log("You can ride with your parent!");
}else{

    console.log("Go home!");
}

*/
/*
Day 5 Logical Operators
 */

/*
//based on budget can you buy an ipad?

var budget = 300;
var iPadPrice = 499.99;
var payCheck = 500;


//If the price of the ipad is less than our budget
if(iPadPrice < budget){
    console.log("You can buy the iPad!");

}else{
    console.log("You cannot buy an iPad!");

}


//AND if our paycheck is over 600
if(payCheck > 600){
    console.log("You can buy an iPad!");

}else{
    console.log("You cannot buy an iPad!");

}



//&& and Operator - both must be true to be true

if(iPadPrice < budget && payCheck > 600){
    console.log("You can buy an iPad!")
}else{
    console.log("You cannot buy an iPad!")
}
*/

//\\Or operator - EITHER must be true to be true

//OR if you won the lottery

var wonLottery = true;

//if the iPadPrice is less than your budget OR you
//WON THE LOTTERY! than you can buy your ipad!
if(iPadPrice < budget || wonLottery){

    console.log("You can buy an iPad!")
}else{
    console.log("You cannot buy an iPad!")

}

/*
Day 5 Ternary Conditionals
 */

var gpa = 48;

//if gpa is over the min 2.0 score, then student can graduate

if(gpa>2.0){
    console.log("You can graduate");
}else{
    console.log("You cannot graduate!");
}

//(condition to be met) ? first set to stuff : else stuff;

(gpa>2.0)?console.log("You can graduate"):console.log("You can't graduate!");













