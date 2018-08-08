# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.
map returns a new array, forEach does not return anything
2. What is the difference between a function and a method?
methods are functions, the method syntax is only used when it is within the scope of an object
3. What is closure?
function within a function that has access to parent functions parameters and variables
4. Describe the four rules of the 'this' keyword.
implicit binding: 'this' is whatever is to the left of the . of the method thats being called
explicit binding: 'this' value is being called into the function through a parameter during the call
new binding: making an object from a function- all 'this' keywords refer to the new object 
window binding: when all other rules are ignored and 'this' refers to the window 
5. Why do we need super() in an extended class?
to call the constructor of the parent class
