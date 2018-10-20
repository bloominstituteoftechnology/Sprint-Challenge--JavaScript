# Answers

1; Describe the biggest difference between `.forEach` & `.map`.

The biggest difference would be that `.foreach` does not have a return type and `.map` will return an array.

2; What is the difference between a function and a method?

A method is inside an object and is passed the object that called it.

3; What is closure?

A closure is an inner function that can access the outer functions variables. This includes the global variables.

4; Describe the four rules of the 'this' keyword.

- Explicit: Using `call`, `apply` and `bind`. Directly setting the `this` context.
- Implicit: obeject to the left of the . operator where function invoked
- New: use of `new` keyword along with constructor functions. The `this` context is derived at creation.
- Default: Binding is bound to the global scope

5; Why do we need super() in an extended class?

It sets up the inheritance to the parent function