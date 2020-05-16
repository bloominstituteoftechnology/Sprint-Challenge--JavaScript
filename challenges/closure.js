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

// Explanation: because of how scope works. Inside the scope of nestedFunction I can access everything outside of it. But I cannot access variables unique to nested Functions scope from outside


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */



function sumation(num) {
  let result = 0;
  for (i = 0; i <= num; i++) {
    result += i;
  }
  return result
}

console.log(sumation(4))