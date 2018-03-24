# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. .foreach calls each element in an array to return them individually, whereas .map calls each element only to creat a new array.
2. Types
	- String
	- Number
	- Boolean
	- Null
	- Undefined
	- Arrays are special because they hold the values of all the types
3. A closure is like a function within a function but still has access to data from its surrounding function
	
	function schoolName() {
		var name = "Lambda";
		function returnName() {
			alert(name);
		}
		returnName();
	}
	schoolName();


4. .this
	- Window Binding
	- Explicit Binding
	- New Binding
	- Implicit Binding
