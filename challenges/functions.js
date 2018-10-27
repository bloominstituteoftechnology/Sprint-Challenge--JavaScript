// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume (x,y,callback){
  return callback(x,y);
}


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns
  * "Hello first-name last-name, nice to meet you!"
*/
function add(x,y){
   return x+y;
}

function multiply(x,y){
    return x*y;

}

function greeting(firstName,lastName){
    return (`Hello ${firstName} ${lastName},nice to meet you!`);

}


/* Step 3: Check your work by uncommenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation:
//The "nestedfunction()" can access the variable "internal" because of "closures".In
// JavaScript "closures" works in a function's scope.when a function is declared and created ,a
// new scope is created.Any variables declared within that function's scope will be enclosed in
// a lexical/private scope that belongs to that function.If some variable isn't defined in a function's
// scope,the function looks outside the scope chain and search for a variable being referenced in the
// outer scope.
//Here, in the below example nestedFunction() doesn't have the variable "internal" ,so the function
// looks outward for context and gets it in its parent function.



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