const numbers = [10, 5, 13, 23, 45, 44, 55, 30, 60];

function fooBar(array){
    for(const number of array){
        if(number%3 == 0 && number%5 == 0){
            console.log('foobar');
        } else if (number%5 == 0){
            console.log('bar');
        } else if(number%3 == 0){
            console.log('foo');
        } else {
            console.log(number);
        }
    }
}
fooBar(numbers);