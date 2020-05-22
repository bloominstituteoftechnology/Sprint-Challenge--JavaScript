// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

// Variables are scoped to the parent function. Because internal is set inside of the parent function: myFunction(),
// nestedFunction() - the child, can access and call the variable from it's parent.

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


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number.
For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

const sumation = function(num) {
  let total = 0;
  for(let i = 0; i <= num; i++){
    total += i;
  }
  console.log('Summation: ' + total);
}

sumation(6); // Returns 21