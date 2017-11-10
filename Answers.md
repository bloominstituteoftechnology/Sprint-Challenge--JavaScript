# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. Differences between **.forEach** and **.map**.
###### The main difference is .forEach doesn't return a value, it just iterates through a list applying the results of a function to each element. Map on the other hand returns a new array with the values from the function. If you made an empty array, you could emulate .map by pushing the results into the new array, and then returning it.

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
* Boolean
* Null
* Undefined
* Number
* String

Arrays are unique because they are actually objects and can hold multiple values at one time. They are objects in that they have a property and value, where the property is the index and the value is what is at alement of said index.

3. What is closure? Can you code out a quick example of a closure?
A closure is an inner function that has access to the variables of all the outer functions via the scope chain. The closure has access to its own scope, the function it is in and the global variables.

const addNumbers = (x) => {
return (y) => {
  return x + y;
};
}

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

1. Whenever a function is in the global scope, this will be the window object, or the console object in node.
2. When a function is called by a preceding dot, whatever is before the dot is this.
3. When a conctructor function is used, this refers to the specific instance of that object and is returned.
4. When you use the functions call and apply, this is explicitly defined.
