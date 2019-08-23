// ==== Callbacks ====

/* Step 1: Create a higher-order function
 * Create a higher-order function named consume with 3 parameters: a, b and cb
 * The first two parameters can take any argument (we can pass any value as argument)
 * The last parameter accepts a callback
 * The consume function should return the invocation of cb, passing a and b into cb as arguments
 */

// Higher Order Function
function consume(a, b, cb) {
  return cb(a, b);
}

// Argument function for "cb" placeholder.
const arg = function(a, b) {
  return `I received ${a} & ${b} just now. TIME TO GRUB!`;
};

// Testing the return statement of arg's invocation as consume is invoked.
console.log(consume("Apple", "GIANT Squid", arg));

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */

function add(sum1, sum2) {
  return sum1 + sum2;
}

function multiply(prod1, prod2) {
  return prod1 * prod2;
}

function greeting(first, last) {
  return `Hello ${first} ${last}, nice to meet you!`;
}

console.log(
  `Challenge 2 console message \n`,
  add(1, 2),
  multiply(22, 16),
  greeting("Thai", "Ngo")
);

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====

// Explain in your own words why nestedfunction can access the variable internal.

// If there is no available information within the current scope, the function will look to the outer scope for information / variables.

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
