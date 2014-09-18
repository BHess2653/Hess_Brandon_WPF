//Brandon Hess
//9-17-2014
// WPF
//Class loops


//The while loop loops through a block of code as
//long as a specified condition is true.


//Initalizing the counter variable
var counter = 0;

//starting the while loop with condition
//while condition is true, loop will run
//when condition is false, loop stops
while(counter<200){
    console.log("counter is counting!");
    counter++; //counts untill condition is false
}

//Do while loops
//The do/while loop is a variant of the while loop.
// this loop will execute the code block once, before checking if
// the condition is true,
// then it will repeat the loop as long as the condition is true.

var i = 0;
//set a variable to hold our value


do{
    console.log("The number is " + i);
    i++;
}

while(i<10);



//Basic For Loop
// for (initalization, condition, increment of change)
//when use i frequently because it stands for interation

for(var i = 0; i < 20; i + = 4){
    //for loop inializes the variable i, sets a condition
    console.log("i = " +i);
    //show the value of i
    //runs as long as i is less then 20
}



//break

for(var j = 0; j<5; j++){

    if(j==2){

        break; //stops the loop from cycling
    }
    console.log("j = " + j);
}




//Create loop that makes the song 99 bottles of beer on the wall.
// until there are no more

for(var i=99; i>0; i--){

    //console.log(i);

    console.log(i + " bottles of beer on the wall." + i + "bottles of beer");

    //console.log("Take one down, pass it around, " + (i-1) + "Bottles of beer" + " on the wall");

    if(i===1){

        console.log("Take one down, pass it around. No more bottles of beer! The End!");
    }else{
        console.log(" Take one down, pass it around. " + (i-1) + " bottles of beer" + " on the wall");
    }
}




//Zombie Madness!!
// We have a zombie here at school.
// It can bite 4 people a day and turn them into zombies
//The CDC wants to know how many zombies there will be in 8 days?

 var numZombies = 1; //inital number of zombies
var numBites = 4; //number of bites per zombies per day
var days = 8; //total number of days

for(var i=1; i<=days; i++){

    var newZombies = numZombies*numBites;
    //start with original z times bites

    numZombies = numZombies+newZombies;
    // number of z's is original z + new
    console.log("There are " + numZombies+ " zombies on day # " + i + "!");
}





//cycle through array using loop

var names = ["Scooby", "Shaggy", "Velma", "Fred", "Daphne"];

//loop through array

for(var i=0; i<names.length; i++){

    console.log("You solved the case, " + names[i] + "!");
}































