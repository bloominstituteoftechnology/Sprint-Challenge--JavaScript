1. Describe the biggest difference between `.forEach` & `.map`.
2. What is the difference between a function and a method?
3. What is closure?
4. Describe the four rules of the 'this' keyword.
5. Why do we need super() in an extended class?


1. .map returns an array. .forEach is basically just a for loop that iterates the length of the array

2. A function is seperate from an object/array. Methods are always associated with an object

3. A closure is what holds the parent function's scope inside of a nested function within it

4.  Window - if this is called in global scope, 'this' will refer to the window object. 
    Implicit - if this is called after a '.', 'this' refers to what is left of the '.' 
    Explicit - 'this' is defined when 'call' or 'apply' is used.
    New - when a constructor is called, this refers to the object that is created by the constructor

5. To call the parent constructor