
1. The biggest difference between forEach and map is that map creates a totally new array. forEach will just loop over the entire array, and execute something on the items. While map will execute something on all of the items, and create a new array with the results


2. The difference between a function and a method is just that methods are functions that are member’s of an object or class.


3. Closures simply put are when the code inside a function has access to code outside of it that’s part of a bigger scope. Functions look outward for context,so if it can’t find a variable in the function’s scope, it will look outside the scope chain to try to find the variable being referenced.


4. -Window/Global Object Binding: If the this doesn't have any explicit thing it's referring to, it will point towards the window.
-Implicit Binding: The this will be relative to the function that it is being called on.
-New Binding: when the this is pointing towards the object that was created by the constructor function.
-Explicit Binding: When a method is used to explicitly bind this.

5. super() is what gives us the ability to properly use the “this” keyword in classes. It tells the constructor explicitly what “this” is pointing towards.