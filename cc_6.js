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
console.log(`Sales Tax: $${(calculateSalesTax(100, 0.07).toFixed(0))}`) // Expected output: 7
console.log(`Sales Tax: $${calculateSalesTax(500, 0.1)}`) // Expected output: 50

//Task 3 - Arrow Function

//Writing an arrow function that calculates a bonus based on a salary and a performance rating.
const calculateBonus  = (salary, performanceRating) => salary * performanceRating

//Declaring the difference values for each performance evaluation.
let excellent = 0.2 //20% Bonus
let good = 0.1 //10% Bonus
let average = 0.05 //5% Bonus

//Logging the arrow function with provided data.
console.log(`Bonus: $${calculateBonus(5000, excellent)}`)
console.log(`Bonus: $${calculateBonus(7000, good)}`)

//Task 4 - Parameters and Arguments

//Writing a function that calculates subscription cost give the plans cost, how many months, and if there is a discount.
const calculateSubscriptionCost = (plan, months, discount) => plan * months - discount

//Declaring variables for each subscription tier and their price.
let basic = 10
let premium = 20
let enterprise = 50

//Logging the function with provided data.
console.log(`Total Cost: $${calculateSubscriptionCost(basic, 6, 10)}`) //Expected output: 50
console.log(`Total Cost: $${calculateSubscriptionCost(premium, 12, 0)}`) //Expected output: 240

//Task 5 - Returning Values

//Writing a function that calculates currency conversion given an amount and an exchange rate.
function convertCurrency(amount, exchangeRate){
    return amount * exchangeRate
}

//Logging the function with provided data.
console.log(`Converted Amount: $${(convertCurrency(100, 1.1).toFixed(2))}`) //Expected output: 110
console.log(`Converted Amount: $${convertCurrency(250, 0.85).toFixed(2)}`) //Expected output: 212.50

//Task 6 - Higher-Order Functions

//Writing a function that can apply the discount function to an array all at once.
function applyBulkDiscount(orders, discountFunction){
    return orders.map(order => discountFunction(order))
}

//Declaring an array named orders with five order amounts.
const orders = [200, 600, 1200, 450, 800]

//Declaring the discount rate
const discountRate = .1 //10% discount rate.

//Defining a variable discountedOrders so that it is easier to log the array of numbers with a discount.
const discountedOrders = applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount)

//Logging the array of discounted orders.
console.log(discountedOrders)