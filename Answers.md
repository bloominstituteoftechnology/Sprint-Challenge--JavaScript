# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. Describe some of the differences between `.forEach` & `.map`.

With `.forEach`, each element of an array calls a function for that element, through the whole array. Does not create a new array
With `.map`, each element of an array calls a function for that element, through the whole array, passing those values to a new array.

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

--* Boolean - `true` or `false` statement 
--* Number - any number, with or without decimals `15, 1.0, 1000000000000`
--* String - a line of text characters `This is a string.`
--* Arrays - an index of items that can be any data type, includeing arrays `[this, is, an, array, 100, [another, array]]`
--* Object - an index of both `properties` that come in `key` and `value` pairs, and functions, which are called `methods`
`const obj = {this: is, an: object}`

Arrays have a lot of convenient methods that allow you to manipulate the items inside it, unlike other data types.

3. What is closure? Can you code out a quick example of a closure?

The scope in which something exists in a lexical environment
#   let globalVar = 'global';  
#   localFunction = () => {    
#       let localVar = 'local';
#   }                          
`globalVar` is accessible by any function, while `localVar` is only accesible by the function `localFunction`

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

Principle 1: Global - If function is in global scope, `this` will be the window object
Principle 2: Preceding Dot - If a dot is before `this`, this item before `this` is what is bound to `this`
Principle 3: Constructor Function - when a constructor function is used, the specific instance of that object will be the target for `this`
Principle 4: Call and Apply Methods - If `call` or `apply` is used, this will point to what is explicitly defined
