// The Vowel Counter:
// You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function vowelCounter(para){
    let vowels = 0;

    for(let i=0; i < para.length; i++){
        let char = para.charCodeAt(i);

        if(char === 65 || char === 69 || char === 73 || char === 79 || char === 85) vowels += 1;
        if(char === 97 || char === 101 || char === 105 || char === 111 || char === 117) vowels += 1;
    }
    return vowels;

}


let parah = "Lorem ipsum dolor, sit amet consectetur adipisicing elit."


console.log(vowelCounter(parah));



// Chatgpt code some optimization in code for better time complexity.
// function vowelCounter(paragraph) {
//     let vowels = 0;
//     let vowelSet = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']);

//     for (let i = 0; i < paragraph.length; i++) {
//         if (vowelSet.has(paragraph[i])) {
//             vowels++;
//         }
//     }
//     return vowels;
// }

// let parah = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
// console.log(vowelCounter(parah)); // Output: 20
