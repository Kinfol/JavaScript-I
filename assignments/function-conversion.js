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
};
functionThatPrintsTheArrayOfMessages(arrayOfMessages.push('hello', 'hi'));

let anotherFunction = (param) => {
	console.log("function is invoked");
};
anotherFunction();

//testing functionThatPrintsToConsole with 2 Outputs
let functionThatPrintsToConsole= (outputTextNumber1, outputTextNumber2) => {
     console.log(outputTextNumber2);
};
functionThatPrintsToConsole("a", "b");


let functionThatAddsAndPrintsToConsoleTheResult1 = (param1, param2) => {
	return param1 + param2;
};
console.log(functionThatAddsAndPrintsToConsoleTheResult1(1,2)+ " function");
//
//
//let functionThatAddsAndPrintsToConsoleTheResult = (param1, param2) => {
//	console.log(param1 + param2);
//	};
//console.log(functionThatAddsAndPrintsToConsoleTheResult(1,2));
//
//let subtract = (param1, param2) => {
//   return param1 - param2;
//	};
//console.log(substract(1,2));
//
//
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
		};
