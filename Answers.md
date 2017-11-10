# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

# Describe some of the differences between .forEach & .map.
The biggest difference between .forEach and .map is that .map accumulates all of the given results into one collection, whereas .forEach returns nothing.

.map is used when you want to transform a collection of elements whereas .forEach just executes an action for each given element.
# Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
1. Strings
2. Booleans
3. Objects
4. Numbers
5. Arrays - these are special because they can be a collected list of any other Type (any of the Types listed above!)

# What is closure? Can you code out a quick example of a closure?
Closure is created whenever you define a function; it is the culmination of a function and the environment in which that function was declared. Essentially it is a function that has access to the parent scope even after that parent function has closed.

let myNum = 0;
return () => {
    return myNum += 1;
  };
);  

# Describe the four rules of the 'this' keyword.
1. Global Scoping - If a function is containted in the global/window scope, the value of .this inside that function will be the global function. Functions within the global scope are methods on the window/global object, so calling automatically refers to that window object. .this will point to that window object.

2. Implicit Binding - If a function is called by a preceding dot, the object before that dot will be .this. Essentially the same as rule 1 - instead of referring to the window object, .this will refer to the object left of our dot.

3. New Binding - If a constructor function is used, .this will refer to the specific instance of the object that has been created and returned by that constructor function. Now, instead of referring to the singular window object, .this will refer to a unique object stored within the variable.

4. Explicit Binding - If the .call or .apply methods are used, .this is explicitly defined. Since these two methods allow you to exectue functions on different ways, this first argument passed to either of these will explicitly set what .this is pointing to.