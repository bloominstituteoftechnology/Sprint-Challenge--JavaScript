1. The biggest difference between `.forEach` and `.map` is that `.map` will return a new array by default. You can make a new array using `.forEach`, but you'd have to specify that in the 
callback function you provide as a parameter.

2. A method is a function that is defined within an object and is associated with that object. All methods are functions, not all functions are methods. 

3. Closures have to do with a function's access to variables defined outside of its scope. For example, if a function is nested within another function, the parent function does not have access to variables declared within the local scope of the nested function. However, the nested function has access to variables declared in the parent function's local scope because of closure.

4. Window binding: `this` is bound to the window/console object by default. 
Implicit binding:  `this` binds to the object being referenced when invoking a method. 
New binding: `this` is bound to the instance of the object created when using the `new` keyword. 
Explicit binding: we explicitly decide what `this` is bound to when we use `.call` or `.apply`. 
