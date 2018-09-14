1)	 Describe the biggest difference between .forEach & .map.
-->  .forEach() works similar as for loop, using .forEach() you can iterate through every element in the array, .forEach() method doesn’t 
     return anything.
     .map() method will also call a provided function on every element in the array. The difference is that map() utilizes return values 
     and actually returns a new Array of the same size. 


2)	 What is the difference between a function and a method?
-->  In programming, function is a  named section of a program that performs a specific task. In javascript you can define function 
	 anywhere in your program because of HOISITNG. 
     A function defined inside of an object is known as method. 


3)	 What is closure?
-->  A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain. The closure has three 
	 scope chains: it has access to its own scope (variables defined between its curly brackets), it has access to the outer function's variables, and it has access to the global variables.


4)	 Describe the four rules of the 'this' keyword.
-->  window Binding : If nothing is bound with 'this' keyword, it will try to go to global object window.

	 Implicit Binding : Implicit binding for this occurs when dot notation is used to invoke a function.

	 Explicit Binding : Explicit binding of this occurs when .call(), .apply(), or .bind() are used on a function.
		                We call these explicit because you are explicitly passing in a this context to call() or apply().

     new Binding  :  whenever we’ve got a function invoked with the new operator, the this keyword here is bound to the new object being 
                     built by the function constructor.


5)	  Why do we need super() in an extended class?
-->   It's often used in constructors to initialize the parent class with the supplied input parameters of the extended child class.
