1. Describe the biggest difference between `.forEach` & `.map`.
* The difference between `.forEach` and `.map` is that `map` returns a new array of elements while in turn passing each element back to the callback. `.forEach` doesn't return us anything like `.map` does. `.forEach` iterates over a list of data and in turn passes back an item and index to us for use.

2. What is the difference between a function and a method?
* A **function** is a piece of code that is called by name. It can be passed data to operate on (parameters) and can optionally return data (the return value). All data that is passed to a function is explicitly passed.
* A **method** is a piece of code that is called by a name that is associated with an object. In most regards, it is identical to a **function** except for that a **method** is implicitly passed the object on which it was called, and a **method** is able to operate on data that is contained within the class.

3. What is closure?
* **Closure** is when an inner function has access to the outer "parent" function's variables. The *Scope Train*.
* The **closure** has three scope chains-
  * It has access to it's own scope (variables defined by it's curly brackets).
  * It has access to the outer function's variables.
  * It has access to the global variables.

4. Describe the four rules of the 'this' keyword.
* The four rules of the `this` keyword:
  1. Window/Global Object Binding: When in the global scope, the value of "this" will be the window/console Object.
  2. Implicit Binding: Whenever a function is called by a preceding dot, the object before that dot is `this`.
  3. New Binding: Whenever a constructor function is used, `this` refers to the specific instance of the object that is created and returned by the constructor function.
  4. Explicit Binding: Whenever JavaScript's call or apply method is used, `this` is explicitly defined.

5. Why do we need super() in an extended class?
* If you're going to use extends, `super()` needs to be called from within the constructor function. This is to pass any new attributes back up to the constructor of the parent object.
