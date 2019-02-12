// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
// function consume(x, y, cb) {
//   return cb(x, y);
// }

function consume(a, b, cb) {
  return cb(a, b);
 }

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
// const add = function(x, y) {
//   console.log(x + y);
// }
// consume(2, 2, add);

// function multiply(x, y, cb) {
// return cb(x, y);
// }
//   const multiplyNums = function(x, y) {
//   console.log(x * y);
// }
// multiplyNums(10, 16, multiply);

// function greeting(first, last, cb) {
//   return cb(first, last);
// }
//   consume = function(first, last) {
//     console.log(`Hello ${first} ${last}, nice to meet you!`);
//   }
//   consume('Mary', 'Poppins', greeting);

const add = function(x, y) {
  console.log(x + y);
}
//consume(5, 2, add);

const multiply = function(c, d) {
  console.log(c * d);
}
//consume(2, 2, multiply);

const greeting = function (first_name, last_name) {
  console.log(`Hello ${first_name} ${last_name}, nice to meet you!`);
}
/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2,2,add); // 4
 consume(10,16,multiply); // 160
 consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
//nestedFunction() can still access `internal` because inner function still has acess to the outer function's variables even after the outer function has returned. Therefore, you can call the inner function later in your program.


// const external = "I'm outside the function";

// function myFunction() {
//   console.log(external);
//   const internal = "Hello! I'm inside myFunction!";

//   function nestedFunction() {
//     console.log(internal);
//   };
//   nestedFunction();
// }
// myFunction();

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
