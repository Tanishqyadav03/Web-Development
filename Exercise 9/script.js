let fault = Math.random();
console.log(fault);
let a = parseInt(prompt("Enter first number : " ));
let b = parseInt(prompt("Enter second number : "));
let op = prompt("Enter operation +,-,*,/ : ");



if(fault <= 0.1){
    if(op == "+"){
        console.log(a - b);
    }
    else if(op == "-"){
        console.log(a / b);
    }
    else if(op == "*"){
        console.log(a + b);
    }
    else if(op == "/"){
        console.log(a ** b);
    }
    else{
        console.log("please check your operation !");
    }
} else{
    if(op == "+"){
        console.log(a + b);
    }
    else if(op == "-"){
        console.log(a - b);
    }
    else if(op == "*"){
        console.log(a * b);
    }
    else if(op == "/"){
        console.log(a / b);
    }
    else{
        console.log("please check your operation !");
    }
}