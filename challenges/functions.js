// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume(param1, param2, cb) {
  return cb(param1, param2);
}

/* Step 2: Create several functions to callback with consume();
* Create a function named add that returns the sum of two numbers
* Create a function named multiply that returns the product of two numbers 
* Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function greeting(firstName, lastName) {
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}

/* Step 3: Check your work by uncommenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: the `internal` variable has been declared within the top of the function scope of myFunction().  This would make this function scope variable available to all aspects of the function scope and anything else that was defined within this scope or the block level scope within this function.  Because of this behavior, of JavaScript to move inside out when looking for variable declarations and variable hoisting when internal is called within the nested function the compiler first looks in the block, doesn't see the declaration and then moves up one level to the function scope where it has been declared and this allows the inner function to have access to it even though it wasn't declared in the scope, but the scope one level above it.  On the contrary, this would not work the other way and any varaible declared in the nested function or a block could not be accessed by the whole function only if it were declared with `let` or `const`, which are block scoped.  Declaring it with `var` however would allow it to be accessed function-wide since var is `function-scoped`.


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