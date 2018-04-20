// ==== Callbacks ====  

/* Step 1: Create a callback function
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
console.log(`\n ------------ Step 1 ------------ \n`);

function consume(a, b, callback) {
  return callback(a, b);
}

const aStr = "So it's not just gonna happen like that";
const bStr = `'Cause I ain't no`;
const hollaBack = (a, b) => `${a}, ${b} hollaback guuuurrrl`;
console.log(consume(aStr, bStr, hollaBack));

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
console.log(`\n ------------ Step 2 ------------ \n`);

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const greeting = (firstName, lastName) => `Hello ${firstName} ${lastName}, nice to meet you!`;

/* Step 3: Check your work by uncommenting the following calls to consume(): */
console.log(`\n ------------ Step 3 ------------ \n`);

consume(2,2,add); //? 
// 4 
consume(10,16,multiply); //?
// 160
consume("Mary","Poppins", greeting); //?
// Hello Mary Poppins, nice to meet you!

// ==== Closures ==== 
// Question 1: Explain in your own words why the example below is a closure.

// Explanation: In each of function variable environments, their respective variables don't exist. For example, in `nestedFunction()`, the code says to log to the console the value of `internal`, but that variable is not declared within that function, and therefore does not exist within that function's variable environment.

// However, JavaScript tries *real* hard to be a bro, and so instead of just giving up there and then, the engine tries to find the value in the variable environment that the function lexically is in. That's a fancy way of saying look at the variable environment of whatever the function is physically sitting in the code. In this case, `nestedFunction()` sits within `myFunction()`, so we can look at the variable environment of `myFunction()`. Fortunately, we find the value of `internal` there, which is `Hello! I'm inside the function`. Therefore, `nestedFuction()` outputs `Hello! I'm inside the function`.

// If it didn't find it there, the engine will continue to look outside to the variable environment of the context `myFunction()` lexically sits in. It will keep doing this until it hits global. If it still can't find it, it will finally give up and throw a `Reference Error`.

// Question 2: Given the example below, what scope is the external variable in?
// Global. 

let external = "I'm outside!";

function myFunction() {
  let internal = "Hello! I'm inside the function";
  console.log(external);

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();