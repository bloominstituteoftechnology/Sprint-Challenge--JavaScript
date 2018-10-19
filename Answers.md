

1. Describe the biggest difference between `.forEach` & `.map`.

- Both `forEach` and `.map` will both execute a function for each element in an array. But `.forEach` will affect and change the original array where as `.map` will return a new array leaving the original unchanged.   

2. What is the difference between a function and a method?

- Methods are just functions that are stored in an object.

3. What is closure?

- A closure is the combination of a function and the lexical environment within which that function was declared. Lexical Scoping defines how variable names are resolved in nested functions: inner functions contain the scope of parent functions.

4. Describe the four rules of the 'this' keyword.

* 1. window Binding - The global default 'this' selection.
* 2. Implicit Binding - Implicit binding occurs when dot notation is used to invoke a function.
* 3. new Binding - Creates a new object from a constructor function.
* 4. Explicit Binding - Explicit binding occurs when .call(), .apply(), or .bind() are used on a function.

5. Why do we need super() in an extended class?

- We need it to access and call functions on an object's parent.
