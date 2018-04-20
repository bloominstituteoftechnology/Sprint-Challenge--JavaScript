// ==== Callbacks ====  

/* Step 1: Create a callback function
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function callBack(par1, par2, cb) {
  return cb(par1, par2);
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function consume(num1, num2, cb){
  return cb(num1, num2);
}

function add(num1, num2){
  return num1 + num2;
}

function multiply(num1, num2){
  return num1 * num2;
}

function greeting(first_name, last_name) {
  return `Hello ${first_name} ${last_name}, nice to meet you!`
}

/* Step 3: Check your work by uncommenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!

/* log results
Info: Start process (11:31:21)
4
160
Hello Mary Poppins, nice to meet you!
Info: End process (11:31:21)*/


// ==== Closures ==== 
// Question 1: Explain in your own words why the example below is a closure.

// Explanation: 
//Answer the function 'nestedFunction' has access to the variable 'internal'


// Question 2: Given the example below, what scope is the external variable in? 
// Answer Global

let external = "I'm outside!";

function myFunction() {
  let internal = "Hello! I'm inside the function";
  console.log(external);

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();