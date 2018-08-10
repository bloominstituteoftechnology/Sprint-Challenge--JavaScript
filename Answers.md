
# Describe the biggest difference between `.forEach` & `.map`.

    .forEach runs an operation on each item in an array but doesn't return anything.  .map runs an operation on each item in an array and returns the transformed items into a new array.

## What is the difference between a function and a method?

    A method is a function that specifically belongs to an object.  It can only be used by objects of the class in which it was defined.  Functions are defined outside of classes and can be used by any object.

### What is closure?
    A function within a function that can access the variables of an outer function. 


#### Describe the four rules of the 'this' keyword.
    1. Window Binding - the 'this' keyword will by default refer to the window the code is written in unless otherwise specified. 

    2. Implicit Binding - when the 'this' keyword is bound to an object that tells the program to refer to that object and not the window.

    3. New Binding - when a new object is created from a class the 'this' keyword binds all the properties and methods in the class to the new object.

    4. Explicit Binding - when the .call or .apply methods are used 'this' is explicitly defined.



##### Why do we need super() in an extended class?
    It allows us to access the 'this' keyword in an object.


