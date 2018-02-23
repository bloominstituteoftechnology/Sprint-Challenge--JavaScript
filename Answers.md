# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. forEach() simply executes a function once for each element in a given array. map() creates a new array with results from a provided function on each element in the array that is called.

2. String, Number, Boolean, Null, Undefined, Symbol, Object
An Array is a special type of object in that they provide special structures and methods to work with ordered data.

3. Closure is an inner function that has access to variables outside of it. It's important to understand three types of scope when talking about closure -- variables inside the function, variables in other functions, and global variables. 

Example: 

const foo = 'bar';
function returnFoo () {
  return foo;
}
returnFoo();

4. 
a. Window Binding - .this will be the value in the window object

b. Implicit Binding - refers to the function called before a preceding dot. That object before the dot is this, e.g., myDog.speaks('Woof');

c. New Binding - refers to a specfic instance of the object that is created & returned by a constructor function

d. Explicit Binding - uses call, apply & bind methods and explicitly defines this.
