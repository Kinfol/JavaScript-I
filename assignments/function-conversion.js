// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

let myFunction = () => {
	console.log('hello');
	};
myFunction();

//for my understanding
//let anotherFunction = (param) => {
//	console.log("unction is invoked");
//};
//anotherFunction();
////this will not work
////anotherFunction(param);
//
////testing functionThatPrintsToConsole with 2 Outputs
//let functionThatPrintsToConsole= (outputTextNumber1, outputTextNumber2) => {
//     console.log(outputTextNumber2);
//   };
//functionThatPrintsToConsole("i", "Some text");
//
//let functionThatAddsAndPrintsToConsoleTheResult1 = (param1, param2) => {
//	return param1 + param2;
//	};
//console.log(functionThatAddsAndPrintsToConsoleTheResult1(1,2)+ "function");
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
module.exports = {myFunction};
