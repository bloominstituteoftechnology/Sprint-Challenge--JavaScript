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

// The nested function can access the variable "internal" because they are both inside the "myFunction scope" and while you can't access a variable that is inside a closed function the function can pull variables from outside its scope.

/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function sumation(x){
  let sum=0;
  for(let i=1;i<=x;i++){
    sum+=i;
  }
  return(sum)
}
console.log(sumation(4));