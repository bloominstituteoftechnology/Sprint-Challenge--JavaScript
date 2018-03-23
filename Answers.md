# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. Describe some of the differences between `.forEach` & `.map`.
1A: .foreach performs an instruction on each index of the array and does not change the array
1A: .map  also performs an instruction on each index of the array, but it also returns a new array with the results of those instructions

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
2A: ABoolean, Null, Undefined, Number, String, Object
2A; Arrays start at index 0, and allow us to store data in them sequential based on 0. 

3. What is closure? Can you code out a quick example of a closure?
3A: closures are functions that reference variable outside their 'function' scope
3A: 
const greet = 'hi';
function greets () {
    return greet; // when greets is called, since greet does not exist inside the function scope, it will search the global scope
}    

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
4A:
-implicit: refers to the item that invoked it, directly left of the dot
-Window: refers to the global object window
-explicit: refers to the object that invokes .call .bind .apply methods
-new: refers to the new object created with the constructor function

