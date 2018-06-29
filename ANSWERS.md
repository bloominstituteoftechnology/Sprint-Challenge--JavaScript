# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
   `.forEach` applies a provided function to every element but doesn't return anything.
   `.map` applies a provided function to every element and return a new array of the same length.

2. What is the difference between a function and a method?
   In javascript, the difference between a method and a function is that a function is a block of code
   that can be invoked by calling its name anywhere in the code. A method basically has the same functionality
   but its also linked to an object.

3. What is closure?
   A closure is a combination of an inner function that has access to the scope of an outer function.

4. Describe the four rules of the 'this' keyword.
   - Window/Global Object Binding: 'this' refers to the window when in global scope.
   - Implicit Binding: 'this' refers to the object preceding the dot during a function call.
   - New Binding: 'this' refers to the specific object being created after calling a constructor.
   - Explicit Binding: 'this' is explicitly defined which can be during a function call like '.call()'
   
5. Why do we need super() in an extended class?
   super() is the ES6 version of .call(). It basically goes a level above the
   inheritance chain and links the attributes between the child and parent class.
