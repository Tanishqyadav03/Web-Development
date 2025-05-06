// The Coffee Machine:
// In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

function randomDelay(){
    return Math.ceil(Math.random() * 30) * 1000;
} 
    
function latte(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(`The coffee is ready...`)
        }, randomDelay());
    })
}

function espresso(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(`The coffee is ready...`)
        }, randomDelay());
    })
}

function cappuccino(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(`The coffee is ready...`)
        }, randomDelay());
    })
}

function mocha(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(`The coffee is ready...`)
        }, randomDelay());
    })
}

async function brewCoffee(coffeeType){
    let coffee = await coffeeType();
    alert(coffee)
}

let coffee = brewCoffee(mocha)
console.log(coffee)