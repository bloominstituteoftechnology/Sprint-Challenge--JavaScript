
1. Describe the biggest difference between `.forEach` & `.map`.
The forEach loop will return a list of each object in the category that you are iterating through and will not stop until it is done. The map method will return a new array with the iterated items and make changes to them.

2. What is the difference between a function and a method?
A function is used to store code within it's block scope to be executed when called. A method is code that can executed on an object to affect it.

3. What is closure?
Closure is a way to declare a variable within the highest level of your function to be passed down through the lexical scope and can be used in another nested function.

4. Describe the four rules of the 'this' keyword.
Global binding - When the "this" keyword is used in the global scope, it will always bind to the window Object automatically as that is the scope it is in.

Implicit binding - When you create a method inside of an Object, you can refer to properties of that Object as "this".

New Binding - When creating a constructor function you use the "this" keyword to bind properties to the main attribute parameter.

Explicit binding - When you use call or apply, you use the "this" keyword to define it within the child Object.

5. Why do we need super() in an extended class? Super allows us to create new attributes for a child Object apart from those inherited from it's partent Object.
