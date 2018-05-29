// ==== Callbacks ====  

/* Step 1: Create a callback function
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
const consume = function (param1, param2, callback){
  return callback (param1,param2) ;
}
/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
const add = function (param1,param2) {
  let result = param1 + param2;
  // console.log(result);
  return result;
}

function multiply(param1,param2){
  let result = param1 * param2 ;
  return result;
}

const greeting = (param1,param2) => {
  return `Hello ${param1} ${param2}, nice to meet you!` ;
}

/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2,2,add);//? 4 
consume(10,16,multiply); //? 160
// consume("Mary","Poppins", greeting); //? Hello Mary Poppins, nice to meet you!
consume("Mary","Poppins", greeting); //?


// ==== Closures ==== 
// Question 1: Explain in your own words why the example below is a closure.

// Explanation:  THE nestedFunction IS A CLOSURE BECAUSE IT IS INSIDE OF ANOTHER FUNCTION.  THE INNER FUCTION HAS ACCESS TO ITS PARENTS VARIABLES AND METHODS, AND THEREBY IS ABLE TO ACCESS GLOBAL VARIABLES AND METHODS.  THE CLOSURE CREATES PRIVATE VARIABLES THAT CANNOT BE MODIFIED OR SEEN FROM THE OUTSIDE OF ITS LEXICAL SCOPE.  THE VALUES OF THE INNER FUNCTION CAN BE ACCESSED AFTER THE PARENT FUNCTION CLOSES.

// Question 2: Given the example below, what scope is the external variable in?
//Answer: GLOBAL

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