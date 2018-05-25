# Your responses to the short answer questions should be laid out here using Mark Down.
1. Describe the biggest difference between `.forEach` & `.map`.
	.forEach: The forEach method is great for going through an array and using index to manipulate the data

	.map: Like .forEach, but .map will return a new array without mutating the original one.


2. What is the difference between a function and a method?
	A function can stand on its own and not dependant on any data type; but a method is a special function that depends on other data type, object, or class and can be called from other methods.


3. What is closure?
	is a function whithin a function (not a call back)


4. Describe the four rules of the 'this' keyword.
	- window/global binding: 'this' references the window object (small w not Window)
	- Implicit Binding: 'this' keyword will reference the object (when creating object literal)
	- Explicit Binding: we can use .call, .apply, or .bind and pass those methods a reference to what 'this' is point to.
	- New Binding: when we create a class and instantiate an object, the 'this' will now refer to that newly instantiated object. Each newly created object will have its own reference to 'this'.


5. Why do we need super() in an extended class?
	used to call the parent class 'constructor'  function and to inherit attributes from the parent.  Without it there would be no inheritance! 
