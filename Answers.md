# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. forEach will iterate over each item and do something to said items. map will iterate over and array and pump out a new array.

2. The 5 data types are:
	1. A string - a combination of characters, usually in quotes
	2. Number - self explanatory, any non alphabetical number
	3. Boolean - true or false, just like binary
	4. Undefined - self explanatory, also represented by itself
	5. Null - no value, represented by itself as well
		*. An array is special because it is a group of data types.

3. I'm honestly not quite sure but... When a function is nested inside another function, the nested function has access to the parent functions variables and other stuff, I think. It also might have something to do with a function being able to call on a variable that's been created on a global scope, I think.
	- ``` function parent () {
		let stuff = haveIt;
		
			function child () {
				return stuff;
					}
				]```

		(should return `haveIt`, I think)

4. The 4 rules are:
	1. Implicit binding - I believe, refers to the notation/syntax. When you're calling on a function called `call` you would say something along the lines of `david.call()` and it would look at what's left of the dot to see what to reference when calling on the function.
	2. Explicit binding - Allows us to specifically call on something in conjunction with certain commands.
	3. New binding - When you invoke a certain object with the `this` keyword it adds a new property to it.
	4. Window binding - I honestly don't quite understand this.