// ==== Callbacks ====  

/* Step 1: Create a higher-order function
  * Create a higher-order function named consume with 3 parameters: a, b and cb
  * The first two parameters can take any argument (we can pass any value as argument)
  * The last parameter accepts a callback
  * The consume function should return the invocation of cb, passing a and b into cb as arguments
  *   */

  //higher-order function
  const consume = (a, b, cb) =>{
    console.log(cb(a,b))
      return cb(a, b);
    }
    
    
    
    /* Step 2: Create several functions to callback with consume();
      * Create a function named add that returns the sum of two numbers
      * Create a function named multiply that returns the product of two numbers 
      * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
    */
    //cb
    const add = (a, b) =>{
      return a + b;
    }
    const product = (a, b) => {
      return a * b;
    }
    const greeting = (a, b) =>{
      return `Hello ${a} ${b}, nice to meet you!`
    }
    
    
    console.log(consume(2,5, add));
    console.log(consume(2,5, product));
    console.log(consume('Kim','Semenza', greeting));
    
    /* Step 3: Check your work by un-commenting the following calls to consume(): */
    // console.log(consume(2, 2, add)); // 4
    // console.log(consume(10, 16, multiply)); // 160
    // console.log(consume("Mary", "Poppins", greeting)); // Hello Mary Poppins, nice to meet you!
    
    
    // ==== Closures ==== 
    
    // Explain in your own words why nested function can access the variable internal.
    
    /* Explanation: There are two scopes global and local.  
    If a variable is declared outside 'const external' it will belong to the global and local function have access
    function scope then limit access allowing the child / grandchild ect... have access to each scope that is a level up but 
    a parent does not have access to the grandchild unless you have attached an object   */
    
    
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
    
