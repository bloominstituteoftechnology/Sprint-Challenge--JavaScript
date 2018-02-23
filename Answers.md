# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## .forEach and .map

`.map()` will create a new array from elements in the original array. `.forEach()` iterates over an array and performs functions on each element in the array.

## Types
Undef
String
Boolean
Number
Object/Array

Arrays are objects that do not have properties, but they have indexes. these indexes may contain objects, or just raw values, memory locations, etc.

## Closure
Closure is about the scope of the data you are writing. Closure lets you access data in a more closed scope to avoid it being leaked to a larger scope, like global.

## This
 
 the object before a dot is `this`
 in a global conext, `this` refers to the window object
 in a constructor, this refers to the specific object that is made and returned by the function.
 when `call` or `apply` is used, this is explicit.