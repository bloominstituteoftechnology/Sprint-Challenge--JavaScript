1. Describe the biggest difference between .forEach & .map.

.forEach will mutate the original array to which it's being applied, while .map will not mutate the original array because it creates a new array.

2. What is the difference between a function and a method?

A function can stand on its own and can be considered its own object, while a method is a function on a specific object.
What is closure?

3. Describe the four rules of the 'this' keyword.

Global/Window binding: 'this' will point specifically to the console object. Also a big no-no, just like inline !important in CSS.

Implicit(automatic) binding: happens when we call a function with a preceding dot. The "this" points to the object preceding the dot.

New binding: happens when we use constructor functions to create new objects. The "this" will point to the object that was created by the constructor function.

Explicit Binding: happens when we use the .call or .apply methods and the "this" becomes explicitly defined relative to the conxtext of what is being called or applied.

4. Why do we need super() in an extended class?
super() allows us to gain access to the "this" items in the extended class. 