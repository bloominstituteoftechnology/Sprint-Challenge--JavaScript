// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(a, b, cb){
  return cb(a,b);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(a, b){
  return a + b;
}

function multiply(a, b){
  return a * b;
}

function greeting(firstName, lastName){
  return `Hello ${firstName} ${lastName}, nice to meet you`;
}

/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

/*
each function creates a new scope. Example would be function newFunct{}. Anything that goes on withing that functions {} would be considered the scope of that function. Block scope is anything that takes place within a block of code such as {}. A local variable declared inside a block of code would only be available inside that clock due to its scope. 

Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope. However, this is only done when a variables value is being re defined and not when it is being initialized. Putting variables at the top of their current scope helps avoid bugs. 

nestedFunction accesses the variable internal because it is withing the scope of the current function and is lower down. While once function is inside another function it is possible to reach outside itself to grab a variable as long as it is reaching up. However, it is not possible to define a new variable inside nestedFunction within that functions scope and try to access the variable inside myFunction's scope going upwards. 
*/


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