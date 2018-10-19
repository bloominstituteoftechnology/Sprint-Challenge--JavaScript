1. Describe the biggest difference between `.forEach` & `.map`.

The '.forEach' method executes a provided function on each array element. 
The map() method executes a provided function on each array element and creates a new array with the results of the function. 

2. What is the difference between a function and a method?

Functions are defined outside of a object variable. 
Methods are defined inside of an object variable and are apart of that object. 

3. What is closure?

A closure is a type of scope that utilizes the Lexical Scope that the function was declared. Closures persists, meaning they hold on to information to be used later. Closures have access to the parent scope, even after the parent function has closed

4. Describe the four rules of the 'this' keyword.

1) If the new keyword is used when calling the function, the 'this' keyword inside the function refers to a brand new object.

2) If apply, call, or bind are used to call a function, the 'this' keyword inside the function is the object that is passed in as the argument.

3) If a method is invoked using dot notation, the 'this' keyword refers to the object to the left of the dot.

4) If a function is invoked without any explicit conditions/definitions, 'this' refers to the global object. In a browser, 'this' refers to window.

5. Why do we need super() in an extended class?
Super is used to call and access functions from a parent constructor. Super allow a child class to build on top of the parent's functionality. 
