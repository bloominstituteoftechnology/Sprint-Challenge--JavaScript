# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
1. `.forEach` calls a function once per element of an array and `.map` creates a new array of the results of calling a function per element.
2. Types
  * Object
  * Boolean
  * Strings
  * Numbers
  * Functions
  * Arrays can have any type as part of their data.
3. Closure is the ability of an inner function to grab data from an outter function in it's scope. 
  * ```
   const closureFunction = () => {
      let i = 0;
      const closedFunction = () => {
          return i++;
      };
      return closedFunction();
  }; ```
  4. 
    * When `this` is used in a global area, it refers to the window.
    * When `this` is in a function called by a preceding dot, `this` is the object to the left of the dot.
    * When used with a constructor function, `this` is the object created by the constructor function.
    * When using call and apply, `this` refers to the arguments passed for call and apply.