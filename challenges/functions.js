// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/


function consume(a, b, callback) { 
  return callback(a, b);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

let addNums = function(a, b) { 
  console.log(a + b);
}

let multiplyNums = function(a, b) { 
  console.log(a * b);
}

let greeting = function (a, b) {
  console.log(`What's new, ${a} ${b}?`);
}

consume(2, 2, addNums); // 4
consume(12, 6, multiplyNums) // 72
consume("John", "Spraul", greeting) // what's new JS?


/* Step 3: Check your work by uncommenting the following calls to consume(): */
//consume(2,2,add); // 4
// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: Closure means that a function can "reach up", read, and access/use constants and variables inside their parent function.


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