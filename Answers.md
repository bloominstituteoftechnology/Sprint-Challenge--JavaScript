1.	Describe the biggest difference between .forEach & .map.
.forEach is an array method that iterates through an array and executes a provided function but does not create a new array while the .map method creates a new array with the results of the function on every element in the array                                                                              
2.	What is the difference between a function and a method?
A function performs a particular task and a method is a function inside a function/object. 
3.	What is closure? Allows use of variables in global scope in functions and allows use of variables in nested functions from functions directly outside of the nested function. Holds variables in memory or local scope when variable is global or directly outside of embedded functions.
From MDN site: A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created. (source MDN)
4.	Describe the four rules of the 'this' keyword.
1.Window Binding - in global scope "this" would be entire window/console - 

 2. Implicit Binding - "this" is defined at function invocation time by the object
to the left of the dot.

 3. New binding - Tells what "this" is by invoking (or constructing) a "new" keyword function/object

 4. Explicit Binding - uses call, apply or bind to tell function what the context
 of "this" will be.

5.	Why do we need super() in an extended class?
Super()  allows an “extends” constructor function access to and to call functions on an object's parent and use the 'this' keyword

