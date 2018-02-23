# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. Describe some of the differences between .forEach & .map.

`.forEach` iterates over an array and invokes a function on each element. `.map` does the same but takes the return from each and puts it into an array, which it then returns.

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

Number
Null
Undefined
Boolean
Object
String

Arrays are objects that have indexed values which gives them a specific order. This makes them very easy to iterate over (using the Array.prototype methods).

3. What is closure? Can you code out a quick example of a closure?

A closure gives access to an outer scope from an inner function. 

```const givePizza = 'Have a slice of pizza!';

function gimmiePizza() {
    return givePizza;
}

gimmiePizza();```

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

* Global - when the function is invoked in the global space `this` will point to the global object
* Implicit - when the function is invoked with a dot in front `this` will point to the object before that dot
* new - when the function is invoked from a class constructor `this` will point to the new object that is created
* Explicit - when the function is invoked with a `.call()` or `.apply()` method this will point to the parameter given