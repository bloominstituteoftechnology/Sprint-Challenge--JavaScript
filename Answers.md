# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
1. forEach iterates over an array accepting an array's item, index and whole array as arguments (also 'this' to bind to something but i did not research into it yet). Map iterates over an, changes values and produces a new COPY of an array not changing the original one.

2. Numbers, Strings, Bolean, Null, Undefined and Object. Arrays are collections of items which we can interact with thanks to indexes which act as 'keys' similar to real objects. Arrays inherit from Array.prototype which introduces plenty of useful methods like forEach, map, reduce, filter etc. to manipulate data.

3. Closures are functions within functions that can reference their lexical environment to reach for variables and any needed data during execution. Closure allows us to have access to outer functions scope from the inner function that was called. Thanks to closure we can run a function from outside it's scope and still have access to variables that in other languages would be garbage collected and removed from memory after they stopped running.

function foo() {
	var a = 5;

	function bar() {
		console.log(a);
	}

	return bar;
}

let baz = foo();

baz() // 5

4.

- window bind, this is bound to the global scope and the outer layer (in browsers it can be window, in node.js it can be module exports)
- implicit bind, references to anything that was on the left of the dot, for example Fred.speak() this is bound to the Fred object
- explicit bind, this can be bound to an object by using either .call(), apply() or .bind();
- 'new' bind, this is bound to the new empty object in the time of it's creation