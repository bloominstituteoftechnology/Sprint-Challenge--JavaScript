// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume(par1, par2, callback) {
  return callback(par1, par2);
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
const add = function(par1, par2) {
  console.log(par1 + par2);
}

const multiply = function (par1, par2) {
  console.log(par1 * par2);
}

const greeting = function(par1, par2) {
  console.log(`Hello ${par1} ${par2}, nice to meet you!`) 
}


/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
// nestedFunction can access the variable internal because of lexical scoping, the two pass compiler and closure. Lexical scoping is a "belonging" pattern. Whatever variable was in function when called belongs to it. So when the two pass compiler reads the code goes from bottom to top then and sees that it needs to put "internal" into the backpack(memory) to use later because the "nestedFunction" will be using "internal" later in the code, and thus closure is created.

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