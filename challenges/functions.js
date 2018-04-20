// ==== Callbacks ====  

/* Step 1: Create a callback function
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume (param1, param2, callback){
  return callback(param1, param2);
}
function print(param4, param5){
  return `What happened to ${param4}? Seven ${param5} it.`
}
console.log(consume("six", "eight", print));


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(num1, num2){
  return num1+num2;
}
console.log(consume(56, 24, add));

function multiply(num1, num2){
  return num1 * num2;
}
console.log(consume(100,24,multiply));

function greeting(first, last){
  return `Hello ${first} ${last}, nice to meet you!`;
}
console.log(consume("Christina", "Kopecky", greeting))

/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Question 1: Explain in your own words why the example below is a closure.

// Explanation: The nested function will still have access to the external variable even though it's outside the parent scope.

// Question 2: Given the example below, what scope is the external variable in? Global

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