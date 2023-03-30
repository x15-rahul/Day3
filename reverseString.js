const myName = 'Rahul Biswas';

function reverseString(string){
    let newString = '';
    for(let i = string.length - 1; i >= 0; i--){
        newString = newString.concat(string[i]);
    }
    return newString;
}
const newString = reverseString(myName);
console.log(newString);

function reverseWord(string){
    let newString = '';
    const stringArray = string.split(' ');
    for(let i = stringArray.length - 1; i >= 0; i--){
        newString = newString.concat(' ',stringArray[i]);
    }
    return newString;
}

const newName = reverseWord(myName);
console.log(newName.trim());