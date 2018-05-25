# Your responses to the short answer questions should be laid out here using Mark Down.

1.  Describe the biggest difference between `.forEach` & `.map`.
2.  What is the difference between a function and a method?
3.  What is closure?
4.  Describe the four rules of the 'this' keyword.
5.  Why do we need super() in an extended class?

# Answers

1.  They both iterate over an array but `.map` returns a new array and `.forEach` doesn't. Also `.forEach` can alter/mutate the calling array while `.map` just returns the new array.
2.  They are very much the same except that a function is called a method when the function/method is associated to a object.
3.  Closures are inner functions (a functions inside a function) that have access its outer functions variables.
4.  * **Window Binding:** is when `this` refers to the global window.
    * **Implicit Binding:** is when a function is called, the object directly left of the dot is what `this` will refer to. -->
    ```javascript
    myObj.sayName("Dan");
    ```
    * **New Binding:** is when `this` refers to the object that is created by a `constructor function`.
    * **Explicit Binding:** is when `this` is explicitly defined using `.call` and `.apply`.
5.  We need to use `super()` so that it passes the child attributes back up to the constructor of the parent.
