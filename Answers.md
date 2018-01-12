# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

## Questions - Self Study - You can exercise your Google-Fu for this and any other _Sprint Challenge_ in the future.
1. Describe some of the differences between `.forEach` & `.map`. 
- forEach mutates the original array and map creates a new one.
2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
2.1 Boolean (true/false) // Null // Undefined // Number // String. | An array can store multiple values.
3. What is closure? Can you code out a quick example of a closure?
3.1 Closure gives a child function access to the parent functions variables.
  const Answer = () => {
    let closured = 0;
    return () => {
        return closured;
    }
  }
4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
- At top level closure refers to the window. // What is the object this is calling?
- Look to the left of the dot. // 
- .bind / .call / .apply (Explicitly setting this)
- Constructors, new, class // this is used to refrence the instance
