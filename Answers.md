Describe the biggest difference between .forEach & .map.

    .forEach() iterates through each item in an array and mutates it permanantly while .map() iterates through and creates a new array all together.
What is the difference between a function and a method?

    A function exists on a global scale while a method only exists within an object.
What is closure?

    A closure is a variable that is passed down inside of a function.
Describe the four rules of the 'this' keyword.

    Window Binding: when in the global scope, the value of `this` will be the window Object.
    Implicit Binding: Whenver a function is called by a preceding dot, the object before that dot is `this`
    New Binding: Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
    Explicit Binding: Whenever JavaScript's call or apply method is used, this is explicitly defined.
Why do we need super() in an extended class?

    So that the parameters of that class are still being used and not just the parent objects.
