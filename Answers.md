# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.
1. Describe some of the differences between `.forEach` & `.map`.
* `.forEach` iterates over and performs an action for each element of an array by calling a supplied function. `.forEach` does not return the result of the operation.
* `.map` iterates over elements of an array, performs an action on all elements by calling a supplied function, accumulates all of the results into a new array, and remembers the result of each operation.
2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
* Number, String, Boolean, Null, Object. Arrays represent an object that stores an indexed collection of elements. Arrays have properties and methods that allow to perform useful operations over its elements.
3. What is closure? Can you code out a quick example of a closure?
* A closure is an inner function that has access to the outer function's variables. Closure function has three scope chains: it has access to its own variables, the outer function's variables, and the global variables.
```javascript
function circleArea(r) { 
  const p = Math.PI;
  function multiply () { 
      return p * Math.pow(r, 2); 
    }
    return multiply(); 
} 
​
circleArea(4); //Result 50.26548245743669
```
4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
* 1. if function is defined in the global scope, then 'this' inside the function refers to the global object (window object in web browsers).
* 2. if function is invoked by a preceding dot, 'this' refers to the object before the dot.
* 3. in case of a constructor function, 'this' refers to the specific instance of the object created by the constructor function.
* 4. with .call and .apply methods, 'this' is defined in the methods' parameter.
