// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
const consume = function(arg1, arg2, callback) {
  if (callback){
    console.log(arg1 + arg2);
    
  }
  
  if (callback){
    console.log(arg1 * arg2);
    
  }
  
  if (callback){
    console.log(`Hello ${arg1} ${arg2}, nice to meet you!`)
  }
}
function finishedSum() {
  console.log(`The numbers have been summed:`);
}

function finishedProduct() {
  console.log(`The multiplication of the numbers has finished`);
}

function finishedGreeting() {
  console.log("Greetings Deliverd!")
}
consume(5, 5, finishedSum);
consume(10, 16, finishedProduct);
consume("Mary", "Poppins", finishedGreeting);
/* Step 3: Check your work by un-commenting the following calls to consume(): */
//consume(2,2,add); // 4
//consume(10,16,multiply); // 160
//consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.
// Because internal is declared inside of myFunction
// Explanation: 
// Because internal is Implicit and is functioned scoped

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