const sumOfTwoNumbers = (a, b) => a + b
console.log(sumOfTwoNumbers(1,2));
const multiplyTwoNumbers = (a, b) => a * b
console.log(multiplyTwoNumbers(2,2));
//const sub = (a, b) => a - b
//const div = (a, b) => a / b

try{
module.exports = {sumOfTwoNumbers, multiplyTwoNumbers};
} catch (error) {
  console.log('we caught an error');
}
