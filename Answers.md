# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. Describe some of the differences between `.forEach` & `.map`.

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

- String
- Number
- Boolean
- Array
- Object

Arrays are a bit special because they can hold multiple values like an object, but also have some built-in methods like `.length` attached to the Array prototype.

3. What is closure? Can you code out a quick example of a closure?

Closure allows a local function to reach **out** of it's scope environement to grab the value of an already declared variable. It's only one way though, a function can't see **into** a nested scope.

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

- using `this` inside functions in the the global scope (i.e. not nested): 
  - then `this` refers to the `window` object.
  - because functions in the global scope are actually methods of the `window` object.
- using `this` in a function called in dot notation:
  - then `this` refers to the object mentioned before the dot.
- using `this` in a class object (a.k.a. a constructor function):
  - then `this` refers to the specific instance created from that constructor function.
- using `this` with `.call()` or `.apply()`:
  - then `this` refers to the object of whatever is in the parenthesis.