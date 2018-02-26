# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

# 1. Describe some of the differences between `.forEach` & `.map`.

### .forEach will itterate over an existing array, where .map will create an entirely new one. 

# 2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

### Boolean, Number, String, Object, and Null - Null being something that we haven't covered, but I did a bit of research on.
### Arrays allow you to store and access data easily. For instance, if you needed to access a specific key/value from a specific object in a database, you could just access the array it's stored on and pull the required information.

# 3. What is closure? Can you code out a quick example of a closure?

### Closure is a function that can access a variable in an outer scope.

#### const myName = 'Kevin';
#### function whatsMyName () { console.log(myName); }
#### whatsMyName();

# 4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

### "this" points to an object, it can be used to reference an object without having to use the objects name.

### Window Binding
### Implicit Binding
### New Binding
### Explicit Binding