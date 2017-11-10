# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

# 1. Describe some of the differences between `.forEach` & `.map`. 
     
     .forEach is a loop that applies an operation to each list item. ForEach does not return something.
     .map is a loop that creates a new list after performing a transformative task on each list item. Map returns something.

# 2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
     
     String
     Number
     Boolean
     Null
     Undefined
     Symbols (added in ES6)

     Arrays can store multiple data types.

# 3. What is closure? Can you code out a quick example of a closure?

     In JavaScript, functions are not Just functions, they are Also closures. What that means is that the function body has access to variables that are defined Outside of the function.

     let me = 'Austin';
     function greatMe() {
         console.log(me + 'Says Hello!');
     }

     This function is able to, in real time, look outside of its own scope and find the variable 'me.'
# 4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
     
     Principle 1: Window/Global Binding - When in the global scope, the value of 'this' will be inside the window/console object.
     Principle 2: Implicit Binding - Whenever a function is called by a preceding dot, the object before that dot is this.
     Principle 3: New binding - Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function.
     Principle 4: Explicit binding - Whenever JavaScript’s call or apply method is used, this is explicitly defined.