# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. Describe some of the differences between .forEach & .map.

   .forEach is used to grab each value of an array. After that, you can make a function which will affect everything in the original array. .map will create a new array array from the one it's being used on. After that, a function can be made without affecting the original array.

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

   Booleans have a value of true or false, Nulls have "null" as it's value, which means something is invalid, Undefined as a value just means that a variable hasn't been declared, Numbers covering integers, Objects being a data type that can hold properties and methods. Arrays are actually considered a object and can hold a list of values within them.

3. What is closure? Can you code out a quick example of a closure?

   With closures, using global variables that are outside the function, it can be used inside of the said function.

let num = 10
function multiplyFunc() {
  return num * num;
}

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

  * Window Binding is using the 'this' keyword in a global context, so using console.log(this); would give you every window value there is.
  * Implicit Binding is using 'this' with a dot, like 'this.bark', which gives 'this' context on what it's pointing at.
  * New Binding is used to create a template for objects, for whenever 'this' is used, it's referring to the object that will be created.
  * Explicit Binding is used for .call or .apply with 'this'
