// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
const consume = (val1, val2, callback) => {
  return callback(val1, val2);
};

consume(2, 5, (val1, val2) =>
  console.log(
    `Lord have mercy! My callback worked! Your callback params are ${val1} & ${val2}`
  )
);


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

const add = (num1, num2) => num1 + num2;

const multiply = (num1, num2) => num1 * num2;

const greeting = (first, last) => `Hello ${first} ${last}, nice to meet you!`;

const multplyVal = consume(10, 2, (val1, val2) => multiply(val1, val2));
console.log(`It's ${multplyVal} ya nerd.`);

const addVal = consume(20, 10, (val1, val2) => add(val1, val2));
console.log(
  `I bet you feel real special over there in your swivalback chair, the value is ${addVal} ya filthy animal.`
);

const howdy = consume("Dwight", "Shroot", (first, last) =>
  greeting(first, last)
);

console.log(`${howdy}. FALSE! Black Bears are the BEST BEARS!`);


/* Step 3: Check your work by un-commenting the following calls to consume(): */
 consume(2,2,add); // 4
 consume(10,16,multiply); // 160
 consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: // `nestedfunction()` can access the variable `internal` because when we are dealing with closures we have to realize 
// that its made up of both a function and the outside environment within which that function was declared, meaning 
// that if we were to call it, its  able to reach the outside environment or anything outside the function and get
// what its looking for and bring it inside but its not able to take something inside to the outside.


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