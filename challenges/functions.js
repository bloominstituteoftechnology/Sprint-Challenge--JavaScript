// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

// const consume = function(x,y,cb){
//  console.log(cb());
// }

function consume (a,b,cb){
  console.log(cb(a, b));
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(x, y) {
  return (x + y);
}

function multiply(x, y) {
  return (x * y);
}

function greeting(firstName, lastName){
  return (`Hello ${firstName} ${lastName}, nice to meet you!`);
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
// nestedFunction() is an example of the concept of closure. When a function is declared, a new functional scope is created.
// Variables or functions within that functional scope are able to reach outward for context. This is true no matter how
// deeply functions are nested. In this specific example, nestedFunction() is able to access the variable 'internal' 
// because nestedFunction() is able to reach outside of its scope.


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