# Answers

1. The biggest different between the `forEach()` method and the `map()` method is that the `forEach()` method does not return anything by default; whereas `map()` will return a new array without modifying the original array.  The new array contains the new values after each iteration of `map()` is complete.

2. Functions and methods in JavaScript, and in programming languages in general, for the most part are similar except for two key differences.  The first difference is that functions can be called independently, whereas a method is called upon an object in which it originates from.  The second difference is able to operate data that originates from a class, which an object was instantiated from.  Functions, however, operate at a more broad scope and can accept parameters that do not have to be class/object specific.

3. Closure has a pretty complex definition discussing the availability of data to a function considering its surrounding "lexical enviroment" in which it operates.  Essentially, closure is a manifestion and an appilcation of scope and essentially determines the availability of variables that are declared in one scope with respect to the remaining scopes.  Closure essentially leads to the inner most scopes being able to be "seen" by outer scopes as the JavaScript compiler works inside out when it searches for variables that have been defined but not declared, and moves to the top of the scope in which it was declared; however, with the ES6 additions of `let` and `const` essentially it works this way:  a global variable is available everywhere, a function-scoped variable is available to the function, and a block-scoped variable is available to the block.

4. *Global - `this` points back to the Window object for globally declared functions, objects, etc.
    *Implicit - `this` points back to the object in which is referenced to the left of the `.property` or `.method()` call on the object.  
    *New - when a new object is instantiated from a constructor function, `this` points to the specific object instance which was created
    *Explicit - `this` is developer selected and explicited defined such as in the use of the .call() or .apply() methods during function invocation. 

5. Essentially, `super()` allows the properties and methods of the base class or the class that the subclass is being extended from to be accessed by the subclass.  