# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
1. Describe some of the differences between .forEach & .map.
The biggest difference is that .forEach iterates on the array itself, whereas map creates a new array. forEach doesn't return anything, so trying to return will give undefined error. Map will return the new array. 
2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays? 
Boolean (binary, true or false), undefined (not binded to a value), null, number, string. What's special about arrays is that they are mutable. Arrays have a built in set of methods that can be used on them (Array.prototype).
3. What is closure? Can you code out a quick example of a closure? 
Closures are functions inside of other functions. They have access to their own variables, the variables of the enclosing variable, and global variables. Example:
const a = 5;
const levelOne = () => {
    const b = 15;
    const levelTwo = () => {
        const c = 30;
        const added = a + b + c;
        return added;
    }
    return levelTwo;
};
The function levelTwo can see both a (a global variable), and b (a variable local to levelOne).
4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
Principle 1: Window Binding - For functions on the global scope, `this` will equal the window object
Principle 2: Implicit Binding - Whenever a function is called by a preceding dot, the object before that dot is this. 
Principle 3: New Binding - constructors are a template for building new objects. When the this keyword is used in a constructor, it will refer to the object that was created.
Principle 4: Explicit binding - If `call` or `apply` are used, the `this` inside of the function will be the object that was passed in as argument. 