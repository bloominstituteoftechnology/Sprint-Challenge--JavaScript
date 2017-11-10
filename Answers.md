# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

# Answers for _Sprint Challenge_

1. Describe the differences between `.forEach` and `map`.
* The difference is that `map` returns a new array and `.forEach` doesn't. `.forEach`just operates all all values in the orginal array.

2. Name five different types in JavaScript. What is so special about Arrays?
* The five different types in JavaScript are:
- object an object is a value in memory which is referenced by an identifier. It associates a **key** with a **value**.
- boolean represents a logicale entity and can have two values of **true** or **false**.
- number is an numerical integer that has floating points.
- string represents texual data and is enclosed with **""** or **''**. The indexes are zero based also.
- undefined is a variable that has not been **assigned** a value yet. It is not the same as `null` or `not definded`.

* An array can hold many values under a single name, and you can access the values by referring to an index number.

3. What is closure? Can you code out a quick example of a closure?
* A **closure** is an inner function that has access to the outer (enclosing) function's variables—scope chain. The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables
* example: 
```
function inIt() {
    const name = "Mark"; // created local variable name
    function displayName() { // closure happens here at inner function
        console.log(name); // use variable declared in parent function
    }
    displayName();
}
inIt();
```

4. Describe the four rules of the 'this' keyword.
* The four rules of the `this` keyword are:
1. Whenever a function is contained in the global scope, the value of` this` inside of that function will be the window object.
2. When a function is called by a preceding dot, the object before the dot is `this`.
3. Whenever a construction function is used, `this` refers to the specific instance of the object that is created and returned by the constructor function.
4. Whenever JavaScipt's `call` or `apply` method is used, `this` is explicitly defined.






