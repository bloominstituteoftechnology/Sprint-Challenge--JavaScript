1. A forEach loop returns the original array with the adjusted  values, whereas a .map function 
returns a new array with the ew values, leaving the original array unaffected.
2. When a function is used in place of a value within an object it becomes a method to that object. It is still a function but acts in accordance with it's object container.
3. Closure is when an inner (enclosed function) has access to the variables contained in it's enclosing function's scope.
4. The four rules for the 'this' property include:

    - Implicit binding - When the 'this' keyword is attached to an object that 
    it is currently nested in. When using dot notation, it is the item to the left of 'this'
    It specifies that 'this' lives in the object directly to the left of it.

    - Explicit Binding - Created when we use the keywords apply, call, or bind. Basically allows us to attach a variable, containing an object, into an external function. 'this' then refers to the values of the variable that has been passed in as the first parameter in call, apply, or bind.

    - New Binding - Used with a constructor function. Allows us to create new classes as a variable, and once passed into the function, become the reference point for the 'this' keyword.

    - Window Binding - When no implicit binding is specified, and no new or explicit bindings are created, the this keyword continues to zoom out and attaches itself to the window object, which is the container for all of the Javascript we code. 
5. 
