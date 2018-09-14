1. Describe the biggest difference between `.forEach` & `.map`.
    .map returns an array while .forEach modifies the original array
2. What is the difference between a function and a method?
    a function calls for an action and a method does so within a class
3. What is closure?
    the scope within a function
4. Describe the four rules of the 'this' keyword.
    1) window binding: if theres nothing else, 'this' will bind to the window object (if present)
    2) global binding: 'this' can bind to globally set variables
    3) implicit binding: in a constant, 'this' can bind to the parameter of a variable
    4) explicit binding: can reference functions, such as with the .call() and .apply() methods
5. Why do we need super() in an extended class?
    the super() method makes sure that the information that we're inputting is from the current constructor function.