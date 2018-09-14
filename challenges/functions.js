// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

const consume = (a, b, cb) => {
  console.log(cb(a, b))
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

const add = (a, b) => a + b
const multiply = (a, b) => a * b
const greeting = (first, last) => `Hello ${first} ${last}, nice to meet you!`


/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

/*

Because the compiler notices that `nestedFunction()` is accessing `internal`, a variable
that is neither in the global scope nor within the local scope of `nestedFunction()`, 
but rather the scope of the enclosing parent function `myFunction`. To allow 
`nestedFunction()` access to `internal`, the compiler creates a closure which preserves 
the variable and makes it accessable to `nestedFunction()`.

*/


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