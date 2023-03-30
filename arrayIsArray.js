const number = [10, 20, 30, 40];
const friendsName = ['Rahul', 'Sumit', 'Aditya', 'Raaz'];
console.log(Array.isArray(number));
console.log(number.indexOf(20));
console.log(number.includes(30));
const newArray = number.concat(friendsName);
console.log(newArray.join('|'));
const mySelf = {
    firstName: 'Rahul',
    lastName: 'Biswas',
    age: 25,
    isRich: false
};
for(const property in mySelf){
    // console.log(property, mySelf[property]);
}