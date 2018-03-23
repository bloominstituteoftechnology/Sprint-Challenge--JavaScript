# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


Q1: Describe some of the differences between .forEach & .map.

A1: .forEach and .map both work to iterate through arrays and modify content however, .map return a new array where as .forEach modifies the original


Q2: Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

A2: Numbers, Booleans, Strings, Arrays, and Objects
  Arrays are unique because they can be used easilly to compare or iterate through data.

Q3: What is closure? Can you code out a quick example of a closure?\

A3: Closure has to do with scope and javascripts callstack. When you do things in the closure scope of a function that data will be considered part of the execution environment of any other interior function. This lets us create things such as the counter below;

<!-- 

function closureCounter() {
  let count = 0;
  
  return function countUp() {
    console.log(count++);
  }
} 

-->


Q4: Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

A4: Implicit: Bind to left of the dot
  Explocit: Rebind this using .call(), .apply(), and .bind()
  Window: Bind to outer global object
  New: Bind to newly created data