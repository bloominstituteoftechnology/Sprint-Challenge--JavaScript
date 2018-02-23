# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. Differences between .forEach and .map: 
..* .map returns a new array, wheras .forEach does not return anything.

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
..* String, number, boolean, object, array. Arrays are special because they have many methods that can be applied to them, they can also be iterated over.

3. What is closure? Can you code out a quick example of a closure?
..* Closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables.

```
const counter = () => {
    let count = 0;
    return () => {
        count++;
        return count;
    };
};
const myCounter = counter();
myCounter();
```
4. Describe the four rules of the 'this' keyword.

    1. Window/Global Object binding.
    2. Implicit Binding.
    3. New Binding.
    4. Explicit Binding.
