# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
# Answers
#1. differences between .forEach and .map

- .forEach returns undefined or nothing while .map returns a whole new array without changing the original array.

- .forEach runs the callback function once on the array while the .map runs the callback function on each element in the array and returns each result placing it in a new array.

- because .map returns an array, you can chain functional methods like filter and reduce.

#2. data types, example, Array thought
- Number
- String
- Boolean
- Null
- Undefined
- Object
- Symbol

example of a string is 'edward'

Arrays are a collection of things stored as indexed items in the collection, example is const letters = ['a','b','c']

#3 Closure
A way a function can access variables from within, also from the outer function that enclose it and also the global scope

const foo = 'bar';

function sayBar() {
    console.log(foo); // foo is accessed from the global scope
} 

#4 Describing this in JS
- Object binding - it refers to the global scope
function showThis() {
    console.log(this); // logs the window or console (in node environment)
}

- Implicit - bind to the obj name on the left of the period
const anObj = {
    name: 'Normal',
    showMe: function() {
        console.log(this);
    }
};

anObject.showMe(); // this will refer to anObj

- New Binding - bind this to the constructor func

function ObjConst () {
    console.log(this);
}

const newObj = new ObjConst();

* 4. Explicit - passes the obj that it has to bind to by using .call /.apply / .bind

ObjConst.call({name: 'New Obj'}, null); // this refers to the passed in object