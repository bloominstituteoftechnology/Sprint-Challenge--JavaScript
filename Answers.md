
1: Describe the biggest difference between .forEach & .map.

.map() creates a new array and for each doesnt return anything on its own.

2: What is the difference between a function and a method?

All data that is passed to a function is explicitly passed.
A method is a piece of code that is called by a name that is
associated with an object.

3: What is closure?

Closure gives you access to an outer function's scope from an inner function. 

4: Describe the four rules of the 'this' keyword.

	1:Principle 1: Window/Global Object Binding: 
	When in the global scope, the value of “this” 
	will be the window/console Object;
	
	2:Principle 2: Implicit Binding:
	Whenever a function is called by a preceding dot,
	the object before that dot is this.

	3:Principle 3: New binding: 
	Whenever a constructor function is used, this 
	refers to the specific instance of the object 
	that is created and returned by the constructor 
	function.

	4:Principle 4: Explicit binding:
	Whenever JavaScript’s call or apply method 
	is used, this is explicitly defined.

5: Why do we need super() in an extended class?

The super keyword is used to access and call functions on an object's parent.
