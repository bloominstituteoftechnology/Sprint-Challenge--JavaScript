1) Describe the biggest difference between .forEach & .map.

.forEach is allowed to mutate the original array while .map creates and returns a brand new array.

2) What is the difference between a function and a method?

A method must be called with its object while a function can be called by itself.

3) What is closure?

Closures are a feature of JAvaScript that allow global variables to become local variables, and where the inner function has access to the enclosing function's variables and parameters.

4) Describe the four rules of the 'this' keyword.

-Window Binding: using 'this' in the global scobe binds to the window.
-Implicit Binding: or automatic binding. When using dot notation, 'this' comes before the dot.
-Explicit Binding: Using .call(), .apply(), and .bind() to control your bind.
-New Binding: must use the new operater and is used to make new objects.

5) Why do we need super() in an extended class?

It is used to call a parent constructor so we can build on top of that instead of overriding the parent completely.