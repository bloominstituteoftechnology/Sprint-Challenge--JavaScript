// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function higherOrderfunction(num1, num2, callback) {
  return callback(num1, num2);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

const add = function(num1, num2) {
  return num1 + num2;
}

const multiply = function(num1, num2) {
  return num1 * num2;
}

const greeting = function(num1, num2) {
  return "Hello" + " " + num1 + " " + num2 + " " + "nice to meet you!";
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
// consume(2,2,add); // 4
// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!

console.log(higherOrderfunction(2,2,add));

console.log(higherOrderfunction(10,16,multiply));

console.log(higherOrderfunction("Mary","Poppins",greeting));

// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

The nestedfunction() can access the variables of the enclosing function due to closures 
in JavaScript. In other words, the inner function preserves the scope chain of the enclosing
 function at the time the enclosing function was executed, and thus can access the enclosing 
 function’s variables.


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