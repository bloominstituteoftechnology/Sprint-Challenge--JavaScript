1. Describe the biggest difference between `.forEach` & `.map`.
 Looks like they're very similar except .map returns a new array while .forEach does not
2. What is the difference between a function and a method?
functions are defined outside of objects. Methods are defined as the property of of an object
3. What is closure?
A closure is a function inside of another function that has access to all of the variables in the function's scope at the time the function was created.
4. Describe the four rules of the 'this' keyword.
  -window binding- when this is used globally, this will be the entire window like the forest in our example today.
  -Implicit binding- automatic binding, looks to the left of the method to determine the keyword this will be applied to.
  -New binding- used when we create new objects off of our original constructor
  -Explicit binding- we forced the binding by using the call and apply methods.

5. Why do we need super() in an extended class?
we need super() to access an object's parent class and inherit all of the parent's properties.
