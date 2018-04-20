# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
   forEach eecutes a given function once for each array element.
   map creates a new array with the results of the provided function on the elements in the array.

2. What is the difference between a function and a method?
   function is a named piece of code that can have data passed through it and optionally return data.
   method is a piece of code that is named, and is associated with an object. Key differences between methods and functions is that methods are implicitly passed on the object on which they were called and that methods are able to operate on data which is contained within the class.

3. What is closure?
   A closure is an inner function that has access to the outer functions variables, including parameter.

4. Describe the four rules of the 'this' keyword.
Principle 1
Window Binding: can use window.xyz to change the value you see

Principle 2 
Implicit Binding: anything to the left of the dot (.key) is being referenced.

Principle 3
New Binding: can use to create new variables that follow the structure you've set up.

Principle 4
Explicit Binding: use .call, .bind, .apply to reference the object.
  
.call: can pass in arguments, but not arrays
.apply: can pass in an array of arguments
.bond: will return a new function instead of invoking the function. Can set it to another variable, which can come in handy.

5. Why do we need super() in an extended class?
   You use super(element) when you want to call the constructor to initialize with the element in the ().
