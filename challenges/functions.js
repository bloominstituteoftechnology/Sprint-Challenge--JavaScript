// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/

function consume(a, b, cb){
  return cb(a,b);
};


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(x, y){
  return x + y;
};

function multiply(num1, num2){
  return num1 * num2;
};

function greeting(first_name, last_name){
  return `Hello ${first_name} ${last_name}, nice to meet you!`;
};

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: 

// In the example below, myFunction is the parent function which is block scoped and function scoped at the same time. The function nestedFunction is the child function of myFunction. The direction of closures goes from inside out, ie. the deepest nested function out to global (ex: grandchild function --> child function --> parent function --> global). Following closure rules, nestedFunction has access to the elements inside its function, and elements outside of the function. Therefore, nestedFunction can access the variable internal because it lies outside of nestedFunction in myFunction. However, myFunction cannot access anything inside nestedFunction because it goes against the closure direction.  

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
