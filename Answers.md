1. Describe the biggest difference between `.forEach` & `.map`.
Both iterate through the arrays (and you can do whatever you want with each item),
but .forEach returns nothing and .map returns a new shallow copy array with the
changes.


2. What is the difference between a function and a method?
A method is a function tied to a specific object.


3. What is closure?
A function inside  a function that has access to not only its own variables,
but its enclosing function's variables (and the global scope's variables as well)


4. Describe the four rules of the 'this' keyword.
Explicit Binding - binding by using call, apply, or bind.
function.call(object)

Implicit Binding - binding 'this' in the function to the object it's referring to,
which is shown by placin the object left of the function separated by a dot.
object.function()

Window Binding - binding to the global scope, making the variable available
to every function.
window.variable = value

New Binding - binding by using a constructor function to crate a new object.
var object1 = new Constructor()

5. Why do we need super() in an extended class?
To get access to the parent's class 'this' bindings. Extend only binds the methods.
