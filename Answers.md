## Task 2: Comprehension Questions
Answer the following questions to the best of your ability. You can exercise your Googling skills and use training kit.  Open up the [Answers.md](Answers.md) file and record your responses there.

1. Describe the biggest difference between `.forEach` & `.map`. 
    
    The biggest difference between the two is that `forEach` does not return the object where as `map` does.` 
2. What is the difference between a function and a method?
    
    The difference between `function` and a `method` is a `function` can be called independently where as a `method` is generally associated to an object and needs to be called in conjunction with the object or in reference to an object.`
3. What is closure?
    
    `Closure` is a `function` that has a `child` or `multiple child functions` performing different operations and potentially `returning the element/object to the parent function`.
4. Describe the four rules of the 'this' keyword.
    
    4 rules of this:
    * `this` returning a window, typically happens when this is not explicitly/implicitly defined.
    * `this` implicitly bound.
    * `this` explicitly bound and called with `call`, `bind` or `apply`.
    * `this` again in a way explicitly defined with a `new` keyword to the class constructor.
5. Why do we need super() in an extended class?

    `super` generally pulls all the attributes and methods of the parent classes upwards the chain. Ideally, it creates the prototypes of all associated parent/grandparents and eliminates the need to do a `.call` to the parent object. 
