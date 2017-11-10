# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

# Differences between .forEach and .map.
The main difference is **.forEach** doesn't return a value, it just iterates through a list applying the results of a function to each element. **Map**, on the other hand, returns a new array with the values from the function. _If you made an empty array, you could emulate .map by pushing the results into the new array, and then returning it._

# Name five different Types in JavaScript. A Type is something that can represent data. **What is so special about Arrays?**
1. Boolean
2. Null
3. Undefined
4. Number
5. String
**Arrays are unique** because they are actually objects and can hold multiple values at one time. They are objects in that they have a property and value, where the property is the index and the value is what is at alement of said index.

# What is closure?#  Can you code out a quick example of a closure? 
A closure is an inner function that has access to the variables of all the outer functions via the scope chain. The closure has access to its own scope, the function it is in and the global variables.
`const addNumbers = (x) => { return (y) => { return x + y; }; }`

# Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

1.	The window binding
2.	(implicit binding – whenever a function is called with a preceeding dot, the object before the dot becomes this)
3.	New binding -  Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function
4.	Explicit binding – Whenever JacaScript’s call/apply/bind method is used, this is explicitly defined