# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1.Describe some of the differences between .forEach & .map
* forEach iterates over an array and invokes a function
* map iterates over an array and transforms said array into a new array with the provided function
* In general, it seems like forEach is better for accesser functions and map is better for mutator functions

2.Name five different Types in JavaScript. A Type is something that can represent data. What is so special 
about Arrays?
* I'm not sure if you mean something like int, double, character, string, boolean or if you are looking more for
something along the lines of const, let, function, class, constructor.
* They have an index starting from 0 that represents each element
* They have functions on their prototype that can be performed on the actual object without the need for the 
programmer to define them such as length and forEach
* They can hold any number of different data types and can hold arrays within themself for nested arrays.

3.What is closure? Can you code out a quick example of a closure?
* Closure I believe could be described as the idea that an outer function can have an inner function that has 
access to the variables of the outer function.  The variables will have persistant values until the program is 
exited.

const counter = () => {
	let counter = 0;
	return () => {
		counter++;
	};
};

4.Describe the four rules of the 'this' keyword. No need to provide examples about it this time.
* Refers to the window/global object
* Look to the left of the dot to know what this is referring to in the function.
* You can explicitly set what this refers to with .call, .apply, or .bind.
* This will refer to the object instance of the constructor.