// The Magical Sorting Hat:
// Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.


let students = ["Tanishq", "Nandini", "Ajay", "Sumit", "Kishorinandan", "Kajal", "Kanchan", "Anshul", "Bhupendra", "Neeraj", "Bhanupratap", "Gurusanjeevan"]

function magical_sorting(students){
    let houses = [];
    for(let student of students){
        if(student.length < 6){
            houses.push("Gryffindor")
        }
        else if(student.length < 8){
            houses.push("Hufflepuff")
        }
        else if(student.length < 12){
            houses.push("Ravenclaw")
        }
        else{
            houses.push("Slytherin")
        }
    }
    return houses;
}

console.log(magical_sorting(students));