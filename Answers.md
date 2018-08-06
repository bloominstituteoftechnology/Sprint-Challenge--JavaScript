# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. Describe some of the differences between `.forEach` & `.map`.

.map returns a new array while .forEach doesn't and allows a callaback function to mutate the current array.

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

Strings, Numbers, Booleans, Arrays, Objects. Arrays are a special kind of objects;

3. What is closure? Can you code out a quick example of a closure?

A closure is an inner function which has access to its outer function's variables.

```var person = 'Bruce Wayne';
   function greetPerson() {
       console.log('Hello, ' + person + '!')
   }
   greetPerson();
```

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

* In the global scope, the value of this refers to the window/console object.
* If a function is called by a preceding dot, the value of this refers to the object before that dot. 
* If a constructor function is used, the value of this refers to the specific instance of the object that is created and returned by the constructor function.
* If a call or apply method is used, the value of this is expilcitly defined.