// The Token Manager:
// You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.

function setAuthToken(token){
    if(token === null){
        return alert(`Please enter your authentication token`)
    }
    localStorage.setItem("authenticationToken", token)
    expirationToken()
}

function expirationToken(){
    alert(`Your token is expired in 2 minutes`)
    setTimeout(() => {
        localStorage.removeItem("authenticationToken");
        alert(`Your authentication code is expired..`)
    }, 120000);
}


function getAuthToken(token){
    if(!localStorage.getItem(token)){
        return alert(`Your authentication code is expired..`)
    }
    alert(localStorage.getItem(token))
}

let token = prompt("Enter your token: ");
setAuthToken(token);

