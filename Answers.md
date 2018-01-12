# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


1. Describe some of the differences between `.forEach` & `.map`.
2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
3. What is closure? Can you code out a quick example of a closure?
4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)


### Differences between .forEach and .maps
.map automatically returns an array to the user. It also return the same or transformed values with the same length.
.forEach is more versatile as you can make any adjustments that are being passed through the function. Values can be returned or discarded. Unlike .map which forces you to keep all of the data in an array.

###  Types in JavaScript
Arrays are like objects, except with methods. You can place any data type in an array.
Null represents a value that can be expected but it's not represented. It resembles the absence of a value.
Number is data type that can be used to evaluate numerical values.
String is anything that represents characters enclosed ""
Objects written with curly braces used to store values enclosed with {}

## What is closure
A function defined in a function that is created and remembers the lexical environment in which it was created in.
Closures only exist when your inner function is making use of variables
outside of the your closure scope, not  limited to the outer functions scope but also the global scope. Closures do not exist if you are not making use of the variable outside of the closure scope.


###What is 'This'
This is a reversed keyword in javascript in which we cannot set it as variable.
The value of keyword is determined by the execution context of the function.
When 'this' is not in a declared object the key word 'this' is equal to the global object.
When the keyword this is found inside of a declared object the value of this will be the parent of object
call,apply,bind will set the value of the key word This.
The keyword new will create a user defined object, automatically creating the value of this.
