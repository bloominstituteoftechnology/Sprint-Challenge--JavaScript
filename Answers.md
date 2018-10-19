1. Describe the biggest difference between .forEach & .map.
    .forEach() executes a provided function once for each array element. 
    .map() creates a new array with the results of calling a provided function on every element in the calling array.
    The biggest difference is that .map() creates a new array and .forEach() doesn't.

2. What is the difference between a function and a method?
    They are the same thing except that a method is a function which is a property of an object. 

3. What is closure?
    A closure is the combination of a function and the lexical environment within which that function was declared.

4. Describe the four rules of the 'this' keyword.
    1. Window/Global object binding. When in the global scope, "this" is the window/console Object.
    2. Implicit binding. When a function is called with a dot (.) in front of it, the object before the dot is 'this'.
    3. New binding. When a constructor function is used, 'this' refers to the specific instance of the object that is created and returned.
    4. Explicit binding. When call or apply methods are used, 'this' is explicitly defined. 

5. Why do we need super() in an extended class?
    It is used to access and call functions on an object's parent. 
    If we didn't use super(), 'this' wouldn't work in child objects.
