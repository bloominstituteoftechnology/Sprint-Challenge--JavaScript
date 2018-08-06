# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.
Answer: .map will return the entire array and .forEach doesn't return an array. 

2. What is the difference between a function and a method?
Answer: Method is a function that is defined inside of an object.  

3. What is closure?
Answer: Closure is when an inner function or a nested function has access to the outter functions variables. The nested or inner function also has access to the global functions.
 
4. Describe the four rules of the 'this' keyword.
Answer: 

Rule1 - "this" keyword when used in the global scope will refer to the Window object.

Rule2 - A function when called by attaching the function name with a dot to an object, the object before the dot is "this" and this is called Implicit Binding

Rule3 - A new object of a constructor function can be created using the keyword new, in this case the keyword "this" refers to the new object of the constructor function. This is called New Binding.

Rule4 -  When call or apply methods are used on functions,"this" is defined explicitly. This is called Explicit Binding.

5. Why do we need super() in an extended class?
Answer: super() is used in an extended class to access attributes and functions of the parent class.
