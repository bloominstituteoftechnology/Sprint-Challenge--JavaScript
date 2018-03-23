# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. Describe some of the differences between .forEach & .map.

They both iterate over an iterable object, but map receives a callback that is applied to each element and returns a newly transformed array. forEach returns undefined.

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

boolean, number, string, undefined, object

Arrays are containers that store the any type of data contiguously.

3. What is closure? Can you code out a quick example of a closure?

An anonymous function that retains the state of its containing scope.

function myFunction(myVar) {

  return () => {
    console.log(`the variable passed to myFunction is ${myVar}`);
  }
} 

const myfunc = myFunction("I remember this!");
myfunc();  // output should be the variable passed to myFunction is I remember this!

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

Global/Window:  When defined in global scope, this is the containing global object, usually window.

Implicit: When defined in a containing object, this is that parent object. i.e. whatever is the left of the dot.

Explicit: using call, apply or bind to call a function and set this manually.

Object Instantiation:  When instantiating a new object, this is that object.
