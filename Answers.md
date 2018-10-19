1. .forEach doesn't return a new array whereas .map does

2. Methods are just functions that are properties of a specific object

3. Closure is a function's reference to all the things in its outer scope, so that it can be used in that function's lexical scope.

4.  A) window binding- "this" points to the global scope, also known as the window
    B) implicit binding - "this" points to the object that invoked the function using dot notation (the object to the left of the dot)
    C) explicit binding - "this" is told what to point to using .call, .apply and .bind
    D) new binding - "this" points to a newly created object made with the "new" keyword

5. super() gives the child classes access to all of the properties and methods of its parent classes