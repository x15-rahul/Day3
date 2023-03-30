const array = [0, 1];

function getFibo(array){
    for(let i = 2; i <= 8; i++){
        array[i] = array[i - 1] + array[i - 2];
    }
    return array;
}

const fiboSeries = getFibo(array);
console.log(fiboSeries);