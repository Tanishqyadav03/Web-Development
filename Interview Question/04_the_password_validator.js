// The Password Validator:
// You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function the_password_validator() {
    let password = prompt("Enter your password : ");

    if (password.length < 8) {
        alert(`Your password is not valid.Password must have minimum lenght 8.`);
        return;
    }

    if (password.length >= 8) {

        let upper_case = false, lower_case = false, number = false;

        for (i = 0; i < password.length; i++) {
            let char = password.charCodeAt(i);
            if (char >= 65 && char <= 90) upper_case = true;
            if (char >= 97 && char <= 122) lower_case = true;
            if (char >= 48 && char <= 57) number = true;

            if (upper_case && lower_case && number) {
                alert(`Your password is valid`);
            }
            else {
                alert(`Your password is not valid.Your password must have minimum length 8, Minimum one Uppercase value, Minimum one Lowercase value and Minimum one number value`)
            }
        }
    }
}

the_password_validator();