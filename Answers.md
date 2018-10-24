#### Describe the biggest difference3 between `.forEach` and `.map`.

The forEach method doesn't return anything, it just calls a function on each item in an array and is mutating the original array. The map method also calls a function on each item in an array but the map method returns a new array.

#### What is the difference between a function and a method?

A method is a function that is the property of an object.

#### What is closure?

Closure refers to a function and it's surrounding environment - specifically the variables outside the function that the function can access.

#### Describe the four rules of the 'this' keyword.

- **New Binding** - If the `new` keyword is used when calling the function, `this` is a brand new object.
- **Explicit Binding** - If `apply`, `call`, or `bind` are used to call the function `this` is the object that is passed in as the argument.
- **Implicit Binding** - If the function is called as a method `this` is the object of which the function is a property.
- **Window Binding** - If the function is called without any of the 3 previous conditions it is a free function invocation and `this` is the global object.

#### Why do we need `super()` in an extended class?

Super binds `this` to the new extended class.
