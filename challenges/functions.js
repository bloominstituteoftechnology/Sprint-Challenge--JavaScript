// ==== Callbacks ====

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback
  * In the body of the function return the callback with the two parameters that you created
*/
function plus(x,y,cb){
  cb(x + y);
};

function sum(x){
    console.log(x);
}

plus(3,5,sum);


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function consume(x, y, cb){
  cb(x, y);
}

function add(x,y){
  console.log(x + y);
}

function multiply(x,y){
  console.log(x * y);
}

function greeting(x,y){
  console.log('Hello ' + x + ' ' + y + ', nice to meet you!' )
}


/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ====
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation:

// This is an example of lexical scoping in which a nested function is able to have access to the variables declared in their outer scope. nestedfunction() is a child of myFunction() and any variables that are created in myFunction() is able to be access by any of its children due to closures ( nestedfunction() maintains a reference to its lexical environment which the variable 'internal' exists).


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
