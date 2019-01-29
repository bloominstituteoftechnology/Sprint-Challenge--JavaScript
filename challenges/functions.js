// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(parameter1, parameter2, cb){
  return cb(parameter1, parameter2);
}

/*
My name is Nathan Culver
Welcome Mr. Culver
*/

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add (x, y) {
  return x + y;
}

console.log(consume(1, 2, add));

function multiply (x, y) {
  return x * y;
}

console.log(consume(3, 4, multiply));

function greeting (firstName, lastName) {
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}

console.log(consume("Nathan", "Culver", greeting));



/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

// basically because of closure and how scope works in a lexical environment. Inner functions have access to the variables of outer functions. 

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