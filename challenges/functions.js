// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume (x, y , callback) {
  
  callback(x, y);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add (x, y, cb) {
  return cb(x + y);
}
consume(2,2,(add) => {
console.log(add);
});

function multiply(x, y, cb) {
  return  cb(x * y);
  }
  consume(10, 16, (multiply) => {
    console.log(multiply);
  });

  const greeting = function(first, last,cb) {
    console.log(`Hello ${first}, ${last} nice to meet you`)
};
greeting(function(greeting) {
    console.log(greeting)
});
consume('Mary','Poppins', greeting)


/* Step 3: Check your work by un-commenting the following calls to consume(): */
// consume(2,2,add); // 4
// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: Simply becuause it is nested within the myFunction(). So it inherits it's attrs. It doesn't have to look outside on global scope for internal.


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