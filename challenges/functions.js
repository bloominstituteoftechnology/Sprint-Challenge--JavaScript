// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
function consume (param1, param2, cb) {
  return cb(param1, param2);
}
// --------------------------------------------
/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add (num1, num2) {return num1 + num2;}
function multiply(num1, num2) {return num1 * num2;}
function greeting(first_name, last_name) {
  return `Hello ${first_name} ${last_name}, nice to meet you!`
}
// ----------------------------------------------
/* Step 3: Check your work by un-commenting the following calls to consume(): */
// console.log(consume(2, 2, add)); // 4
// console.log(consume(10, 16, multiply)); // 160
// console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: 
myFunction's only local variable is internal. But it calls external. The reason it can do this is that it has a closure over all variables in its lexical scope when it is declared, which includes the external variable in the global scope.
Additionally, nested function has no local variables or parameters, yet is able to call the internal variable. This is because it has closure over its lexical scope at time of declaration. 
Since it was declared within myFunction, it has access to all of myFunction's variables in its closure, which includes internal.

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
