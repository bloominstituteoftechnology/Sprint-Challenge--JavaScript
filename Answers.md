# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. Describe some of the differences between .forEach & .map.
- The main difference between the two is that .forEach passes back the values and .map passes back a new array.

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
- There are strings which contain characters, there's boolean which is true or false, there's null and undefined, numbers, objects which can contain anything and arrays which can also contain anything. Arrays are indexed while objects are not.

3. What is closure? Can you code out a quick example of a closure?
- Closure allows calling from whitin a function but calls something outside the function. For instance:
  
  let x = 10;
  function myMultiplication() {
    return x * x;
  }

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
- 