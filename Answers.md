# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


## .forEach vs .map
The method `.forEach()` invokes a function on each iteration for all elements in an array. The original array can be mutated, but it is left alone by default. The `.forEach()` method also has no output, returning `undefined` unless the function is written to output something. On the other hand, the `.map()` method will create a new array, using the returned results from calling a function on every element in the original array. This new array is of the same length as the input array.

## Types in JavaScript
There are seven data types in JavaScript:
 - Undefined
 - Null
 - Boolean
 - Number
 - String
 - Arrays/Objects
 - Symbol

The Array data type is somewhat special in that it is an Object whose key and value pairs are not defined by additional key value pairs, but instead the entries are simplified to an index number and that index's assigned property value. For example, the Object `userInfo` may have properties that looks similar to this:

    userInfo = {
        username: alex,
        password: 1234,
        email: alex@lambdaschool.com,
    }

An example of an array's entries may look something like this:
`topScores[34971, 32291, 29245, 10092]`

## Closure
Closure in JavaScript refers to the way a function is written, in regards to scope. Closure allows you to access data within a **local** scope to avoid the data being leaked to the higher **Global** scope. This is important for things such as user authentication, medical and health data (HIPPA), identity protection, and general code security. A local variable, written inside of a function, can only be accessed and assigned within that function. A Global variable can be accessed and assigned by all functions. If you attempt to reassign a local variable outside of it's host function, then a new variable is assigned, even if it has the exact name. The two variables are different, and have different assignments, even though the name is the same. Here is an example, with the first being **local** scope and the second is **Global** scope:

    function closureLocal() {
        let x = 10;
        return x + x;
    }
---
    let x = 10;
    function closureGlobal() {
        return x + x;
    }
## The four rules of the `this` keyword
The keyword `this` has four main rules that make it easy to use. Here are those rules:

 1. Whenever the `this` keyword is used inside a global function, than `this` refers to the Global object (or Window object).
 2. When calling a function using dot notation, the object before the dot is `this`.
 3. If a constructor object is used, `this` refers specifically to the new object created at that time. (i.e. Implicit).
 4. If the `.call()`, `.assign()`, or `.bind()` methods are used, than `this` is explicitly defined by the argument being passed to the method.
