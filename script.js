function Addition(){
    let firstNumber = document.getElementById("FirstNumber").value;
    let secondNumber = document.getElementById("SecondNumber").value;
    let result = Number(firstNumber) + Number(secondNumber);
    alert("The result is " + result);
}