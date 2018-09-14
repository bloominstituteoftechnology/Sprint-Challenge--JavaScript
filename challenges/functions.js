// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume( param1, param2, callbackFunc )
{
  let result = callbackFunc( param1, param2 );
  return result;
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add( num1, num2 )
{
  return num1, num2;
}
function multiply( num1, num2 )
{
  return num1 * num2;
}
function greeting( firstName, lastName )
{
  return `Hello ${ firstName + " " + lastName }, Nice to meet you!`;
}

/* Step 3: Check your work by uncommenting the following calls to consume(): */
console.log( consume(2,2,add) ); // 4
console.log( consume(10,16,multiply) ); // 160
console.log( consume("Mary","Poppins", greeting) ); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
// functions created within the global scope can access global variables however global objects
// can't acess variables inside the function; this concept is called lexical scoping.
// Similarly, myFunction acts like a global environment from which nestedFunction can access 
// variables outside of it.
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