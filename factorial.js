const number = 4;

/* function getFactorial(number){
    let factorial = 1;
    for(let i = number; i > 0; i--){
        factorial *= i;
    }
    return factorial;
}

const factorial = getFactorial(number);
console.log(factorial); */

function getFactorial(number){
    let i = number, factorial = 1;

    while(i > 0){
        factorial *= i;
        i--
    }
    return factorial;
}

const factorial = getFactorial(number);
console.log(factorial);