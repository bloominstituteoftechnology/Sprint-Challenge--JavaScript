# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. `forEach` and `map` are different because `forEach` merely executes the passed callback function on each element of the array it's called on, whereas `map` creates and returns a new array in which each element is the result of calling the callback function on the corresponding element of the original array.
2. Data types available in JavaScript include the following:
	1. number
	2. string
	3. array
	4. boolean
	5. object
	6. function

Array is special among all of these because it produces an ordered list of elements (object's key/value pairs are not ordered) and provides a number of special functions (forEach, map, reduce, filter, etc.) that iterate over these elements and invoke a provided callback function on each.

3. A closure is a JavaScript construct in which a function returns another function that has access to and is able to modify an instance variable that persists in the scope of the parent function. The following code snippet is an example of closure:

```javascript
const counterMaker = () => {
  counter = 0;
  return () => {
    counter++;
    console.log(counter);
  }
}
const increaseCounter = counterMaker();
increaseCounter(); // should print 1;
increaseCounter(); // should print 2;
```

4. The four rules of the 'this' keyword are the following:
	1. If no other context is provided, 'this' refers to the window object (the parent of all objects in Javascript).
	2. If 'this' is used inside a JavaScript object, it refers to that object (unless the function in which it is used is an arrow function, it refers to the parent of the object, or to the window if no such parent exists).
	3. If 'this' is used inside a constructor (or a 'pseudo-constructor' function), it refers to the object being constructed.
	4. If 'this' is used inside a function invoked with 'bind,' 'call,' or 'apply,' it refers to the object passed into one of those three helper functions as its first parameter.