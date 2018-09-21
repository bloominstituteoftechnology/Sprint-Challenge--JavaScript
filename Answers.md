1. Describe the biggest difference between `.forEach` & `.map`.

The biggest difference between .forEach and .map is that map returns a new array of elements while in turn passing each element back to the callback.

2. What is the difference between a function and a method?
a method is a function written for an object
3. What is closure?

It's a function inside another function that can call the parameters of the outer function
4. Describe the four rules of the 'this' keyword.
Global object
/implict/explicit/new binding

global object-When in the global scope, the value of “this” will be the window/console Object;
implicit binding-Whenever a function is called by a preceding dot, the object before that dot is this.
explicit binding-Whenever JavaScript’s call or apply method is used, this is explicitly defined.
new binding-Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
5. Why do we need super() in an extended class?
To pass any new attributes back up to the constructor of the parent object.
