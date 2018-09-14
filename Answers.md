1.  Describe the biggest difference between `.forEach` & `.map`.

        While they both can perform an operation on every object in an array, `.forEach` doesn't return anything while `.map` always returns a new array.

2.  What is the difference between a function and a method?

        The only difference between the two is the scope in which they exist. A method is a function that is part of an object.

3.  What is closure?

        "Closure" refers to the persistance data available to a functions methods after the original function has been executed.

4.  Describe the four rules of the 'this' keyword.

        - Global/Window binding - `this` is bound to the global scope.
        - Implicit binding - `this` is bound to the object calling it.
        - Explicit binding - `this` is directed to be bound to specific objects through an external function
        - New binding - `this` is used during a constructor function to bind data to a new object

5.  Why do we need super() in an extended class?

        `super()` connects a child to its parent's data and methods.
