// ==== Callbacks ====  
function consume (x, y, cb) {
  return cb(x,y);
}

function add (x,y) {
  return x + y;
}

function multiply (x,y) {
  return x*y;
}

function greeting (x,y) {
  return `Hello ${x} ${y}, nice to meet you!`;
}

console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


/* ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

Explanation: nestedfunction() is nested inside myFunction() and the variable 'internal' is declared within myFunction. The closure concept 
enables nestedFunction to look to its parent function when in execution mode

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

*/