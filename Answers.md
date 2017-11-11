# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

#1. Describe some of the differences between `.forEach` & `.map`.

While `forEach()` function is a destructive function map is not.

`forEach()` is going to run a call back function on each element in the array and will modify every element that been called with the callback function. 

`map()` meanwhile, will do the same as `forEach()`, but instead of modifying the original array, will create a new array.

#2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

`number, string, boolean, object, array`

Arrays can hold each data type at each indexes, including another array (called nested arrays) Array index starts with 0 index. let arr = [1,2,3,4,5];
Elements can be accessed the following way:
`arr[0] = 1`
`arr[1] = 2` and so on.

#3. What is closure? Can you code out a quick example of a closure?

`function containerFunction () {`
  `let variable = 'random'`
  `function innerFunction () {`
    `console.log(variable);`
  `}`
  `innerFunction();`
`}`

containerFunction is going to create a variable called variable and also calls innerFunction. innerFunction have access to the upper level scopes variable called variable. 
If we try to access variable with a global scope function, we do not have access to the variable, called variable.  


#4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

this key word points to an upper level object. The biggest object is the window/console.

