// ==== Callbacks ====

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(any1, any2, cb) {
  return cb(any1, any2);
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function greeting(firstName, lastName) {
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}


/* Step 3: Check your work by uncommenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ====
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: This is because of how variable scope works on JavaScript. Any inner
// functions can access the variables outside of its scope and that also includes the
// global scope, but not vice versa--global scope or any function that was defined
// outside of an inner function cannot access the variables inside of that inner
// function. So `internal` variable was declared inside `myFunction` (which is an outer
// function of `nestedFunction`) so any inner functions declared inside `myFunction` can
// access the variables of `myFunction`. Therefore, `nestedFunction` can "see" the
// `internal` variable and have access to it.


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
