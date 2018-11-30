// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
const consume =function(x, y, cb){
  return cb(x,y);
}
/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
const add = function (x,y){
  return x+y;
}
const multiply = function (x,y){
  return x*y;
}
const greeting = function (fName,lName){
  return `Hello ${fName} ${lName}, nice to meet you!`
}

console.log(consume("Matt", "Basile", greeting));


// /* Step 3: Check your work by un-commenting the following calls to consume(): */
// console.log(consume(2,2,add)); // 4
// console.log(consume(10,16,multiply)); // 160
// console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: They both are a part of the myFunction scope, so when nestedFunction is invoked, and proceeds to attempt to locate it's internal variable within its own scope
//it fails. But thanks to closure, the nestFunction can proceed to step out of its function locate the proper variable and "borrow" it to excute their function. However, if
//myFunction() need a variable within nestedFunction() that would not be possible because the inheritence of variables only goes downwards. It is not a two way street, but
//myFunction() would be able to access the "global" scope as we see when it console.logs external.


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