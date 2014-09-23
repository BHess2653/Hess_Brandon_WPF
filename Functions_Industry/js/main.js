//Brandon Hess
//9-22-2014
// WPF
//Functions_Industry



//Function
alert("Meter to Millimeters");
var meter = prompt("Please enter the amount you want converted to millimeters");
var mil = 1000;
console.log(meter+" meters");
console.log(mil+" millimeters");
console.log(meter+" X "+mil);

function funInfo(meter, mil) {

    var answer = meter * mil;
    return answer;


}if(meter===""){
    console.log("You did not enter an amount to convert!");
    meter = prompt("You did not enter an amount to convert!");

}if(isNaN(meter) || meter===""){
    meter = prompt("Pease enter an amount and do not leave it blank");


}

alert( meter+" meters is "+meter * mil+" millimeters");

console.log(meter*mil+"mm");




































