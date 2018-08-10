Answer the following questions to the best of your ability. You can exercise your Googling skills and use training kit.  Open up the [Answers.md](Answers.md) file and record your responses there.

1. Describe the biggest difference between `.forEach` & `.map`.
.forEach will iterate through each item in a givan data. .map also will iterate over each item in a given data but it  returns/convert the data  in a new array.

2. What is the difference between a function and a method?
A function allows us to manipulate data such as adding them or converting them into something. If a function is inside of an object (as one of its properties), we call this function a Method. 


3. What is closure?
Closure refers to the relationship between a function and its lexical environment.Because of closure, inner function can access the variables and values of its parent function. 

4. Describe the four rules of the 'this' keyword.

 Principle 1: Window Binding
    The 'this' keyword will refer/default to the global scope (e.g window object in windows, ) when it is not passed to a function. 
Principle 2: Implicit Binding
    The 'this' keyword will point to the object that's left of the dot when invoking the function. 
Principle 3: New Binding
    The 'this' keyword is used when creating constructor functions. Constructor functions creates objects. We can think of Constructor functions are like template functions which we can use over and over again so we don't have to declare it each time. When we create an object and use the 'New' keyword on it, we are basically assigning/passing the object to the constructor function.   
 Principle 4: Explicit Binding
    We can reassign the values of constructor objects by binding them to new ones with the use of .call or .apply. 

5. Why do we need super() in an extended class?
Super()  allows us to pass on the attributes from the base class or the parent class to the child class.
