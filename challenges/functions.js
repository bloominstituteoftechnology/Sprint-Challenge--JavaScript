// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
function catsPJ(cat1, cat2, callback){
  return callback(cat1, cat2);
}
function catsMeow(cat1, cat2) {
  console.log("The cat goes" + cat1 + cat2 +" all night long.")
}
function catsClaws(cat1, cat2){
  console.log("The cat was angry" + cat1 + " and then" + cat2 +".")
}
catsPJ(" meow", " MEOWwwWWW", catsMeow);
catsPJ(" swipping left", " swipping right", catsClaws);



/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns 
  "Hello first-name last-name, nice to meet you!"
*/
function consume(param1, param2, callback){
  return callback(param1,param2);
}

function add(param1, param2) {
  console.log(param1 + param2)
  return param1 + param2;
}
function multiply(param1, param2) {
  console.log(param1 * param2)
}
function greeting(param1, param2) {
  console.log( "Hello" + param1 + param2 + ", nice to meet you!")
}

consume(5,4, add);
consume(" Tom", " Mars", greeting);
consume(8,7, multiply);

/* Step 3: Check your work by uncommenting the following calls to consume(): */
//consume(2,2,add); // 4
// consume(10,16,multiply); // 160
// consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: becasue nestedfunction is nested within myFunction, and although tey are in their own rooms, they still share a house.


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














