// The Asynchronous Shopper:
// Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

async function placeOrder(){
    let delay = Math.ceil(Math.random() * 5) * 1000;
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Your Order placed successfully...")
        }, delay);
    })
}

async function myOrder(){
    document.getElementById("orderDetail").innerText = "Your Order is placing..."
    let order = await placeOrder()
    document.getElementById("orderDetail").innerText = order;
}


document.getElementById("placeOrder").addEventListener("click", ()=> myOrder())
