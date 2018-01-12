# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.
1. Describe some of the differences between `.forEach` & `.map`.
  * .map returns a new array of the same length with each element transformed by the callback function, whereas .forEach only passes each element to the callback function without return an array.

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
  1. Numbers
  2. Strings
  3. Booleans
  4. Arrays
    * Arrays can contain any 'types' of data. Each element can be accessed using an index (making it easy to iterate over), and has some very useful built-in methods.
  5. Objects


3. What is closure? Can you code out a quick example of a closure?
  * Closure is when a callback(inner) function can access a variable in it's outer scope, even after the function has been returned.
  ```Javascript
const closure = () => {
  let counter = 0;
  return () => {
    counter++
    console.log(counter);
    return counter;
  }
}

const closureExample = closure()
closureExample()
closureExample()
closureExample()
closureExample()
// console.log() should read 1, 2, 3, 4
  ```

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
  1. Does not work with arrow function.
  2. Context that it refers to is typically dependent on a function is called.
  3. If it is not in a function or object, it refers to the global window
