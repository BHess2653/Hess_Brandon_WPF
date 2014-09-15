//Brandon Hess
//9-12-2014
// WPF
//Conditionals Worksheet

console.log("Conditionals Worksheet");
console.log ( );


//Expressions with Conditionals
//Last Chance for Gas

var gasMpg = 30;

var tankPercent = prompt("What is your Gas Gauge percent at?");

var tankCapacity = prompt("How many gallons does your car's tank hold?");

var totalGas = tankPercent/100 * tankCapacity;

alert(totalGas);

var tot = gasMpg * totalGas;

alert(tot);

var miles = 200;


if(tot >= miles){
    console.log("Yes you can make it!");

}else{
    console.log("You only have "+totalGas+" gallons of gas in your tank, better get gas now while you can!");

}



//Multiple Results
//Check the Login

//Account Login
console.log("Account Login");

var userName = "John117";
var userPassword = "l33t";

var name = "John117";
var password = "lEEt";


//Is the Username and Password correct?
if(userName <= name){
    console.log("Welcome John117!");

}else{
    console.log("User not found. Try again.");

}

if(userPassword >= password){

   console.log("Welcome John117");
}else{
    console.log("Password does not match our records.");

}



//Multiple Conditions
//Tire Pressure I

var tirePressure = [52, 52, 52, 52];

if(tirePressure[0] = tirePressure[1] = tirePressure[2] <= tirePressure[3]){
    console.log("The tires pass spec!")
}else{
    console.log("Get your tires checked out!")
}



















