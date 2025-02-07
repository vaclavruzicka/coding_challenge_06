//Task 1 - Function Declaration

//Writing a function that caluclates profit given a cost price, selling price, and units sold.
function calculateProfit(costPrice, sellingPrice, unitsSold){
    return (sellingPrice - costPrice) * unitsSold //Profit formula is (Selling Price - Cost Price) * Units Sold
}

//Logging the function and testing it with provided data.
console.log(`Total Profit: $${calculateProfit(20, 30, 100)}`) //Expected output: 1000
console.log(`Total Profit: $${calculateProfit(50, 70, 200)}`) //Expected output: 4000

//Task 2 - Function Expression

//Declaring a function expression that calculates sales tax given an amount and a tax rate.
let calculateSalesTax = function(amount, taxRate){
    return amount * taxRate //Sales tax formula is amount * tax rate.
}

//Logging the function and testing it with provided data.
// // Had to use math floor to round down from 7.0001 to 7.
console.log(`Sales Tax: $${Math.floor(calculateSalesTax(100, 0.07))}`) // Expected output: 7
console.log(`Sales Tax: $${calculateSalesTax(500, 0.1)}`) // Expected output: 50