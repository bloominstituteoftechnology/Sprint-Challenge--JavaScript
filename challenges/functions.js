// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
function consume(a, b, cb){
  return cb(a,b)
}
/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(num1, num2){
  return num1 + num2
}

function multiply(num1, num2){
  return num1 * num2
}

function greeting(first_name, last_name){
  return `Hello ${first_name} ${last_name}, nice to meet you! `
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */

console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: 
// Functions create their own scope, any variables declared within that function scope will belong to that private function's scope. In nested scopes, the nested scope belongs to the outer scope so it belongs to the lexical environment of tthe outer scope. Function look forward for context if a variable is not defined in a functions scope it will look outside of that scope to see if the variable is being references in th outer one.

const external = "I'm outside the function";

function myFunction() {  //outer function
  console.log(external);
  const internal = "Hello! I'm inside myFunction!"; //internal is the variable being created in the outer

  function nestedFunction() {
    console.log(internal); // it can be referenced in the function's scope because the variable and this function is in the scope of the outer one
  };
  nestedFunction();
}
myFunction();
