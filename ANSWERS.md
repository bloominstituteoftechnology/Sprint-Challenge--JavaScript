# Your responses to the short answer questions should be laid out
1. Describe the biggest difference between `.forEach` & `.map`.

The forEach method doesn't return anything, it simply calls a provided function on each element of the array. 
The map() method will also call a provided function on every element in the array. The difference is that map() utilizes return values and actually returns a new Array of the same size.


2. What is the difference between a function and a method?

Functions are defined outside of classes while methods are functions defined within a class.


3. What is closure?
A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables


4. Describe the four rules of the 'this' keyword.

1. Window- When in the global scope the value of "this" will be the window/console Object
* 2. Implicit- Whenever a function is called by a preceding dot, the object before that dot is "this".
* 3. Explicit- whenever Javascripts call or apply method is used, "this" is explicitly defined.
* 4. New- when a constructor function is used, "this" refers to the specific instance of the object that is created and returned by the constructor function.
*


5. Why do we need super() in an extended class?
The ‘extends’ keyword is used to extend a parent object. A clue to find out if a class is a sub-class is to look for extends.
 IF you’re going to use extends, super() needs to be called from within the constructor function. This is to pass any new attributes back up to the constructor of the parent object.
