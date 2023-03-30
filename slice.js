const number = [10, 20, 30, 40, 50, 60, 70, 15];
const sliced = number.slice(1, 5);
console.log(sliced);
console.log(number);
const spliced = number.splice(1, 4, 11, 12, 13, 14);
console.log(spliced);
console.log(number);