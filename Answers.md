Q1. Describe the biggest difference between .forEach & .map.
    .forEach - loops through items in an array/object and executes a provided callback function once for each array element.
    .map - creates a new array with the results of calling a provided function on every element in the calling array.

Q2. What is the difference between a function and a method?
    A method a function that is contained within or a representitive of an object
    A function can be it's own scope within the global scope.

Q3. What is closure?
    Closure allows us to call a variable with higher order functions that have been not been passed through those functions as parameters/arguments. These variables can be found through lexical scopes or global scopes.

Q4. Describe the four rules of the 'this' keyword.
    1 - Default Binding -> used to call the nearest window 'this' is contained within.
    2 - Implicit Binding -> Used to access the object's properties within the nearest dot notation.
    3 - New Binding -> When a new object is created (e.g.: new Object()) and instantiated into a variable, this is refering to the new object that was created and can be used to access the properties of what was newly instantiated into the object variable.
    4 - Explicite Binding -> Allows us to use `this` within a function that is not inside the object scope, but can access the object by using the call(), apply(), and bind() functions.

Q5. Why do we need super() in an extended class?
    Super() is an accessor to allow the current object to utilize the properties(variables/methods) of the extended object. Extend allows us to see what super needs to access.