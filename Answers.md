# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

# JavaScript Sprint Challenge #1

## Self Study Questions:

1. Describe some of the differences between .forEach & .map.
    * .map iterates over each value in a list (array,object-literal), applying some change to each value, maps the new values onto a NEW array, and RETURNS the array
    * .forEach iterates over each of the values in a list, applys some change to each value, and then returns the same list, but with the updated item values. .forEach DOES NOT return anything on its own.
2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
    * Boolean
    * String
    * Number
    * Null
    * Undefined
    * Arrays are special because despite convention, you can create arrays with any combination of JavaScript types.
3. What is closure? Can you code out a quick example of a closure?
    * Closer generally relates to the scope of functions.  We can ask the question: What declared values does a particular function have access to based on its scope (Global or local)?  Specifically, closure refers to the peculiar rules dictating the scope of a function in javascript -- particularly in the case of functions within functions.  The following example:

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
    1. Refers to the Window Object unless specifically bound.
    2. Look to the left of the dot to find the object that this refers to.
    3. Use .bind, .call, and .apply to explicitely set what this refers to.
    4. constructors, new, class

