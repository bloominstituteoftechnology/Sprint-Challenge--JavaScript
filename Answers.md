
// Difference between map and forEach

1. Both of these are built in array functions that run a callback through each item of an array. The difference between these two functions is that Map produces an array while forEach does not. 

// Difference beteween function and method

2. Function and array are both functions that return a result or instantiates a side effect. Methods are functions that are written inside of objects or their prototype, while functions are everywhere else/

// What is closure?

3. When closures are brought up, there are two things that come to mind. Lexical scope and functions within functions. A function within a function gives the developer the ability to assign the function value with a parameter and add another parameter variable to access the returning function.

// Four rules of 'this'

4. Implicit binding, Explicit binding, New binding, Window Binding. Implicit binding simply means that the object left of the this or the object containing this will be what this is referring to. Explicit binding Implicit binding uses .call or .apply to force functions to bind to a specific objects. The New binding is used when we are creating a new object from a constructor. We bind the this from the constructur or class to the object created while using New. Window binding is when the this does not refer to any particuluar object. Without this pointer, the this automatically points at the global object, window.

// Why super() in  entended class?

5. Using super() gives the extended class or constructor access to functions of the object's parents. 