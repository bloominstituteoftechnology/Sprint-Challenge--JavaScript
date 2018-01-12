# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

# 1. Describe some of the differences between .forEach & .map
### .forEach just iterates over the array. Behave pattern is similar to a for loop (from 0 to end).
### .map behaves the same but returns an array which we can assign to a variable

# 2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
### Types are: strings, numbers, arrays, objects & booleans.
### strings: "aeasdab", numbers: 43443, arrays: [1, 3, 4], objects: {name: 'Sagdi'}, booleans: true & false.
### Arrays contain prototype methods which are assigned upon creatind new array. Using those methods we can manipulate data in various ways. Often we convert other data types to array manipulate it and convert in back to original type.

#3. What is closure? Can you code out a quick example of a closure?
### Closure is function inside another function which has an access to outer function's data and manipulate it in unique way. 
<!-- const myFunc = () => {
  let count = 0;
  return () => {
    return ++count;
  }
}; -->

#4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :) \

### 1) when this is in function, where function is in global scope, this refers to a window Object
### 2) In constructor function this refers to an instance which called it
### 3) whatever comes before dot is what is this represents
### 4) using call and apply methods defines this explicitly 

