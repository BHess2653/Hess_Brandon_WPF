//Brandon Hess
//9-22-2014
// WPF
//Day 9 Class


//varibles
var min = 180;
var max = 220;

var ranNum = randomizer(min,max);
console.log(ranNum);


function randomizer(mn,mx){

    var randomNumber = Math.round(Math.random()*(mx-mn)+mn);
    return randomNumber;

}


for(var i=0; i<5; i++){
//i<5 = how many numbers you want generated

    console.log(randomizer(min,max));
}




//This is a Function!
function calcAreaF(width, height){

    var area = width * height;
    return area;
}

//This is a Procedure!
//Just a list of steps to do
function calcAreaP(width, height){

    var area = width * height;
    console.log(area);
}





































