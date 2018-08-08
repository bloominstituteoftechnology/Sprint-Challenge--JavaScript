// ==== Callbacks ====  

/* Step 1: Create a callback function
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume (p1, p2, cb) {
  return cb(p1, p2);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add (num1, num2) {return num1 + num2;}
function multiply(num1, num2) {return num1 * num2;}
function greeting(first_name, last_name) {
  return `Hello ${first_name} ${last_name}, nice to meet you!`
}


/* Step 3: Check your work by uncommenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Question 1: Explain in your own words why the example below is a closure.
//Explanation: myFunction's only local variable is internal. But it calls external. The reason it can do this is that it has a closure over all variables in its lexical scope when it is declared, which includes the external variable in the global scope.
//Additionally, nested function has no local variables or parameters, yet is able to call the internal variable. This is because it has closure over its lexical scope at time of declaration. 
//Since it was declared within myFunction, it has access to all of myFunction's variables in its closure, which includes internal.

// Question 2: Given the example below, what scope is the external variable in?
// The external variable has global scope.

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