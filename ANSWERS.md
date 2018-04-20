# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.  

>**.forEach**: The forEach method is great for iterating through an array and grabbing each index so that we may do something with the data

>**.map**: Like `.forEach`, this method is also great for iterating through an array to do something with the data but unlike `.forEach`, `.map` will return a new array without mutating the original array.

2. What is the difference between a function and a method?  

>The difference between a function and a method is that a function is created on its own, not attached to any particular data type while a method is attached to a data type, objects, and can be called and chained onto other methods. Methods are also created inside of a class, whether through classical pseudo-inheritance or ES6 the ES6 `class` keyword.

3. What is closure?
>A closure is a function that has access to information outside of its lexical scoping. Although a closure is typically defined as a function within a function, not to be confused with a callback, this is not necessarily true but does serve as a great starting point to understand closures.

4. Describe the four rules of the 'this' keyword.
> **window/global binding**: `this` references the `window` object

> **Implicit Binding**: When creating an object literal the `this` keyword will reference the object.

> **Explicit Binding**: When we call a function and reference want to reference an object we can use `.call, .apply, or .bind` and pass these methods a reference to what `this` should point to.

> **New Binding**: New binding is when we create a class and instantiate an object, the `this` will now refer to that newly instantiated object. This can be applied to each new object created, each one having its own reference to `this`, the object.

5. Why do we need super() in an extended class?
> The `super` function is there to call the parents class `constructor` function. Without `super` there is no inheritance.
