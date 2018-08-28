Describe the biggest difference between .forEach & .map.

The forEach method will loop through the entire array and callback every item but will not return anything
Map will create a new array of the item looped through and return it

What is the difference between a function and a method?

They are both functions, but the method lives inside an object and the context of 'this' is different according to functions outside of an object where 'this' is undefined

What is closure ?
Where global variables can be made private or global; an inner function has access to an outer functions variables.

Describe the four rules of the 'this' keyword.

window binding - the default value of 'this' when it is not pointing to any specific object
new binding - creating an instance of a class
implicit binding - when accessing with dot notation, whatever is to the left becomes context of 'this'
explicit binding - using call, apply, or bind

Why do we need super() in an extended class?
in order to call the parent's constructor 
