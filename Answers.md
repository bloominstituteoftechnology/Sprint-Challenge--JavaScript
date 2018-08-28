1. Describe the biggest difference between .forEach & .map.

    The biggest difference is that .forEach doesn't return anything and .map does.

2. What is the difference between a function and a method?

    The differene is that when a function is a property of an object it becomes a method.

3. What is closure?

    Closure is the scope inside a function.
    The global scope doesnt have access to variables that were defined and not returned out of a functions scope but the variables defined in the closure can reach out and access variables declared outside of its closure.

4. Describe the four rules of the 'this' keyword.

    The four rules of this are Implicit binding, Window binding, New binding and Explicit binding.
    Implicit binding is binding that occurs during dot notation. Window binding is
    When 'this' is used without context it binds to the window object
    New Binding is when New binding occurs when creating an object from a constructor.
    Explicit Binding is when you Explicitly give binding to an object using .call().

5. Why do we need super() in an extended class?

    Super passes in the parameter to the parent class and binds the this to the current constructor.