// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
function consume(a, b, callback){
 return cb(a, b);
};
console.log(consume);



/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
const add = consume(a + b);
const multiply = consume(a * b);
function console(name) {
  console.log (`Hello ${firstName} ${lastName}, nice to meet you!`);
  function greeting(callback){
    const firstName = 'Mary';
    const lastName = 'Poppins';
    callback(firstName, lastName);
  }
}
/*const greeting = consume("Hello ${'first-name'} ${'last-name'}, nice to meet you!")*/


/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add));  4
console.log(consume(10, 16, multiply));  160
console.log(consume("Mary", "Poppins", greeting)); //Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: Because  the function nestedFunction was in the same block of scope.


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
