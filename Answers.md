# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
Describe some of the differences between .forEach & .map.
-forEach loops through and grabs each element to use in a function
-map creates a seperate array with all the elements inside it
Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
-Numbers
-Booleans
-Objects
-strings
-Null
-undefined
-Arrays can hold all data types
What is closure? Can you code out a quick example of a closure?
-closure relates to the scope of a variable
const counter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
- Window, refers  to the global object and it's scope
- Explicit Binding, when we explicitely pass the this context into another
- Implicit Binding, when we refer directly to an objects method by invoking it, the this value becomes bound to that object
- New, when using a constructor, the this keyword is passed into the newly created object