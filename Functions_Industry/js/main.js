//Brandon Hess
//9-22-2014
// WPF
//Functions_Industry



//Function
alert("Meter to Millimeters");
var meter = prompt("Please enter the amount you want converted to millimeters");
var millimeters = 1000;
console.log(meter+" meters");
console.log(millimeters+" millimeters");
console.log(meter+" X "+millimeters);

var funInfo = function(m, mm){

    answer = m*mm;
    return answer;

};

if(meter===""){
    console.log("You did not enter an amount to convert!");
    meter = prompt("You did not enter an amount to convert!");

}while(isNaN(meter) || meter===""){
    meter = prompt("Please enter an amount and do not leave it blank");

}

var anon = funInfo(meter,millimeters);

alert( meter+" meters is "+anon+" millimeters");
console.log(anon+"mm");


































