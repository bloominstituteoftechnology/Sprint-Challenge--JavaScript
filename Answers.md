1. The biggest difference of `forEach()` and `map()` is that `map` returns a new array that contains the transformed version of the original array, while `forEach` only iterates through each of the elements of the array that invoked `forEach`.

2. The difference between a function and a method is that a function can be invoked and reused anywhere on your program but a method can only be invoked using the object(as the caller) on where the method was created. Methods can also be invoked by the object that inherited the object that created that method.

3. Closure is a feature in JS that when a nested function uses the variables defined from its outside scope —that will be the function outside the nested function and the global scope.

4. * **Window binding** - the `this` keyword points to the global object(window object in the browser).
   * **Implicit binding** - the `this` keyword points to an object you created.
   * **Explicit binding** - the `this` keyword points to functions with the help of function methods.
   * **New binding** - the `this` keyword points to constructor functions and those constructor functions should use the `new` keyword to instantiate objects so that `this` will point to the constructor functions.

5. We need `super()` in an extended class when we want to bind the properties and methods of the base-class(or any class that the extended class wanted to inherit) to the extended class.
