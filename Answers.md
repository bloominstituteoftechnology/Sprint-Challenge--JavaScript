1. Describe the biggest difference between .forEach & .map.
    .forEach executes its callback function for every item in the array, mutating the original array but not inherently returning anything. Meanwhile, .map similarly iterates over every item in an array, but instead of replacing the orginal elements with the result of each element being passed into the callback function, it returns a new array with these resultant values. Put simply, .forEach mutates the orginal array, while .map creates a new array.

2. What is the difference between a function and a method?
    A method is a type of function that belongs to an object. For example,
    function itsAFunction() {
        return 'this is a function';
    }

    const anObj {
        'key': 'value',
        method: function() {
            return 'this is a method';
        }
    }

3. What is closure?
    Closures are a construct of scope, which consist of a function and the lexical environment in which it was declared. Closures are an important feature of isolating functions and their information, while allowing a one-way flow of information from outer functions to inner functions. Nested functions can access information, such as variables, from outer functions, but outer functions cannot similarly peer into inner functions. By design, closures also help us protect our functions from global scoping.

4. Describe the four rules of the 'this' keyword.
    Window binding: when 'this' binds to the Window object of the global scope when it lacks a local object to bind.
    Implicit binding: when 'this' is used within a local context, it binds to the object directly to its left.
    New binding: when 'this' binds to new instances of an object that are created using 'new'
    Explicit binding: when 'this' is directed to bind an object by manually using .call, .apply., or .bind

5. Why do we need super() in an extended class?
    super() indicates that an extended class should include .call() to bind the 'this' keyword to its own attributes (rather than the parents).
