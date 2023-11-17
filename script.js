var num1 = 0
var clear_flag = false
var oper = ""
var memNum = 0
function memory() {
    if (memNum == 0){
        memNum = document.getElementById("result").value
        clearScreen()
    }
    else {
        document.getElementById("result").value = memNum
    }
    
}


function clearMem(){
    memNum = 0
}

function doMath(op) {
    num1 = document.getElementById("result").value
    clear_flag = true
    oper = op
}

function clearScreen() {
    document.getElementById("result").value = "";
}

function display(value) {

    if (clear_flag) {
        document.getElementById("result").value = ""
        clear_flag = false

    }

    if (document.getElementById("result").value.length < 10) {
        document.getElementById("result").value += value;
    }
    else {
        alert("Maximum 10 digits.")
    }

}

function calculate() {
    switch (oper) {
        case '+':
            document.getElementById("result").value = +document.getElementById("result").value + +num1
            break;
        case '-':
            document.getElementById("result").value = +num1 - +document.getElementById("result").value
            break;
        case '*':
            document.getElementById("result").value = +document.getElementById("result").value * +num1
            break;
        case '/':
            document.getElementById("result").value = +num1 / +document.getElementById("result").value
            break;
        case '√':
            document.getElementById("result").value = Math.sqrt(+document.getElementById("result").value)
            break;
        case '^':
            document.getElementById("result").value = parseInt(num1) ** +document.getElementById("result").value
            break;
        default:
            alert("Unknown operator!")
            break;
    }
}