// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
let consume = function(a, b, callback){
  return callback(a,b);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
let add = function(a, b){
  return (a + b);
}

let multiply = function(a, b){
  return (a * b);
}

let greeting = function(firstName, lastName){
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2, 2, add)); // 4
console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: It can work it's way down, but not the other way around, so higher ups can access lower, etc.


const outside = "Outside the scope";

function myFunction(){
  console.log(outside);
  const inside = "Inside the scope";
  function nestedFunction(){
    console.log(inside);
  };
  nestedFunction();
}
myFunction();
