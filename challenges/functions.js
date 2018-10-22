// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/


function consume(param1, param2, cb) {
  return cb(param1, param2)
}


const add = function(param1, param2){
   console.log(param1 + param2)
 }

 const multiply = function(param1, param2){
   console.log(param1 * param2)
 }

 const greeting = function(param1, param2){
   console.log(` Hello, ${param1} ${param2} nice to meet you`)
 }

/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2,2,add); // 4
 consume(10,16,multiply); // 160
 consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

//nestedFunction can access the internal variable because it is in the function scope and has access to 
//it. When the function runs it first looks inside its self for a refrence to internal and if it isn't found it then looks out into the 
//myFunction to find the internal variable.

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