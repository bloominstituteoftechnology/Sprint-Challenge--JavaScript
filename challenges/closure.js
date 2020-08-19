// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal.*/


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
/*Nested Function can access (internal) because it is part of the nested Function scope. Meaning it only lives withing the nested function. */

/* Task 2: Counter */
/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function sumation(num) {
  let count = 0;
  for(let i = 0; i <= num; i++){
    count++;
  } return count
};

  console.log(sumation(4));





