// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
 * Create a higher-order function named consume that can take 3 parameters.
 * The first two parameters can accept any argument
 * The last parameter accepts a callback 
 * In the body of the function return the callback with the two parameters that you created
 */
// function consume( par1, par2, cb){
//   return cb(par1, par2);
// }
// console.log(consume);
function consume(item1, item2, callback) {
  return callback(item1, item2);
}

/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers 
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */
function add(a, b, cb) {
  return cb = a + b;
}
console.log(consume(2, 2, add));

function multiply(a, b, cb) {
  return cb = a * b;
}
console.log(consume(10, 16, multiply));

const greeting = (firstName, lastName, cb) => {
  return `${"Hello"} ${firstName} ${lastName} ${"nice to meet you!"}`
}
console.log(consume('Marry', 'Poppins,', greeting));

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2, 2, add); // 4
consume(10, 16, multiply); // 160
consume("Mary", "Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
// Because nestedFunction() can reach outside its scope to find `internal` because it
// does not exist inside nestedFunction's scope when `internal` is referenced. In other words
//the child function - `nestedFunction()` has accsess to the parent's - `myFunction()`'s scope and to the global scope too.
// While the parent function doesn't have accesss to the child's scope but only to the global scope.

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