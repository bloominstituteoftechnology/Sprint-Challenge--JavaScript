# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
2. What is the difference between a function and a method?
3. What is closure?
4. Describe the four rules of the 'this' keyword.
5. Why do we need super() in an extended class?

--ANSWERS--

1. Biggest difference between '.forEach' and '.map' is '.forEach' calls a function on each array element, whereas '.map' does the same thing but creates a new array as the result.

2. Method is a function inside an object.

3. A closure is a persistent scope which holds onto local variables even after the code execution has moved out of that block.

4. Window Binding, Implicit Binding, Explicit Binding, New Binding. Window looks at the global window or console for reference. Implicit binding uses whatever this.arguments that are passed into the function.
Explicit binding is when call/apply methods are called. New binding is whenever a constructor function is called.

5. super() will allow the child class to access and call the functions inside the parent (extended class).