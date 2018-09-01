// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume(param1, param2, cb) {
  return cb(param1, param2);
};


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
let add = function( param1, param2 ) {
  return param1 + param2;
};

let multiply = function( param1, param2 ) {
  return param1 * param2;
};

let greeting = function( param1, param2 ) {
    return `Hello ${param1}  ${param2}, nice to meet you`;
};


/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
//Basically nestedFunction is able to access to the lexical schope of myFunction and can access the internal variable.  Lexical scope to me means the variable can only be called from within the block of code where it was created.  My function also has access to the external variable.

// Question 2: Given the example below, what scope is the external variable in?

// Explanation:
//The external variable is global scoped because it is not confined to any lexical scope, it wasn't created in a function block.  It's outside in the global environment.

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