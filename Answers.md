## Questions & Answers
1. Describe some of the differences between `.forEach` & `.map`.
	- The `.map` method differs in that it memorizes a closure array and returns that, where `.forEach` acts upon the caller.
2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
	- String, Number, Boolean, Object, and the super special Array which is able to be typed even further ie as uint8 clamped arrays. On its own the Array doesn't care what type you hand it, much like an object but this is only the default.
3. What is closure? Can you code out a quick example of a closure?
	
	```	
	 {const closure_gun = function(bullet = 0) {             return (
	) => console.log(`${bullet > 0 ? --bullet + ' shots.': '*click*'}`)}
    let bullet = closure_gun(3);
       bullet()  //
      bullet()//
     bullet()
    bullet()}
	```
	Can you spot it? The closure is formed in the argument passed on ln 11. This goes to show that even parameters can become the closure especially in the case of currying.

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time
	1. This refers to the object in scope. If there is no object, this refers to the Window or the Console.
	2. Outside of the object we wish to touch, using `<name>.SomeMethods()` we have changed context to this (<name>) until it comes out of scope.
	3. By using `new` we can create an instance of a valid this context.
	4. Some functions or methods can explicitly set the `this` ei call, apply, bind
