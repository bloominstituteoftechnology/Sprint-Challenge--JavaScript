1. Describe the biggest difference between `.forEach` & `.map`.

For each simply runs a function per each item in the array without fundamentally changing the array or creating a new one.
Map affects each index of the array and stores the effect into a new array. 

2. What is the difference between a function and a method?

A function, if it is in the global scope, can be called anywhere in the program. A method is unique to its object or context.

3. What is closure?

Closure is what is accessible by a function based on its position in the scope chain. Global (least specific) to within a if statement (more specific) to a method within an object (very specific and "narrow" context).

4. Describe the four rules of the 'this' keyword.
This operates by using its parent scope as its context.

Window binding - Binds the keyword this to the "Window" which is the entire runtime environment for Javascript. 
Explicit binding - Uses .apply or .call in order to get context from any scope and bring it into the current scope.
Implicit binding - The scope in which this is called becomes the (implied) context.
New binding - Uses the "new" keyword to create a variable which uses the context of the class it is derived from.


5. Why do we need super() in an extended class?

Super() tells the class to go "up one level" (hence "super") and derive its properties from that context.