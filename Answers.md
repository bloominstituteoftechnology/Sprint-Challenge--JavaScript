##### 1. Describe the biggest difference between `.forEach` & `.map`.

The biggest difference between these two array methods is that .forEach simply loops through and performs an action (and potentially alters the original array), while .map loops through, performs a task, and returns a NEW array.

##### 2. What is the difference between a function and a method?

A function can be invoked on its own by simply typing its name and using parenthases (which is where arguments would be fed, if the function requires it). Take this example: `myFunction(optionalParam);`. A method requires that one provide an object for it to be used on, like so: `myObject.myMethod(optionalParam)`. While methods ARE functions, methods are defined inside objects, while functions can be created on the global scope.

##### 3. What is closure?

Closure allows us to access the lexical scope of the previous invoked function or functions, and if there is no preceding function, then it accesses just the global scope.

##### 4. Describe the four rules of the 'this' keyword.

* Window binding: If a more specific scope is not provided, `this` will automatically bind to the window object. This usually happens when `this`is used on the global scope.
* `new` binding: When you create a new instance of an object (from a constructor function) inside a variable with the keyword `new`, `this` refers to the values of the new object.
* Implicit binding: This binding is done automatically by the compiler, and it happens when a method is used on an object. `this` refers to the object that the method is being used on (the object to the left of the period immediately preceding the method).
* Explicit binding: The binding is determined based on the argument that is fed into a few specific function methods. The function methods are `.call()` `.apply()` and `.bind()`. So when you have something like this: `myFunction.call(myArg);` `this` binds to `myArg` because you are calling `myFunction` *in the context of* `myArg`.

##### 5. Why do we need super() in an extended class?

`super()` is the command to reference all the key/value pairs over from whatever parent class is being extended. Extending a class isn't enough - that is merely giving the direction to `super()`.