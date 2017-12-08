# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### Describe some of the differences between `.forEach` & `.map`.
1. `.map` creates a new array with the original array's items passed through a function, while `.forEach` simply executes a function for each element on the original array.
2. `.map` returns a new array, `.forEach` returns nothing.
3. `.map` is more functional, `.forEach` is more procedural.
4. You can chain other array methods, like `.sort`, onto `.map`.

### Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
1. Boolean
2. Number
3. String
4. Symbol
5. Object

Arrays are special because they are lists with a `.length` property and they can be iterated over using a `.for` loop or `forEach()`. They also have special methods like:
* `.push()` - add to the end of the array
* `.pop()` - remove from the end of the array
* `.shift()` - remove from the front of the array
* `.unshift()` - add to the front of the array
* `.indexOf()` - finds the index of the argument passed in
* `.splice()` - remove an element from a specific index
* `.slice()` - copy an array

### What is closure? Can you code out a quick example of a closure?
Closure is when an inner-scoped function accesses a variable that is in a scope enclosing it.
For example:

`let isItHotOut = false;`
`function checkTemperature(temp) {`
    `if (temp > 80) isItHotOut = true;`
`}`
The closure occurs after the `if ()` statement, when the variable `isItHotOut` is accessed in th inner function.

### Describe the four rules of the 'this' keyword.
1. Whenever a function is containes in the global scope, the value of `this` inside of that function will be the `window` (or `console`) object.
2. Whenever a function is called by a preceding dot, the object before that dot is `this`.
3. Whenever a constructor is used, `this` refers to the specific instance of the object that is created and returned by the constructor function.
4. Whenever JavaScript's `.call` or `.apply` method is used, `this` is explicitly defined.