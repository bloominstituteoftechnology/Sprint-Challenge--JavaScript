1. Describe the biggest difference between `.forEach` & `.map`.
  .map returns a new array of elements while in turn passing each element back to the callback.
2. What is the difference between a function and a method?
  a function is able to stand alone, while a method is a function bound inside an object.
3. What is closure?
  A closure is the combination of a function and the lexical environment within which that function was declared. It's how an inner function is able to refer to any outside variables that are in-scope when that function was crated.
4. Describe the four rules of the 'this' keyword.
  - window - global
  - implicit - this refers to the left of the dot
  - explicit - when using call, apply or bind
  - new - when creating new objects.
5. Why do we need super() in an extended class?
  - it's used to access and call function to an objects' parent. 
