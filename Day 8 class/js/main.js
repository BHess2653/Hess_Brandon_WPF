




/*


var fruit = ["apples", "orange", "apples", "orange"];


var totalFruit = 0;
//apple
if(fruit[0] === "apples"){
totalFruit ++;

}for(var i= 0; i<fruit.length; i++){
    console.log("Food "+ fruit[i]+ "!");
}


console.log(totalFruit);

*//*


//Function Call or Invoked
//Must be called or it will not run

function printHello(){
    console.log("Hello World!!!!!!");
}

function printMore(){
    console.log("Prints Out More Text!");
}

printHello();
printMore();

calcArea();
//VARIABLE SCOPE
var width = 20;
var height = 10;


function calcArea(){

    //width = 30;
    //height = 10;
    var area = width * height;

    //console.log(area);
}

console.log(area);

*/


//Arguments & Parameters
//Arguments - goes into function
//Parameters - catches the arguments in the function

//Allows us to make our code more Flexible!


var width = 10;
var height = 10;
calcArea(width,height);



function calcArea(w,h){

    var area = w*h;
    console.log(area);

    return area;
}

var funcResult = calcArea(20,20);
//run the function again
console.log(funcResult);





