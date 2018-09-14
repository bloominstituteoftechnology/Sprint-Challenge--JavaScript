// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume (arg1, arg2, cb) {
  return cb(arg1, arg2);
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function Add (num1, num2) {
  return num1 + num2;
}
function Multiply (num1, num2) {
  return num1 * num2;
}
function Greeting (first, last) {
  return `Hello ${first} ${last}, nice to meet you!`;
}


/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2,2,Add); // 4
consume(10,16,Multiply); // 160
consume("Mary","Poppins",Greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: Because it's nested in myFunction, and given that inner functions have access to the variables defined in outer 
//functions, nestedFunction has access to all of the variables defined above it. Thus the closure can access the 'internal' variable.


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