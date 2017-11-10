# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
1. Describe some of the differences between .forEach & .map.
..* for each iterates through a list like a for loop would whilst map, iterates through a list and  makes changes to the list.

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
..* Number
..* boolean
..* string
..* object
..* array 
..* Arrays are special because they are a short form of an ordered  numbered key value pair which starts from 0. They are also a form of object.

3. What is closure? Can you code out a quick example of a closure?
..* closure is a function that is able to access a private variable;
..* const func = (input) => {
	const variable = 70;
}
	return (variable) => {
	variable + input;
}

console.log(func(33));
in this example the anonymous fuction that is returned is able to access the variable constant because they are in the same scope.

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
..* Used to bound to a new object being constructed with  a constructor.
..* "This"  is used on an objects prototype chain.
