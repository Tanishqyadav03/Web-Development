// The Shopping Cart Totalizer:
// You are working on an e-commerce website, and you need to calculate the total cost of items in the shopping cart. Implement a function named calculateTotal that takes an array of products with prices and quantities and returns the total cost.

let shopCart = [
    {"product" : "Shoes", "price" : 1200, "Quantity" : 1},
    {"product" : "Shirt", "price" : 400, "Quantity" : 2},
    {"product" : "Watches", "price" : 2500, "Quantity" : 1},
    {"product" : "Jeans", "price" : 800, "Quantity" : 3}
]

function calculateTotal(array){
    let totalCost = 0;
    if(array.length === 0){
        return totalCost;
    }
    for(let i = 0; i < array.length; i++){
        totalCost += array[i].price * array[i].Quantity;
    }
    return totalCost;
}

console.log(calculateTotal(shopCart));