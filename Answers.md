# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. Describe some of the differences between `.forEach` & `.map`.
	While '.forEach' executes a given function on every array elements but returns nothing, '.map' returns an modified array of which elements are mutated by a given function one by one.


2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
	Numbers, strings, booleans, arrays, objects. Array  is a variable, which can hold more than one value at a time, in different data types.

3. What is closure? Can you code out a quick example of a closure?
	A closure is the combination of a function and the lexical environment within which that function was declared.
```
const counter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};
```

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time 
	1: Window/Global Object Binding: When in the global scope, the value of “this” will be the window/console Object
	2: Implicit Binding: Whenever a function is called by a preceding dot, the object before that dot is this.
	3: New binding: Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
	4: Explicit binding: Whenever JavaScript’s call or apply method is used, this is explicitly defined.