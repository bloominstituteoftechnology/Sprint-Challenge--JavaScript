1. Describe the biggest difference between `.forEach` & `.map`.

While both methods are able to apply some function to each element of the array,
.forEach mutates the calling array, but .map returns the new values to a new array.

2. What is the difference between a function and a method?

Functions and methods are both functions. The only difference is that functions are global and methods are tied to an object as a property.

3. What is closure?

Closure describes the accessibility of a chain of outer and inner functions. Inner functions (nested functions) have access to the global scope variables, its "parent" function's variable and its own. But it does not have access to use its own inner function's variables. In this way, there is a cascading effect of accessibility  from outer function to inner function to inner-inner function, with the inner-inner function having the most accessibility and the outer function having no accessibility to its nested function's variables.

4. Describe the four rules of the 'this' keyword.

a. window/global binding

  If 'this' is not called with a method or property, it will be tied to the global scope automatically.

b. implicit binding

  When 'this' is called with a method or property (this.name), it automatically binds/refers to the object it was called in.

c. explicit binding

  When 'this' is bind/referenced to an object elsewhere using .call, .apply, or .bind.

d. 'new' binding

  'new' creates a new object which inherits from a prototype of another object. However, 'this' used within the new object is bind to the new object.

5. Why do we need super() in an extended class?

  The keyword super is used to access functions on an object's parent. It must be used in an extended class so that it can inherit the functions and prototype methods of the parent.
