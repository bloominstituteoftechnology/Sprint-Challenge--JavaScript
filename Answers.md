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
4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time
	1. words 
	2. words
	3. more
	4. words
