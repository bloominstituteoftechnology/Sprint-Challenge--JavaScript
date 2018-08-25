// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

let consume = function (par1, par2, cb){

  return cb(par1, par2);
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

let adderBot = function (par1, par2){
  return par1 + par2;
}

let timesBot = function (par1, par2){
  return par1 * par2 ;
}

let greetBot = function (par1, par2) {
  return `Hello ${par1} ${par2}, nice to meet you`;
}
/* Step 3: Check your work by uncommenting the following calls to consume(): */
console.log(consume(2,2,adderBot)); // 4
console.log(consume(10,16,timesBot)); // 160
console.log(consume("Mary","Poppins", greetBot)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: nestedFunction is a closure, or closure function, meaning that it has access to the state recorded in the 
// scope surrounding it, state being the variables declared and their values.


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