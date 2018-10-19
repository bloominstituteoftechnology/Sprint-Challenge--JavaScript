// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

const consume = function(pizza, soda, cb) {
  return cb(pizza, soda);
};


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

const add = function(pizza, soda){
  return `We need ${pizza + soda} sodas, please`;
};

const multiply = function(pizza, soda){
  return `Oh, and we also need ${pizza * soda} pizzas. And Breadsticks`;
};

const greeting = function(pizza, soda){
  return `Hello ${pizza} ${soda}, nice to meet you!`;
};


/* Step 3: Check your work by uncommenting the following calls to consume(): */
//consume(2,2,add); // 4
// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!



// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
// Because 'nestedFunction()' is inside the same scope as 'internal' and when the browser scans your 
// code for the first time it sees that 'internal' will be used again for 'nestedFunction' and 
// says, "Oh, this is going to be used again, let's store it in a closure or "backpack" for later because 
// we are going to need it and it's allowed to be used later inside this lexical scope."


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