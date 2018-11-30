1. .forEach mutates the array it's called on, .map returns a new array, applying the callback function to each element.

2. A method is a function that 'belongs to something'. So a method is called with Object.method, and if it is part of a class or constructor function, it can be inherited.

3. Closure is a type of scope. If the compiler can't find a variable it's looking for on the local scope it "looks up" to the scope above it.  The way JS passes variables down through scope is called closure.

4. Window: this points to the window when used in the global scope.
   Implicit: this references the object to the left. Like when invoking a method that contains 'this',      this points to the object it's referenced in.
   New: When using a constructor this refers to the object instance
   Explicit: call, apply and bind. Methods used to explicitly point this

5. super() replaces the .call method. It gives us access to the this keyword and passes arguments to the parent class.
