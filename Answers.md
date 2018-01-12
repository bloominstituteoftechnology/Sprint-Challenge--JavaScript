# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


    Describe some of the differences between .forEach & .map.
    Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
    What is closure? Can you code out a quick example of a closure?
    Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)


# '.forEach' iterates over a list and transforms each element in that list. It doesn't return anything, it just calls itself over each element. Returns of those elements will need to be explicitly stated. '.map' similarly iterates over a list and transforms each element, but will build a new array of those transformed elements instead of discarding them (as .forEach does).

# The latest EMCAScript defines 7 data types: Boolean, Null, Undefined, Number, String, Symbol, & Object. JavaScript Arrays are especially special because they can hold a mix of different data types.

# Closure is what gives functions "private" variables. This way, the variable can only be affected from within the called function. Example:  
# function punc(str) {
#   let nStr = str;
#   function addExcite() {
#     return nStr + "!";
#   }
#   return addExcite(nStr);
# }
#
# 'nStr' is the private variable in this scenario. 'punc()' & 'addExcite()' are able to affect 'nStr', but functions outside of punc(str) would not be able to.

# (1) Whenever a function is contained in the global scope, the value of this inside of that function will be the window object. (2) Whenever a function is called by a preceding dot, the object before that dot is this. (3) Whenever a constructor function is used, this refers to the specific instance of the object that is created and returned by the constructor function. (4) Whenever JavaScript’s call or apply method is used, this is explicitly defined.
