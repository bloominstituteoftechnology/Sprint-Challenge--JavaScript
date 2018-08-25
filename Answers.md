1. Describe the biggest difference between `.forEach` & `.map`.

.forEach() does not return anything by default. .map() executes the function on each item and returns an array of the new values.

2. What is the difference between a function and a method?

A method is a function that's defined as a property of an object. However, "global" functions are also properties of a window/global object, so they could also be 
considered methods. 

3. What is closure?

An inner function that is used to make variables private. It has access to its own variables, the variables of it's parent functions, and global variables but other functions cannot access the variables inside the inner function.

4. Describe the four rules of the 'this' keyword.

    1. Explicit: Uses.call(), .bind(), .apply() to bind "this."
    The first argument you pass to one of these methods will be the context of "this."
    2. Implicit: Implicit binding uses dot notation. When you call the function, whatever is to the left of the dot is what "this" is referring to. 
    3. New: When you use the new keyword, JS creates a new object and and assigns "this" to that new object. If you call a function with "new," the "this" keyword will reference the object created.
    4. Window: When none of the previous rules apply, the "this" keyword refers back to the window or global object.

5. Why do we need super() in an extended class?

super() replaces obj.call() so that the extended class will have the properties of the parent class.