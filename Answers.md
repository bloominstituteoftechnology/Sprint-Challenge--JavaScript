1. Describe the biggest difference between `.forEach` & `.map`.
The biggest difference is that .map returns a new array while .forEach iterates over an array but does not create a new array. 

2. What is the difference between a function and a method?
They are pretty interchangeable, the big difference is scope. Methods are created/defined within the scope of objects like classes while functions if they aren't a method exist in the scope of the global object. 

3. What is closure?
A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain.

4. Describe the four rules of the 'this' keyword.
By default 'this' attaches to window/global object. (Window)
If 'this' is called within object method scope, 'this' will attach to the object and look for property matches. (Implicit)
If the 'new' keyword is used, 'this' will default to the properties associated. (New)
If .call(), .apply(), or .bind() are employed, the 'this' context is manually set. (Explicit)

5. Why do we need super() in an extended class?
Super() is employed to access and call functions from a parent because properties/methods aren't inherently inherited.
