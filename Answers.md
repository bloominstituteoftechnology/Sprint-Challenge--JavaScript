**Describe the biggest difference between .forEach & .map.**

The biggest difference between `.forEach` and `.map` is that `.forEach` operates on the original array whereas `.map` collects all of the items into a new array before transformation, essentially cloning the original array before transforming it.

In more theoretical terms, `.map` is considered more efficient in functional programming as it creates a new data set when a transformation is performed making it state-independent. `.forEach` operates on the original array during a transformation, which means it is state dependent, which in functional programming can make debugging more tedious.

**What is the difference between a function and a method?**
A function is a block of code that is called by its name, can be passed data to operate on, and can return data when its objectives are complete. All data passed into a function is explicitly passed (e.g. `functionName(data)`).

A method is a block of code that is associated with an object, and is functionally similar to a function in that it receives an input and gives an output. The major difference is that a method is implicitly passed the object on which it was called (e.g. `objectName.method()`). Methods can also be passed data explicitly, but the major difference is that methods have object association and are therefore dependent on the object instance and its architecture, whereas functions can be called independently, i.e. on their own.

**What is closure?**
The textbook definition is thus: "A closure is the combination of a function and the lexical environment within which that function was declared." -MDN web docs

What does this actually mean? Well, closure is essentially the management of scope within function execution, specifically with regards to nested functions and what data they are able to access during runtime. Closure specifically refers to when an inner function is made accessible outside of the function within which it is contained, so that it may be executed after the outer function has returned, giving it access to all of the local variables, parameters, and function declarations within the outer function.

All functions by default have access to global scope and the scope of any function(s) they are contained within, i.e. the scope 'above' them. By using closures in JavaScript, we can protect the data within a function from other functions, essentially giving 'protected' or 'private' scope to the data therein. Closures preserve the inner function and the references of the outer function, allowing for greater scope specificity which reduces conflict and bugs.

**Describe the four rules of the 'this' keyword.**
Implicit Binding - the binding of the function's `this` scope follows implied order, e.g. `person.speak()` will reference the 'person' object when using `this` if 'person' has the speak method defined. Most of the time, `this` will function with implicit binding.

Explicit Binding - the binding of a function's `this` scope by explicitly declaring its reference. We can use .`call`, .`bind`, and .`apply` methods to give scope binding to anonymous functions.

new Binding - when using `new` to create a new instance of an object via constructor, `this` will bind to the new object instance that is created. 

window Binding - if no other method of `this` binding is used, `this` will by default reference the `window` object, which is essentially global scope in browser environments. We can declare `window` variables that will be accessible by any `this` that is not otherwise bound.

**Why do we need super() in an extended class?**

`super()` in an extended class allows us to reference the properties of the extended (i.e. parent) object by using `this`. Without super(), `this` will be restricted solely to the local scope of the child object. When creating class hierarchies, `super()` allows `this` to chain 'up the line' of the hierarchy and reference all inhereted properties.
