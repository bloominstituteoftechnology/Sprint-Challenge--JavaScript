// ==== Callbacks ====

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two 
  * parameters that you created
*/
consume = function(x, y, cb) {
  return cb(x, y);
};

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two 
    numbers
  * Create a function named multiply that returns the product of 
    two numbers 
  * Create a function named greeting that accepts a first and 
    last name and returns "Hello first-name last-name, nice to 
    meet you!"
*/
add = (x, y) => x + y;
multiply = (x, y) => x * y;
greeting = (x, y) => `Hello ${x} ${y}, nice to meet you!`;

/* Step 3: Check your work by uncommenting the following calls to 
consume(): */
consume(2, 2, add);
consume(10, 16, multiply);
consume("Mary", "Poppins", greeting);

// ==== Closures ====
// Explain in your own words why `nestedfunction()` can access the 
// variable `internal`.

// Explanation:
//nestedfunction() can access the variable internal because functions 
// search outward for context. Because internal isn't defined within 
// nestedFunction(), nestedFunction() can search it's parent function's 
// scope (i.e. myFunction()) and the global scope for internal.

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
