const {myFunction, anotherFunction} = require('../function-conversion');

test('Function prints message: "hello"', () => {
	expect(myFunction()).toBe(console.log())
});


test('Function prints message: "function is invoked"', () => {
	expect(anotherFunction()).toBe(console.log())
});
