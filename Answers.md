# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


1. Describe some of the differences between `.forEach` & `.map`.
   `.forEach` executes a provided function for every item in an array. It does not return anything. 
   `.map` on the other hand, also executes a provided function for every item in the array but returns 
    a completely new array with this data mapped to it. 
2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about arrays?
   -Booleans
   -Objects
   -Strings
   -Numbers
   -Arrays
   Arrays are special because they allow us to hold multiple values inside of one variable. Furthermore, arrays
   are mutable objects and have all sorts of useful methods attached to them that allow us to quickly traverse,
   search, and update them.
3. What is closure? Can you code out a quick example of a closure?
   A closure is a function inside another function that has access to the outer function's variables as well
   as its own. A closure has three scope chains: its own scope, the outer function's scope, and the global 
   scope.
4. Describe the four rules of the `this` keyword. 