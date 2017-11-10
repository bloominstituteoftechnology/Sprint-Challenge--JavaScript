# Your responses to the short answer questions should be laid out here using Mark Down.
## Describe some of the differences between .forEach & .map.
### the main difference is that forEach does something to each item in an array but returns nothing, while .map does something to each item and then returns the results. So with map you are working with two arrays - the original array and the new array with the transformed items. With forEach you only work with the original array.
It _seems_to me that forEach is useful for things like saving array items or answering a couple of questions about the items,  but map actually allows for you to make new array that you can then do things with.
## Five different types of data
1. **number** are numbers
2. **strings** are series of characters
3.  **boolean** can only be true or false
4.  **undefined** a variable that hasn't been given a value
5. **null** no value exists

## Why are arrays so awesome?
### because they hold collections of data and you can execute functions for all of the data in simple steps rather than repeating functions individually for each item, which sounds like it might be the 2d circle of hell.

## What is closure?
### A closure is an inner function that can use variables  from an outer function. So I could set up a few variables at the beginning of a window and then use them in my all my functions throughout the window, which is more efficient than rewriting them for each function. 

## Can I code an example of closure?
### Let's find out ...
```function letsDoMath() {
  let x = 2;
   let y = 3;
   let z = 4;
function addItUp() {
  return x + y + z;
}
function subtractNowYall() {
  return z - y - x;
}
}```

## The Four Rules of the **this** Keyword
+ Window binding - unless otherwise specified, _this_ refers to a global object
+ New binding - if a function is called with the _new_ operator, this refers to the object being built in this function
+ Implicit binding - _this_ refers to whatever is left of the dot when you call the function
+ Explicit binding - we have to spell it out, and tell the function what the context of _this_ is (using _call_,_apply_,or _bind_)




} 

### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
