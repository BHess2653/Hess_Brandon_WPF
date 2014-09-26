// Brandon Hess
// 9-26-2014
// ID# 4621251
// Final Exam WPF




//ItemCost
var itemCost = prompt("Please enter the cost of your item");

while(itemCost===""){

    itemCost = prompt("please don't leave it blank and enter the cost of your item");

}

console.log("Original Price = "+itemCost);


//Discount%
var disPer = prompt("Please enter your discount%");

if(disPer>100){

    disPer = prompt("Discount% you entered is to big. Enter between 0 -> 100")
}

while(disPer===""){

    disPer = prompt("please don't leave it blank and enter a discount%");

}

console.log("Discount% = "+disPer);

//


//var disA = 1-disPer;

    //disPer/100;

console.log("Discount%/100 = "+disPer);

//orgi * (1-discount%

function priceDiscount(iC, dP){

    var disCount = iC * 1-dP;
    return disCount;
}

var anon = priceDiscount(itemCost, disPer);

console.log("Original Price * 1 - Discount% = "+anon);

console.log("The return price was $"+anon+", the Original price was $"+itemCost+", and the price Discount% was "+disPer+"%.");
alert("The return price was $"+anon+", the Original price was $"+itemCost+", and the price Discount% was "+disPer+"%.");
























