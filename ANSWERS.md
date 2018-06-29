# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
* `.forEach` is essentially a `for` loop, performing a function on array elements and returning them based on the function. `.map` creates a new array that has transformed values from the original array passed in.
2. What is the difference between a function and a method?
* A function is a grouping of logic that performs logic in a block. A method is a function inside an object specifically.
3. What is closure?
* Closure is the lexical scope around a function at the time it was invoked.
4. Describe the four rules of the 'this' keyword.
* Global/window - when `this` is called on a variable in the global scope, it points to the window global object.
* Implicit - When `this` is in an object's method and the method is called in an `object.method()` context, this refers to the object.
* Explicit - When `.call`, `.apply`, or `.bind` are used to bind the `this` keyword.
* New keyword - When creating an object from a class or prototype.
5. Why do we need super() in an extended class?
* `super()` is how the extended class passes attributes to the parent class and to access and call functions on the parent.
