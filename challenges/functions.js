// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume (a, b, cb) {
  return cb(a,b);
}
const divide = (a,b) => a / b;

console.log(consume(120,2,divide));


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function consume(x, y, cb){
  return cb(x, y)
 }
 const multiply = (x,y) => x * y;
 const add = (x,y) => x + y;
 
 console.log(consume(2,2,add));
 console.log(consume(10,16,multiply));
 
 function greeting(first, last) {
   return `Hello ${first} ${last}, nice to meet you!`;
 };
 console.log(greeting("Mary", "Poppings"));

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

/* Nested function has access to the scope above it.
It gives us the ability to pass an argument to function and reuse it somewhere else in the file.
All above variables and functions are accessible to this nested function and can update them.*/


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