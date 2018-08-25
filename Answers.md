1 - .forEach does not return anything whereas .map returns a new array. 

2 - Functions are defined and can be called outside of classes whereas methods are defined inside of classes and can only be called along with the     classes they are tied to.

3 - Closure is being able to access a variable within a functions scope from within another function that is also within the original functions        scope.

4 - Window - When 'this' does not have any context and therefore binds to the window.
    Implicit - When 'this' is used directly inside of an object and binds directly to the object. 3. 
    New - When 'this' is used inside a class constructor, it can bind to any object outside using dot notation as long as it is of the same class. Explicit - When 'this' is used it binds to a function. .call and .apply both call the function, .bind returns a new one.

5 - We need super() in an extended class to be able to call the parent constuctor.
