# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

# Describe some of the differences between `.forEach` & `.map`.
 * `map` will iterate over an array and return a new array of elements with the callback function applied to each item.
 * `forEach` will iterate over an array and do something with each elements in the callback function (e.g. modifying elements in the array). It will not return a new array like `map`.

# Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

 * String, Number, Boolean, Array, Object
 * Arrays store elements in an indexed order

# What is closure? Can you code out a quick example of a closure?

 * Closure allows you to access the outer scope from within a function. However, the outer scope will not be able to directly access the state of the inner scope.
 ```
 function makeCounter() {
   let counter = 0;

   function incrementCounter() {

     counter++; //can access the outer scope from here
     return counter;
   }
   return incrementCounter;
 }

 let myCounter = counter; //won't work -- the counter variable is in an inner scope we can't access from here

 let myCounter = makeCounter();
 console.log(myCounter()); // 1
 console.log(myCounter()); // 2
 ```

# Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

 * Window binding - `this` points to the outermost scope (window/global)

 * Implicit binding - `this` points to the object before the dot

 * New binding - `this` points to the object created with the `new` keyword

 * Explicit binding - `this` points to context created with `.call` or `.apply`