# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

#Question 1
### The difference between a `.forEach()` and `.map()` is that `.forEach()` is really good at doing one thing like itterating over a set of data and giving us an index and an item to use but doesn't return anything to us. `.map()` will return things to us.

#Question 2
### Arrays, Objects, Variables, Functions, Callbacks

#Question 3
### If a variable isn't defined in a functions scope, the function will look outside the scope into the outer scope for the variable reference, is in essance what closure is. 
### ```javascript 
###    const boo = 'ghost'; 
###    function returnGhost () {
###     return ghost;
###    }
### returnGhost(); ```

#Question 4
### Window Binding is when the value of `this` is referencing the global scope which will be the 'window' or console object.
### Implicit Binding is the most commonly used `this` syntax and it is invoked by a `.` to the left of the dot is when `this` is used.
### New Binding is used in a constructor function, which is a function that creates objects.
### Explicit Binding is using `.call()` `.apply()` `.bind()` overrides what a constructor object is set too.
