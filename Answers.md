# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. forEach() uses a function to manipulate data in an array.
   map() calls a function on each element in an array and creates a new array with the results.

2. Strings, Numbers, Booleans, Arrays, and Objects are 5 Javascript data types. Arrays are a data type that can be used to store multiple occurances of different data types. The data types in a single array, although generally regarded as bad practice, can even be different.

3. A closure is a function inside of a function. The inner function can access the variables and other things in the scope of the outer function(s) and/or te global scope.

const add = () => {
    let counter = 0;
    function plus() {counter += 1;}
    plus();
    return counter;
}
4. 1. Window binding - The this keyword points to the global object
   2. Implicit Binding - The this keyword refers to the value to the left of the dot in the function invocation.
   3. Explicit Binding - The this keyword refers to an object specified directly in the function call.
   4. New Binding - Refers to the new instance of the object created when the function gets called.