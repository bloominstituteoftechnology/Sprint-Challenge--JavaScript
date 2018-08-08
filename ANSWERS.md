# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.

# `.forEach` - iterating through every array's element.
# `.map` - goes through array and creates a new one of the ame size.

2. What is the difference between a function and a method?

# Functions are defined outside the classes.
# Methods are defined inside of and part of the classes.

3. What is closure?

# Closure is an inner function that has access to outer function's variables.

4. Describe the four rules of the 'this' keyword.

# `WINDOW object` - when function contained in a global scope, `this` in that function will be `window` object.
# If dot notation is used to invoke the function, then `this` is the object to the left of the dot.
# If `call(), apply(), bind()` are used to call function, `this` inside function is an object that is passed as an argument
# When `New` keyword is used then `this` refers to a specific instance of the object that is created and returned by the constructor function.

5. Why do we need super() in an extended class?

# We need `super()` in an extended class to bind it to the parent class and inherit all the parent class properties.
