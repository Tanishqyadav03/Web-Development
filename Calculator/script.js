const display = document.getElementById("cal-display");

function appendtodisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function clearOne(){
    let newValue = display.value.slice(0,-1);
    display.value = newValue;
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
        setTimeout(() => {
            display.value = "";
        }, 2000);
    }
    
}