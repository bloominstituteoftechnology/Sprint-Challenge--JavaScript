# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Differences from `forEach` and `map`
Answer: `forEach` will iterate array element and you can execute some actions to each element. After the action, the element in the array will be mutated. And you won't get any return value from `forEach`.

While `map` will iterate array element and you can apply some actions to each element. After the action, you will get a new collection of the elements which are transformmed by the action you execute to each of them. `map` will not mutate the original array but return you a new collection of elements.

## Data Type in JavaScript
Answer: `String`, `Number`, `Boolean`, `Array`, `Object`.

## Special About Arrays
Answer: array can hold multiple values under a single variable name with any data type. And array is a special object which uses number index, while object uses string index. Also array has many built-in methods and itself is iterable by indeces. 

## What is closure?
Answer: A closure is the combination of a function and a lexical environment within which that function is declared. For example:
```
function sayName(name) {
  let name = name;
  function sayHello() {
    console.log(`Hello ${name}!`);
  }
  sayHello();
}
sayName('Ting'); // Output will be: 'Hello Ting!'
```
In this example, inner function sayName has no local variable, but when we execute outer function sayName, sayHello can access the variable name outside its scope. 
## Describe the 4 rules of this keyword
Answer: 1. when using function keyword to declear the function, inside this function if we call this, that would be return the whole Window object in browser.
2. inside the object if we call this which will refer to the object itself.
3. when using constructor function to build a object, this will be binding to object when the new keyword is used to create a new object where this refers to object itself.
4. when using call, apply, or bind function to a object, this will refer to the object that is filled in as argument inside the call, apply, or bind.
