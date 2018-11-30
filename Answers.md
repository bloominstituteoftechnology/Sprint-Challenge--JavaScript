// forEach does a function for each array element...map creates a totally new function with results from a function on every element in the calling array.

// Funcitons are defined outside of a class and are independent of an object while methods are defined inside and on an object.  

// It's an inside function that has access to an outside function's variables

1. Window Binding - Points to the global/window scope if strict mode isn't used or a specific object isn't defined. (forest and tree example)
2. Implicit Binding - Whenever a function is called by a preceding dot, the object before that dot is this.
3. New - Whenever a constructor function is made/used, this refers to the specific instance of the object that is created and returned by the constructor function. (example Humanoid class then more huamnoids made like wizard or swordsman)
4. Explicit Binding - Whenever call or apply is used it defines this specifically

// We need super() to access an call functions from the object's parent
