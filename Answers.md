# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Describe some differences between `.forEach` & `.map`. 

Both are iteration codes used to loop through arrays mostly, but what makes them different is that `.forEach` makes a function once for each array item, while `.map`, gives you a new array after you execute a function on each element. A `.forEach` output would be each item on a newline. A `.map` output would be a brand new array. 

## Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

Numbers, strings and booleans are primitive data types. 

Null and undefined are special data types. 

Arrays and objects are considered to be reference datatypes since they collect rather than represent. 

An array is special because it can store any type of data inside (functions, 'strings', numbers, etc.)

## What is closure? Can you code out a quick example of a closure?

Closure is a concept used to represent scope in a block of code. Each scope can be a function within another function, or represent some sort of environment. The variables inside each scope can see every other variables outside to its scope. But a variable outside cannot see any variables beneath its scope. 

## Describe the four rules of the 'this' keyword. No need to provide examples about it this time.  

Depends on where the function is invoked. 

**Implicit binding** - when the keyword references  left of the dot at call time.
**Explicit binding** - using the `.call`, `.bind` and `.apply` function in a scope.
**New binding** - creates brand new object when invoked. 
**Window binding** - if nothing is binded to the this keyword, it will default to the window object. 
