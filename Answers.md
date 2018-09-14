## Task 2: Comprehension Questions
Answer the following questions to the best of your ability. You can exercise your Googling skills and use training kit.  Open up the [Answers.md](Answers.md) file and record your responses there.

1. Describe the biggest difference between `.forEach` & `.map`.
  `.forEach` executes a function on each array element and returns the element. `.map` creates a new array and executes a function on the element and returns it to the array.
2. What is the difference between a function and a method?
  A function can be called and execute a series of methods. Methods are executed directly on objects.
3. What is closure?
  A closure allows you to access an the outer scope of a function from an inner scope.
4. Describe the four rules of the 'this' keyword.
  When in the global scope, `this` is the console/window Object
  In implicit binding when a function is called before a preceding dot, object before the dot is `this`
  In new binding, when a constructor function is used, `this` is the specific instance of the object created and returned
  in Explicit binding, `this` is explicitly defined and can override what is set using the above bindings
5. Why do we need super() in an extended class?
  super() passes NEW attributes back up to the parent object.