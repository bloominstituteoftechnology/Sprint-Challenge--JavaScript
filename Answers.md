# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. Describe some of the differences between `.forEach` & `.map`.
# ForEach
forEach creates a loop for us and using the callback that we give it it goes through each item in an array. it changes the original array.
# map
map will create a loop and run a callback. map will create a new array and change every item on the array based on the callback its given. It will then give us the new array. it does not change the original array.
2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
strings, booleans, numbers, objects, arrays.
Arrays are great because thy allow you to store multiple values in a single variable.  thse values are accesible to you by the items index number. each item in the array is represented by an index number starting at 0.
3. What is closure? a variable being created withing the function scope. in that way it is only vailable within that function.
 Can you code out a quick example of a closure?
 var add = (function (){
     var counter = 0;
     return function (){
         return counter += 1;
     }
 })
4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
rule 1 - Global window: functions that are in the global scope.  they are considered methods that are in the window object. reaches out and grabs the closest context.
rule 2 - Implicit binding: Javascript the compiler will imply what 'this' is being called in. What the context is.
rule 3 - the new keyword: creates new "this" context when used on an object.
rule 4 - explicit binding: we can tell javascript what the context is using three methods call(), apply(), and bind().