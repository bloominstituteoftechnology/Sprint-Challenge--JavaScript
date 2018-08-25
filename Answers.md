### 1. Describe the biggest difference between `.forEach` & `.map`.
 The biggest difference between `.forEach` and `.map` is that `.map` creates a new array and `.forEach` does not.
### 2. What is the difference between a function and a method?
 A method if a function that lives on an object.

### 3. What is closure?
Closure is essentially the scope that is created within a function. Code that is outside of the function scope can't access variables or functions that are enclosed in the function scope.
### 4. Describe the four rules of the 'this' keyword.
 **Implicit binding** - Creating an object and using the `this` keyword inside of it to reference values inside the same object.

 **Explicit binding** - Using the `.call`, `.apply`, or `.bind` methods to manually bind the `this` keyword to a specific context.

 **New binding** - Using the `new` keyword to create a new objext using a constructor. `this` will then refer to the new object.

 **Window/Global binding** - If there is no context given, `this` will default to the window object.

### 5. Why do we need super() in an extended class?
 `super()` is needed to give the child object access to the methods on the parent object. It is performing the step of creating a prototype for the child object that mirrors the prototype of the parent object. 
