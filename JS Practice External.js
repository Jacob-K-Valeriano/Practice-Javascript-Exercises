"USE STRICT"
// <!--Return the Sum of Two Numbers-->
// <!--Create a function that takes two numbers as arguments and return their sum.-->

function addition(a, b) {
    return a + b;
}

// Return the Remainder from Two Numbers
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder,
//     possibly zero. Return that value.

function remainder(x, y) {
    return x % y;
}

// Convert Hours into Seconds
// Write a function that converts hours into seconds.

function howManySeconds(hours){
    return hours * 3600;
}

// Return Something to Me!
//     Write a function that returns the string "something" joined with a space " "
//     and the given argument a.

function giveMeSomething(a) {
    return "something " + a;
}

// Add up the Numbers from a Single Number
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function.
// For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(num) {
    return (num * (num + 1)) / 2;

}

// Return the Next Number from the Integer Passed
// Create a function that takes a number as an argument, increments the number by +1
// and returns the result.

function addition(num) {
    return num++;
}

// Area of a Triangle
// Write a function that takes the base and height of a triangle and return its area.

function triArea(base, height) {
    return (base * height) / 2;
}

// Power Calculator
// Create a function that takes voltage and current and returns the calculated power.

function circuitPower(voltage, current) {
    return voltage * current;
}

// Buggy Code (Part 1)
// Fix the code in the code tab to pass this challenge (only syntax errors).
// Look at the examples below to get an idea of what the function should do.
//
//     function cubes(a) {
//     retunr a ** 3
// }

function cubes(a) {
    return a * a * a;
}

// Return the First Element in an Array
// Create a function that takes an array containing only numbers and return the first element.

function getFirstValue(arr) {
    return arr[0];
}