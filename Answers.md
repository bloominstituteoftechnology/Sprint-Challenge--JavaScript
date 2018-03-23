# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. .forEach merely iterates through an array while .map actually iterates and takes the elements to make a new array.

2. Boolean, Null, Undefined, Number, String, Symbol and Object. An array is an object but it comes with tons of methods (like .length) that can be used to iterate through it.

3. Closures are functions called within themselves that can store the updated variables of their outer scoped function. 

```javascript
function exampleClosure(language, location) {
var statement = "I'm currently learning ";
function tieItTogether() {
  return `${statement} ${language} at ${location}`;
}

return tieItTogether();
}

exampleClosure("JavaScript", "Lambda School");
```

4. There are four principles for the .this keyword.

  * Window binding is the default binding that occurs in the browser, occurs when this is invoked without any other principles.
  * Implicit binding is dot notation, whatever is to the left of the dot. Usually calling a function that is part of the object.
  * New Binding is when you use the term new and creates a new object.
  * Explicit binding just means you used `.call`, `.apply` or `.bind`. This inside the function is the object passed as the argument.