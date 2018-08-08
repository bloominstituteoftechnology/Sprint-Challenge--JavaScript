# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.
A. .map returns a new array. .forEach iterates through an existing array.

2. What is the difference between a function and a method?
A. A Function is a set of code to do come task. A method is a function which is a property of an object.

3. What is closure?
A. Is the combination of a function and the lexical scope in which it is invoke. 

4. Describe the four rules of the 'this' keyword.
A.  * Implicit Binding: is an automatic binding. When you invoke a function is going to look to the left of the dot.
    * Explicit Binding: using call, apply and bind you can pass arguments to functions in a global scope.
    * New Binding: use .new keyword to bind a function using .this keyword to constrcut new objects.
    * Window Binding: if you invoke a function using .this keyword and there isn't anything to the left of the dot, .this is going to point to the window. 

5. Why do we need super() in an extended class?
A. To be able to access and invoke functions from the parent object.
