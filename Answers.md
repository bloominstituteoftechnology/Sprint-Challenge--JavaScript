Comprehension Questions

1. Describe the biggest difference between .forEach & .map.

    .map creates and returns a new array, .foreach returns undefined

2. What is the difference between a function and a method?

    A method is invoked by an object, a function is invoked in the windows/global object.

3. What is closure?

    Closure is when a function inside a function has access to the variables declared inside the outer function. 
    The outer function returns the inner function which when called has access to the outer function's variables

4. Describe the four rules of the 'this' keyword.

    Window Binding - When 'this' is used in the global scope
    Implicit Binding - When 'this' is used with an object not created with new
    Explicit Binding - When 'this' is used with the .call, .apply or .bind methods
    New Binding - When 'this' is used in a constructor function or class

5. Why do we need super() in an extended class?

    We use super() to pass the arguments from the child's class constructor to the parent's constructor.
