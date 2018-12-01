// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume(a,b,callback) {
  return callback(a,b);
}

function add(a,b){
  return a+b;
}
function multiply(a,b){
  return a*b;
}
function greeting(firstName, lastName){
  return `Hello ${firstName} ${lastName}, nice to meet you!`
}
/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/


/* Step 3: Check your work by un-commenting the following calls to consume(): */
 console.log(consume(2,2,add)); // 4
 console.log(consume(10,16,multiply)); // 160
 console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: Once we create the function myFunction, everything that is inside those curly brackets
//is protected because it's a part of the function scope. That's why nestedFunction wouldn't be
//able to access the variable external, for example. However, the nestedFunction can still access anything
//inside the original myFunction scope because functions inherently look outward for context when a variable isn't defined
//within the lexical scope of that function. So, because the variable 'internal' isn't defined within the scope of the
//nestedFunction, it looks up the scope chain for context.


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