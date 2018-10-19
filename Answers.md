
1. The biggest difference is that .forEach() does not actually return anything while .map() returns a new array/value

2. A function and a method are both a block of code that can be invoked. Difference is that a function is a block on its own while a method is nested inside another block of code.

3. Closure is a type of scope. It is an inner function that has access to the outer function's variables.

4.  a. Window Binding
        - By default, this is bound to the window unless otherwise bound.
    b. Implicit Binding
        - we can implicitly bind this when we use the . to invoke a method to an object
    c. Explicit Binding
        - It is when we intentially choose to bind to an object using .call, .bind, .apply methods
    d. New Binding
        - We can bind "this" to a variable when we use the new keyword to assign the object to the variable

5.  super() allows us access to "this" within the object
