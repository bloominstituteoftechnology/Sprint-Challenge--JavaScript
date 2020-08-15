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

// Explanation: nested function can access const external bc external is in the global scope, any function can reach up to the global scope and grab a defined variable.


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

console.log("===Task 2===")

function sumation(num) {
  let counter = 0;
  for (let i = 0; i <= num; i++) {
    counter += i;
  }
  return counter;
}

console.log(sumation(4));