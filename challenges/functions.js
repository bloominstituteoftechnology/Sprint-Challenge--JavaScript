// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(p1, p2, cb){
  return cb(p1, p2);
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(a,b){
  return a + b;
}

function multiply(a,b){
  return a * b;
}

function greeting(a,b){
  return `Hello ${a} ${b}, nice to meet you!`;
}

/* Step 3: Check your work by uncommenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!

// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: Since "nestedFunction" is nested inside of the scope of "myFunction" (which is inidicated visually by it being inside the curly brackets of said function), "nestedFunction" then gains access to the all of the variables inside of "myFunction". Furthermore, since a variable is being called from another functions shared scope, nestedFunction also has one closure called "myFunction". Also, notice that "external" is being called inside of nestedFunction, you might be thinking, well does this also form a closure, I would say that is a good line of thought, but there is only one problem with it, and that is that closures only form when the variable being used in another function is originally stored inside another function, and that is not the case with the "external" variable, it is stored in the global scope of this document.


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