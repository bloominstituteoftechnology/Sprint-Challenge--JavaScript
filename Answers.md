# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

**1. Describe some of the differences between .forEach & .map.**
...*forEach iterates over each item in Array and passes it through callback function. map iterates over each item* ...*in array and applies function and returns new array*

**2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?**

*Following are five different types in JavaScript*
+ Boolean
+ Number
+ String
+ Undefined
+ Object

*Arrays are special kind of Object for which index is used as Key*

**3. What is closure? Can you code out a quick example of a closure?
Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)**

*A closure is a combination of function and lexical environment within which function was declared.*

*__Example__*
```Javascript
function outer(name) {
  var name = name;
  function inner() {
    console.log(name);
  }
  return inner;
}

showName = outer('Bhavik');
showName();
```
