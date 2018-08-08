// ==== Callbacks ====  

/* Step 1: Create a callback function
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume(first, second, cb) {
  return cb(first,second);
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(x,y) {
  return x + y;
}

function multiply(x,y) {
  return x * y;
}

function greeting(first,last) {
  return `Hello ${first} ${last}, nice to meet you!`
}

console.log(consume('keegan', 'burkett', greeting))

/* Step 3: Check your work by uncommenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Question 1: Explain in your own words why the example below is a closure.

// Explanation: myFunction() is the closure function that returns a nested function that has access to the closure functions variable. The nested function can has access to the closures variables even after execution.

// Question 2: Given the example below, what scope is the external variable in?
//Global scope. Things in the global scope can't 'look into' functions for things, however, things inside functoins can look into and access things from the scopes that contain them.

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

//end