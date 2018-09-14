// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created

*/

function myCallback(x, y, cb){
  return cb(x, y);
}

console.log(myCallback(3, 4, function(x, y){
  return (x + y);
}));

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(x, y){
  return x + y;
}

function multiply(facrtor1, factor2){
  return facrtor1 * factor2;
}

function greeting(first_name, last_name){
  return `Hello ${first_name} ${last_name}, nice to meet you!`;
}


function consume(x, y, callback){
  return callback(x,y);
}

console.log(consume(4, 5, add));
console.log(consume(2, 10, multiply));
console.log(consume("Jon", "Doe", greeting));

/* Step 3: Check your work by uncommenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!

// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 


// the reason nestedfunction() can access the variable "internal" is 
// because it is a local variable within the parent myFunction().

// Because its located in the parent function  
// the "internal" variable thus becomes a "global" variable in theory,  
// that is accessible to all nested functions that are found within the myFunction code block.
// This is closure. 



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