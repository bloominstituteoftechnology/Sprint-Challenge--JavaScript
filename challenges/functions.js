// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function cbtest (num1, num2, cb){
  return cb(num1, num2);
}

function add (num1, num2){
  return num1 + num2;
}

console.log(cbtest(3,6,add));

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function consume(arg1, arg2, cb){
  return cb(arg1, arg2);
}
function multiply(arg1, arg2){
  return arg1 * arg2;
}
function greeting(arg1, arg2){
  return `Hello ${arg1} ${arg2}, nice to meet you!`
}

console.log(consume(4,7,add));
console.log(consume(4,7,multiply));
console.log(consume('Ben', 'gold', greeting));

/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: nestedfunction is inside of MyFunction.  
// So, when internal is not defined inside of nestedfunction, 
// it goes to next scope which is Myfunction where it finds the variable.


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