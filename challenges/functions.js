// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function callback(param1, param2, cb){
  return cb(param1, param2); 
    }
    function addsItems(param1, param2) {
      return param1 + param2;
  };

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function consume(x, y, cb) {
  return cb(x, y);
  }
  function sumNums(x,y){
  return x + y;
  }
  console.log(consume(5,8,sumNums)); 

  //multiply
  function multiply(x, y, cb) {
    return cb(x, y);
    }
    function multiplyNums(x,y){
    return x * y;
    }
    console.log(multiply(5,8,multiplyNums));
  //greeting
  let firstname = "Bob";
  let lastname = "Smith";
  function greeting(firstname, lastname, cb) {
    return cb(firstname, lastname);
    }
    function sayHi(firstname, lastname){
    console.log(`"Hello ${firstname} ${lastname} nice to meet you!"`);
    }
    console.log(consume('Angela','Smith',sayHi)); 

/* Step 3: Check your work by un-commenting the following calls to consume(): */
 //consume(2,2,sumNums); // 4
 //consume(10,16,multiply); // 160
 //greeting("Mary","Poppins", sayHi); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.
// *!Because nestedfunction can access the variable internal which is declared within its own function scope 
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