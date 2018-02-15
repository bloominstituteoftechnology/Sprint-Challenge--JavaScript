# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### 1. Describe some of the differences between .forEach & .map.
 We can use `.forEach` to loop through an array in place. Allowing the user access to it's values within.
 While we use `.map` to iterate through an array in order to create a new array with modifed values of the original. 

### 2. Name five different types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
An Array is a data structure that can store mutliple values of different data types
1. Numbers
2. Booleans
3. String
4. Object
5. Undefined & Null

### 3. What is closure? Can you code out a quick example of a closure?
Closure referes to the scope of a function within a program. An inner function will have access to outside variables from an outer function or global variables.

```javascript
let base = 10;
function growExponentially(num) {
    return Math(num, base);
}
```

### 4. Describe the four rules of the 'this' keyword
The `this` keyword has 4 uses or bindings
1. Global (Window) Binding
2. Implicit Binding
3. New Binding
4. Explicit Binding