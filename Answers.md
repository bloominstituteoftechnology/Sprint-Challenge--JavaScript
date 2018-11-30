
1. Describe the biggest difference between .forEach & .map.
    * .forEach iterates through an array and executes a function for each item in the array. .map does the same as .forEach except it creates a new array based on the function being executed each iteration. 

2.	What is the difference between a function and a method?
    * A function is an object on the global window that can be used to perform logic and construct objects. A method is a function that is a part of the prototype of an object. 

3.	What is closure?
    * Closures describes the scope and use of variables when a function is created. Whenever a function use a variable outside of its local scope it creates a closure. An example would be a function that is nested inside of a function, which uses a variable from the base level scope. 

4.	Describe the four rules of the 'this' keyword.
    * Global binding means the value of ‘this’ is bound to the window object. 

    * Implicit binding means the object to the left of a method when called will receive the context of ‘this’.
	
    * New binding refers to the creation of new objects. ‘this’ will receive the context of the new object created by a constructor function. 
	
    * Explicit binding is created whenever the call or apply method is used. ‘this’ will refer to the object specified within the call or apply methods. 

5.	Why do we need super() in an extended class?
	
    * super() in class creation replaces the call method on child objects which defines the context of ‘this’. Once super is called, ‘this’ will now refer to that object created from the child class and not the parent. 
