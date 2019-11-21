// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/

function consume(a, b, cb){
  return console.log(cb(a, b));
}



/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(a,b) {
  return a+b;
}

function multiply(a,b) {
  return a*b;
}

function greeting(first_name, last_name) {
  return `Hello ${first_name} ${last_name}, nice to meet you!`;
}


/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add); // 4
cconsume(10,16,multiply); // 160
consume("Mary", "Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Response --> nestedFunction is a function inside myFunctiuon. It is accessing properties of myFunction because of closure. Closure gives us the ability to put functions together. And because myFunction is the parent, nestedFunction is inheriting from its parent. Additionally, nested functions allow us to hold on to code, not run it until we need it later. Also, we can't push things up, we can only push things down. Children can only inherit from parents, parent's can't. It's very similar to LESS and CSS concept of nesting styles. 


// Explanation: 


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
