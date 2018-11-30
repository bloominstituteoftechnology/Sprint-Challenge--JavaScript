Describe the biggest difference between .forEach & .map.

Map creates and returns a new array. ForEach does not and any changes cause the original array to be mutated.

==================================================================================================================
What is the difference between a function and a method?

A method id always associated with an object. A function can be as well, but does not have to be.


===================================================================================================================
What is closure?

A closure is when a function can look outside of its immediate scope to find thae value of a variable in
 its "Parent" function. i.e. a nested function can access the backpack of variables in the function it is nested in.

==================================================================================================================
Describe the four rules of the 'this' keyword.

1) Window binding. When no other assignment is made, 'this' defaults to the global scope, or window.

2) Implicit binding. Created when a function is invoked using dot notation. 'this' binds to what is to the left of the dot.

3) Explicit binding. 'this' is told what to bind to by use of call, apply and bind. It binds to the first parameter passed.

4) New binding. When you use 'new' to create a new object, 'this' is bound to the newly created object.

==================================================================================================================
Why do we need super() in an extended class?

Because it allows the extended class to have access tothe parent class's attributes and functions.
