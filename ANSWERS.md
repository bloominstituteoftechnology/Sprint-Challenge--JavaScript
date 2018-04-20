# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.

The biggest difference between forEach and map is that `.forEach` is destructive, and `.map` is not. `.map` creates and returns a new array with the desired values, `.forEach` manipulates the existing array

2. What is the difference between a function and a method?

A method is just a function that is called on an object. Functions can just be called using their name, but a method has to be called with a '.' after an object.

3. What is closure?

Closure is when a variable outside of a function's local scope can be called and used.

4. Describe the four rules of the 'this' keyword.

* window binding: by default, in global scope, this points to the window object
* implicit binding: when `this` is in a method or referring to a property, it points to the instance of the object that it is called on. i.e, whatever is left of the '.'
* explicit binding: explicitly changing what `this` points to using `call` or `apply`
* new binding: when a new object is created, `this` points to that object.

5. Why do we need super() in an extended class?

We need super to pass all of the necessary attributes 'up' into the 'parent' class and use its functionality.
