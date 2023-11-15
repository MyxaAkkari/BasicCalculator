function clearScreen(){
    document.getElementById("result").value = "";
}

function display(value){
    
    if (document.getElementById("result").value.length < 10){
        document.getElementById("result").value += value;
    }
    else {
        alert("Maximum 10 digits.")
    }
    
}

function calculate(){
    var calc = document.getElementById("result").value;
    var answer = eval(calc);
    document.getElementById("result").value = answer;
}