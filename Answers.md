1. Describe the biggest difference between .forEach & .map.
    forEach() return nothing,
    .map() return a new array 

2.  What is the difference between a function and a method?
    function is stand alone, we can use function without crate a objects, but Method is function inside object. we can create an object to call function.

3.  What is closure?
    Closures are function that refer to independent variable.

4.  Describe the four rules of the 'this' keyword.
    Window/Global Object Binding - When in the global scope, the value of “this” will be the window/console Object;
    Implicit Binding - Whenever a function is called by a preceding dot, the object before that dot is this.
    New binding - Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
    Explicit binding - Whenever JavaScript’s call or apply method is used, this is explicitly defined.

5.  Why do we need super() in an extended class?
    If we're going to use extends, super() needs to be called from within the constructor function. this is to pass any new attributes back up to the constructor of the parent object.

    