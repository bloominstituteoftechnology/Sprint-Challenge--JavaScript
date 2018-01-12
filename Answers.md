# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. Describe some of the differences between .forEach & .map.

   .forEach will only iterate over each element in an array and over every element. forEach also can't be used to iterate over anything that isn't an array. forEach also doesn't return a value inherintly like Map.

   .map always returns an array and can map both key and value at the same time. Maps can also return any value including functions, objects, etc.

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
   
   1. Object
   2. String
   3. Number
   4. Bool
   5. Array
      Arrays, like objects act as a container for other types. They also have a .length method which objects do not. Arrays also have .prototype methods attached that allow iteration


3. What is closure? Can you code out a quick example of a closure?

   Closure allows an inner function to keep a count or variable in memory after the outer function has been run.

   ```
   const counter = () => {
      let count = 0;
      return () => {
      count++;
      return count;
     };
   };
```

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time

   1. Outside a function this refers to the window object
   2. Arrow Function break this
   3. This inside a constructor refers the object the constructor is being used to create.