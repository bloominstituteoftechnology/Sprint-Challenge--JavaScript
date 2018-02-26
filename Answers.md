# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## 1. Describe some of the differences between .forEach & .map.
#### - The forEach method iterates over the items in an array and applies ot each, one by one. Also, forEach accomplishes a similiar execution as a for loop. The .map method actually transforms each item in an array, then returns a new array of the items with the same size.


## 2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
#### - Boolean, Null, Undefined, Number, and String. (Although, you cannot forget the Object)
#### - An array is a special variable that can hold more than one value at a time. You can think of it as a list of items/elements. Their elements are stored as object properties, using the array index as the property name.


## 3. What is closure? Can you code out a quick example of a closure?
#### - Closure is created whenever you declare a function within another function. The outer function's scope becomes accessible within the inner function.

```
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function    
  }
  displayName();    
}
init();
```


## 4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
#### - Whenever a function is contained in the global scope, the value of 'this' inside of that function will be the window object.
#### - Whenever a function is called by a preceding dot, the object before that dot is 'this'.
#### - Whenever a constructor function is used, 'this' refers to the specific instance of the object that is created and returned by the constructor function.
#### - Whenever JS's call or apply method is used, 'this' is explicitly defined.
