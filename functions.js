function getSum(num1, num2) {
    return num1 + num2;
}
// console.log(getSum(1,4));
// parseInt() this is a function that pass a string as a number
var mySum = function (num1, num2) {
    if (typeof num1 == 'string') {
        num1 = parseInt(num1);
    }
    if (typeof num2 == 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
console.log(mySum(7, 8));
function getName(firstName, lastName) {
    if (lastName == undefined) {
        return firstName;
    }
    return firstName + ' ' + lastName;
}
console.log(getName('kachi', ''));
function myVoid() {
    return;
}
