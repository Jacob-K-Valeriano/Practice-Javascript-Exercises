"use strict"


Why use a for loop vs. a forEach and vice versa?

 for loop is if I needed to break out of a loop early

the forEach method would iterate over each food, which could lead to performance issues.


What is a higher order function?



A higher order function is a function that takes a function as an argument, or returns a function .
 Higher order function is in contrast to first order functions, which don't take a function as an argument or return a function as output

What is a callback function?

A callback function is a function passed into another function as an argument, 
which is then invoked inside the outer function to complete some kind of routine or action.


What is the difference between =, ==, and ===?

= assignment
== comparison
=== type and value




What is an IIFE and why is best practice to wrap your JS code in one?

An IIFE (Immediately Invoked Function Expression) is a JavaScript 
function that runs as soon as it is defined.

The primary reason to use an IIFE is to obtain data privacy. Because JavaScript's
 var scopes variables to their containing function, any variables declared within the 
 IIFE cannot be accessed by the outside world.



What is Strict Mode and why is a best practice to use it when writing JS code?

In standard JavaScript, the developer will not receive any error feedback
he strict mode makes it easier to write “secure” JavaScript. It changes previously accepted “bad syntax” into real errors. For example, in regular, JavaScript, mistyping the variable name creates the new global variable. In strict mode, 
it results in error, making it impossible to create the global variable accidentally.




What kind of data is best stored in an array and what kind of data is best stored in an object?





Why define an object in a single statement vs. dynamically adding properties and values 
in seperate statements?

single statment  = you have all information , better to define in a single statement
dynamically = if you need to change , add values / user interaction 



Are strings in JS mutable or immutable? What about arrays and objects?


Mutable is a type of variable that can be changed. In JavaScript, only objects and arrays are mutable, not primitive values.

(You can make a variable name point to a new value, but the previous value is still held in memory. Hence the need for garbage collection.)

A mutable object is an object whose state can be modified after it is created.

Immutables are the objects whose state cannot be changed once the object is created.

Strings and Numbers are Immutable. Lets understand this with an example:


Why does the following code log the number 3 and not the number 1?
  
  var x = {a: 1, b:2};
  var y = x;
  x.a = 3;
  console.log(y.a);