# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


1. Describe some of the differences between .forEach & .map.
-There is a few key differences. The biggest being that .forEach doesn't have a return value (it's return value is undefined), whereas .map returns an array. So if you want to a transform the elements of an array, .map is what you need to use.

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
-Five different data types: Boolean, Number, String, Null, Undefined. Arrays are just objects, but they can't be named. The advantage to arrays is that the items in them are always in the same order, so you can be sure of their place.

3. What is closure? Can you code out a quick example of a closure?
A closure is an inner function's access to an outer function's scope.

Example:

let bar = 'globalscope';
function thisisClosure(){
    return 'hello' + bar;
}

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
The four rules are explicit, implicit, window (global), binding.
