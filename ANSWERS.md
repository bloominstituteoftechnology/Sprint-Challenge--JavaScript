# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.
 -.map returns a newArray, .forEach works on an array in place
2. What is the difference between a function and a method?
  -A function is a block of code that has an input or at least an output, a method is a function defined as a property of an object
3. What is closure?
  -Closure is a function or when a function refers to a variable outside of itself.
4. Describe the four rules of the 'this' keyword.
  1. Window/Global Object binding, to bind the window object to a function
  2. Implicit binding in which 'this' refers binds an object which precedes a function call with obj.functionCall() syntax.
  3. New binding in which this refers to an instance of an object created from a constructor class
  4. Explicit binding in which 'this' changes the context of constructor object when .call() or .apply() are used
5. Why do we need super() in an extended class?
  super() allows the extended class to reference the props of the parent class in its own class/object it is equivalent to the line Parent.call(this, props) in prototypical inheritance.
