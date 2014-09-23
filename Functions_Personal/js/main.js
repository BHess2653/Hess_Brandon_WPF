//Brandon Hess
//9-22-2014
// WPF
//Functions Personal


//Anonymous function
alert("Perimeter of a Parallelogram");

var base = prompt("Please enter a number for base");

var side = prompt("Please enter a number for side");

var parallelogram = function(b, s){

    perimeter = b*2 + s*2;

    return perimeter;

};

var answer = base*2 + side*2;

var anon = parallelogram(base, side);

alert("The perimeter of the parallelogram is "+anon+"cm");

//console.log(anon);





































