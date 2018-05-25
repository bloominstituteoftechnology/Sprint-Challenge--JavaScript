# Your responses to the short answer questions should be laid out here using Mark Down.

1.  Describe the biggest difference between `.forEach` & `.map`.

    * `.forEach` iterates over the array and potentially does something to each item
    * `.map` iterates over the array and potentially does something to each item, but also **returns** a new array with the transformed items

2.  What is the difference between a function and a method?

    * Methods are functions declared in objects

3.  What is closure?

    * an nested function has access to its parent's scope & lexical environment

4.  Describe the four rules of the 'this' keyword.

    * window - if not otherwise specified, `this` defaults to the window (global)
    * implicit - `this` gets its context from the obj to the left of the `.`
    * explicit - `this` is set by `call`/`apply` or `bind`
      * `call` and `apply` immediately invoke the function call
        * `call` takes the context and parameters
        * `apply` takes the context and an array (which is iterated through)
      * `bind` returns a function to be invoked later
        * `bind` takes the context and parameters

5.  Why do we need super() in an extended class?
    * `super()` is syntactic sugar (short hand) for linking the child object to the parent object via `Parent.call(this)` in the child constructor and `Child.prototype = Object.Create(Parent.prototype); Child.prototype.constructor = Child;` immediately after declaration
