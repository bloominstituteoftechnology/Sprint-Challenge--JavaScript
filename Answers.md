# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
1. Describe the difference between `.forEach` & `.map`.
..* `.forEach` executes a function once for each element of an array.
..* `.map` creates a new array with the results of the function called on every element of the given array.
2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
..* Number
..* Boolean
..* Object
..* String
..* Array
.. Arrays are a special object that can hold more than one value at a time.
3. What is closure? Can you code out a quick example of a closure?
..* Closure is when a function remembers its lexical scope, even when that function is executing outside its lexical scope.
```javascript
const counter = () => {
  let count = 0;
  const generator = () => {
    count++;
    return count;
  };
  return generator;
};

const newCounter = counter();
```
4. Describe the four rules of the 'this' keyword.
..* Whenever a function is contained in the global scope, the `this` inside of that function will be the window object.
..* Whenever a function is called by a preceding dot, the object before the dot is `this`.
..* Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
..* Whenever `.call`, `.apply`, or `.bind` is used, this is explicitly defined.
