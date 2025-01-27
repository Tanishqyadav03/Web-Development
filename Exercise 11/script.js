// let num = parseInt(prompt("Enter number : "));
let num = 5;

let arr = [];

for(i=1; i <= num; i++){
    arr.push(i);
}

// Factorial using reduce function

function factRed(a, b){
    return a * b;
}
// console.log(arr.reduce((a,b)=>{
//     return a * b;
// }));
console.log("Factorial using reduce function")
console.log(arr.reduce(factRed));

// Factorial using for loop

let n = 1;
for(i=1; i <= num; i++){
    n = n * i;
}
console.log("Factorial using for loop")
console.log(n);


// Factorial using for of loop.

f = 1;
for(i of arr){
    f = f * i;
}
console.log("Factorial using for of loop.")
console.log(f);

//Factorial using recursion method.

function fact(num){
    if(num === 1){
        return 1;
    }
    
    return num * fact(num-1);

}

console.log("Factorial using recursion.");
console.log(fact(num));