// The Array Filterer:
// You are building a search feature for your e-commerce site. Write a function named filterProducts that takes an array of product objects and a filter criterion. The function should return a new array containing only the products that match the filter criterion.

let products = ["Smartphones", "phones", "Watches", "Shoes", "Women-shoes", "Clothes", "Men-Clothes", "Women-Clothes"];

function findProduct(productName, productsList){
    let filterProducts = productsList.filter(product => 
        product.toLowerCase().includes(productName.toLowerCase())  // Case-insensitive search
    );

    if(filterProducts.length === 0){
        console.log(`Product not found`)
    }else{
        console.log(filterProducts);
    }
}

findProduct("Men-clothes", products);


// Chatgpt Solution
let products_list = [
    { name: "Smartphones", category: "Electronics" },
    { name: "phones", category: "Electronics" },
    { name: "Watches", category: "Accessories" },
    { name: "Shoes", category: "Footwear" },
    { name: "Women-shoes", category: "Footwear" },
    { name: "Clothes", category: "Apparel" },
    { name: "Men-Clothes", category: "Apparel" },
    { name: "Women-Clothes", category: "Apparel" }
];

function filterProducts(productsList, searchQuery) {
    let filtered = productsList.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) 
    );

    return filtered.length ? filtered : "Product not found";
}


console.log(filterProducts(products_list, "Men-clothes")); 
console.log(filterProducts(products_list, "shoes")); 
console.log(filterProducts(products_list, "phones")); 
console.log(filterProducts(products_list, "laptop")); 
