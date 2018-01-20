# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Describe some of the differences between .forEach & .map. ##
* `.forEach` executes a callback function on each element of an array.  Like `.forEach`, `.map` also executes a callback function on every element of the given array, but it creates a new array.  `.forEach` return `undefined`, where `.map` returns the new array created.

## Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays? ##
* Number
* String
* Boolean
* Array
* Object
* undefined
* Null
* Arrays are objects that have index numbers.  They are good if the order of the data is important.  An array can hold any data type, and can nest.

## What is closure? Can you code out a quick example of a closure? ##
* A closure is the combination of a function (enclosed), grouped with references to its surrounding code. Closures give access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
* Because the enclosed variables are only in scope within their outer function, closures are the way to enable data privacy in JS.
* Example:

function myMoney (name) {
    let str = "My name is ";
    // inner function has access to the outer function variables, and parameter​
   function printMoney (dollarAmount) {
        return str + name + ", and I have $" + dollarAmount;
    }
    // outer function does not have access to dollarAmount variable.
    return printMoney; // but it is "reached" by calling the printMoney function, which returns another value that uses that information.
}
​
## Describe the four rules of the 'this' keyword. No need to provide examples about it this time :) ##
* Global (Window) - grabs the context of the nearest object
* Implicit Binding - the compiler will imply the context of object, context depends on how function is called
* New keyword - the closest object context is the new object that is being created, so "this" always refers to the new object
* Explicit Binding - using call, apply, or bind, "this" context is specified explicitly.
