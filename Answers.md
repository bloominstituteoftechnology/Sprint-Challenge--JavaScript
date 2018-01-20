# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. Describe some of the differences between `.forEach` & `.map`.
`.forEach` goes through an array and puts each item through a cb function.  It changes the original array, though it doesn't return anything.
`.map` makes a new array with the values returned by the cb function.  The original array is unchanged.
2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
1 - String
2 - Number 
3 - Object
4 - Boolean
5 - Null / Undefined

Arrays are special because the return typeof 'object', which is true, but to better identify if an object is an array, use Array.isArray.

3. What is closure? Can you code out a quick example of a closure?
Closure has to do with where a variable is defined.  A variable defined within a function is closed-off to anything outside of that function.  A variable defined outside of a function can be accessed both from within a function and without.  

function add() {
    let counter = 0;
    counter += 1;
}
1 - Counter cannot be accessed outside of add(). 2 - counter doesn't build on itself, but keeps resetting back to 0.

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
1 - Global this goes up and grabs the nearest object for this.
2 - Implicit binding refers to the object that the method was called on.  It looks to the object left of the dot and that object becomes this.
3 - New keyword this is when an object is created from a constructor.  This refers to the specific object (child) and not the constructor (parent).  
