# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)





## Describe some of the differences between .forEach & .map.
 1. Map accumulates all of the results into a collection.
 2. Foreach does not return anything.
 3. Map is usually used to transform a set of elements with a function
 4. Foreach executes an action for each element (hence the name foreach?!)



## Name five different Types in JavaScript. A Type is something that can represent data. 
 1. Boolean - True/False
 2. Null - Indicates that a variable points to no object(is nothing) and is assigned  the value of null.
 3. Undefined - A variable that doesn't have a value. Has no assignment, unlike null which is purposely assigned.
 4. String - A string is a text data type. Sort of JavaScripts' way of writing sentences.
 5. Number - Simply represents numerical values. 

## What is so special about Arrays?
They are Ryan's favorite tool! Jokes aside, arrays are great. It simplifies listing data, and have a lot of ways to access/change/transform information, from slicing and splicing to flattening, the possibilities are almost endless!



## What is closure? Can you code out a quick example of a closure?
A closure is basically a function inside another function, which has access to its' own variables as well as the outer functions' variables and the global variables.
 ```javascript
function myName (first, last) {
    var myNameIs = "My name is ";
function thisName () {
    return myNameIs + first + " " + last;
}
return thisName();
}
myName("Travis", "Simpson");
 ```

## Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)

1. In the global scope, the value of "this" is the window Object.
2. When implicitly binding a function with a dot, the function left of said dot will be the context for "this".
3. When a constructor is used, the object you  create with the keywork "new" will become the context for "this".
4. Explicit binding using ".call" or ".apply" or ".bind" (.bind being the primary one I remember us using!) will become the context for "this".