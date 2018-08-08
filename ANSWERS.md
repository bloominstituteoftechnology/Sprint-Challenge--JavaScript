# Your responses to the short answer questions should be laid out here using Markdown.
1. Describe the biggest difference between `.forEach` & `.map`.
`forEach()` runs once applying a callback function for each element of the array, while `.map()` creates a new array with the result of the calling a callback function on every element of the array. So the main difference is ironically the mapping, `forEach()` applies to each single element of the array while `.map()` allies to all elements.
2. What is the difference between a function and a method?
A Method is a functions nested as a property in an object.  
3. What is closure?
Closure is a function and its surrounding environment (lexical scope) which allows future access to certain varibales. Basically whenever a function is called, javascript creates a new execution context. Within that context access to any and all **global** objects is always available, however there may be varibales/objects that come along for the ride during that execution as they might have been declared within the scope of the function _let's say scoped locally_ or within that function's _lexical scope_
4. Describe the four rules of the 'this' keyword.
- Implicit Binding: Using .dot notation to call a function when it's nested as an object's method. `this` refers to what's left of the period. 
- Explicit Binding: Function called explicitly with `.call() .apply() .bind()`
- New Binding: when the new keyword is used to create a variable assigned to a function to invoke the function whereupon js creates a new  object to which `.this` refers.
- Window/Default/Global Binding: `this` will refer to the window object if the above methods aren't used. If you use strict mode however, the global context will be undefined.
5. Why do we need super() in an extended class?
- Call the parent constructor (which is the parent object) and thus invoke it's function(s).  
