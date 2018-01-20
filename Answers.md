# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### Describe some of the differences between `.forEach` & `.map`.
* forEach is a method that allows you to loop over an array. It calls a     provided function (callback) on each element in the array. The forEach method will affect and change the original Array. The forEach method throws away return values and returns undefined. 
* Map is also a method that calls a provided function on each element in the array. The difference is that it returns a new array, leaving the original array unchanged. The map method allocates memory and stores return values. 
### Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
* Boolean, Number, String, Null, Undefined
* An array is a type of object. It behaves differently from regular objects. Every new array inherits extra methods from Array.Prototype. An array can do everything that an object can do plus more. 
### What is closure? Can you code out a quick example of a closure?
* Closures gives you access to an outer function's scope from an inner function.A closure is created when a function is defined.The closure encompasses everything the defined function can access. Without closures it would be hard to implement something like a callback. Closures are related to scopes, but they are not the same thing. 
* Coded example
```JavaScript
var G = 'G'
function functionA() {
    var A = 'A';

    function functionsB() {
        var B = 'B';
        console.log(A, B, G)
    }

    functionB();

}
 functionA();
```
* In this example two closures are created within the two functions defined. Function B is able to access it's own scope plus funcrionA() scope and the global scope. 
### Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
1. Global-  Whenever a function is contained in the global scope, the value of _this_ inside of that function will be the window object. 
2. Implicit- whenever a function is called by a preceding dot, the object before that dot is _this_.
3. _New_ Keyword- Whenever a constructor is used, _this_ refers to the specific instance of the object that is created and returned by the constructor function. 
4. Explicit- When the call, apply, or bind methods are used, _this_ is explicitly defined
