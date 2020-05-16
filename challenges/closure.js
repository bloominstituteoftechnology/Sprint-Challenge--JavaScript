// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access 
the variable internal. */


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

//Explanation: 
//Because it is inside the function rather than outside the function. 
/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the 
summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation ()
 { let add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter}
})();
}