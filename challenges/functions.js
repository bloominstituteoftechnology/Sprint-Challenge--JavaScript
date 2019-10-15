// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
*/
 function callback(x,y){
   return x+y;
 }
 function consume(x,y,cb){
  return callback(x,y);
   }
 

/* Step 2: Create several functions to callback with consume();
  * Cr(eate a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
function add(x,y){
  return x+y;
}
function  consume(x,y,add){
  return  add(x,y);

};
function multiply(x,y){
  return x*y;
}
function  consume(x,y,multiply){
  return  multiply(x,y);

};
function greeting(){
  return ;
}
function  consume(x,y,add){
  return  add(x,y);

};
function  greeting(firstName,lastName){
  return "hello " + firstName  + lastName;
}
function  consume(firstName,lastName,greeting){
  return  greeting(firstName,lastName);
}

/* Step 3: Check your work by un-commenting the following calls to consume(): */
 console.log(consume(2, 2, add)); // 4
 console.log(consume(10, 16, multiply)); // 160
console.log(consume("Mary ", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why nestedfunction can access the variable internal.

// Explanation: 


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
