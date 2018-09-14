// ==== Callbacks ====

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(para1, para2, cb){
  return cb(para1, para2);
};


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(para1, para2){
  return para1 + para2;
}

function multiply(para1, para2){
  return para1 * para2;
}

function greeting(para1, para2){
  return `Hello ${para1} ${para2}, nice to meet you!`;
}

/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2,2,add);  // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ====
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation:

/*
when nested funtions are created, they have access to the variables in the calling scope (which in this case would be the function myFunction.) If you comment out the line that calls nestedFunction, you will only see "I'm outside the function". That variable was created outside of myFunction, in the global scope. So when myFunction runs, it looks for the external variable. It doesn't find it in the local function scope, so it reaches to the little backpack it has of all the variables that were available to it at creation (in this case, the variables in the global scope). It finds that it's assigned "I'm outside the function" and logs that. But included in the function definition for myFunction we have a second variable, internal and the second function, nestedFunction. In order to see what that does, we have to make sure that myFunction actually calls it, and when nestedFunction is called and executes it knows that it is supposed to log the variable internal. That variable doesn't exist within its own little private scope, but since it existed in myFunction before nestedFunction was defined, nestedFunction has stored it in its backpack and can pull it out and log it. 
*/
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
