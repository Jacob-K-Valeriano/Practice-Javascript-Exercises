"use strict";

// Return Something to Me!
// Write a function that returns the string "something" joined with a space " " and the given argument a.
function giveMeSomething(a) {
	return "something" +  " " + a
}


// Create a variable called carName, assign the value Volvo to it.

var carName = "Volvo";

// Create a variable called x, assign the value 50 to it.

var x = 50

// Display the sum of 5 + 10, using two variables: x and y.

var x = 5;
var y = 10;
document.getElementById("demo").innerHTML = x + y;

// Use comments to describe the correct data type of the following variables:

var length = 16;          // number
var lastName = "Johnson"; // string
var x = {
  firstName: "John",
  lastName: "Doe"
};                        // object


// Create a function called "myFunction".

function myFunction() {
  alert("Hello World!");
}

// Execute the function named myFunction.

function myFunction() {
  alert("Hello World!");
}
myFunction();

// Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step. See step 1, 2 and 3 in the image above.

// Examples matchHouses(1) ➞ 6

// matchHouses(4) ➞ 21

// matchHouses(87) ➞ 436
// Step 0 returns 0 matchsticks.
// The input (step) will always be a non-negative integer.
// Think of the input (step) as the total number of houses that have been connected together.

function matchHouses(step) {
	return step === 0 ? 0 : 5 * step + 1;
}

