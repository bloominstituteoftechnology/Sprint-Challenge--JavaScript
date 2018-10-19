1. Describe the biggest difference between `.forEach` & `.map`.
While both take in callback functions, .forEach mutates the original array, while .map returns a new transformed array.
2. What is the difference between a function and a method?
A method is a function that is a property of an object
3. What is closure?
A function and its lexical environment
4. Describe the four rules of the 'this' keyword.
'this' can be bound 4 ways:
window-binding where 'this' in the global scope refers to the window object,
implicit-binding where 'this' in an object method refers to the object,
explicit-binding where 'this' is explicitly defined when using .call, .apply, or .bind,
and new-binding where 'this' refers to the specific instance of an object created by a constructor function.
5. Why do we need super() in an extended class?
it replaces the function of .call()-ing the superclass' properties into the subclass