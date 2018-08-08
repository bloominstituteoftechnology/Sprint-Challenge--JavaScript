# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.
-`forEach` completes the function once for every item in an array.
-`.map` creates a *new array* with the results of a function on each item in the array. 



2. What is the difference between a function and a method?

- a function  is a little chunk of code that handles a particular task within your main application. They can be re-used over and over. 

- a method is a function that is considered a property of the object it's applied to.

3. What is closure?
a closure is both a function and the lexical environment that it is declared in.

4. Describe the four rules of the 'this' keyword.

1. window - this use of `this` applies in the global scope. it will be in
reference to the browser window or console itself.

2. implicit - the function before `this`'s preceding dot becomes "this".

3. explicit - "this" is explicitly defined with either .call .apply.

4. new - new is used only when invoking constructor functions.


5. Why do we need super() in an extended class?
super is used to access and invoke functions on an objects parent. 
