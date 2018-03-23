# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

Describe some of the differences between .forEach & .map.
forEach doesnt actually return anything but it is able to mutate the array
map isnt alloud to mutate the array but it will return a new array that is almost a clone of the orignal just mutated

Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
objects, strings, booleans, numbers, and arrays.
what makes arrays so special is the fact that you can store any other data type in an array best practise is to only store 
one data type in an array but if you wanted you could store every data type at once in the array including other arrays

What is closure? Can you code out a quick example of a closure?
closure is an attempt at a self aware function done by nesting a function and variable in a function psuedo is 
somefunction 
a control var to fake self awareness
the real function
manipulates control var
does something
updates control var

Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
the 4 rules are implicit binding which is to the left of where it is called 
window binding witch is where this refers to your browsers window 
new binding where it is used in object constructors not defined untell that constructor is used
explicit binding where it is used with something like call to direct what this means to the right