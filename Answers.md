1. Describe the biggest difference between `.forEach` & `.map`.

.map automatically creates a new array. .forEach does not.

2. What is the difference between a function and a method?

A method is a function inside of an object. A function is not necessarily inside of an object. (Although JS makes this weird since everything is technically an object, so maybe it's better to say that a function is defined in global scope, a method is not.)

3. What is closure?

It's when a variable defined in a higher order function is available to use in a nested function.

4. Describe the four rules of the 'this' keyword.

1 - Window Binding. When you use "this" in global scope, it automatically refers to the window object. 
2 - Implicit Binding. When you use "this" in an object you've created, it refers to that object.
3 - "new" Binding. When you create a new object using the "new" keyword and a constructor function, "this" refers to the new instance that the constructor function creates. 
4 - Explicit Binding. When you use .bind, .call, or .apply to specify a specific object you want to refer to, "this" refers to whatever object is being passed in as a parameter (the object in the parentheses).

5. Why do we need super() in an extended class?

We need it to properly access "this" and to gain access to the methods of the parent class. 