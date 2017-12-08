# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
    Describe some of the differences between .forEach & .map.
.forEach doesn't return values. It calls the function for each array element.  Then ends, and what is returned is not used.
.map calls the function for each array element.  It takes those values and builds a new array.  It does not change the original array

    Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
Number, string, Boolean, null, and undefined
Arrays are used to store multiple values under a single variable.

  What is closure? Can you code out a quick example of a closure?
Closure is an inner function that has access to an outer function's cariables.  It can access its own variables, outer variables, and global variables. It can't call outer function's arguments but can call its parameters.  Inner functions still have access to outer functions even when the outer function has returned.  Closures store references of outer functions but not the actual values.
function begining(firstName, lastName) {
	function fullName() {
 	  return firstName+ ' ' +lastName;
}
return fullName();
}
console.log(begining('Tiffany', 'Robbins'));
Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
1. When a function is in the global scope, the value of thin inside that function is a window object.
2. When a function is called by a preceding dot then this is used. ex this.car
3. When using constructors this is the specific instance of an object that is created and returned by the constructor function.
4. When call or apply is used, this is defined
