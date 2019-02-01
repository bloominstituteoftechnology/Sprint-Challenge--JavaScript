// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(it, li, cb) {

for(let i=0; i < li.length; i++) {
  if (li[i] === item) {
    return cb(true);
  } 
  }
return cb(false);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

//work on later

// const consume = function (cb) { 
//   cb (it, li);
// };
//   consume (function(add) {
//     console.log(add);
//   });

/* Step 3: Check your work by un-commenting the following calls to consume(): */
// consume(2,2,add); // 4
// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

// `nestedfunction()` can access the variable `internal` because when we are dealing with closures we have to realize 
// that its made up of both a function and the outside environment within which that function was declared, meaning 
// that if we were to call it, its  able to reach the outside environment or anything outside the function and get
// what its looking for and bring it inside but its not able to take something inside to the outside.

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