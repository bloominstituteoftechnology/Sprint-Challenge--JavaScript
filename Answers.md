Describe the biggest difference between .forEach & .map.

While both cycle through an array and act upon a function per item, forEach() returns
a new array, while map() will manipulate and return the old array.

What is the difference between a function and a method?

A method is a function that is defined within an object or class, making
all methods functions, but not all functions methods.

What is closure?

Closure is a kind of scope that comes from nested functions. It acts upon the lexical
environment and location of variable declaration to pull that variable from the outter function
to the inner without it being directly passed, or being redefined.

Describe the four rules of the 'this' keyword.

the rules or bindings of 'this' work as follows:

1. Window Binding, the default binding for this, where this refers to the Window 
	`Object. Can be overridden with "use strict"

2. Implicit Binding, when JavaScript determines where this points, to know look 
	to the left of the dot in the function call, thisObject.function()

3. Explicit Binding, when You determine where this points, the function 
	containing this is standalone, and must be couple with .call(), .apply(), or .bind() to know what this is.

4. New Binding, allows you to use an obect template to create new instances of an 
	object which is used as this for the method being called.



Why do we need super() in an extended class?

super allows us to pull attributes or properties from the parent class to the child
class in the way that 
`ChildExample.prototype = Object.create(ParentExample.prototype);`
would work
