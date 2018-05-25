# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.

    >`.map` returns a new array of elements while in turn passing each element back to the callback.

2. What is the difference between a function and a method?

    >A method is a function that is a property of an object.

3. What is closure?

    >Closures are functions that refer to independent variables.

4. Describe the four rules of the 'this' keyword.

    >1. **Window Binding** - In the global scope, "this" points to the window/console object.
    >2. **Implicit Binding** - When a function is invoked, "this" points to the preceding object.
    >3. **New Binding** - When a constructor function is invoked, "this" points to the specific instance of the object that is created and returned by the constructor function.
    >4. **Explicit Binding** - When the call or apply methods are invoked, "this" is explicitly defined.

5. Why do we need super() in an extended class?

    > Because it passes any new attributes back up to the constructor of the parent object.