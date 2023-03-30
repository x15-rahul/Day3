const number1 = 10;
const number2 = 60;

function swapVariable(num1, num2){
    [num1, num2] = [num2, num1];
    console.log(num1, num2);
}

swapVariable(number1, number2);