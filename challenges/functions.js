// ==== Callbacks ====

/* Step 1: Create a higher-order function
 * Create a higher-order function named consume with 3 parameters: a, b and cb
 * The first two parameters can take any argument (we can pass any value as argument)
 * The last parameter accepts a callback
 * The consume function should return the invocation of cb, passing a and b into cb as arguments
 */
function consume(a, b, cb) {
  return cb(a, b);
}

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function greeting(firstName, lastName) {
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====

// Explain in your own words why nestedfunction can access the variable internal.

// The inner Lexical Environment is searched first when the code wants to access a variable.  Then,
// it searches for the outer function until it reaches the global one.  In other words, the inner
//function has reference to the surrounding state (outer/Global function) of the Lexical environment.
//A closure gives you access to an outer function's scope from an inner function but, not from outer to inner.

//SO, 'const external' is in the Global Scope and it's being called in the Local Scope (line 53). There is 
//another function nested inside of 'function myFunction' and it's being called (line 58), also.  Line 62
//calls both console.log commands.


// Explanation:

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();
