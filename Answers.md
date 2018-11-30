## Questions

1. Describe the biggest difference between `.forEach` & `.map`.
2. What is the difference between a function and a method?
3. What is closure?
4. Describe the four rules of the 'this' keyword.
5. Why do we need super() in an extended class?

## Answers
1. .map returns a new array. .forEach does not, because it is essentially a Javascript built-in for loop. If you access the array contents in forEach then it will modify the original array. 
2. A method is just a function that belongs to an object--i.e., the scope of a function is global whereas the scope of a method is limited. 
3. Closure is when a function inside another function refers to variables that are within the scope of the function it is wrapped in, and using the inner function will make it use those variables that were declared within the outer function. 
4. - Window binding - if you use `this` in a global scope it defaults to referring to the window. Generally undesired behavior.
   - Implicit binding - if you use `this` with dot notation like in killer.kill('goodguy'), the `this` in the kill function will refer to object before the dot, i.e., killer. 
   - Explicit binding - when you use `call` or `apply` you can force bind a function to an object. `Call` or `apply` are used on functions and you pass in an object with optional parameters. 
   - New binding - when you declare a variable and set it equal to a constructor function with the `new` keyword, you have constructed an instance of an object using the constructor. Ex: const Sabrina = new Witch()
5. We need super() in an extended class because the `super` keyword accesses the functions in the class's parent object. 
