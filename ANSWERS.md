# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.
    forEach mutates the original array whereas map makes a new array
2. What is the difference between a function and a method?
    a method is a type of function; a method is a property of an object
3. What is closure?
    closure is a function in the context of its lexical environment, which includes the variables in its calling context
4. Describe the four rules of the 'this' keyword.
    window - outside of a function, 'this' refers to the most global object (the window)
    implicit - 'this' refers to the object from within the object; what is left of the dot at call time
    explicit - 'this' refers to the object from outside the object; must use call, apply, or bind
    new - 'this' refers to an object created by a constructor function
5. Why do we need super() in an extended class?
    it is needed for an object to access functions on its parent constructor function
