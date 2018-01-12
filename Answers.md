# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. As far as iterators go, there isn't much difference between .forEach and .map. The main difference is in the return value, .forEach returns undefined while .map returns an array. This 'returned' array
is a new array which contains transformed elements from the array passed to .map as an argument.

2. Boolean, String, Number, Undefined, Null, Array. Objects and Arrays fall into what are called Composite Data types. Objects and Arrays can both hold all types of data within their confines...for example, an array can store numbers, string, boolean, other arrays and even objects (not an exhaustive list) in a single array. Objects can do the same..however objects are user defined while arrays are language provided and are part of the 'Standard Library' of JavaScript.

3. A closure is about scope. Its an inner function that has access to the enclosing function's variables. Closure has access to : it's own scope...i.e variables defined inside of its own set of curly braces, the enclosing function's variables and the global variables. The code snippet below explains closure. The vriable i is set in the function abc(). However it is incremented only by the anonymous function defined within its braces. This anonymous, inner function is a closure. (Note: just because its an inner function does not mean it has to be anonymous.)

function abc(parameter) {
    let i = 0;
    return () => {
        i++;
    }
}
abc(argument);

4. The 4 rules are:
    a) When a function is contained in the global scope, the value of 'this' will be the window object.
    b) When a function is called by a preceding dot, the object before the dot is 'this'.
    c) Whenever a constructor function is used, 'this' refers to the specific instance of the object this is created by the constructor.
    d) Whenever JS's call or apply method is used, 'this' is explicitly defined.