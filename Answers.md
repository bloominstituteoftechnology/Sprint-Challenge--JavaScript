The biggest difference in .forEach and .map is that .map creates a new array and does not alter the original array. 
The difference between a function and a method lies in that a method is a function that is inside of an object or class constructor, whereas a regualar function can be a standalone run of the mill function.
Closure is lexical scoping where child functions have access to parent variables all the way up if need be, even up to global variables, but not the other way.  
Rule 1 Window Binding - When in the global scope, the value of 'this' will be the window/console object.
Rule 2 Implicit Binding - Whenever a function is called by a preceding dot, the object before that dot is this.
Rule 3 New Binding - Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
Rule 4 Explicit Binding - Whenever JavaScript’s call or apply method is used, this is explicitly defined.
Super() needs to be called in an extended class to pass any new attributes back up to the constructor of the parent object.