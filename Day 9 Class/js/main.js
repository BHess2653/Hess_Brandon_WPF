//Brandon Hess
//9-22-2014
// WPF
//Day 9 Class

/*
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


*//*

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


//normal function
function functionName(parameters){

    //code to execute;
    //return value;
}


//anonymous function
var functionName = function(parameters){

    //code to execute;
    //return value;
}

functionName(arguments);

*//*


//regular function
var base = 10;
var height = 20;
var a = triangleArea(base, height);
console.log(a);



function triangleArea(b,h){

    var area = .5 * b * h;
    return area;

}

var triangleA = function(b,h){

    var area = .5 * b * h;
    return area;

}


var anon = triangleA(base, height);
console.log(anon);

*//*
 * To change this template use tools | save file as template
 *//*

//arrays

var testArray = ["banana", "apple", "peach", "pear"];

console.log(testArray.length);//array name
// number of items in array
console.log(testArray);


//push (add) a new item to the end of the array
testArray.push("carrot", "toast");
console.log(testArray);
testArray[4]="pringle";

//pop (take away) removes last item from array
testArray.pop();
console.log(testArray);

*/



//Class work

//Regular Function
//calculate area of rectangle W * L

var width = 50;
var length = 100;
var a = rectangleArea(width, length);
console.log(a);



function rectangleArea(w,l){

    var area = w * l;
    return area;

}

var rectangleA = function(w,l){

    var area = w * l;
    return area;

}


var anon = rectangleA(width, length);
console.log(anon);



//Anonymous Function
//Perimeter of rectangle 2(W+L)


var RectangleP = function(w, l){

    var perimeter = 2*(w + l);
    return perimeter;
}

var anonTwo = RectangleP(width, length);
console.log(anonTwo);











