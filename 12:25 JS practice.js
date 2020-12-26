"use strict"

// Using the "&&" Operator
// Published by bangyen in JavaScript
// language_fundamentalslogicvalidation
// JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true 
// if both values are true.

// Consider a && b:

// a is checked if it is true or false.
// If a is false, false is returned.
// b is checked if it is true or false.
// If b is false, false is returned.
// Otherwise, true is returned (as both a and b are therefore true ).
// The && operator will only return true for true && true.

// Make a function using the && operator.



function and(a, b) {
	return a && b;
}

// Add up the Numbers from a Single Number
// Published by Matt in JavaScript
// completealgorithmsmathnumbersrecursion
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

// Examples

// addUp(4) ➞ 10

// addUp(13) ➞ 91

// addUp(600) ➞ 180300

function addUp(num) {
  if (num === 1) return 1;
  return num + addUp(num - 1);
}

// alt answers function addUp(num) {
//   return (num * (num + 1))/2;
// }

// Matchstick Houses
// Published by Ruud Peter Boelens in JavaScript
// algebraalgorithmslogicmathrecursion
// This challenge will help you interpret mathematical relationships both algebraically and geometrically.

// Matchstick Houses, Steps 1, 2 and 3

// Create a function that takes a number (step) as an argument and returns the number of 
// matchsticks in that step. See step 1, 2 and 3 in the image above.

function matchHouses(step) {
	if(step === 0) {
		return 0;
	}else{
		return (step*6)-(step -1);
	}
}

// alt answer function matchHouses(step) {
// 	return step === 0 ? 0 : 5 * step + 1;
// }