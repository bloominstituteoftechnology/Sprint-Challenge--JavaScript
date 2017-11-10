# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### 1. Describe some of the differences between `.forEach` & `.map`
Both are method in JavaScript which executes the function once for each element in the array. 
`.forEach` returns `undefined`, whereas `.map` returns a new Array of transformed elements.

### 2. Name five different Types in JavaScript. A Type is something that can represent data.
* String
* Number
* Boolean
* Object
* Undefined

#### What is so special about Arrays?
Arrays are **objects** in the form `[0, 1, 2, 3, 5]`

### 3. What is closure? Can you code out a quick example of a closure?
A **closure** is a function inside another function, where the inner function has access to the outer function.
Example of a closure:
`
const saveData = (data) => {
    const dataBase = [];
    return (data) => {
        dataBase.push(data);
        console.log('You data is saved successfully.');
        return dataBase;
    };
};
`

### 4. Describe the four principles (rules) of the 'this' keyword.
1) **Default Scope**: `this` keyword points to the Global scope by default.
2) **Implicit Binding**: Object before the . (dot) will become `this`.
3) **New Binding**: using the 'new' keyword.
4) **Explicit Binding**: using the methods `.call()`, `.apply()` and `.bind()`.