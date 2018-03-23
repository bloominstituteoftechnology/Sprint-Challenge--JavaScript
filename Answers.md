# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. Describe some of the differences between `.forEach` & `.map`.
Answer: `.forEach` is an iterator function that loops over an array & passes back an item/index. If you have an array, `.map` lets you carry out the same operation on every
element within your array and returns the same amount of items. Just make sure you return so you don't get undefined. 
The biggest difference between the two is that `.forEach` does NOT return anything where as `.map` does.

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
Answer: Arrays have a special `0 based` index ability. They store data based on 0. 5 different types are:
1. Variables
2. Arrays
3. Objects
4. Functions
5. Callbacks

3. What is closure? Can you code out a quick example of a closure?
Answer: Closure is a combination of a function and the environment within which the function was declared.

Example:
var me = 'Kaitlyn Flynn'
function greetMe() {
    console.log('Hello, ' + me)
}
greetMe()

Output: Hello, Kaitlyn Flynn

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
Answer:
1. Window Binding - If none of the below rules for implicit, new binding or explicit apply, 'this' will be defaulted to the window object unless you use strict mode.
2. Implicit Binding - Look to the left of the dot of your invocation (ex: dog.sayName();) so dog is what's being called out. 
3. New Binding - When you invoke a function as a new keyword, 'this' keyword inside the function is tied to your new object. 
4. Explicit Binding - When you are explicitly stating the 'this' by calling it out (ex: sayName.call(dog));) so in this case you're calling out dog explicitly. It tells the
fucntion what context 'this' will be used for by utilizing call, apply or bind.