// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function consume (first, second, callback) {
  return callback(first, second);
}
const step1 = consume('Kat', 'Fries', function (first, last) {
  return `${first} ${last}`;
})
console.log(step1);

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add (num1, num2) {
  return num1 + num2;
}

function multiply (num1, num2) {
  return num1 * num2;
}

function greeting (first, last) {
  return `Hello ${first} ${last}, nice to meet you!`;
}



/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!
// console.log(consume(2,2,add)); // 4
// console.log(consume(10,16,multiply)); // 160
// console.log(consume("Mary","Poppins", greeting));  // Hello Mary Poppins, nice to meet you!

// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

// Scope created by functions, if/else statements, things inside curly braces, etc act like a one-way mirror that can see everything that comes before it is called.

//external is in the global scope. internal is with the local scope created by the myFunction function. nestedFunction has access to both the global scope that comes before it is called and the local scope created by the myFunction function before it is called (which is why nestedFunction can log one, but two gets a ReferenceError that two is not defined.)

// JS reads/compiles the code twice. Once to gather the names of all the variables and the second time to assign the value to those variables. Si


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
    console.log(one)
    // console.log(two)
  };
  let one = 1;
  console.log('I run before nestedFunction!')
  nestedFunction();
  let two = 2;
  console.log('I run after nestedFunction!')
}
myFunction();
