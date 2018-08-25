// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
const consume = (var1, var2, cb) => {
  return cb(var1, var2);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
const add = (var1, var2) => {
  return var1 + var2;
}

const multiply = (var1, var2) => {
  return var1 * var2;
}

const greeting = (var1, var2) => {
  return `Hello ${var1} ${var2}, nice to meet you!`;
}

/* Step 3: Check your work by uncommenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
  // I believe that  `nestedfunction()` can access the variable  `internal` because of closure.
  // Since internal is not used anywhere in `myFunction()` then it goes one level further out in scope
    // and checks the `nestedfunction()` which contains internal.  If internal would not have been in
    // the `nestedfunction()` it would have checked the global variables like it did for external.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();