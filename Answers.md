# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


1. *.forEach* will go through each item in an array and check for any parameters you set. *.map* will go through each item and create a new array with any parameters you set.

2. Integer, String, Boolean, Array, Onject. An Array can hold a list of other types of data, and other arrays, so that they can be stored and retrieved when nessecary. 

3. a function inside a function that has access to the outer function's variables. 

function hi(name){
    return(`Hi ${name}, how are you?`)
}

4.  a. when function represents the global scope "this" is the window         object.
    b. when you call a function with .name, "this" goes before the dot, this.name, and is the object.
    c. when creating a constructor function, "this" refers to the function being called. 
    d. when .call or .apply are used, "this" is what they are calling.