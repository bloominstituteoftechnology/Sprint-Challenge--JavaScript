// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
//const choco = ['Strawberry', 'Swiss', 'Belgium', 'Regular'];


function consume(value1, value2, cb) {
  return cb(value1, value2);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(x, y, cb) {
  return x + y;
}
function multiply(x, y, cb) {
  return x * y;
}
function greeting(fn, ln, cb) {
  return `Hello ${fn} ${ln}, nice to meet you!`
}





/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2,2,add); // 4
console.log(consume(2,2,add));
consume(10,16,multiply); 
console.log(consume(10,16,multiply));// 160
consume("Mary","Poppins", greeting); 
console.log(consume("Mary","Poppins", greeting));// Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

//Its weird, but functions can access variables, parameters and values in functions that are outside of them. 
// I think the technical term is encapsulate, in that whatever is outside that function's lexical scope is still accessable to them
// However, like in my answers.md, we know it doesn't work for stuff inside inner functions, so it doesn't work the other way around.
// Its turtles all the way UP, not down lol. 
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