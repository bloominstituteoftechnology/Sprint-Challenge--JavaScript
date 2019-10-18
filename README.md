Describe the biggest difference between .forEach & .map.
.forEach doesn’t actually return anything. It just calls the function for each array element and then it’s done. So whatever you return within that called function is simply discarded. .map will similarly call the function for each array element but instead of discarding its return value, it will capture it and build a new array of those return values. This means that you could use map wherever you are using forEach but you still shouldn’t do that so you don’t collect the return values without any purpose. It’s just more efficient to not collect them if you don’t need them.

What is the difference between a function and a method?
In javascript every function is an object. An object is a collection of key:value pairs. If a value is a primitive (integer, string, boolean), or another object, the value is considered a property. If a value is a function, it is called a 'method'.

What is closure?
A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables — a scope chain. The closure has three scope chains: it has access to its own scope — variables defined between its curly brackets. it has access to the outer function's variables. While methods ARE functions, methods are defined inside objects, while functions can be created on the global scope.

Describe the four rules of the 'this' keyword.
The value of this differs depending on how a function is invoked Window/Global Object Binding: When in the global scope, the value of “this” will be the window/console Object; Implicit Binding: this points to the object on which the function is called (what’s to the left of the period when the function is called). Explicit Binding: We can explicitly tell the JavaScript engine to set this to point to a certain value using call, apply or bind. New Binding: Using the new keyword constructs a new object, and this points it.

Why do we need super() in an extended class?
The extends keyword, and super(); function make it so trivial to bind our classes together to achieve some simple object inheritance. The extends keyword will abstract away any of the Class.call syntax that we’re used to. super() is used to tell a parent’s constructor to be concerned with the child’s attributes vis versa and abstracts away the Object.create(this, Class) syntax.