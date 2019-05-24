// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume(banana1, banana2, cb) {
  console.log(cb(banana1,banana2));
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

let add = function(num1,num2){
  return num1 + num2;
}

let multiply = function(num1,num2){
  return num1 * num2;
}

let greeting = function(first_name,last_name){
  return `Hello ${first_name} ${last_name}, nice to meet you!`;
}
/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: Closures are intended to help outside functions access internal functions when functions are nested within eachother. 
// The lifespan of a variable defined inside of a function is the lifespan of the function execution.The outside variable exists only during the execution of the the outer() function.
// After the outer function has finished execution, the outer variable no longer exists, thereby a second execution of the variable creates a variable that lives only up until the function completes execution.

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