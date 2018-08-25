# 1. Describe the biggest difference between `.forEach` & `.map`.

'.forEach' does something to every element in an array and you tell it what to do with those elements. Therefore, it will return whatever you specify. '.map' does something to every element but always returns a new array with each item edited in the manner you specified.

# 2. What is the difference between a function and a method?

A method is a function. It's just a function which lives on an object. You call it using dot or bracket notation after the name of the object.

# 3. What is closure?

Javascript is like a russian nesting doll, or an onion, or a series of boxes enclosing each other. Every time you make a new scope (signified by use of brackets) you move one level 'in' the nesting. Closure refers to the current scope you are in. A closure has access to all the variables outside of itself, but cannot go further in to get a value (although something further in can purposely return something up to a higher closure, such as in recursion... but to that lower function, the closure we are in is "higher").

# 4. Describe the four rules of the 'this' keyword.

Window/global binding-- This refers to the window or global object if no other object is calling the function.

implicit binding-- When we use this within a function called within our code, this simply refers to that function in the context in which it is called. This can be a little tricky only because the context is not necessarily where we see the word 'this' appear, but rather the object/function which does the calling of whatever contains 'this.' So if we call a function within another function which has "this" set as that object's home function, it is the home function which is the context unless we set it explicitly. Hence to 'import' the values of another function within a new function we need to use explicit binding to set 'this', which is why we use "call" for inheritance when making pseudo classes.

explicit binding-- We can set the context to something other than the context in which something is being called by using the call, apply, or bind. Call takes comma separated arguments, apply takes an array and bind simply returns a new function rather than new values.

new/creation binding-- When we make a new object using classical or pseudo classical notation, an empty "this" is created which refers to the new object of a certain class being created.
#5. Why do we need super() in an extended class?
We need to use super() to tell the class to inherit the prototype and categories from its parent.
