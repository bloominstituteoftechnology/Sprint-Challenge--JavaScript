// ==== Callbacks ====

/* Step 1: Create a higher-order function that accepts a callback
 * Create a higher-order function named consume that can take 3 parameters.
 * The first two parameters can accept any argument
 * The last parameter accepts a callback
 * In the body of the function return the callback with the two parameters that you created
 */

function consume(x, y, cb) {
  console.log(cb(x, y));
}

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

function greeting(firstName, lastName) {
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2, 2, add); // 4
consume(10, 16, multiply); // 160
consume("Mary", "Poppins", greeting); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation:
// The reason 'nestedfunction()' can access the variable 'internal' is because of closures.
// Closure is basically allowing nested functions to access all variables defined in parent function ('myFunction' function) as well as variables defined globally.
// When the 'nestedFunction' is called it runs everything in that function.
// When it reaches to 'internal' variable, javascript tries to access it in 'nestedFunction' context.
// And when it does not find it there then, it tries to look that variable in its parent function context, in this case it is 'myFunction'.

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
