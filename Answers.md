# Your responses to the short answer questions should be laid out here using Mark Down.

### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### 1. Describe some of the differences between `.forEach` & `.map`.

`.forEach` will apply a function call to every item in an array. `.map` will apply a function call to every item in an array and return a new array with a the new values.

### 2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

Object, String, Number, Array, Boolean
Arrays are objects with special methods like `.map`, `.reduce`, etc. that allow one to handle immutable data more easily.

### 3. What is closure? Can you code out a quick example of a closure?

Closure refers to a block of code and it's ability to access the enclosing functions variables.

```javascript
c++ // will fail
let a = 0
a++ // will not fail
function someFunc() {
  let c = 0
  return () => a++
}
let b = someFunc()
b() // 0
b() // 1
```

### 4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

* If a function is called in the global scope, "this" refers to the window object
* If a function is called by a preceding dot(.), the object before the . is "this"
* If using a constructor, "this" refers to the specific instance of that new object.
* Whenever you use call or apply, you explicitly decide whatever "this" is
