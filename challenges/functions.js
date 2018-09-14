// ==== Callbacks ====

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
let consume = function(param1, param2, callback) {
  return callback(param1, param2);
};

/* Step 2: Create several functions to callback with consume();
* Create a function named add that returns the sum of two numbers
* Create a function named multiply that returns the product of two numbers 
* Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
let add = (num1, num2) => num1 + num2;
let multiply = (num1, num2) => num1 * num2;
let greeting = (first, last) => `Hello ${first} ${last}, nice to meet you!`;
// let multiply = function

/* Step 3: Check your work by uncommenting the following calls to consume(): */
console.log(consume(2, 2, add));
console.log(consume(2, 2, multiply));
console.log(consume("Mary", "Poppins", greeting));
consume(2, 2, add); // 4
consume(10, 16, multiply); // 160
consume("Mary", "Poppins", greeting); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation:
// Since nestedFunction() does not have a variable called 'internal' inside its scope, it went one scope up to look for that information, which in this case is myFunction(). As soon as we nested a function, 'internal' was stored in a closure for later use down the scope chain.

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
