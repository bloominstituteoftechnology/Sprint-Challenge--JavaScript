1. .forEach will allow a callback function to mutate the current array.
    .map returns a new array.

2. They are both functions except a method is a function inside of an object when invoked.

3. Closure gives you access to an outer function's scope from an inner function. The inner function will have access to the variables in the outer function scope even after the outer function has returned.

4.  Rule 1: Global Object Binding: the value of 'this' will be the window.
    Rule 2: Implicit Binding: the object before the dot in a function
    Rule 3: Explicit Binding: when call or apply is used
    Rule 4: New Binding: when the constructor function is used. 'this' will refer to the specific instance of the object

5. super() allows access to the 'this' items in the extended class.
