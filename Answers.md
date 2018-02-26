# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


##### NOTE: 
    I spent much of this Sprint Challenge setting up VSCode (attempting to transition from Atom) as well as reading over much of the materials in the CS8 training-kit. I can easily aquire answers and finish within the alotted time, but I'm not grasping what is being taught.
    I plan on finishing this challenge, as well as JavaScript-II, over the weekend.
    In addition, I'll be poring over all necessary outside resources that pertain to this week's topics.
    


### Self Study

1. Both .forEach and .map allow one to call a function on each element in an array.

.forEach doesn't return anything, mutates the calling array.

.map returns a new array of the same size.

2. 5 Data Types: number, string, boolean, object, undefined
    Arrays organize data in tidy formats, allowing them to be manipulated in many ways.

3. A closure is when a function references variable(s) outside of its scope.
i.e.

```const value = 'hello!';
const returnValue = () => value;
console.log(returnValue()); // hello!``` 

4. this keyword:
    window binding: bound to the window scope, i.e. global
    implicit binding: binds word appended to the right of the period to 
    new binding: bound to an object being created from a function, declared with 'new'
    explicit binding: bounds to Object passed into .call or .apply function