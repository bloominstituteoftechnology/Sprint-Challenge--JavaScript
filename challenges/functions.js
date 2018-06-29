// ==== Callbacks ====  

/* Step 1: Create a callback function
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
// =================================> Not Done/ Help needed on Call-backs. I understand the idea of what they are but I am struggling on writing them.  
function consume(food1, food2, cb) {
  return cb(food1, food2)
}
function eatFood (food1, food2) {
  return `I grabbed my ${food1} and ${food2} and munched out of control`;
}
console.log(consume("Pizza", "T-ravs", eatFood()))

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/


/* Step 3: Check your work by uncommenting the following calls to consume(): */
//consume(2,2,add); // 4
// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Question 1: Explain in your own words why the example below is a closure.
// Explanation: It is closure because the console.log of external is able to grab outside of the function for i'm outside as well as the nested function can grab items from above it in the parent function. 

// Question 2: Given the example below, what scope is the external variable in?
// Explanation: Global

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