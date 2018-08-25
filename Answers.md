Describe the biggest difference between .forEach & .map.
    - .forEach takes a function and run it for each array element
    - .map creates a new array with the result of calling a functino on every element in the existing array

What is the difference between a function and a method?
    A method is associated with an object, while a functino isn't necessarily.

What is closure?
    functions having access to variables outside of the function

Describe the four rules of the 'this' keyword.
    1. Window Binding means that the Object "this" represents is the window itself
    2. Implicit Binding: when calling a function, the left to the dot "." is the value of "this"
    3. New Binding: use the "new" keyword to invoke the function to a new object
    4. Explicit Binding: Using .call or .apply to pass a "this" value to a function

Why do we need super() in an extended class?
    to pass the argument for the object inherited from
