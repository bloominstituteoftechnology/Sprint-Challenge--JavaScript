# Your responses to the short answer questions should be laid out here using Mark Down.

**1. Describe some of the differences between `.forEach` & `.map`.**
    1. .map returns a new array of elements, relative to the previous array, that have been passed through iteration
    2. .forEach iterates through an array, making changes, but saving the change to the original array.

**2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?**
    1. Booleans
    2. Strings
    3. Numbers
    4. undefined
    5. Null

**3. What is closure? Can you code out a quick example of a closure?**
Functions form closure. Variables declared within that function rely on local scope; unless the variable isn't assigned - then it will look oustide of it's scope for a referenced variable.

**4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)**
    1. _this_ refers to the global object in all global code.
    2. if the function is called as a property of parent, _this_ refers to the parent object inside the function code.
    3. _this_ refers to a newly created _new_ object.
    4. when a function is called with _call_ or _apply_, _this_ is set to the first argument passed to it inside of the function code.

### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
