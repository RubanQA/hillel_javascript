let firstNumber = parseFloat(prompt("Enter your first number: "));
let secondNumber = parseFloat(prompt("Enter your second number: "));

if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    let result = `${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}\n${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}\n${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}\n${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`;
    alert(result);
} else {
    alert("Please, enter numbers!");
}
