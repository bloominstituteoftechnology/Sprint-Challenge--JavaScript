1. The map function creates a new array with the results of calling a function on every item of the array. forEach does not create a new array.

2. A method is part of an object. A function is not.

3. A closure is an inner function having access to an outer (enclosing) function and global variables.

4. - 1. Window/Global object binding - the value of "this" is the window object. this === window, this.var === window.var === var when on the global scope or outside of any function.
   - 2. Implicit binding - When a function is called as a method to an object "this" is set to the object the method is called on.
   - 3. New binding - When used in a constructor function "this" refers to the specific instance of the object that is created and returned by the instructor
   - 4. Explicit binding - Passes the context of "this" from one to another using call, apply, or bind

5. extend is used to make a class a child class of a parent class. Super - gives the child class access to the parents methods.
