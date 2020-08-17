// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


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
// Because the nestedFunction is able to use variables that are set on a higher order function. Functions can call upon variables in higher order functions, but can not call upon variables nested lower. If this variable was in the global scope it could also be called upon.

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */


function sumation(parameter){
let counter = 0;
for(let i = 0; i <= parameter; i++){
  counter += i;
}
return counter;
}
console.log(sumation(4));