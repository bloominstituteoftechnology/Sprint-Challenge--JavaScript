// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback
  *  with the two parameters that you created
*/
consume = (param1, param2, cb) => {
  return cb(param1, param2);
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last 
  * name and returns "Hello first-name last-name, nice to meet you!"
*/

add= (param1, param2) => {
  return param1 + param2;
}
console.log(consume(7, 2, add));

multiply = (param1, param2) => {
  return param1*param2;
}
console.log(consume(7, 2, multiply));

greeting = (firstName, lastName) => {
  return `Hello, ${firstName} ${lastName}, nice to meet you!`;
}
console.log(consume('Ira', 'Sanchez', greeting));

/* Step 3: Check your work by uncommenting the following calls to consume(): */
console.log(consume(2, 2, add));
console.log(consume(10,16,multiply)); 
console.log(consume("Mary","Poppins", greeting)); 


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
// Nested functions can access variables that are declared in their parent functions.
// This is due to lexical scoping, where the parser determines the validity of a variable name call based on where it was originally declared.

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