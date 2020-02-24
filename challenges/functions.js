// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
function consume(a,b,cb){
  return cb(a,b)
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(a,b){
  return a + b;
}

function multiply(a,b){
  return a * b;
}

function greeting(a,b){
  return `Hello ${a} ${b}, nice to meet you!`
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
 console.log(consume(2, 2, add)); // 4
 console.log(consume(10, 16, multiply)); // 160
 console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: 
//the scope of nested functions allow it to access variable internals

//the scope of this const is console or window
const external = "I'm outside the function";

function myFunction() {
  //external is above this function in scope and is accessable
  console.log(external);
  //the scope of this const is internal and can only be pulled within the function myFunction
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    //this function is inside myfunction and can access the variable interernal
    console.log(internal);
  };
  //calling nested function inside myfunction
  nestedFunction();
}

myFunction();
