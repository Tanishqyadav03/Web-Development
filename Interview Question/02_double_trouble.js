// The Double Trouble:
// You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let numbers = [23, 45, 67, 89, 99, 99, 89, 67, 12, 34]

function doubleElements(array){
    let doubleElement = [];
    for(i=0; i < array.length; i++){
        doubleElement.push(array[i]);
        if(i === 0 || array[i] !== array[i-1]){
            doubleElement.push(array[i]);
        }
    }
    return doubleElement;
}

console.log(doubleElements(numbers));