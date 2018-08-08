# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.

**Foreach doesn't return an array while .map can change the array and return a new one.**

2. What is the difference between a function and a method? 

**Methods belong to an object while functions are called by name and can choose to return values.**

3. What is closure? 
**The availability of certain values even after the function has executed to nested functions.**
4. Describe the four rules of the 'this' keyword.

If the function is in the global scope, this will point to the window object.
Implicit binding is if a function is called by a dot, the object to the left of the dot is what this references to.
Explicit binding is when a constructor function is used, this refers to the specific object created and returned by the constructor function.
new Binding creates a new object and then the new object is set at the this.

5. Why do we need super() in an extended class? Super calls the parent constructor.
