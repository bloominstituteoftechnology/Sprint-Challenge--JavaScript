# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.   
  .forEach is less specific.  It executes the callback function it's given for each item in the array it's invoked on, whatever that may be.  .map is similar in that it executes its callback function for each member of the array, but it's specifically meant to map one array onto another - it returns a new array which has been processed by the callback function.  This could also be accomplished with a .forEach, but it would be more work.
---
2. What is the difference between a function and a method?
  A method is simply a function that is part of an object.
---
3. What is closure?
  A closure is the context in which a function or method executes.  The function's closure is simply the set of stuff that it has access to.  
---
4. Describe the four rules of the 'this' keyword.
  This can be bound explicitly with call, bind, and apply, implicitly by looking to the left of the dot in its function/method's invocation, to a brand new object with the new keyword, or by default to the window (which is undesirable).
---
5. Why do we need super() in an extended class?
  Invoking super(args) in a child class's constructor will cause it to also run the parent class's constructor on itself.  Along with the extends keyword, it establishes inheritance between the parent and child classes.  
