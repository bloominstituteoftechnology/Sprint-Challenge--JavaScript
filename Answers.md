# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
1. The forEach method does an operation for each item in the array while the map method does an operation and puts the result in a new array, which it then returns.
2. Five types include Boolean, String, Number, Object, and Undefined. Arrays can be used to store any of the types.
3. Closure is the concept that functions can access variables in their parent scope. For example: ```
function parentFunction() {
  const someVar = "Hello World!";
  function childFunction() {
    console.log(someVar);
  }
}
```
4. Window - when in the global scope "this" refers to the Window object. Implicit - a function of an object refers to the object with "this". New - a constructor creates an object and "this" refers to the created object. Explicit - call and apply make "this" refer to a specific object.
