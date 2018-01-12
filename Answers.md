# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


#H2 Self Study Questions
1. The major difference between forEach & map is that though both passes a function over every item in a given array, map creates a new array and forEach does not. 
2. 5 different types
   1. Arrays
   2. Objects
   3. Set
   4. Number
   5. String
   Arrays are special because as compared to Objects, Arrays are indexed at the expense of quicker search properties (which Objects have). They also have 
   a lot of built in methods which make it easier to pass functions through at every index, so having the ability to change an entire data set.
3. Closure is the concept of returning a function within a function, which gives the ability to play around with scoping.
   function closure(cb) {
     let cache = 0;
     return () => {
       return cache + 1;
     }
   }
4. The 4 rules of this in JavaScript
   1. Within the global scope, this refers to the window object
   2. This refers to the object before the dot
   3. This refers to the specific instance of the object a constructor function calls
   4. Call, apply, bind explicitly defines this