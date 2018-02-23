# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

question 1: Describe some of the differences between .forEach & .map.
---

# Answers

### forEach
* forEach does not return a value, the callback function that forEach references does.
* The callback function that forEach references can potentially overwrite the existing original array

### map
* map returns a value, the value being a copy of the original array, but modified and returned as a new array.
* map keeps the original array intact, while giving you an entirely new array to modify.
---
question 2: Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
---

# Answers

### 5 different types in Javascript
* boolean- decides if a variable is/ or is not something (true/ false)
* string- characters used to represent text
* undefined- value declared, but no value assigned
* null- a variable has been given a vale of "no value"
* object- data types that have key: value pairs of other javascript data types

### What is so special about array?
Arrays in Javascript read like objects. They read as a key: value pair just like an object. For example an object with `name: 'Alex` has a key of `name` and a value of `Alex`. And an array of `arr = ['Alex']`
has a key of `0` and a value of `Alex`. At least that is how I think Javascript reads arrays.
---
question 3: What is closure? Can you code out a quick example of a closure?
---

#Answers

### What is closure?
Closure is a function variable that is held within the function and only that function until it's use has passed. Or a local private variable.

### Example of Closure
```
function foo (n) {
    let n = 500;
    return n + n;
}
```
```
function foo (n) {
    return n + n;
}

foo(450);
foo(500)
```
In the first example `let n = 500;` is a closure to the function scope foo, and in the second example `foo(450);` and `foo(500);` are 2 seperate and different closures to the function scope foo.
---
question 4: Describe the four rules of the 'this' keyword. No need to provide examples about it this time
---

#Answers
1. call, apply and bind are have to be explcitly called to a reference
2. this refers to the object instance created by the constructor to use the value given and assigns it for each instance
3. the function called to the left of the dot is 'this'. `this.name is whatever this was for name`.
4. if a function calls on `this` and there is no variable set in the function, it will look to the window scope, and then the global scope (if it does not find anything in the window scope).

