# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

Describe some of the differences between .forEach & .map. :: One main difference between map and forEach is that map will create a brand new array that has been changed whereas the changes that forEach makes are only done within that moment and not held in memory on the array after the loop is finished.

Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays? :: Null, Undefined, String, Number, Boolean.  Arrays are objects and can have nested arrays of data types which can be any of the above.

What is closure? Can you code out a quick example of a closure? :: closure is when an inner variable or function being called can referenced an inner or outter function within it's scope.  There are global and local scopes.  Global scopes are accessible at any time in a program, whereas local scopes exist within the function.  
const nothing = [];
const something = function () = > {
	if (n === 0) {
	return something = nothing;
 }
}

Describe the four rules of the 'this' keyword. No need to provide examples about it this time :) :: Global Binding is when this will reference the window where the current function is being called. Implicit binding is whenever the most recent property within an object is being referenced. New binding is when a constructor is needing to access properties on another object.  Principle binding is used to call or apply methods that will override the constructor.