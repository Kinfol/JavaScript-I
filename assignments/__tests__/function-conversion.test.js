const {myFunction} = require('../function-conversion');

test('Function prints message: "hello"', () => {
	expect(myFunction().toBe(console.log("hello")))
});
