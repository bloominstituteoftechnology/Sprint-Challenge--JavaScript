1. Describe the biggest difference between `.forEach` & `.map`.
For each iterates through an array allow you to access each element,  while map will iterate through an array and perform an operation on each element in an array  and then return a new array with all of those operations applied to it.
2. What is the difference between a function and a method?
A  function as a standalone  set of instructions,  while a method  is the same thing as a function but it belongs to an object
3. What is closure?
A closure  is a combination  of function and lexical scoping  wherein  a child function  has access  to a parent of function's variables.  when a child function does access these variables  a closure is created.
4. Describe the four rules of the 'this' keyword.
The first rule is the global scope  where `this` refers to `window`
The second rule is implicit binding,  where `this` refers to the object preceding a function call
The third rule is the new binding,  where any time you use the `new` keyword `this` refers to the newly instanced object
 the fourth rule  is explicit binding  where we explicitly bind `this` by using `call` ,`apply` or `bind`
5. Why do we need super() in an extended class?
We use super when extending a class to pass in attributes or properties to the objects higher in the prototype chain