//Function that clears display
function clr() {
    document.getElementById("result").value = ""
}

//Function that display value
function disp(val) {
    document.getElementById("result").value += val
}

// Function 
const display = document.getElementById("result");

function calculate() {
    try {
        display.value = eval(display.value);  //This eval method evaluates or executes an argument.
    }
    catch (error) {
        display.value = "Error";
        
    }
}