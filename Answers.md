# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

1. forEach executes a provided function once for each element of the array, while map function creates a new, separate array with the results of calling a provided function on every elements in the calling array.

2. Boolean, numbers, strings, objects, and arrays. Arrays are special because the data elements are indexed, meaning they can be referred to a specific number.

3. Closure is a way to make a function-related codes to be separated (private) from the global window (default environment) of your overall code.
// global
let x = 1;
    // closed
    function multiplyBy2 {
        return x *= 2
    }

4. The 4 rules of 'this' keywords are: 
    i) Window/Global Object Binding, which in global scope, 'this' will call the value of window/console Object,
    ii) Implicit Binding, meaning whenever a function is called by a preceding dot, the object before that dot is the one that becomes 'this',
    iii) New Binding, meaning whenever a constructor function is used, 'this' will refer to the specific object created and returned by the constructor function.
    iv) Explicit Binding, Whenever whenever call, apply, or bind is used, 'this' is explicitly defined.