// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/


const food = ['Tacos', 'Pizza', 'Sushi'];

function getLength(arr, cb) {
  return cb(arr.length);
}
const length1 = getLength(food, length => {
  return length;
});
console.log(length1);


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/


function consume(param1, param2, cb) {
  return cb(param1, param2);
}

function add(a,b) {
  return a + b;
}
 function multiply(a,b) {
   return a * b;
 }

function greeting(a, b) {
  return (`Hello ${a} ${b}, nice to meet you!`);
}


// function add(x, y, cb) {
//   return cb(x, y);
// }
// const newNum = add(2, 2, function (x, y) {
//   return x + y;
// });
console.log(consume(2, 2, add));


// function multiply(num1, num2, cb) {
//   return cb(num1, num2);
// }
// const timesNum = multiply(10, 16, function (num1, num2) {
//   return num1 * num2;
// });
console.log(consume(10, 16, multiply));

// function greeting(first, last, cb) {
//   return cb(`Hello ${first} ${last}, nice to meet you!` );
// }

// function greeting(a, b) {
//   return (`Hello ${a} ${b}, nice to meet you!`);
// }

console.log(consume('Mary', 'Poppins', greeting));

/* Step 3: Check your work by un-commenting the following calls to consume(): */
// consume(2,2,add); // 4
// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: Because of its level of scope that 'internal' is contained in. A function serves as a closure, so that the local variable 'internal' can not be accessed from outside the function or even within other functions. It is only accessible to code within the {}'s. Non-global.


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