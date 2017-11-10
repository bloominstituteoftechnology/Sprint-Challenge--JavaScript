# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

Describe some of the differences between .forEach & .map.
	Foreach just iterates over array elements and map iterates over each element in an array 
	using a given function then returns the result in a new array.


Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
	string, number, boolean, object, array
	Arrays can store a list of data in sequential order and can also be iterated over using loops. 


What is closure? Can you code out a quick example of a closure?
	When an inner function can reference the variables of it's outer function. 

	const outFunction = (cb) => {
		innerFunction () {
			cb(n);
		}
	}



Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
	
	1. Global/window this points to that object
	2. Implicit binding where the object used before the "." refers to that object
	3. New Binding where this refers to the object where the new keyword is called 
	4. New binding where the call or apply methods are used refers to this 
