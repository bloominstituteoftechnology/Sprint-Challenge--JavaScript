1. Describe the biggest difference between `.forEach` & `.map`.

.map() creates a new array to pass in the results of the called function.

2. What is the difference between a function and a method?

Methods belong to objects.

3. What is closure?

Closure is a way to make data outside the scope of a function private to that function.

4. Describe the four rules of the 'this' keyword.

this can be bound four different ways: global/window binding, implicit binding, new binding, and explicit binding.

If there is no internal object set and the this keyword is invoked in a function, this binds to the window object.

If an object calls a function using dot notation (Object.function()), and the this keyword is used in the function, it binds to the calling object to the left of the dot.

When a new object is created with a constructor function, the this is bound to it using the new keyword to define the function:

const newObject = new Function();

Explicit binding comes into play when using the .call or .apply methods, in which the object being bound to is passed in the methods' arguments.

5. Why do we need super() in an extended class?

super() passes any new attributes up to the constructor class when using the extends keyword.
