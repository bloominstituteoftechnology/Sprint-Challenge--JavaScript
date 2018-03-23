# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


1   Describe some of the differences between .forEach & .map.
    -forEach iterates over an array and returns each item in the array. .map also does the same but give us the ability to pass each item of the array through a cb function, transform it, and then returns that transformed item inside of a new array. The original array remains unscathed. 


2   Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
    * Objects
        
        -Arrays : Arrays are a special type of object. The key is the 0 index. Arrays have special built-in methods which allow manipulation of stored information/values.
        
        -Functions
    
    * Strings
    
    * Numbers
    
    * Boolean
    
    * Null / Undefined


3   What is closure? Can you code out a quick example of a closure?
    - Closure is the accessibility created within nested environments. Closure allows a nested function to access the value of a variable for example that may not be declared in it's immediate environment, but instead is declared in one of the outer environments. 

    let pet = 'cat'
    function myPet() {
        console.log(`I love my ${pet}`)
    };


4   Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
    - implicit Binding
        * 'this' points to the object within which it is being used
   
    - Explicit Binding
        * .call / .apply / .bind

    - New Keyword
        * 'this' points to the new object being created using the constructor function

    - Global/Window
        * if no object is referenced, then 'this' refers to the global object which in the browser is the window. 