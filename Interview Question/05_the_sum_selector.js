// The Sum Selector:
// You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

let num_list = [23, 45, -66, 14, 67, 89, 23, 5, 34, 26, -78, 34, -64];

function sum_selector(list){
    let sum = 0;
    for(const num of list){
        if(num < 0){
            return sum;
        }
        else{
            sum += num
        }
    }
    return sum;
}

console.log(sum_selector(num_list));