// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
const callerBacker = (arg1, arg2, cb) =>{
  return cb(arg1, arg2);
}

const callBackward = (arg1, arg2) =>{
  const backward = (anArg) =>{
    return String(anArg).split('').reverse().join('');
  }
  return `${backward(arg1)} ${backward(arg2)}`
}

console.log(callerBacker(20005, 'rubberduck', callBackward))


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

const consume = (arg1,arg2, cb) =>{
  return cb(arg1, arg2)
}

const add = (num1, num2) =>{
  console.log(num1 + num2)
}

const multiply = (num1, num2) =>{
  console.log(num1 * num2)
}

const greeting = (first, last) =>{
  console.log(`Hello ${first} ${last}, nice to meet you!`)
}



/* Step 3: Check your work by uncommenting the following calls to consume(): */
 consume(2,2,add); // 4
 consume(10,16,multiply); // 160
 consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: Because the closure will carry that variable up the line of scope if that variable is going to be called within the nested function.


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