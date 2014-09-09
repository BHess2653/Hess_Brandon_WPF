//Brandon Hess
//9-8-2014
// WPF
//Instructional Expressions


//Slice of Pie 1

var slicesPerPizza=8;
var peopleAtParty=16;
var pizzasOrdered=2;

var totalSlices = slicesPerPizza * pizzasOrdered;

var slicesPerPerson = totalSlices / peopleAtParty;

console.log("Total Slices: " + totalSlices);
console.log("Per Person: " + slicesPerPerson);



//Slice of Pie 2

var slicesPerPizza=8;
var peopleAtParty=16;
var pizzasOrdered=2;

var totalSlices = slicesPerPizza * pizzasOrdered;

var sparky = totalSlices / peopleAtParty;

console.log("Total Slices: " + totalSlices);
console.log("Per Person: " + sparky);



//Average Shopping Bill

var weeks = 5;
var groceryBills = [56.43, 12.05, 15.05, 25.15, 12.05]
var totalSpentOnGroceries= groceryBills[0] + groceryBills[1]+ groceryBills[2]+ groceryBills[3]+ groceryBills[4];
var totalAverage = totalSpentOnGroceries / weeks;

console.log("Total Spent 5 weeks"+" "+ totalSpentOnGroceries)
console.log("Average each week"+" "+ totalAverage)



//Discounts

var originalPrice= 110;
var discount= 25;
var discountPercent= discount/100;
var item= "TV";



var disc = originalPrice * discountPercent;


var itemWithTax = originalPrice + disc;


var itemWithoutTax = originalPrice - disc;




console.log("item without Tax"+" "+ itemWithoutTax);


console.log("item with Tax"+" "+ itemWithTax);
































