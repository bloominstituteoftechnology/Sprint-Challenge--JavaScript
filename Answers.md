1. What is the difference between "forEach" and ".map" ?
	- The biggest difference of all is that .map() makes another
	array based on how you set up the functions arguments.
	and forEach excecutes a user defined function for each 
	element in the Array.


2. What is the difference between a function and a method
	- The primary differnce I have noticed is that Functions
	operate on their own outside of another block of code.
	- Methodes exist within classes,other functions and 
	objects, and typically use some of the data within said
	'objects'


3. What is closure?
	- Basically it's the layering of functions/code blocks that
	can access data and variables in the "parent" code block, and
	still maintains the potential to modifty parent variables.


4. Describe the four rules of the 'this' keyword.
	O- It goes in the following order..
	- Is the function called/used by using 'new'?
	- Has it been called by using call(),apply() or bind()?
	- Is it a method?
	- Has it been called as a global? Will you see "undefined"
	or will you see "window" by console logging 'this'?

5. Why do we need super() in an extended class?
	-Super is required to extend the parent's attributes or
	properties to the child/extension. Without it you're not
	really creating anything 'new'.

