// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(x, y, cb) {
  return cb(x, y);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(x, y) {
  console.log(x + y);
}

consume(3, 2, add);

function multiply(x, y) {
  console.log( x * y);
}

consume(9, 9, multiply);

function greeting(first, last) {
  console.log(`Hello ${first} ${last}, nice to meet you!`);
}

consume('Luis', 'Alvarez', greeting);


/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation:

/*
  The reason why nestedFunction can access internal in my function is because nestedFunction is within that scope or in better words
  inside myFunction(). If I tried to use nestedFunction outside myFunction it woudn't work because it's outside the scope. You can 
  access variables inside the function if your code is inside the function or you returned a value. A good example is a black hole
  anything can go in but almost nothing can come out (if you have the back to the future car maybe you can get out of one). 
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