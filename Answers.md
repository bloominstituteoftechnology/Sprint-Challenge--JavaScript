
1. Describe the biggest difference between `.forEach` & `.map`.

forEach doesn't return a new array while map does output a new array.

2. What is the difference between a function and a method?

While similar, a method is a function, and a property of a specific object.


3. What is closure?

Closure is the ability of a function to remember (and continue to access) the variables surrounding its lexical scope, even after the parent function has closed.

4. Describe the four rules of the 'this' keyword.

This has four bindings:

Default Window Binding is the global context this 
is given when no other rules are applied. This will 
search up the parent chain to find what is being called, 
and will return either the Window or an error/undefined 
if it cannot be found.
 
Implicit Binding is when dot notation is used to call
a function. Whatever is to the left of the dot is defined 
at the context for This in the function or object.

New Binding is when new is used to create a context
for This with each time it is called. It works in every 
instance where New is pointing to.

Explicit Binding is when we utilize .call(),
.apply(), or .bind() to explicitly set the context
of This. With .call() and .apply(), we are specifically
setting the This to pass through as the context.
With .bind() we are creating a new function with an
explicitly set This.


5. Why do we need super() in an extended class?

super() is used to connect to an object's parent, so we can call functions in the parent constructor and avoid duplicate constructors.