1. Describe the biggest difference between `.forEach` & `.map`.
	
	`.forEach` iterates the function for each array element.
	`map` creates a new aray based on the call of the function

2. What is the difference between a function and a method?

	According to W3Schools, a JavaScript function is a block of code designed to perform a particular task. I is executed when "something" invokes (calls) it.

	According to W3Schools, JavaScript methods are actions that can be performed on objects and are stored in properties as function definitions. 

3. What is closure?

	A closure is a function having access to the parent scope, even asfter the parent function has closed.

4. Describe the four rules of the 'this' keyword.
	
	Window - default; will happen when there is no variable identified.
	New - allows `this` to create a new object
	Implicit - refers to whatever is placed to the left of the dot
	Explicit - uses call, apply and bind to say what a function is going to be. Call makes you indicate each argument individually, apply allows you to use an array and bind gives you a new array you can call later.

5. Why do we need super() in an extended class?

	Super is used to give the child access to the parent's objects and call functions. 
