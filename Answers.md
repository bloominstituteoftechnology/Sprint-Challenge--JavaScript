Initial Commit

1) The .forEach method executes a given function on each item in a given array, giving an individual return value for each result. The .map function only gives a single return value, as it executes a given function for each item in an array and returns an array of all return values.

2) A function and a method are similar, expect that a method is a function which is a key of an object.

3) Closure is the concept of a function carrying additional data on its local environment (its execution context) when being called from outside that environment. So, closures allow us to access all variables that were declared in the local scope of the original function's declaration, from outside that scope.

4) Window Binding - The 'this' keyword is bound to the global Window object by default.
Implicit Binding - The 'this' keyword is bound to the object from which it was invoked from (the owner object) when invoking a method on that object results in the execution of its code.
New Binding - The 'this' keyword is bound to the object being constructed when used in an object declaration involving the 'new' keyword.
Explicit Binding - The 'this' keyword is bound to an object which is given as an argument in the call/apply/bind methods.

5) The Super() keyword allows access to the functions on an object's parent and allows use of the 'this' keyword to refer to properties on that parent.
