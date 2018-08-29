// ==== Callbacks ====

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

/* Step 3: Check your work by uncommenting the following calls to consume(): */

// ==== Closures ====
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation:
//nestedfunction() can access the variable internal because internal is housed in the myFunction scope which encloses nestedFunction.  nestedFunction() can look"up" to get the value of variables which are are in closures around it.  But it cannot look "down" to get variables it itself encloses.

function consume(paramOne, paramTwo, callback) {
	let answer = callback(paramOne, paramTwo);
	console.log(answer);
}

function add(paramOne, paramTwo) {
	let answ = paramOne + paramTwo;
	return answer;
}

function multiply(paramOne, paramTwo) {
	return paramOne * paramTwo;
}
function greeting(paramOne, paramTwo) {
	return `Hello ${paramOne} ${paramTwo}, nice to meet you!`;
}

consume(2, 2, add); // 4
consume(10, 16, multiply); // 160
consume('Mary', 'Poppins', greeting); // Hello Mary Poppins, nice to meet you!

const external = "I'm outside the function";

function myFunction() {
	console.log(external);
	const internal = "Hello! I'm inside myFunction!";

	function nestedFunction() {
		console.log(internal);
	}
	nestedFunction();
}
myFunction();
