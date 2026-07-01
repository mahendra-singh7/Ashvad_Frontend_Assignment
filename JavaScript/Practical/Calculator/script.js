function add(){

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    document.getElementById("result").innerText = "Result = " + (num1 + num2);

}

function subtract(){

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    document.getElementById("result").innerText = "Result = " + (num1 - num2);

}

function multiply(){

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    document.getElementById("result").innerText = "Result = " + (num1 * num2);

}

function divide(){

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    if(num2 === 0){
        document.getElementById("result").innerText = "Cannot divide by zero";
    }else{
        document.getElementById("result").innerText = "Result = " + (num1 / num2);
    }

}