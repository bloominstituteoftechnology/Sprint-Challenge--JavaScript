# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


1. Describe some of the differences between .forEach & .map.

forEach() executes a function and loops through an array once for each element in the array. Map() executes a function and creates a new array that contains the results of that execution against each element. So Map() returns a new value, while forEach just calls the function against the elements in the array.

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

String, Number, Boolean, Undefined, and Null. Arrays can hold multiple data types within them. 

3. What is closure? Can you code out a quick example of a closure?

A closure is an inner function that has access to an outer function's variables. 

var elNumero = function(n1) {
    return function(n2) {
        return n1 * n2;
    }
}

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

Explicit Binding
Explicit binding uses call, apply, and bind to call a function in the global scope against the object. 

Implicit Binding
Most common use of this. When a function is invoked using dot notation, the object in that dot notation is the thing that this is referencing. 

Window Binding
When this is not specified and a function using it is invoked without using explicit, implicit, or new binding, it defaults to the window object.

New Binding
When a function is invoked using the new keyword, the this keyword is bound to the new object being constructed.
