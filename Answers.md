# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. Describe some of the differences between `.forEach` & `.map`.
-For each iterates over lists and has an operation. Map iterates of a list and transforms it returning another list.
2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
-Booleans, strings, arrays, methods, functions. Arrays can carry multiple strings.
3. What is closure? Can you code out a quick example of a closure?
-When functions have access to variables outside of the function.
-var me = 'mark'
-function greeting() {
    console.log('hello, ' + me + '!')
-}
-greeting()

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
-Window/global binding this refers to the scope of the window
-Implicit binding when a function is called preceeding the dot that object is this
-Explicit Binding when this is accessed using .call or .apply methods.
-new binding when this is referring to a constructor function