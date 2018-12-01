// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

const consume = (x, y, cb) => cb(x, y);

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
const greeting = (firstname, lastname) => `Hello ${firstname} ${lastname}, nice to meet you!`;

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
//
// `nestedfunction()` is a closure - an inner function inside of `myFunction()`. Because it is inside of `myFunction()` (within its scope) and defined below `internal`, it will be able to recognize `internal` because: 
//
// (1) the variable has already been defined, and 
// (2) it is defined within the same scope as `internal`
//
// It may also be important to note that being a closure (inner function), if `nestedfunction()` were to manipulate any variables inside of itself, `myFunction()` would not be able to use the values resulting from changes made in `nestedfunction()`.


const external = "I'm outside the function";

const myFunction = (function() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
})();