// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
const consume = (a, b, cb) => {
  console.log(cb(a,b));
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
const add = (x, y) => x+y;
let multiply = (x, y) => x*y;
let greeting = (first, last) =>  `Hello ${first} ${last}, nice to meet you!`;

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

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

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation:

/* nestedFunction() can access the variable internal because nestedFunction() is simply a 
 function created inside of myFunction which means it still has that functions 
 scope because that function hasnt been closed yet with } before nestedFunction was declared.
 */

 // Describe the biggest difference between .forEach & .map.
// answer
// .forEach is a loop that does not return a value whereas .map returns a value 

// What is the difference between a function and a method?
// answer
/* A function is a block of code written to execute a problem, whereas a method is an
object doing a function*/

// What is closure?
// answer
// Closure allows you to access an outer function's scope from an inner function.

// Describe the four rules of the 'this' keyword.
// answer
/* 1. Using the global scope, the value of “this” will be the window/console Object;
 2. Whenever a function is called by a preceding dot, the object before that dot is this.
 3. Using constructor functions, this refers to the specific instance of the object that is created and returned by the constructor function.
 4. Whenever JavaScript’s call or apply method is used, this is explicitly defined.
 */

// Why do we need super() in an extended class?
// answer
// The super keyword is used to access and call functions on an object's parent.