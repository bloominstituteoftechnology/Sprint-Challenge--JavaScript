// ==== Callbacks ====

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback
  * In the body of the function return the callback with the two parameters that you created
*/
function consume(eat1, eat2, cb){
  return cb(eat1, eat2);
}

const callback = function(eat1, eat2){
  console.log(eat1, eat2)
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
const add = function(num1, num2){
  console.log(num1 + num2)
}
const multiply = function(num1, num2){
  console.log(num1 * num2)
}
const greeting = function(string1, string2){
  console.log(`Hello ${string1} ${string2}, nice to meet you!`)
}

/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ====
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation:
'nestedFunction' can access 'internal' because it was being stored in memory so that
  it could be called upon later when needed.

// ====
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
