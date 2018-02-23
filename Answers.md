# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

***Describe some of the differences between .forEach & .map.

ANSWER: 

There are a few differences between .forEach and .map. The main difference would be that .map returns something when .foreach does not. .map will return a new array after executing a function on each array element, while forEach simply executes a function on each array element. 


***Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

ANSWER:

Five different types in JavaScript would include string, number, boolean, null and undefined. Something very special about arrays is that they can hold multiple different data types in them. we can use these to iterat through using javascript iteration.


***What is closure? Can you code out a quick example of a closure?

Closure is an inner function that has acces to the outer functions variable scope chain. a quick example of this is: 

let a = 4; // outer scope//
function myFunction() {
    return a * a;   // this function has access to the outer scope.//
}


***Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

the four rules would be: 

1: Whenever a function is contained in the global scope, the value of this inside of the function will be the window object.
2: Whenever a function is called by a preceding dot, the object before that dot is this. 
3: Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function. 
4: Whenever JavaScript's call or apply method is used, this is explicitly defined. 