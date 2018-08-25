// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
let consume = (x, y, cb) => {
  return cb(x, y)
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

let add = (x, y) => {
  return x + y
}

let multiply = (x, y) => {
  return x * y
}

let greeting = (x, y) => {
  return `Hello! ${x} ${y} nice to meet you!`
}
console.log(consume('John', 'Spraul', greeting))


/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2, 2, add); // 4
consume(10, 16, multiply); // 160
consume("Mary", "Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: nestedfunction() can access the variable internal because of closure. A nested function can access any variable on the outer levels of the function and in the global scope. The outer levels of the function can only access its level and any previous levels and the global scope.


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