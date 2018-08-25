
1. Describe the biggest difference between `.forEach` & `.map`.

.forEach() runs a function per item in the array without changing the array or making a new one.
.map() affects each index of the array and makes a new array in return.

2. What is the difference between a function and a method?

A function if called in global scope, can be called anywhere. A method is unique to the object itself.

3. What is closure?

Closure has three scope chains, it has its own scope variables defined between {}, also has access to the outer function's variables, and it has access to global.

4. Describe the four rules of the 'this' keyword.

New binding - Uses the new keyword to create a variable which uses the context of the class it is derived from.

Explicit binding - Anytime you use .apply() or .call() / .bind()

Implicit binding - When you reference the object property to the left while calling.

Window binding - Anything related to the window itself, Global is basically the same but in CLI form.

5. Why do we need super() in an extended class?

super() passes any new attributes back up to the constructor of the parent object.