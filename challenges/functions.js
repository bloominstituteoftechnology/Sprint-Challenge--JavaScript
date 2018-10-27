// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

let divide = (a,b) => a / b;

let calc = function(num1, num2, callback) {
      return callback(num1, num2);
}

console.log(calc(5,4,divide));

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

let add = (a,b) => a + b;

let multiply = (a,b) => a * b;

let greeting = (a,b) => `Hello ${a} ${b}, nice to meet you!`;

let consume = (num1, num2, callback) => {
    return callback(num1, num2);
} 
    
console.log(consume(5,4,add));
console.log(consume(5,4,multiply));
console.log(consume('Brett','Madrid',greeting));


/* Step 3: Check your work by uncommenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume('Mary','Poppins', greeting));

// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: Because a child, or nested function, always has acces to it's parent's variables if
// necessary, but not vice versa.  When a nested function does access a parent variable, a closure is created.  In this case, nestedFunction is a child function of myFunction and, therefore, has access to myFunction variables.  This is known as lexical scoping.


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