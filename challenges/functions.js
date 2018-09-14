// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function consume(x, y, cb) {
  return cb(x, y)
}
function add(x, y) {
  console.log(x + y)
}
function multiply(x, y) {
  console.log(x * y)
}
function greeting(x, y) {
  console.log(`hello ${x} ${y}, nice to meet you!`)
}


/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2,2,add); // 4
 consume(10,16,multiply); // 160
 consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation:  A closure gives you access to an outer function's scope from an inner function. In this example. nestedfunction() is nested inside of myFunction which gives it access to anything in myFunction's scope. Not only can it access myFunction's scope but if the variable it was calling wasn't found in myFunction it can then look outside of that for what it needs and will only stop when it has reached the global scope or window object. It's important to note that this only works bottom-up. So, the first function in a chain of 5 functions can not access anything unique to the 5th function but the 5th function can access anything created inside of previous functions.


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