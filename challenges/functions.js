// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/


function consume(item1, item2, cb) {
  console.log( cb(item1, item2));
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

let sum = function(a, b){
  return a+b;
}

let multiply = function(a, b){
  return a*b;
}

let greeting = function(item1, item2){
  return `Hello ${item1} ${item2} nice to meet you!`
}


/* Step 3: Check your work by uncommenting the following calls to consume(): */
//consume(2,2,add); // 4
// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 


// first JS is a single threaded programming language so it runs functions and methods one and at time
// in order so it doesn't over load its memeory and with data it has a feature called a local execution stack
// after a function or method is created JS enters a phase called "execution phase" and when it is invoked it starts the stack
// after it completes the function it "pops" it from the stack pretty much removing it from memory 
// which is why you when you try to "console.log" the same variable from outside the local scoop you come up with undefined
// because the computer has "logged out" and removed the variable from memory or the "stack" and is no longer available
// this might pose a problem espeically with nested functions when you want to "save" the variables so you can access it later within the same stack
// "closures" is a feature that solve that problem, it still removes the functions from the execution 
// stack but still logs all the data/variables from the previous method into memory.
// which is why "nestedFunction" can access "myFunction" variables and when invoking "myFunction()" the variable "internal" is still defined'
// though since the variable is still tied with the local function once the function "myFunction()" has finished executing it is still
// popped from the stack and is no longer available globally.

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