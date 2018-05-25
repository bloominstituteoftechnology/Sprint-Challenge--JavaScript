// ==== Callbacks ====

/* Step 1: Create a callback function
  * Create a function named consume that can take 3 parameters.
  * The first two parameteres can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
Const items = ["Tyrannosaurus", "Stegasaurus", "Velociraptor"];
function consume(x, y, callback){
  return callback(x, y);
};

Const Item(item, function(firstItem) {
  console.log(firstItem);
});

// ==== Closures ====
// Question 1: Explain in your own words why the example below is a closure.

// Explanation:
the example closes the array therefore it is considered a closure
// Question 2: Given the example below, what scope is the external variable in?
let "internal"


let external = "I'm outside!";

function myFunction() {
  let internal = "Hello! I'm inside the function";
  console.log(external);

  function nestedFunction() {
    console.log(internal);
  }
  nestedFunction();
}
myFunction();
