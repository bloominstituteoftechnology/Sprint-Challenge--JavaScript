1. Describe the biggest difference between `.forEach` & `.map`.
   The forEach method doesnt return anything, it calls a function on each element in array. Map utilizes return values and returns a new array of same size.
2. What is the difference between a function and a method?
   A method is inside an object
3. What is closure?
   A closure is an inner function that has access to the outer functions variables. closure has three scopes, its own scope, outer functions variables, and access to global variables.
4. Describe the four rules of the 'this' keyword.
   When in the global scope "this" will be the window object.
   Whenever a function is called by a preceeding dot, the object before the dot is this.
   WHen a constructor function is used, this refers to the specific instance of the object created and returned by the constructor function.
   Whenever Javascripts call or apply method is used, this is explicitly defined.
5. Why do we need super() in an extended class?
   The super keyword is used to access and call functions on an objects parents.
