// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(param1, param2, callback){
  return callback(param1, param2);
}

function consumeCallback(item1, item2){
  console.log(item1+' consume '+item2);
}

consume('kids', 'time', consumeCallback);


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function consume(param1, param2, callback){
  return callback(param1, param2);
}

function add(num1, num2){
  return num1 + num2;
}

function multiply(num1, num2){
  return num1 * num2;
}

function greeting(first, last){
  return `Hello ${first} ${last}, nice to meet you!`
}


/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
/*
  In the example below, nestedFunction has access to 'internal' variable because of closure, meaning
  that an inner function has access to varibles and functions that are in the scope of an outer function.
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