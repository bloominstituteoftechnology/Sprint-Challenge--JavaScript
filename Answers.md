
#h1 Describe some of the differences between .forEach & .map.

#h6.map creates a new array by calling a function on each element while forEach iterates the attached function for each element and allows for a callback to mutate the existing array. .map is also faster than .forEach. Usually map() is used when you have an array that you are changing while forEach is good in cases where you are trying to do something with existing data such as moving it or deleting values. You can use .map anywhere you can use forEach but not vis versa.
#h1  Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?

#h6 NULL,Bolean, Undefined,Number and String. Arrays are special because they are actually considered Objects in javascript but also have some unique characteristics. They have a length property and many other useful methods for manipulating elements inside them.

#h1  What is closure? Can you code out a quick example of a closure?
#h6 Closures let you define function scope and help isolate variables. Closures `remember` the context of their creation and affect which variables they can access outside of their enclosing function. Basically allowing you to access even after the variables you are trying to access have been returned.

ex.```
	let num = 1;
	function test(x){
	let y = 10;
		function foo(z){
		let w = 5;
		return num*y
		}
	return foo;
	}
	```

#h1 Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
#h6
   1. If a function is in the global scope, `this` inside the function will refer to the window object on the DOM.
    2. The default binding for `this` refers to the function call.
    3. In constructor functions, this refers to the unique object created. 
    4. By using the call or apply methods you can explicitly
    define `this`.
