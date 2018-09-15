// ==== Callbacks ====  

/* Step 1: Create a function that accepts a callback
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function doPoetry (subject, phrase, callback){
  console.log(`This a poem about ${subject} and ${phrase}`);
  callback();
}

function speakPoem (){
  console.log(`Unravel the prototype of your brain to find the corpus collosum does not mind the voltage gated ion channels and pseudoclassical inheritance.`)
}

doPoetry("science", "unraveling the code of the universe", speakPoem);



/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns
  *  "Hello first-name last-name, nice to meet you!"
*/
function consume(arg1, arg2, callback){
  console.log(callback(arg1, arg2));
}

function add(arg1, arg2){
  return arg1 + arg2;
}

function multiply(arg1, arg2){
  return arg1 * arg2;
}

function greeting(arg1, arg2){
  let firstName = arg1;
  let lastName = arg2;
  return `Hello ${firstName} ${lastName}, nice to meet you!`;
}

/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
// There is different levels of scope: 
// Global scope, which is where const external is. Or any variables that are created in the open space 
//outside any blocks.
//function scope, and block scope.
//example:
var declaredVariable = "What happens if I am declared outside the block?"
var outsideVariable = "Can I, a global variable be retrieved from the inside?"
{
var declaredVariable = "I am contained within this block and can only be modified in here."
console.log(declaredVariable);
console.log(`${outsideVariable} Yes I can.`)
{var whatami = "I am a deeper block scope"}
}

//  Any variables outside of the function does not have access to the deeper function scope.
//  On the other hand, the function is able to reach outside of its scope and retrieve defined variables.
//On these functions they act as "one way mirrors" in interrogation rooms. 
//Only able to be looked into from one angle.
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