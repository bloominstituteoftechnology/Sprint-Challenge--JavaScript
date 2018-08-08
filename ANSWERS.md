# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.
2. What is the difference between a function and a method?
3. What is closure?
4. Describe the four rules of the 'this' keyword.
5. Why do we need super() in an extended class?

## Describe the biggest difference between `.forEach` & `.map`.

> `forEach` doesn't return anything while `map` returns an array

## What is the difference between a function and a method?

> A function is outside an object while a method is inside or a property of an object

## What is closure?

> In summary, its access to a variable even after it's invoking function has been removed off the execution stack.
Specifically, let's say you have a function that defines a variable ` let c = 3`. This function and this variable both
exist on the execution stack. Once this function completes, the function is removed, however the variable will remain allowing other functions to access it's value (if needed)

## Describe the four rules of the `this` keyword.

**window -binding**

> Allows the `this` to bind to the window object, giving it context

**new - binding**

> When using the `new` keyword, the `this` is bound to the base class

**implicit -binding**

> If an object's method needs access to it's properties, we can use the `this` keyword to reference those properties.
The context of this can be determined by what is 'left of the dot'

**explicit -binding**

> Let's say we have an object and a function. If we want to treat that function as a method (meaning give it access to the
object's properites), we can bind the function to the object in three ways, specically, `call(), apply() and bind()`. Each one has it's own uses.

## Why do we need `super()` in an extended class?

> The `super()` keyword allows an object to inherit properties and methods from a parent class.
