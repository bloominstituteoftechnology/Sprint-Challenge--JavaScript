// ==== Callbacks ====  

/* Step 1: Create a callback function
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(a, b, cb) {
  return cb(a,b);
}

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(a, b) {
  return a+b;
}

console.log(consume(5, 6, add));

function multiply(a, b) {
  return a*b;
}
console.log(consume(5, 6, multiply));

function greeting(first, last) {
  return `Hello ${first} ${last}, nice to meet you!`;
}

console.log(consume('Adrian', 'Adames', greeting));

/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Question 1: Explain in your own words why the example below is a closure.
`The function myFunction() is given a definition at first, but it isn;t called. After the function is defined (lines 47-54),
the function is invoked (line 58). The function proceeds to define the variable internal, and console logs external (i.e. "I'm outside!")
It then defines a new function called nestedFunction (line54). It then invokes nestedFunction, which then proceeds to console.log internal (i.e. "Hello! I'm inside the function").
When the function is invoked again, as I did when I console.log(myFunction) in line 62, the function is executed again. This is where closure comes in. 
The external is within the lexical scope of myFunction (i.e. in its closure) and the internal is within the lexical scope of nested function, meaning that, when it's called, it carries with it all the variables along with their associated values when it's
called another time, hence the repeated strings when I console.log (i.e. invoke) the function twice more. The external and internal variable values were called and stored within the function
after the function is invoked are remembered when the myFunction is invoked twice more. `

// Explanation: 

// Question 2: Given the example below, what scope is the external variable in?

`The external variable is in the global scope. Inside the function, the external variable is in 
the lexical scope of myFunction. `

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

console.log(myFunction());
console.log(myFunction());

console.log(external);

