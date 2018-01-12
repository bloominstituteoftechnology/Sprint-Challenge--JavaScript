# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### 1.)Describe some of the differences between .forEach & .map.
The difference is that .foreach returns anything. It just calls the a function for each elements of an array and .map 
transform each member of the list returning an array.

### 2.)Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

Boolean
String
Object
NULL
Undefined

### 3.)What is closure? Can you code out a quick example of a closure?
Is a function that contains other functions which are {enclosed} in its own scope.
This function can be access from outside but always keeping its data privacy.

const getAnswer = (answer) => {
  return {
    get: () => answer
  };
};

3.)Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
  1.When is used with a constructor function, ``this`` refers to the specific instance of the object that is created.
  2.When a function is called by using dot(.), the object before that dot is ``this``.
  3.When a function is inside of the global scope the value of ``this`` is always a window object.
  4.When methods call or apply are used, ``this`` is explicitly defined.

