# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
- `.forEach` applies a function to an iterable object.
- `.map` returns a copy of an iterable object over which a function can be applied.

2. What is the difference between a function and a method?
- A method is a function that is attached to an object.

3. What is closure?
- A closure is the lexical environment the function has access to upon invocation. 

4. Describe the four rules of the 'this' keyword.
- window- is the most global referrence of the `this` keyword in the browser.
- implicit- invoking the method inside of an object implicitly binds `this` to the object in which it is contained.
- explicit- Appending a call, apply, or bind method to a function with Object or `this` as a parameter.
- new- Creating a new constant by using `this` in a constructor function. 

5. Why do we need super() in an extended class?
- `super()` is needed in order to have access to the attributes and methods defined for the parent class from which the child class was extended. 