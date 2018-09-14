Comprehension Questions

1. Describe the biggest difference between .forEach & .map.

The biggest difference between .forEach() and .map() is that .forEach() loops through each element in the array and executes a provided function while .map() creates/returns a new array with the results from a provided function.

2. What is the difference between a function and a method?

A function is a firts-class object that can have properties and methods, values can be passed to it, and it will return a value. A method is a function that's defined as a property of an object.

3.What is closure?

Closures are functions that refer to free variables(variables that are neither locally declared nor passed as parameter).

4. Describe the 4 rules of the 'this' keyword.

    Principle 1. Window/Global: When in the global scope, the value of 'this' will be the window/console object.
    Principle 2. Implicit Binding: Whenever a function is called by a preceding dot, th obj before the dot is 'this'.
    Principle 3. Explicit Binding: When using .call(), .apply(), or .bind().
    Principle 4. New Binding: Whenever a constructor function is used, 'this' refers to the specific instance of the object that is created and returned by the constructor function.

5. Why do we need super() in an extended class?

Using super() in a child element allows us to access and call functions/methods on an object's parent.