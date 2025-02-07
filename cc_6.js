//Task 1 - Function Declaration

//Writing a function that caluclates profit given a cost price, selling price, and units sold.
function calculateProfit(costPrice, sellingPrice, unitsSold){
    return (sellingPrice - costPrice) * unitsSold //Profit formula is (Selling Price - Cost Price) * Units Sold
}

//Logging the function and testing it with data that my professor provided.
console.log(`Total Profit: $${calculateProfit(20, 30, 100)}`) //Expected output: 1000
console.log(`Total Profit: $${calculateProfit(50, 70, 200)}`) //Expected output: 4000