# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. Describe some of the differences between `.forEach` & `.map`.
Answer: forEach applies a unction to each array item .map creates a new array with a function applied to each new item.

2. Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
Answer: Number, String, Object, Null and Boolean. Arrays are actually Objects and are not considered Types.

3. What is closure? Can you code out a quick example of a closure?
Answer: Closure is a function declared within a function which has access to the variables of the closing/outer function

4. Describe the four rules of the 'this' keyword. No need to provide examples about it this time :)
Answer: 1. when a function is contained in the global scope, this inside the functionwill be the window obj.
2.when function is called by a preceding dot, the object before it is equal to this.
3.When a constructor function is used, this. is the instance of the object that is created and returned by the constructor function.
4.Whenever .call or .apply  is used, this. is explicitly defined.
