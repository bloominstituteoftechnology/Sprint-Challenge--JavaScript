# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.
-- '.map' iterates through an array and changes each value, whereas '.forEach' does not change the values.

2. What is the difference between a function and a method?
-- a method is a function within an object.

3. What is closure?
-- A closure is a function that can use variables declared outside of its own scope, but still within a higher level function or scope.

4. Describe the four rules of the 'this' keyword.
-- Window binding: the 'this' keyword is not refering to any particular object, therefore defaults to window.
-- Implicit: 'this' refers to the object it is contained in.
-- Explicit: using '.call', '.apply', or '.binding' to refer to an object outside its original declaration.
-- New: 'this' applies to the properties in a new object based on its constructor.

5. Why do we need super() in an extended class?
-- super() allows the extended class access to the prototype's properties and methods.
