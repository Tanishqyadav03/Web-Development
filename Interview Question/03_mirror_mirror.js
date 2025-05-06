// The Mirror Mirror:
// Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.



function the_mirror_mirror(string) {
    let user_name = string;
    let l = user_name.length - 1;
    let reverse = ""

    for (i = l; i >= 0; i--) {
        let value = user_name[i];
        reverse += value
    }
    return user_name + reverse;
}

let mirror_name = the_mirror_mirror("Tanishq");
console.log(mirror_name);