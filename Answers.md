# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

future.
1. Describe some of the differences between `.forEach` & `.map`.
2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
3. What is closure? Can you code out a quick example of a closure?
4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)



1. .forEach loops through an array and invoke a callback function for each element and does not return anything. .map behaves the same, except it needs a return statement and pushes whatever that gets returned into a new array.

2. String, Number, Boolean, Object, Array, Null. Didn't know Arrays were that special. Could it be that they're the most used data type in javascript? or that they're easy to work with? or that Arrays have the most built in method? not so sure.

3. Closure is a way of hiding data from the global scope.

	 const closureCreator = () => {
	 	let closureData = 0;
	 	return () => {
	 		closureData++;
	 		return closureData;
	 	}
	 }

	 const increaseClosureData = closureCreator();
	 increaseClosureData();

4. (1) 'this' keyword does not work with arrow function. (2) When a method is called following a dot, 'this' keyword refers to the object before the dot (left of the dot). (3) If 'this' keyword is used on the global scope, it refers to the window oject. (4) When 'this' keyword is used inside a constructor, it refers to the instances of the object (class).
