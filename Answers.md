# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.
1. Describe some of the differences between `.forEach` & `.map`.
- foreach method executes a provided function once for each array element.It doesn’t return anything, just calls the function for each array element and then it’s done. 
- map method creates a new array with the results of calling a provided function on every element in the calling array. It will similarly call the function for each array element but instead of discarding its return value, it will capture it and build a new array of those return values.

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
- numbers, string, boolean, undefined, null
- Neither the length of a JavaScript array nor the types of its elements are fixed. Since an array's length can change at any time, and data can be stored at non-contiguous locations in the array

3. What is closure? Can you code out a quick example of a closure?
- A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function’s variables, and it has access to the global variables.

Example 
```
let name = "John";
function sayHi() {
  alert("Hi, " + name);
}
name = "Pete"; // (*)
sayHi(); // Pete
```
In this example, the global Lexical Environment has name: "John".
At the line (*) the global variable is changed, now it has name: "Pete".
When the function say(), is executed and takes name from outside. Here that’s from the global Lexical Environment where it’s already "Pete".

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
- Whenever a function is contained in the global scope, the value of this inside of that function will be the window object.
- Whenever a function is called by a preceding dot, the object before that dot is this.
- Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
- Whenever JavaScript’s call or apply method is used, this is explicitly defined.