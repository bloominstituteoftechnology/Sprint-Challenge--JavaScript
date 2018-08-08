// ==== Callbacks ====  

/* Step 1: Create a callback function
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

consume = (param1, param2, callback) => {return callback(param1, param2);} //the consume function takes three argument, the third of which is a callback function


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
add = (num1, num2) => {return num1 + num2;} //the add function passes in two parameters num1 and num2 and returns the sum of the two parameters
multiply = (num1, num2) => {return num1 * num2;} //the multiply function passes two parameters and returns the product of those two parameters
greeting = (firstName, lastName) => {return `Hello ${firstName} ${lastName}, nice to meet you!`;} //the greeting function passes two parameters and returns the parameters as first and last name in template string format


/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2,2,add); // 4 //4 is returned due to adding 2 and 2 as the arguments and invoking the add callback function
consume(10,16,multiply); // 160 // 160 is returned by multiplying 10 and 16 as the arguments and invoking the multiply callback function
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you! //the greeting is returned by passing the two strings and calling the greeting callback function


// ==== Closures ==== 
// Question 1: Explain in your own words why the example below is a closure.

// Explanation: 
//The example below is a closure because the external variable is outside the scope of myFunction but is being called and logged from inside of myFunction.

// Question 2: Given the example below, what scope is the external variable in?
//Global Scope

let external = "I'm outside!"; //global variable

function myFunction() {
  let internal = "Hello! I'm inside the function";
  console.log(external); //this is a closure because the external variable is called from within the scope of the internal function

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();