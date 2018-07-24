# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.

forEach() does not return anything, while map() returns a new array of the same size.

2. What is the difference between a function and a method?

A method and a function are nearly identical. The main difference is that a method is associated with an object and is able to operate on data that is conatined within the class.

3. What is closure?

A closure is a function contained within another function. It has access to variables within itself, variables within the scope of the containing function, as well as variables in the global scope.

4. Describe the four rules of the 'this' keyword.

-Principle 1: Window/Global Object Binding - While in global scope the 'this' keyword will be the window/console object.

-Principle 2: Implicit Binding - Where the function is invoked, whatever is to the left of the dot is where the 'this' keyword is bound.

-Principle 3: New Binding - Specifically occurs when making new objects, for example constructor functions.

-Principle 4: Explicit Binding - Whenever the call, apply or bind methods are used, the 'this' keyword is explicitly defined.

5. Why do we need super() in an extended class?

The super() keyword calls the parent constructor and allows access to functions within.