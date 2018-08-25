// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
let consume = (arg1, arg2, callback) => {
  return callback(arg1, arg2)
};



/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
let add = (x, y) => {return x + y;}
let multiply = (x, y) => {return x * y;}
let greeting = (firstName, lastName) => {return `Hello ${firstName} ${lastName}, nice to meet you!`}

/* Step 3: Check your work by uncommenting the following calls to consume(): */
// consume(2,2,add); // 4
// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
  // The nestedfunction() can access the 'internal' variable because it can access the outer functions variable. Essentially the nested function can look out of itself and bring in variable in all of the outer functions all the way back to the Window. However, the outer variable can not look into the nestedfunction to pull variables. 


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