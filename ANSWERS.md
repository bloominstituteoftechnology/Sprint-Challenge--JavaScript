# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
   `.ForEach` does not return anything, it returns undefined and `.map` returns a new array.
2. What is the difference between a function and a method?
A function is its own entity while a method belongs to an object
3. What is closure?
Closure is when a function or an object has access to somthing outside its scope. 
4. Describe the four rules of the 'this' keyword.
  1. If a function is called as a method, `this` is the object that the function is a property of.
  2. `this` is global object when a called with a free function
  3. If the `new` keyword is used when calling a function, `this` inside the function is a brand new object.
  4. If `apply`, `call`, or `bind` are used to call a function, `this` inside the function is the object that is passed in as the argument.

5. Why do we need super() in an extended class?
super() gives a child access to its parent's properties

