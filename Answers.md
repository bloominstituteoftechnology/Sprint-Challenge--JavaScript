1. Describe the biggest difference between `.forEach` & `.map`.

Answer:
ForEach executes a function once per array item, but does not make a copy of the original.
.Map returns a copy of the array, allowing you to add things or change the original.

2. What is the difference between a function and a method?

Answer:
A function is a set of statements that perform a task that can be stored within it's own local scope.

Methods are actions that can be performed on objects. In Javascript, a method is a property containing a function definition.


3. What is closure?

Answer:
Closure is the process that allows data to be stored behind the scenes so that it can be read outside it's immediate block scope, but nested within the larger local scope.

4. Describe the four rules of the 'this' keyword.

Answer:
Window binding
Window binding binds the 'this' keyword to the Window.

Implicit binding
Implicit binding binds the 'this' keyword to the object that is called left of the dot that comes before that 'this'.

Explicit binding
Uses the methods .call, .apply or .bind to explicitly bind the 'this' keyword to an object.

new Keyword Binding
Whenever a constructor function is created, 'new' keyword binding binds 'this' to refer to the specific instance that is created and returned by the constructor function.

5. Why do we need super() in an extended class?

Answer:
It allows us to use the methods of the parent class(es). (it is the a quicker(syntactically sugary) way of using the .call method)

