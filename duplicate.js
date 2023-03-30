const number = [10, 20, 30, 40, 20, 40, 10, 30, 50];

const realNumbers = [];

function removeDuplicate(array){
    for(const number of array){
        if(realNumbers.includes(number)){
            continue;
        } else {
            realNumbers.push(number);
        }
    }
    return realNumbers;
}

const newArray = removeDuplicate(number);
console.log(newArray);