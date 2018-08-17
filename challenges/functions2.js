// ==== Callbacks ====  

/* Step 1: Create a callback function
 * Create a function named consume that can take 3 parameters.
 * The first two parameteres can accept any argument
 * The last parameter accepts a callback 
 * In the body of the function return the callback with the two parameters that you created
 */



/* Step 2: Create several functions to callback with consume();
 * Create a function named add that returns the sum of two numbers
 * Create a function named multiply that returns the product of two numbers 
 * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
 */

  function consume(a, b, callback) {// we start by creating a function called consume, with 3 parameters
      return callback(a, b);// one of the parameters is a cllback function
  };

  function add(a, b){ // We can use that callback function to call other function, 
      console.log(a + b); // with our data and parameter carried over
      return a + b; //We carried over a and b from the consume function
  }

  function multiply(a, b) {
      console.log(a * b);
      return a * b;
  }

  function greeting(a,b){ 
      console.log("Hello " + a + " " + b + " nice to meet you!"); // We use string interpolation to write text
  }                          

/* Step 3: Check your work by uncommenting the following calls to consume(): */
consume(2,2,add); // 4
consume(10,16,multiply); // 160
consume("Mary","Poppins", greeting); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 
// Question 1: Explain in your own words why the example below is a closure.
    
   // Explanation:
   /*   - A closure is one way of supporting first class functions; 
        It is an expression that can reference variables within its scope
        (when it was first declared), be assigned to a variable,
        be passed as an argument to a function, or be returned as a function result
       */

// Question 2: Given the example below, what scope is the external variable in?
