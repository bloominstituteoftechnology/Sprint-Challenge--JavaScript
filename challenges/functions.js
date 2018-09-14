// ==== Callbacks ====

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume(param1, param2, cb) {
  return cb(param1, param2);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(num1, num2) {
  console.log(num1 + num2);
}
function multiply(num1, num2) {
  console.log(num1 * num2);
}
function greeting(first, last) {
  console.log(`Hello ${first} ${last}, nice to meet you!`);
}
/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2, 2, add); // 4
consume(10, 16, multiply); // 160
consume("Mary", "Poppins", greeting); // Hello Mary Poppins, nice to meet you!

// ==== Closures ====
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation:
//when nestedFunction is ran inside myFunction, it takes a lexical snapshot of its outer environment (where console.log of external, const internal, nestedFunction, and console.log of internal are written
// nestedFunction takes these declarations into its "backpack" of closure. when myFunction is finally called at the end of the code, nestedFunction first looks inside its own scope for the declaration fo what 'internal' is
// because it's not defined within nestedFunction, it then looks to its outer lexical environment (myFunction) using the snapshot taken and stored in the backpack of closure. it uses the value found there and applies it to its console.log call
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
