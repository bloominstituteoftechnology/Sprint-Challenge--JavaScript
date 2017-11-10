# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


### 1. Describe some of the differences between `.forEach` & `.map`.
##### .foEarch returns without the need to add it to another variable and works in a similar fashion way to for-loop. While the .map returns a new array with any modifications made to its members.
### 2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
##### String, Number, Array, Object, Undefined. Arrays can hold multiple values into one variable.
### 3. What is closure? Can you code out a quick example of a closure?
###### Example
```
function closeIt() {
    const myArray = [];
    return (data) => {
        myArray.push(data);
        return myArray;
    };
};
```
### 4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
##### Not use arrow functions with when this is needed.
##### When a function is called by a preceeding `dot`, the preceeding function becomes `this`
##### In Global context, `this` refers to the window or console
##### When used with `call` `bind` `apply` then `this` is passed as the argment to the function and becomes `this` referenced to the linked object.
