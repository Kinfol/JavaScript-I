// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();
const y ="test";
const msg = [];
msg.push("fdw");

let arrayOfMessages = [];
let functionThatPrintsTheArrayOfMessages = () => {
// pushing the messages to the array can be done when invoking the function as in line 19
//	console.log(message.push('hello','hi'));
	for (let i in arrayOfMessages){
	console.log(arrayOfMessages[i])
	};
	return arrayOfMessages;
};
functionThatPrintsTheArrayOfMessages(arrayOfMessages.push('hello', 'hi'));

//function that prints a message to the console, the function is undifined and tested acordingly in contrast to the function above
let anotherFunction = (param) => {
	return param
}
console.log(anotherFunction('hi you'))

//testing functionThatPrintsToConsole with 2 Outputs
let functionThatPrintsToConsole= (outputTextNumber1, outputTextNumber2) => {
     console.log(outputTextNumber2);
};
functionThatPrintsToConsole("a", "b");


let functionThatAddsAndPrintsToConsoleTheResult1 = (param1, param2) => {
	return param1 + param2;
};
console.log(functionThatAddsAndPrintsToConsoleTheResult1(1,2)+ " function");


//Another way of writing functionThatAddsAndPrintsToConsoleTheResult1
//let functionThatAddsAndPrintsToConsoleTheResult = (param1, param2) => {
//	console.log(param1 + param2);
//	};
//console.log(functionThatAddsAndPrintsToConsoleTheResult(1,2));


let functionThatSubstractsAndPrintsToConsoleTheResult= (param1, param2) => {
   return param1 - param2;
	};
console.log(functionThatSubstractsAndPrintsToConsoleTheResult(1,2));


//
//// Stretch
//
//// exampleArray = [1,2,3,4];
//// const triple = exampleArray.map(function (num) {
////   return num * 3;
//// });
//// console.log(triple);
//
module.exports = {
		functionThatPrintsTheArrayOfMessages,
		anotherFunction,
		functionThatPrintsToConsole,
		functionThatAddsAndPrintsToConsoleTheResult1,
		functionThatSubstractsAndPrintsToConsoleTheResult
		};
