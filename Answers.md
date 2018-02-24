# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1)  .foreach: this iterates and operates over an array.
		.map: this iterates over an array, transforms the data of each element, and returns another array of
			  the same size.

2)	String, Boolean, Number, Null, Undefined
	We can store a list of data in an array by declaring one variable rather than assigning a different
	variable for each element of the list.
	
3)	A closure is the combination of a function bundled together with references to its surrounding state.
	It gives you access to an outer function's scope from an inner function.
	const counter = () => {
	let cx = 0;
	return () => {
    cx++;
    return cx;
		};
	};
	
4)	a)	Whenever a function is contained in the global scope, the value of 'this' inside of that function will 
		be the 'window' object.
	b)	Whenever a function is called by a preceding dot, the object before that dot is 'this'.
	c)	Whenever 'call' or 'apply' methods are used, 'this' is explicitly defined.
	d)	Whenever a constructor function is used, 'this' refers to the specific instance of the object that is 
		created and returned by the constructor function.