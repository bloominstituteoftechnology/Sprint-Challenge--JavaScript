// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
console.log("================================================functions.js =====================================================================")


function consume(argOne,argTwo,callBack){
        return callBack(argOne,argTwo);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(num1,num2){
    return num1+num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function greeting(firstName,lastName){
    return `Hello ${firstName} ${lastName}, nice to meet you`;
}
/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
// the nested Function can have access to the variable inernal because any variable in the outer scope  of that function is accessible and 
// calling it or using is totally valid. the lexical environement that the function was declared it allows it to reach them.
// whemn the nestedfunction is called or invoked, it will try to log out the internal but because it is not defined within its scope, the function
// will reach outward and look for it as long as the function is nested within another one.

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