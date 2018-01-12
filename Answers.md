# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.
1. Describe some of the differences between `.forEach` & `.map`.
  - `.forEach` allows you to iterate over an array, but it only allows you to return one value. `.map` allows you to iterate over an array while generating a new array in the same sequence; in other words, it returns a mutated array.
2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
  - Types: Boolean, number, string, object, function. Arrays in JS are actually objects, though they don't have all the same methods.
3. What is closure? Can you code out a quick example of a closure?
  - Closure is when you return a function in a function, allowing the parent function to store data that the child function is manipulating. For example:
  ```javascript
  function RandomFun(){
    let counter = 0;
    return () => {
      if (counter < 10) {
        counter++;
        return 'less than ten';
      }
    }
  }
  ```
4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
  - If a function is in global scope, `this.` will refer to the window/console.
  - Whenever a function is called by a preceding dot, the object before that dot is `this.`
  - When using constructor functions, `this.` refers to the object created by the constructor in each instance.
  - Call and apply methods allow you to specifically designate the `this.` keyword.
  - P.S. You can't use `this.` in arrow functions.