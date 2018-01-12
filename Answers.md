# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

# Self Study Questions
## Differences between .forEach() and .map()
### .forEach()
Per the MDN, this method 'executes a provided function once for each array element.' This method doesn't return anything, and it only iterates over the provided array (it doesn't create a new array from the provided one.) This method **can** mutate the calling array.

### .map()
Per the MDN, this method 'creates a new array with the results of calling a provided function on every element in the calling array.' As such, `map()` has a return, which is a new array of the same size as the calling array, containing the results of the function called on the original calling array. This method **cannot** mutate the calling array.

---
## Different Types in JavaScript
1. **Boolean:** A simple `true` or `false` statement.
2. **Null:** A reference that points to a nonexistent or invalid object or address.
3. **Undefined:** A variable has been declared, but contains no value.
4. **Number:** A numeric data type in the double-precision 64-bit floating point format.
5. **String:** A sequence of characters used to represent text.
6. **Object:** A collection of properties.
7. **Arrays:** An object with a particular relationship between integer-keyed properties and the 'length' property.
⋅⋅⋅ Arrays inherit from `Array.prototype` which gives them a number of useful methods for manipulating arrays, allowing them to be indexed, or have elements added or removed from them, easily. As such, they are useful for representing lists or data sets.

---
## What is a Closure?
A closure is an inner function with access to an enclosing (outer) functions variables and parameters (though not its arguments). For example...

```javascript
const outerFunction = () => {
  let i = 0;
  const innerFunction = () => {
    i++;
    return i;
  };
};
```

---
## Four Rules of the 'this' Keyword
1. When a function is within global scope, `this` will reference the `window` object.
2. When a function is called by a preceding dot, the object before that dot is `this`.
3. When a constructor is used, `this` refers to that specific object instance.
4. When the methods `call()` or `apply()` are used, `this` is explicitly defined (meaning that the first argument passed to either of these methods explicitly sets what `this` points to.)