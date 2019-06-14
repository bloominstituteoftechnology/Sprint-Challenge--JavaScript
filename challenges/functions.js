// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume(agg1, agg2, cb) {
  console.log(cb(agg1, agg2));
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
const add = function (a, b) {
  return a + b;
}
const multiply = function (a, b) {
  return a * b;
}
const greeting = function (firstName, lastName) {
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}
  // /* Step 3: Check your work by un-commenting the following calls to consume(): */
  consume(2, 2, add); // 4
  consume(10, 16, multiply); // 160
  consume("Mary", "Poppins", greeting); // Hello Mary Poppins, nice to meet you!

  // ==== Closures ==== 

  // Explain in your own words why `nestedfunction()` can access the variable `internal`.

  // Explanation: since nestedFunction is essential an object of it's parent myFunction, it inherits all of the variables within myFunction. A way I visualize it in my own words is myFunction is the `main scope` of all code within the function. all variables declared within the `main scope` can be accessed from what I call a `child scope`(a function that is nested in another function).


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

  function newFunction() {
    consume(2, 2, add); // 4
    consume(10, 16, multiply); // 160
    consume("Mary", "Poppins", greeting);
  }
