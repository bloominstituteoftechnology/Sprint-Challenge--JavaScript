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
const add = (x, y) => x+y;
const multiply = (x, y) => x*y;
const greeting = (x, y) => `Hello ${x} ${y}, nice to meet you!`;

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
/*
Because of closure and lexical scoping. The inner/nested function `nestedfunction()` has access to the outer/enclosing function's '`myFuncation()` 
variable and parameters. Additionally, that enclosing function has access to the outer objects, that being the global window. 
In turn this creates a scope chain whereby the inner funcation has access to its own scope and everything within its {}, 
it has access to its parent funcation and all it's parent's variables and parameters(but not arguments), 
and it has access to all the global variables. However, this scoping chain does not work the other way, 
the global scope cannot access within the parent function or the function's innfer function.
*/

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