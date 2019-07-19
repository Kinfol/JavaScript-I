const {
	functionThatPrintsTheArrayOfMessages,
	anotherFunction, 
	functionThatPrintsToConsole,
	functionThatAddsAndPrintsToConsoleTheResult1,
	functionThatSubstractsAndPrintsToConsoleTheResult
      } = require('../function-conversion');

test('Function prints message: "hello", "hi"', () => {
	expect(functionThatPrintsTheArrayOfMessages()).toContain('hello')
	
	expect(functionThatPrintsTheArrayOfMessages()).toContain('hi')
	
	expect(functionThatPrintsTheArrayOfMessages()).toEqual(['hello', 'hi'])
});

test('Function prints message: "hi you"', () => {
	expect(anotherFunction()).toBe(console.log())
});

test('Function prints the second argument: "b"', () => {
	expect(functionThatPrintsToConsole()).toBe(console.log())
});


test('Function prints the sum of 2 integers: "3"', () => {
	expect(functionThatAddsAndPrintsToConsoleTheResult1(1,2)).toBe(3)
});

test('Function prints the extraction of 2 integers: "-1"', () => {
	expect(functionThatSubstractsAndPrintsToConsoleTheResult(1,2)).toBe(-1)
});
