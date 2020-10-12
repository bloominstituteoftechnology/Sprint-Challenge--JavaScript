console.log("");
console.log("-CLOSURE-");
console.log("");
// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


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

// Explanation: 
/* nestedFunction is the Child of the myFunction Parent function. The Child function(nested function)can reach the Parent function to get the variable's value. Closure is made as the 'internal' variable is available in the Parent function's scope. And the Child function is able to reach out to the Parent function when the variable is not defined within it. 
*/


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

let counter = 0;
function summation(num) {
  for (let i = 0; i <= num; i++) {
    counter += i;
  }
  return counter;
}

console.log("A function using closure to get summation of the number 4:", summation(4));
console.log("");
 