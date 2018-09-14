1. Describe the biggest difference between .forEach & .map.

   - .forEach runs a function while looping through an array, mutating that array.
   - .map creates a new array while preserving the original array

2. What is the difference between a function and a method?

   - A method is a function inside an object. A function is on its own.

3. What is closure?

   - When a function is nested within another function, closure gives our nested function access to any information delcared before it.

4. Describe the four rules of the 'this' keyword.

   1. Window/Global Binding - when 'this' is not bound to anything, 'this' points to the window object by default
   2. Implicit Binding - When used in an object, 'this' points to the object. 'this' is usually to the left of the dot.
   3. Explicit Binding - By using .call or .apply, we can explicitly bind 'this' to an object.
   4. New Binding - 'new' keyword triggers the creation of a new object - an instance of a constructor function. 'this' now points to the newly created object, not the constructor.

5. Why do we need super() in an extended class?
   - to bind 'this' of the extended class to its parent's properties.
