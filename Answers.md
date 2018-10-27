1. forEach is like a for loop; it is a method that calls a function once for each element in an array. The map method works similarly to forEach as it also calls a function, but instead creates a new array from the results of the called function.

2. A function is code that is called by name and a method is a function that is associated with an object. Methods are functions but not all functions are methods.

3. Closure is all about a function's scope. It means a function having accesss to the parent scope, even after the parent function has closed. 

4. The four principles of `this` are: 
  1. Window or global binding: when in the global scope, `this` will be the window object
  2. Implicit binding: `this` is pointing to whatver is to the left of the dot.
  3. New binding: When a constructor is used, `this` will refer to the object that was created.
  4. Explicit binding: When using the `call` or `apply` method, `this` is explicitly defined.

5. `super()` is what allows us to link any new attributes of the current object up to the parent object.