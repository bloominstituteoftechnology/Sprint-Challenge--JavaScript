// ==== Callbacks ====  

/* Step 1: Create a callback function
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

See Below
   consume(x,y,cb)
   {
	   
	   
	   
   }

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/


function consume(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  const sum = cb(x,y);
  console.log (sum);
}

function add(x,y){
	return x+y;
	]
	
function consume(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.

  const mult = cb(x,y);
  console.log (mult);
}



function multiply(x,y){
	return x*y;
}
	
;


/* Step 3: Check your work by uncommenting the following calls to consume(): */
//consume(2,2,add); // 4
// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Question 1: Explain in your own words why the example below is a closure.

// Explanation: each value in each nested function has access to variables above it as well as any global variables

// Question 2: Given the example below, what scope is the external variable in?

    global scope

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