// Async Array Mapping:
// Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.

async function arrayMapping(num){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(num * 2)
        }, 500);
    })
}

async function arrMapping(array){
    return Promise.all(array.map(async (num)=> arrayMapping(num)));
}

async function arrMap(){
    let arr = [1, 2, 3, 4, 5]
    let newArray = await arrMapping(arr);
    console.log(newArray);
}

arrMap()

// async function asyncDouble(number) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(number * 2);
//         }, 500);
//     });
// }

// async function arrayMapping(array) {
//     return Promise.all(array.map(async (num) => await asyncDouble(num)));
// }

// async function arrMapping() {
//     let arr = [1, 2, 3, 4, 5];
//     let newArray = await arrayMapping(arr);
//     console.log(newArray);
// }

// arrMapping();
