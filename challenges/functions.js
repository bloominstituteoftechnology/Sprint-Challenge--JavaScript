// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
  * 
  *   function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }
  // SOLUTION:
  function firstItem(arr, cb) {
    return cb(arr[0]);
    const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"
  // TEST 2 (declaring callback before hand):
  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };
  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"


*/
function consume(a,b,cb){
  return cb(a,b);
}


/* Step 2: Create several functions to callback with consume();

  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

let add = (a,b) => a + b;
let multiply = (a,b) => a * b;
let greeting = (a,b) => `Hello ${a} ${b}, nice to meet you!`;


/* Step 3: Check your work by un-commenting the following calls to consume(): */
 console.log(consume(2, 2, add)); // 4
 console.log(consume(10, 16, multiply)); // 160
 console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.
//* the scope 
// Explanation: 
//* the scope is on the outside of the nested function  on line 66 it is calling it outside . has to do with the compiler .



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
