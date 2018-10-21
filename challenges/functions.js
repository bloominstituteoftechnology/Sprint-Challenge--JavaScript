// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
// I took the initiative to improve on the usability of this.
const consume = (cb, ...params) => cb(...params);


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
const add = (...nums) => nums.reduce((acc, cur) => acc + cur);

const multiply = (...nums) => nums.reduce((acc, cur) => acc * cur);

const greeting = (first, last) => `Hello ${first} ${last}, nice to meet you!`;


/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(console.log, consume(add, 2, 2)); // 4
consume(console.log, consume(multiply, 10, 16)); // 160
consume(console.log, consume(greeting, "Mary", "Poppins")); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: It's a closure; nestedFunction has access to variables outside of it, 
// and the internal variable just happens to be in myFunction, which nestedFunction is contained within.
// This means that internal (technically along with the external variable) makes up the closure within nestedFunction.


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