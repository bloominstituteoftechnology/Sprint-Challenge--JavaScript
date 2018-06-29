# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.

I like to think that forEach is without consequences, it won't actually return something unless explicitly said to. map, on the other hand, creates another array, utilizing whatever callback function you inputed.

2. What is the difference between a function and a method?

A function is a reusable piece of code that takes an input and returns an output. A method is simply a function within a object, unique to that object.

3. What is closure?

Closure is a function's ability to access references outside the scope of the function. Basically, the more "in" you are, you can access the "out" stuff.

4. Describe the four rules of the 'this' keyword.

* Global - this refers to the global scope, which is whatever is the global this (window within the browser)
* Implicit - this refers to the object within where this is called
* Explicit - this can be bound to an object by utilizing call, apply, or bind.
* New - this can be bound to an object by utiliizing the new keyword.

5. Why do we need super() in an extended class?

super() allows for attributes to be passed up back to the constructor of the parent Object.
