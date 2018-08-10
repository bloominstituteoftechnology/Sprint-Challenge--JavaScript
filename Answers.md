1. Describe the biggest difference between `.forEach` & `.map`.

.forEach modifies the original array.
.map outputs to a new array.


2. What is the difference between a function and a method?

Methods are ALWAYS a member of a class or object. It all
depends on the scope of the function. 


3. What is closure?

A closure is the combination of a function and the lexical
environment within which that function was declared. 

Closures have two parts: the function with the lexical
enviroment inside. The inner function has access to
the outside function's variable scope. 

4. Describe the four rules of the 'this' keyword.

*  Window binding allows you to use the 'this' keyword within
the block scope if no other binding is attached.
*  Implicit binding is when you put the object on the left of
this. It is used only when dot notation is used when invoking
a function.
*  New bindings are used with constructor functions to create
new properties.
*  Explicit binding of this occurs when .call(), .apply(), or
.bind() are used on a function.


5. Why do we need super() in an extended class?

super() is used to access and call functions on an object's
parent.