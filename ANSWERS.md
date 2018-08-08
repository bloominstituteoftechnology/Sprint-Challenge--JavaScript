# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.
.map returns a new array, forEach simply iterates over the array and returns nothing.

2. What is the difference between a function and a method?
Functions are defined outside of classes and Methods are inside of and a part of classes.

3. What is closure?
Closure describes the ability of a child to access parent data after scope has closed.

4. Describe the four rules of the 'this' keyword.
 A) The .this is the global object in non-strict mode, and undefined in strict mode.
 B) The .this points to the object on which the function is called (what’s to the left of the period when the function is called.
 C) We can explicitly tell the JavaScript engine to set this to point to a certain value using call, apply or bind.
 D)Using the new keyword constructs a new object, and this points it.

5. Why do we need super() in an extended class?
When used in a constructor, the super keyword appears alone and must be used before the this keyword is used. The super keyword can also be used to call functions on a parent object.
