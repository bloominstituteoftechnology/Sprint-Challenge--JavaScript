// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
console.log(`**********functions.js**********`)
function consume(param1, param2, cb){ 
  console.log(cb(param1, param2));
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
let add = (num1, num2) => num1 + num2;
let multiply = (num1, num2) => num1 * num2
greeting = (firstName, lastName) => `Hello ${firstName} ${lastName}, nice to meet you!`;

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
console.log(`
  The reason nestedfunction() can access the variable 'internal' is because
  of the scope that nestedfunction has access to. The 'internal variable is
  initialzed in nestedfunction()'s parent function, myFunction(), thus giving
  it access, or inheiritance to that variable. On the contrary, if 'internal was
  initialzed inside of nestedfunction(), then it would be out of scope for myFunction().
`)

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

console.log(`**********functions.js**********`)