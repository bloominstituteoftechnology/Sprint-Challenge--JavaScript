1. Describe the biggest difference between `.forEach` & `.map`.
   .forEach changes our original array and .map returns a new array
2. What is the difference between a function and a method?
   Functions are objects and can be called; Methods are functions inside of objects
3. What is closure?
   A closure is a function nested inside of the function it was declared inside of and has access to the variables of its nested lexical environment
4. Describe the four rules of the 'this' keyword.
   This is all about context.
   Window/global binding - if no context provided, it will always point to the Window object
   Implicit binding - binding of 'this' keyword to an object or function using dot notation
   New binding - when new object created this refers to that specific instance of object created - the this keyword context is passed in with the 'new' keyword
   Explicit binding - using .call and .apply overrides 'this' with a new context
5. Why do we need super() in an extended class?
   super() passes any new attributes from our constructor to the parent class so the class can use its own attributes and the parent's attributes
