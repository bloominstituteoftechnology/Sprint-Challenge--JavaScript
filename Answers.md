1. Describe the biggest difference between `.forEach` & `.map`.
.forEach is a way to perform a function for each element of an array.
.map creates a new array after calling a specific function on each element of the array

2. What is the difference between a function and a method?
A function is code written to perform a specific task and is explicitly passed parameters.
A method is a type of function that is part of an object or class. The method is implicitly passed the object on which it is passed. 

3. What is closure?
Closure is a feature by which an inner function has access to variables declared in an outer parent function. It refers to the chain of scope.

4. Describe the four rules of the 'this' keyword.
Global object binding: ‘this’ will be the window/console object when in the global scope
Implicit binding: when a function is called by a dot, the preceding object is ‘this’
Explicit binding: when the call(), apply() or bind() functions are called; ‘this’ and other parameters are passed explicitly
New binding: when a constructor function is being used to create a new object, ‘this’ refers to the specific instance of the object being created

5. Why do we need super() in an extended class?
The super is used to call the properties of the parent constructor