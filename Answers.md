# 1. Describe the biggest difference between `.forEach` & `.map`.

'.forEach' executes a given function on each element of an array. '.map' also takes a function to execute upon every element, and automatically returns a new array which is the result of calling that function on each element. Therefore forEach does not automatically return anything, but map always returns an array.

# 2. What is the difference between a function and a method?

A method is a function. It's just a function which lives on an object. You call it using dot or bracket notation after the name of the object.

# 3. What is closure?

Javascript is like a russian nesting doll, or an onion, or a series of boxes enclosing each other. Every time you make a new scope (signified by use of brackets) you move one level 'in' the nesting. Closure refers to the current scope you are in. A closure has access to all the variables outside of itself, but cannot go further in to get a value (although something further in can purposely return something up to a higher closure, such as in recursion... but to that lower function, the closure we are in is "higher").

A closure refers to any function inside another function which has access to the variables of the function it is inside, as well as global variables or variables inside additional enclosing functions.

# 4. Describe the four rules of the 'this' keyword.

Window/global binding-- This refers to the window or global object if no other object is calling the function.

implicit binding-- When we use this within a function called within our code, this simply refers to that function in the context in which it is called. This can be a little tricky only because the context is not necessarily where we see the word 'this' appear, but rather the object/function which does the calling of whatever contains 'this.' So if we call a function within another function which has "this" set as that object's home function, it is the home function which is the context unless we set it explicitly. Hence to 'import' the values of another function within a new function we need to use explicit binding to set 'this', which is why we use "call" for inheritance when making pseudo classes.

explicit binding-- We can set the context to something other than the context in which something is being called by using the call, apply, or bind. Call takes comma separated arguments, apply takes an array and bind simply returns a new function rather than new values.

new/creation binding-- When we make a new object using classical or pseudo classical notation, an empty "this" is created which refers to the new object of a certain class being created.
#5. Why do we need super() in an extended class?
We need to use super() to tell the class to inherit the prototype and categories from its parent.
