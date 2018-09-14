1. Describe the biggest difference between `.forEach` & `.map`.
.forEach goes through each item of an array and doesn't really return any value or structure, the .map method returns a new array based on a function.


2. What is the difference between a function and a method?

A function is a function that is declared either in a function scope(local scope) or global scope. A method is a separate function that is declared within an object.

3. What is closure?

A closure is a variable within a function scope that is saved throughout the child functions so they can call upon it.

4. Describe the four rules of the 'this' keyword.

Implicit: When the value of your "this" is to the left of the dot ex: drew.methodName();
Explicit: When the developer uses the call,apply, or bind keyword. Typically used with functions outside of objects ex: functionName.call(objName)
Window: When the this keyword is not bound to anything so it goes to the Window object (very bad thing).
New: when you use the new keyword it makes a new object with all the attributes of the parent object and allows it to use its methods 


5. Why do we need super() in an extended class?

Super basically brings all the parent attributes and methods into the child and allows child to have it's own attributes and methods. It is basically the replacement for .call(). Binds the this keyword.
