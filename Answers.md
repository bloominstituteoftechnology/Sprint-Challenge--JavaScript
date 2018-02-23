# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


### Question 1

+ forEach iterates over an array; while map simultaneously creates a new array with the items while iterating over the items.

### Question 2

1. Object, Number, String, Boolean, and Undefined.
2. Arrays actually objects.

### Question 3

+ I would describe closure as the aspect of a function that completes the request when the function is called upon in the program. Nested functions will look at broader scopes to find the variable it needs to run, and close out the request.

```javascript

const addClosure = (function() {
    let count = 0;
    return function(){
        return ++count;
    }
})();

console.log(addClosure()); // logs 1

```

### Question 4

1. If 'new' is used, 'this' becomes a new object.
2. When using apply, call, or bind, 'this' inside of the function is the object that is passed in as the object.
3. When a function is invoked with dot notation, 'this' is the object that the function is a property of.
4. Otherwise, when the function is invoked, 'this' has a global scope.