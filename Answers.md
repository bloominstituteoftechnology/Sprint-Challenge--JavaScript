## Task 2: Comprehension Questions

#### 1. Describe the biggest difference between `.forEach` & `.map`.

- .forEach and .map both perform a provided function on each item in an array, but .map will also return a new array with the results of the provided function.

#### 2. What is the difference between a function and a method?

- A method is a property of an object whose value is a function (e.g. Object.method()). Technically speaking, global functions are methods of the window/global object, and so all functions are methods.

#### 3. What is closure?

- A closure is a function that uses variables that are not declared with the function or passed in as a variable. Closures can look within parent functions or the global scope for relevant variables (even those created after the closure).

#### 4. Describe the four rules of the 'this' keyword.

- The 4 rules/principles of the this keyword are:
  1. Window/Global Object Binding: 'this' points to the window object when in global scope.
  1. Implicit Binding: When a function is called with a preceeding dot, the object before the dot is 'this'.
  1. New Binding: When a constructor function is used to create a new instance of an object, that new instance is 'this'.
  1. Explicit Binding: You can explicitly state/override 'this' with .call, .apply, and .bind.

#### 5. Why do we need super() in an extended class?

- We need super() in an extended class because it passes up new attributes to the parent object constructor.
