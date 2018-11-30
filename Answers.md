1. Describe the biggest difference between `.forEach` & `.map`.

.forEach() doesn't return anything, while .map() returns a new array.


2. What is the difference between a function and a method?

A function is any block of code that can be invoked within a program to do something; when a function is
the value of a key in an object, it is a method (i.e., a method is a function that bound to an object).

3. What is closure?

Technically, a closure is a function in combination with its lexical environment in which it was declared.
When a function is declared, a functional scope is created. The variables and functions declared inside that function can access variables in an outer scope, but cannot access variables in an inner scope.

4. Describe the four rules of the 'this' keyword.

a. Window binding - by default, 'this' refers to the window Object.
b. implicit binding - when a JS object is referenced by dot notation, 'this' is automatically the object to the left of the dot.
c. new binding - when a constructor function is used, 'this' refers to the instance of the class object that is created and returned by the constructor function
d. explicit binding - Whenever JS's call() or apply() is invoked, 'this' is explicitly defined - 'this' refers to the argument provided to either of those methods.

5. Why do we need super() in an extended class?

super() passes new attributes up to constructor of parent object. It is used anytime we used 'extends'.
