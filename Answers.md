# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
'.foreach' iterates over a list and applies some operation with side effects to each list member (such as saving each one to the database for example)

'.map' iterates over a list, transforms each member of that list, and returns another list of the same size with the transformed members (such as converting a list of strings to uppercase)

+## Types
Null
String
Boolean
Number
Object/Array

a closure is a stack frame which is allocated when a function starts its execution

function sayHello(name) {
  var text = 'Hello ' + name;
  var say = function() { console.log(text); }
  say();
}
sayHello('Edson');

## This
 the object before a dot is `this`
 in a global conext, `this` refers to the window object
 in a constructor, this refers to the specific object that is made and returned by the function.
 when `call` or `apply` is used, this is explicit.
