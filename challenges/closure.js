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
// since internal was declared within the scope of myFunction(), it can be accessed anywhere within in that scome. nestedFunction is within the scope of myFunction() and can therefore access the variable.


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

const summation = function(num){
  let answer = 0;
  for(let i = 1; i <= num; i++){
    answer = answer + i;
  }
  return answer;
}

console.log(summation(4));