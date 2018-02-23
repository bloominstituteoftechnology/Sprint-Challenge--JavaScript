# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

# 1)
# forEach() will run a function for the amount of elements there are in that array while
# map() will make a new array and call a function on each element for that array
#
# 2)
# - Integer: holds numerical values
# - Boolean: holds true or false (0/1)
# - String: holds characters in quotation '' to represent text
# - Object: a container of property/key values
# - Undefined: used to represent a variable that has not been given a value
#   Arrays can hold multiple values at a time and can be nested inside other arrays, similar to objects...
#   Arrays are basically like objects but with different methods
#
# 3)
# A closure is a function that has reference to its surrounding scopes/ environment .. so it can
# give you access to the outer scope from an inner scope function
# EG:
# function addCounter() {
#  let counter = 0;
#  function add() {
#   counter++
#  }
#  return add;
# }
# var testFunc = addCounter(); // initializes counter once
# testFunc() // keeps adding 1 from the testFunc reference being in the outer scope now
#
#
# 4)
#
# Implicit binding: This means that 'this' is going to reference whatever is to the left of the dot at the call time
#
# Explicit binding: for .call .apply .bind , function will be invoked and the 'this' inside the function will reference the first argument in those methods
# (you state what the this. keyword is as the first argument in .call, .apply)
#
# Window Binding: if you invoke a function with 'this' keyboard that isn't using any of the other 3 rules, it will default to the window object (window.property if you use # this.property)
#
# New Binding: This is used for constructors, when a function is invoked with the new keyword the this. keyword inside the function is bound to the new object
# being constructed
#
