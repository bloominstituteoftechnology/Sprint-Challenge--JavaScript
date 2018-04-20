# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.

    `.forEach` does not return anything while `.map ` creates and returns a new array.

2. What is the difference between a function and a method?

    A function is a resuable collection of code statements that can be invoked repeatedly. A method is a function that is attached to an object.

3. What is closure?

    Closure is a function's ability to look outside it's own scope and access any variables that may exist there.

4. Describe the four rules of the 'this' keyword.

    1. Window binding which is the default binding for `this`. If not told otherwise, `this` will point to the window object.

    2. Implicit binding, the most common use case for `this` which occurs when a function is invoked with dot notation. When using dot notation, `this` is pointed to the object to the left. In the example below, `this` points to `myObj`.
    
    3. Explicit binding occurs when you force `this` to be pointed at a specific object using `call`, `bind`, or `apply`.

    4. New binding occurs when an object is created with the `new` keyword. In that case `this` points to the object that `new` created.
    

5. Why do we need super() in an extended class?

    If creating a class that is an extension of another, `super` brings in the attributes from the parent class.
