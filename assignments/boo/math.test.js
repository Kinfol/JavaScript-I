const {sumOfTwoNumbers, multiplyTwoNumbers}  = require('./math')

test('Adding 1 + 1 equals 2', () => {
  expect(sumOfTwoNumbers(1, 1)).toBe(2)
})
test('Multiplying 1 * 1 equals 1', () => {
  expect(multiplyTwoNumbers(2, 2)).toBe(4)
})
//test('Subtracting 1 - 1 equals 0', () => {
//  expect(sub(1, 1)).toBe(0)
//})
//test('Dividing 1 / 1 equals 1', () => {
//  expect(div(1, 1)).toBe(1)
//})
