// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested 
function can access the variable internal. */


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

// Explanation: 
/*
  The reason internal is accessbile by nested function is the same type of 
  reason external is accessible within the myFunction. Its because of scope block
  The inner nested scope blocks allow these variables closure to those functions. 
*/


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses
 a counter to return the summation of that number. For example, 
 `summation(4)` should return 10 because 1+2+3+4 is 10. */
const sumation = (p) => {
  let result = 0;
  for(let counter = 0; counter <= p; counter++){
    result = result + counter;
  }
  return result;
};
console.log('summation '+ sumation(4));

