1. Describe the biggest difference between `.forEach` & `.map`.

forEach repeats a set of task for each item in the given array and returns nothing without specific instructions console.log() or return statement. It also mutates the original array.

map also iterates over each item in the given array, but by default returns whatever you're looking for into a new array



2. What is the difference between a function and a method?
  functions are named blocks of code (objects) that need to be invoked.

A method is also a named block of code but it's associated with an object. In most respects it is identical to a function except for two key differences:

A method is implicitly passed the object on which it was called.
A method is able to operate on data that is contained within the class (remembering that an object is an




3. What is closure?

A closure is an inner function that has access to the outer function's scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables.




1. Describe the four rules of the 'this' keyword.

Whenever a function has global scope, this keyword binds to the window object.

Whenever a function is called by a preceding dot, whatever is to the left of that dot is this. (implicit binding)

Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.


Whenever JavaScript’s call or apply method is used, this is explicitly defined.





2. Why do we need super() in an extended class?

because it replaces the .call function and allows us access to the original props of the parent class
