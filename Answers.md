# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Question 1

.forEach and .map both iterate over an array, however .map returns a new array of results from the callback function.

## Question 2

Objects, Booleans, Numbers, Strings, and Undefined.   Arrays are just objects, like anything else.

## Question 3

Closure is a function accessing the scope of the function its inside of.

``` javascript
function simpleCounter() {
    let counter = 0;
    return () => ++count;
}
```

## Question 4

1. 'this' in global scope refers to the window/console objects.
2. In a constructor 'this' refers to the object created using the constructor.
3. .apply .call and .bind explicitly define the 'this' context.
4. When a function is called as a method or anything with a dot, 'this' refers to the object to the left of that dot.

