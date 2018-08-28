// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(param_1, param_2, callback) {
	return callback(param_1, param_2);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(num_1, num_2) {
	return num_1 + num_2;
}

function multiply(num_1, num_2) {
	return num_1 * num_2;
}

function greeting(first, last) {
	return `Hello ${first} ${last}, nice to meet you!`
}

/* Step 3: Check your work by uncommenting the following calls to consume(): */

console.log(consume(2,2, add)); // 4
console.log(consume(10,16, multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: When a variable is declared within a function it belongs to that functions private scope.
// If the variable that is called isn't defined within that function's scope then it will look one level
// up in scope to see if the variable is defined there. That's the case for `internal`. If `internal` weren't
// defined in `myFunction()` then it would look one scope (level) up from that.


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