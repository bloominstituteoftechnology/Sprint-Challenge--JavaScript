# Your responses to the short answer questions should be laid out here using Mark Down.
### For help with markdown syntax [Go here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### Question: Describe some of the differences between `.forEach` & `.map`.
    1. Iteration:
        - .forEach iterates over an array, and applies some operation or function to each element in the array, but does not return a value after iteration is done.
        - .map iterates over an array, and applies some operation or function to each element in the array, but returns a new array of the same length with the transformed elements inside.
    2. Efficiency:
        - .forEach is more efficient at iteration, because it does not create a new array in the process, and in most cases this is the desired outcome.
        - .map while being less efficient there are many uses for this built in method, for example converting a string to uppercase, or vice versa.
### Question: Name five different Types in JavaScript. A Type is something that can represent data. What is so special about Arrays?
    1. String: Refers to text and blocks of text.
    2. Number: Refers to all real numbers.
    3. Boolean: Refers to True and False.
    4. Array: Refers to a coma separated collection of any other data type, each element in the array has an addressable index number (starting at 0 and increasing), which can be used to retrieve, change or modify said element. Arrays are also a type of Object.
    5. Object: Objects and Arrays are very similar, with the difference that they do not have numbers as indexes, instead they have property names as indexes.
### Question: What is closure? Can you code out a quick example of a closure?
    1. Closure refers to acess to content or variables from within a block of code and outwards all the way to the global scope. It is like having a one way mirror, that allowes you to look outside for information, but anything that is outside that mirror cant see what is inside.
    2. Example code for Closure in JavaScript:
        ```javascript
        const globalVar = 'I am a Global Variable Available to Anyone';
        const printGlobalVar = () => { console.log(globalVar); }
        printGlobalVar();
        ```