// ==== Callbacks ====  

/* Step 1: Create a callback function
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
consume=(x,y,cb)=>cb(x,y)

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
add=(x,y)=>x+y;
multiply=(x,y)=>x*y;
greeting=(firstName, lastName)=>`Hello ${firstName} ${lastName}, nice to meet you!`;

/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Question 1: Explain in your own words why the example below is a closure.
// Explanation: It's not this is just lexical scope lookup rules being used. myFunction is executed from the global execution context then myFunction declares
//internal variable and console.log(external) by looking up the scope chain to global scope then declares nestedFunction and executes that afterwards console.logging internal which is found in the scope of myFunction
// if this function was assigned to a variable, that variable would not be able to execute the nestedFunction meaning nestedFunction wouldn't be able to remember and access its lexical scope
// for closure to be exercised here myFunction should be returning nestedFunction as a function object.


// Question 2: Given the example below, what scope is the external variable in?
//The external variable is in the global scope.

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